export const idlFactory = ({ IDL }) => {
<<<<<<< HEAD
=======
  const TokenMeta = IDL.Record({
    '_owner' : IDL.Principal,
    '_fee' : IDL.Nat,
    '_decimals' : IDL.Nat,
    '_symbol' : IDL.Text,
    '_initialSupply' : IDL.Nat,
    '_logo' : IDL.Text,
    '_name' : IDL.Text,
  });
  const Meta = IDL.Record({
    'id' : IDL.Nat,
    'token' : TokenMeta,
    'canister_id' : IDL.Principal,
    'created_at' : IDL.Int,
    'isController' : IDL.Bool,
  });
>>>>>>> d245ee6 (bug fixes)
  const definite_canister_settings = IDL.Record({
    'freezing_threshold' : IDL.Nat,
    'controllers' : IDL.Opt(IDL.Vec(IDL.Principal)),
    'memory_allocation' : IDL.Nat,
    'compute_allocation' : IDL.Nat,
  });
  const canister_status_response = IDL.Record({
    'status' : IDL.Variant({
      'stopped' : IDL.Null,
      'stopping' : IDL.Null,
      'running' : IDL.Null,
    }),
    'memory_size' : IDL.Nat,
    'cycles' : IDL.Nat,
    'settings' : definite_canister_settings,
    'module_hash' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
<<<<<<< HEAD
  const TokenMeta = IDL.Record({
    'owner' : IDL.Principal,
    'name' : IDL.Text,
    'totalSuply' : IDL.Nat,
    'decimal' : IDL.Nat,
    'symbol' : IDL.Text,
  });
  const Meta = IDL.Record({
    'id' : IDL.Nat,
    'token' : TokenMeta,
    'canister_id' : IDL.Principal,
    'created_at' : IDL.Int,
  });
  const Forge = IDL.Service({
=======
  const Forge = IDL.Service({
    'deployDIPToken' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Nat, IDL.Text, IDL.Nat, IDL.Nat, IDL.Text],
        [IDL.Opt(Meta)],
        [],
      ),
    'deployERCToken' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Nat, IDL.Nat, IDL.Nat, IDL.Text],
        [IDL.Opt(Meta)],
        [],
      ),
>>>>>>> d245ee6 (bug fixes)
    'getCanisterStatus' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(canister_status_response)],
        [],
      ),
    'getMyTokens' : IDL.Func([], [IDL.Opt(IDL.Vec(Meta))], ['query']),
    'getTokenMeta' : IDL.Func([IDL.Principal], [IDL.Opt(Meta)], ['query']),
<<<<<<< HEAD
=======
    'updateController' : IDL.Func(
        [IDL.Principal, IDL.Vec(IDL.Principal)],
        [IDL.Bool],
        [],
      ),
>>>>>>> d245ee6 (bug fixes)
  });
  return Forge;
};
export const init = ({ IDL }) => { return []; };
