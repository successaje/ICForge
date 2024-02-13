import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Forge {
<<<<<<< HEAD
=======
  'deployDIPToken' : ActorMethod<
    [string, string, bigint, string, bigint, bigint, string],
    [] | [Meta]
  >,
  'deployERCToken' : ActorMethod<
    [string, string, string, bigint, bigint, bigint, string],
    [] | [Meta]
  >,
>>>>>>> d245ee6 (bug fixes)
  'getCanisterStatus' : ActorMethod<
    [Principal],
    [] | [canister_status_response]
  >,
  'getMyTokens' : ActorMethod<[], [] | [Array<Meta>]>,
  'getTokenMeta' : ActorMethod<[Principal], [] | [Meta]>,
<<<<<<< HEAD
=======
  'updateController' : ActorMethod<[Principal, Array<Principal>], boolean>,
>>>>>>> d245ee6 (bug fixes)
}
export interface Meta {
  'id' : bigint,
  'token' : TokenMeta,
  'canister_id' : Principal,
  'created_at' : bigint,
<<<<<<< HEAD
}
export interface TokenMeta {
  'owner' : Principal,
  'name' : string,
  'totalSuply' : bigint,
  'decimal' : bigint,
  'symbol' : string,
=======
  'isController' : boolean,
}
export interface TokenMeta {
  '_owner' : Principal,
  '_fee' : bigint,
  '_decimals' : bigint,
  '_symbol' : string,
  '_initialSupply' : bigint,
  '_logo' : string,
  '_name' : string,
>>>>>>> d245ee6 (bug fixes)
}
export interface canister_status_response {
  'status' : { 'stopped' : null } |
    { 'stopping' : null } |
    { 'running' : null },
  'memory_size' : bigint,
  'cycles' : bigint,
  'settings' : definite_canister_settings,
  'module_hash' : [] | [Uint8Array | number[]],
}
export interface definite_canister_settings {
  'freezing_threshold' : bigint,
  'controllers' : [] | [Array<Principal>],
  'memory_allocation' : bigint,
  'compute_allocation' : bigint,
}
export interface _SERVICE extends Forge {}
