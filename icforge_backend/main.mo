import Types "types";
import Management "management";

import ERC20 "token_standards/erc20/main";

import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Cycles "mo:base/ExperimentalCycles";
import Time "mo:base/Time";

shared ({ caller = owner }) actor class Forge() = this {

  type Meta = Types.MetaData;
  type Token = Types.TokenMeta;

  private var tokens = HashMap.HashMap<Principal, Meta>(0, Principal.equal, Principal.hash);
  private stable var cycles : Nat = 300_000_000_000;

  let IC : Management.Self = actor "aaaaa-aa";

  public query ({ caller }) func getMyTokens() : async ?[Meta] {
    do ? {
      var buffer = Buffer.Buffer<Meta>(0);
      for ((user, token) in tokens.entries()) {
        if (token.token._owner == caller) {
          buffer.add(token);
        };
      };
      buffer.toArray();
    };
  };

  public query ({ caller }) func getTokenMeta(canister_id : Principal) : async ?Meta {
    switch (tokens.get(canister_id)) {
      case (?token) {
        if (token.token._owner != caller) {
          return null;
        };
        return ?token;
      };
      case (_) {
        return null;
      };
    };
  };

  type TokenMeta__1 = {
    _name : Text;
    _symbol : Text;
    _decimals : Nat;
    _initialSupply : Nat;
  };

  public shared ({ caller }) func deployToken(_name : Text, _symbol : Text, _decimals : Nat, _initialSupply : Nat, standard : Text) : async ?Meta {
    Cycles.add(cycles);
    let meta : TokenMeta__1 = {
      _name;
      _symbol;
      _decimals;
      _initialSupply;
    };
    let _owner = caller;
    let _meta : Token = {
      _owner;
      _name;
      _symbol;
      _decimals;
      _initialSupply;
    };

    // if (standard == "erc20"){
      
    // }

    let token = await ERC20.Token(caller, meta);
    let token_id = Principal.fromActor(token);

    let  tokenMeta : Meta = {
      id = 0;
      token = _meta;
      canister_id = token_id;
      created_at = Time.now();
      isController = true;
    };
    tokens.put(token_id, tokenMeta);
    return ?tokenMeta;
  };

  public shared ({ caller }) func updateController(canister_id : Principal, _controllers : [Principal]) : async Bool {
    switch (tokens.get(canister_id)) {
      case (?token) {
        if (not token.isController) {
          return false;
        };
        if (_controllers.size() < 1) {
          return false;
        };
        if (token.token._owner != caller) {
          return false;
        };
        let params = {
          canister_id = canister_id;
          settings = {
            controllers = ?_controllers;
            freezing_threshold = null;
            memory_allocation = null;
            compute_allocation = null;
          };
        };
        var isController = false;
        for (i in _controllers.vals()) {
          if (Principal.equal(i, Principal.fromActor(this))) {
            isController := true;
          };
        };

        await IC.update_settings(params);

        let meta : Meta = {
          id = token.id;
          token = token.token;
          canister_id = token.canister_id;
          created_at = token.created_at;
          isController = isController;
        };
        tokens.put(canister_id, meta);
        return true;
      };
      case (_) {
        return false;
      };
    };
  };

  public shared ({ caller }) func getCanisterStatus(canister_id : Principal) : async ?Management.canister_status_response {
    switch (tokens.get(canister_id)) {
      case (?token) {
        if (token.token._owner != caller) {
          return null;
        };
        let status = await IC.canister_status({
          canister_id = canister_id;
        });
        return ?status;
      };
      case (_) {
        return null;
      };
    };
  };
};
