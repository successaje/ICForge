import Principal "mo:base/Principal";
module {


    public type TokenMeta = {
        owner : Principal;
        name : Text;
        symbol : Text;
        decimal : Nat;
        totalSuply : Nat;
    };

    public type MetaData = {
        id : Nat;
        token : TokenMeta;
        canister_id : Principal;
        created_at : Int;
        isController : Bool
    };




}