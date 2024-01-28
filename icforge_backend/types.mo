import Principal "mo:base/Principal";
module {


    public type TokenMeta = {
        _owner : Principal;
        _name : Text;
        _symbol : Text;
        _decimals : Nat;
        _initialSupply : Nat;
    };

    public type MetaData = {
        id : Nat;
        token : TokenMeta;
        canister_id : Principal;
        created_at : Int;
        isController : Bool
    };




}