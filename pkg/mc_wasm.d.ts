/* tslint:disable */
/* eslint-disable */

export class Game {
    free(): void;
    [Symbol.dispose](): void;
    act(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, place: boolean, t: number): boolean;
    dim(): number;
    edit_n(): number;
    ev_clear(): void;
    ev_len(): number;
    ev_ptr(): number;
    in_portal(): boolean;
    load_alloc(n: number): number;
    load_apply(): boolean;
    mesh_ptr(cx: number, cz: number): number;
    mesh_quads(cx: number, cz: number): number;
    constructor(radius: number, seed: number);
    save_build(): void;
    save_len(): number;
    save_ptr(): number;
    step(fwd: number, strafe: number, sprint: boolean, jump: boolean, yaw: number): void;
    switch_dim(): void;
    update(gb: number, mb: number): void;
    x: number;
    y: number;
    z: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_game_free: (a: number, b: number) => void;
    readonly __wbg_get_game_x: (a: number) => number;
    readonly __wbg_get_game_y: (a: number) => number;
    readonly __wbg_get_game_z: (a: number) => number;
    readonly __wbg_set_game_x: (a: number, b: number) => void;
    readonly __wbg_set_game_y: (a: number, b: number) => void;
    readonly __wbg_set_game_z: (a: number, b: number) => void;
    readonly game_act: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
    readonly game_dim: (a: number) => number;
    readonly game_edit_n: (a: number) => number;
    readonly game_ev_clear: (a: number) => void;
    readonly game_ev_len: (a: number) => number;
    readonly game_ev_ptr: (a: number) => number;
    readonly game_in_portal: (a: number) => number;
    readonly game_load_alloc: (a: number, b: number) => number;
    readonly game_load_apply: (a: number) => number;
    readonly game_mesh_ptr: (a: number, b: number, c: number) => number;
    readonly game_mesh_quads: (a: number, b: number, c: number) => number;
    readonly game_new: (a: number, b: number) => number;
    readonly game_save_build: (a: number) => void;
    readonly game_save_len: (a: number) => number;
    readonly game_save_ptr: (a: number) => number;
    readonly game_step: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    readonly game_switch_dim: (a: number) => void;
    readonly game_update: (a: number, b: number, c: number) => void;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
