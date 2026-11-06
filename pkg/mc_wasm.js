/* @ts-self-types="./mc_wasm.d.ts" */

export class Game {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        GameFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_game_free(ptr, 0);
    }
    /**
     * @param {number} ox
     * @param {number} oy
     * @param {number} oz
     * @param {number} dx
     * @param {number} dy
     * @param {number} dz
     * @param {boolean} place
     * @param {number} t
     * @returns {boolean}
     */
    act(ox, oy, oz, dx, dy, dz, place, t) {
        const ret = wasm.game_act(this.__wbg_ptr, ox, oy, oz, dx, dy, dz, place, t);
        return ret !== 0;
    }
    /**
     * @returns {number}
     */
    dim() {
        const ret = wasm.game_dim(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    edit_n() {
        const ret = wasm.game_edit_n(this.__wbg_ptr);
        return ret >>> 0;
    }
    ev_clear() {
        wasm.game_ev_clear(this.__wbg_ptr);
    }
    /**
     * @returns {number}
     */
    ev_len() {
        const ret = wasm.game_ev_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    ev_ptr() {
        const ret = wasm.game_ev_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {boolean}
     */
    in_portal() {
        const ret = wasm.game_in_portal(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @param {number} n
     * @returns {number}
     */
    load_alloc(n) {
        const ret = wasm.game_load_alloc(this.__wbg_ptr, n);
        return ret >>> 0;
    }
    /**
     * @returns {boolean}
     */
    load_apply() {
        const ret = wasm.game_load_apply(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @param {number} cx
     * @param {number} cz
     * @returns {number}
     */
    mesh_ptr(cx, cz) {
        const ret = wasm.game_mesh_ptr(this.__wbg_ptr, cx, cz);
        return ret >>> 0;
    }
    /**
     * @param {number} cx
     * @param {number} cz
     * @returns {number}
     */
    mesh_quads(cx, cz) {
        const ret = wasm.game_mesh_quads(this.__wbg_ptr, cx, cz);
        return ret >>> 0;
    }
    /**
     * @param {number} radius
     * @param {number} seed
     */
    constructor(radius, seed) {
        const ret = wasm.game_new(radius, seed);
        this.__wbg_ptr = ret;
        GameFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    save_build() {
        wasm.game_save_build(this.__wbg_ptr);
    }
    /**
     * @returns {number}
     */
    save_len() {
        const ret = wasm.game_save_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    save_ptr() {
        const ret = wasm.game_save_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} fwd
     * @param {number} strafe
     * @param {boolean} sprint
     * @param {boolean} jump
     * @param {number} yaw
     */
    step(fwd, strafe, sprint, jump, yaw) {
        wasm.game_step(this.__wbg_ptr, fwd, strafe, sprint, jump, yaw);
    }
    switch_dim() {
        wasm.game_switch_dim(this.__wbg_ptr);
    }
    /**
     * @param {number} gb
     * @param {number} mb
     */
    update(gb, mb) {
        wasm.game_update(this.__wbg_ptr, gb, mb);
    }
    /**
     * @returns {number}
     */
    get x() {
        const ret = wasm.__wbg_get_game_x(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get y() {
        const ret = wasm.__wbg_get_game_y(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get z() {
        const ret = wasm.__wbg_get_game_z(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set x(arg0) {
        wasm.__wbg_set_game_x(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set y(arg0) {
        wasm.__wbg_set_game_y(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set z(arg0) {
        wasm.__wbg_set_game_z(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) Game.prototype[Symbol.dispose] = Game.prototype.free;
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_throw_4c88d8bf264fd984: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            table.set(0, undefined);
            table.set(1024, undefined);
            table.set(1025, null);
            table.set(1026, true);
            table.set(1027, false);
        },
    };
    return {
        __proto__: null,
        "./mc_wasm_bg.js": import0,
    };
}

const GameFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_game_free(ptr, 1));

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(bytes) {
    numBytesDecoded += bytes.length;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
        cachedTextDecoder.decode();
        numBytesDecoded = bytes.length;
    }
    return cachedTextDecoder.decode(bytes);
}

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

let __wbg_init_promise;
async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;
    if (__wbg_init_promise === undefined) {
        __wbg_init_promise = __wbg_init_once(module_or_path);
        __wbg_init_promise.catch(() => { __wbg_init_promise = undefined; });
    }
    return __wbg_init_promise;
}

async function __wbg_init_once(module_or_path) {

    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('mc_wasm_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
