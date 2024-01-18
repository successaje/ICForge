import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";


actor class Token(
    _owner: Principal,
    tokenMeta: {
        _name: Text; // Boom
        _symbol: Text; // BMD
        _decimals: Nat; //
        _initialSupply: Nat; //1_000_000_000_000
    },
    ) {

    private stable var owner_ : Principal = _owner;
    private stable let name_ : Text = tokenMeta._name;
    private stable let decimals_ : Nat = tokenMeta._decimals;
    private stable let symbol_ : Text = tokenMeta._symbol;
    private stable var totalSupply_ : Nat = tokenMeta._initialSupply;

    private var balances =  HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    private var allowances = HashMap.HashMap<Principal, HashMap.HashMap<Principal, Nat>>(1, Principal.equal, Principal.hash);

    balances.put(owner_, totalSupply_);

    private func increaseSupply(amount: Nat) : async () {
        // Logic to increase the total supply by `amount`
        totalSupply_ += amount;
    };

    public shared ({ caller }) func transfer(to:Principal, value: Nat) : async Bool {
        switch(balances.get(caller)){
            case(?from_balance) {
                if (from_balance >= value) {
                    var from_balance_new : Nat = from_balance - value;
                    assert(from_balance_new <= from_balance);
                    balances.put(caller, from_balance_new);

                    var to_balance_new = switch (balances.get(to)) {
                        case (?to_balance) {
                            to_balance + value;
                        }; case (_) {
                            value;
                        };
                    };
                    assert(to_balance_new >= value);
                    balances.put(to, to_balance_new);
                    return true;
                } else {
                    return false;
                };
            }; case (_) {
                return false;
            };
        }
    };

    public shared ({ caller }) func transferFrom(from: Principal, to: Principal, value: Nat) : async Bool {
        switch (balances.get(from), allowances.get(from)) {
            case (?from_balance, ?allowance_from) {
                switch (allowance_from.get(caller)) {
                    case (?allowance) {
                        if (from_balance >= value and allowance >= value) {
                            var from_balance_new : Nat = from_balance - value;
                            assert(from_balance_new <= from_balance);
                            balances.put(from, from_balance_new);

                            var to_balance_new = switch (balances.get(to)) {
                                case (?to_balance) {
                                   to_balance + value;
                                };
                                case (_) {
                                    value;
                                };
                            };
                            assert(to_balance_new >= value);
                            balances.put(to, to_balance_new);

                            var allowance_new : Nat = allowance - value;
                            assert(allowance_new <= allowance);
                            allowance_from.put(caller, allowance_new);
                            allowances.put(from, allowance_from);
                            return true;                            
                        } else {
                            return false;
                        };
                    };
                    case (_) {
                        return false;
                    };
                }
            };
            case (_) {
                return false;
            };
        }
    };

    public shared ({ caller }) func approve(spender: Principal, value: Nat) : async Bool {
        switch(allowances.get(caller)) {
            case (?allowances_caller) {
                allowances_caller.put(spender, value);
                allowances.put(caller, allowances_caller);
                return true;
            };
            case (_) {
                var temp = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
                temp.put(spender, value);
                allowances.put(caller, temp);
                return true;
            };
        }
    };

    public shared ({ caller }) func mint(to: Principal, value: Nat): async Bool {
        assert(caller == owner_);
        switch (balances.get(to)) {
            case (?to_balance) {
                balances.put(to, to_balance + value);
                totalSupply_ += value;
                return true;
            }; case (_) {
                balances.put(to, value);
                totalSupply_ += value;
                return true;
            };
        }
    };

    public shared ({ caller }) func burn(from: Principal, value: Nat): async Bool {
        assert(caller == owner_ or caller == from);
        switch (balances.get(from)) {
            case (?from_balance) {
                if(from_balance >= value) {
                    balances.put(from, from_balance - value);
                    totalSupply_ -= value;
                    return true;
                } else {
                    return false;
                }
            }; case (_) {
                return false;
            };
        }
    };

    public query func balanceOf(who: Principal) : async Nat {
        switch (balances.get(who)) {
            case (?balance) {
                return balance;
            };
            case (_) {
                return 0;
            };
        }
    };

    public query func allowance(owner: Principal, spender: Principal) : async Nat {
        switch(allowances.get(owner)) {
            case (?allowance_owner) {
                switch(allowance_owner.get(spender)) {
                    case (?allowance) {
                        return allowance;
                    };
                    case (_) {
                        return 0;
                    };
                }
            };
            case (_) {
                return 0;
            };
        }
    };

    public query func totalSupply() : async Nat {
        return totalSupply_;
    };

    public query func name() : async Text {
        return name_;
    };

    public query func decimals() : async Nat {
        return decimals_;
    };

    public query func symbol() : async Text {
        return symbol_;
    };

    public query func owner() : async Principal {
        return owner_;
    };


}