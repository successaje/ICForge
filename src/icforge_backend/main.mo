import Types "types";

import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";

shared ({caller = owner}) actor class Forge() = this {

  type Meta = Types.MetaData;
  type Token = Types.TokenMeta;


  private var tokens = HashMap.HashMap<Principal, Meta>(0, Principal.equal, Principal.hash);

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

  



  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};
