import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Forge {
  'getCanisterStatus' : ActorMethod<
    [Principal],
    [] | [canister_status_response]
  >,
  'getMyTokens' : ActorMethod<[], [] | [Array<Meta>]>,
  'getTokenMeta' : ActorMethod<[Principal], [] | [Meta]>,
}
export interface Meta {
  'id' : bigint,
  'token' : TokenMeta,
  'canister_id' : Principal,
  'created_at' : bigint,
}
export interface TokenMeta {
  'owner' : Principal,
  'name' : string,
  'totalSuply' : bigint,
  'decimal' : bigint,
  'symbol' : string,
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
