export const idlFactory = ({ IDL }) => {
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
    'getCanisterStatus' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(canister_status_response)],
        [],
      ),
    'getMyTokens' : IDL.Func([], [IDL.Opt(IDL.Vec(Meta))], ['query']),
    'getTokenMeta' : IDL.Func([IDL.Principal], [IDL.Opt(Meta)], ['query']),
  });
  return Forge;
};
export const init = ({ IDL }) => { return []; };
