import Types "types";
import Management "management";

import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";

shared ({caller = owner}) actor class Forge() = this {

  type Meta = Types.MetaData;
  type Token = Types.TokenMeta;


  private var tokens = HashMap.HashMap<Principal, Meta>(0, Principal.equal, Principal.hash);

  let IC : Management.Self = actor "aaaaa-aa";

  public query ({ caller }) func getMyTokens() : async ?[Meta] {
    do ? {
      var buffer = Buffer.Buffer<Meta>(0);
      for ((user, token) in tokens.entries()) {
        if (user == caller) {
          buffer.add(token);
        };
      };
      buffer.toArray();
    };
  };

  public query ({caller}) func getTokenMeta(canister_id : Principal) : async ?Meta {
    switch(tokens.get(canister_id)){
      case(?token){
        if (token.token.owner != caller){
          return null;
        };
        return ?token;
      }; case (_) {
        return null;
      };
    };
  };


  public shared ({ caller }) func getCanisterStatus(canister_id : Principal) : async ?Management.canister_status_response {
    switch(tokens.get(canister_id)){
      case(?token){
        if (token.token.owner != caller){
          return null;
        };
        let status = await IC.canister_status({
          canister_id = canister_id;
        });
        return ?status;
      }; case (_) {
        return null;
      };
    };
  };
};
