/*!
 * @pixiv/three-vrm v0.5.2
 * Use VRM on Three.js
 * 
 * Copyright (c) 2019-2020 pixiv Inc.
 * @pixiv/three-vrm is distributed under the MIT License
 * https://github.com/pixiv/three-vrm/blob/master/LICENSE
 */
var __three_vrm__ =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assign.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assign.ts":
/*!***********************!*\
  !*** ./src/assign.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var __three_vrm__ = __webpack_require__(/*! . */ "./src/index.ts");
// @ts-ignore
Object.assign(THREE, __three_vrm__);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./vrm/ */ "./src/vrm/index.ts"), exports);


/***/ }),

/***/ "./src/vrm/VRM.ts":
/*!************************!*\
  !*** ./src/vrm/VRM.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRM = void 0;
var disposer_1 = __webpack_require__(/*! ./utils/disposer */ "./src/vrm/utils/disposer.ts");
var VRMImporter_1 = __webpack_require__(/*! ./VRMImporter */ "./src/vrm/VRMImporter.ts");
/**
 * A class that represents a single VRM model.
 * See the documentation of [[VRM.from]] for the most basic use of VRM.
 */
var VRM = /** @class */ (function () {
    /**
     * Create a new VRM instance.
     *
     * @param params [[VRMParameters]] that represents components of the VRM
     */
    function VRM(params) {
        this.scene = params.scene;
        this.humanoid = params.humanoid;
        this.blendShapeProxy = params.blendShapeProxy;
        this.firstPerson = params.firstPerson;
        this.lookAt = params.lookAt;
        this.materials = params.materials;
        this.springBoneManager = params.springBoneManager;
        this.meta = params.meta;
    }
    /**
     * Create a new VRM from a parsed result of GLTF taken from GLTFLoader.
     * It's probably a thing what you want to get started with VRMs.
     *
     * @example Most basic use of VRM
     * ```
     * const scene = new THREE.Scene();
     *
     * new THREE.GLTFLoader().load( 'models/three-vrm-girl.vrm', ( gltf ) => {
     *
     *   THREE.VRM.from( gltf ).then( ( vrm ) => {
     *
     *     scene.add( vrm.scene );
     *
     *   } );
     *
     * } );
     * ```
     *
     * @param gltf A parsed GLTF object taken from GLTFLoader
     * @param options Options that will be used in importer
     */
    VRM.from = function (gltf, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, Promise, function () {
            var importer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        importer = new VRMImporter_1.VRMImporter(options);
                        return [4 /*yield*/, importer.import(gltf)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * **You need to call this on your update loop.**
     *
     * This function updates every VRM components.
     *
     * @param delta deltaTime
     */
    VRM.prototype.update = function (delta) {
        if (this.lookAt) {
            this.lookAt.update(delta);
        }
        if (this.blendShapeProxy) {
            this.blendShapeProxy.update();
        }
        if (this.springBoneManager) {
            this.springBoneManager.lateUpdate(delta);
        }
        if (this.materials) {
            this.materials.forEach(function (material) {
                if (material.updateVRMMaterials) {
                    material.updateVRMMaterials(delta);
                }
            });
        }
    };
    /**
     * Dispose everything about the VRM instance.
     */
    VRM.prototype.dispose = function () {
        var _a, _b;
        var scene = this.scene;
        if (scene) {
            disposer_1.deepDispose(scene);
        }
        (_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.texture) === null || _b === void 0 ? void 0 : _b.dispose();
    };
    return VRM;
}());
exports.VRM = VRM;


/***/ }),

/***/ "./src/vrm/VRMImporter.ts":
/*!********************************!*\
  !*** ./src/vrm/VRMImporter.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMImporter = void 0;
var blendshape_1 = __webpack_require__(/*! ./blendshape */ "./src/vrm/blendshape/index.ts");
var firstperson_1 = __webpack_require__(/*! ./firstperson */ "./src/vrm/firstperson/index.ts");
var VRMHumanoidImporter_1 = __webpack_require__(/*! ./humanoid/VRMHumanoidImporter */ "./src/vrm/humanoid/VRMHumanoidImporter.ts");
var VRMLookAtImporter_1 = __webpack_require__(/*! ./lookat/VRMLookAtImporter */ "./src/vrm/lookat/VRMLookAtImporter.ts");
var material_1 = __webpack_require__(/*! ./material */ "./src/vrm/material/index.ts");
var VRMMetaImporter_1 = __webpack_require__(/*! ./meta/VRMMetaImporter */ "./src/vrm/meta/VRMMetaImporter.ts");
var VRMSpringBoneImporter_1 = __webpack_require__(/*! ./springbone/VRMSpringBoneImporter */ "./src/vrm/springbone/VRMSpringBoneImporter.ts");
var VRM_1 = __webpack_require__(/*! ./VRM */ "./src/vrm/VRM.ts");
/**
 * An importer that imports a [[VRM]] from a VRM extension of a GLTF.
 */
var VRMImporter = /** @class */ (function () {
    /**
     * Create a new VRMImporter.
     *
     * @param options [[VRMImporterOptions]], optionally contains importers for each component
     */
    function VRMImporter(options) {
        if (options === void 0) { options = {}; }
        this._metaImporter = options.metaImporter || new VRMMetaImporter_1.VRMMetaImporter();
        this._blendShapeImporter = options.blendShapeImporter || new blendshape_1.VRMBlendShapeImporter();
        this._lookAtImporter = options.lookAtImporter || new VRMLookAtImporter_1.VRMLookAtImporter();
        this._humanoidImporter = options.humanoidImporter || new VRMHumanoidImporter_1.VRMHumanoidImporter();
        this._firstPersonImporter = options.firstPersonImporter || new firstperson_1.VRMFirstPersonImporter();
        this._materialImporter = options.materialImporter || new material_1.VRMMaterialImporter();
        this._springBoneImporter = options.springBoneImporter || new VRMSpringBoneImporter_1.VRMSpringBoneImporter();
    }
    /**
     * Receive a GLTF object retrieved from `THREE.GLTFLoader` and create a new [[VRM]] instance.
     *
     * @param gltf A parsed result of GLTF taken from GLTFLoader
     */
    VRMImporter.prototype.import = function (gltf) {
        return __awaiter(this, void 0, Promise, function () {
            var scene, meta, materials, humanoid, firstPerson, _a, blendShapeProxy, lookAt, _b, springBoneManager;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (gltf.parser.json.extensions === undefined || gltf.parser.json.extensions.VRM === undefined) {
                            throw new Error('Could not find VRM extension on the GLTF');
                        }
                        scene = gltf.scene;
                        scene.updateMatrixWorld(false);
                        // Skinned object should not be frustumCulled
                        // Since pre-skinned position might be outside of view
                        scene.traverse(function (object3d) {
                            if (object3d.isMesh) {
                                object3d.frustumCulled = false;
                            }
                        });
                        return [4 /*yield*/, this._metaImporter.import(gltf)];
                    case 1:
                        meta = (_c.sent()) || undefined;
                        return [4 /*yield*/, this._materialImporter.convertGLTFMaterials(gltf)];
                    case 2:
                        materials = (_c.sent()) || undefined;
                        return [4 /*yield*/, this._humanoidImporter.import(gltf)];
                    case 3:
                        humanoid = (_c.sent()) || undefined;
                        if (!humanoid) return [3 /*break*/, 5];
                        return [4 /*yield*/, this._firstPersonImporter.import(gltf, humanoid)];
                    case 4:
                        _a = (_c.sent()) || undefined;
                        return [3 /*break*/, 6];
                    case 5:
                        _a = undefined;
                        _c.label = 6;
                    case 6:
                        firstPerson = _a;
                        return [4 /*yield*/, this._blendShapeImporter.import(gltf)];
                    case 7:
                        blendShapeProxy = (_c.sent()) || undefined;
                        if (!(firstPerson && blendShapeProxy && humanoid)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this._lookAtImporter.import(gltf, firstPerson, blendShapeProxy, humanoid)];
                    case 8:
                        _b = (_c.sent()) || undefined;
                        return [3 /*break*/, 10];
                    case 9:
                        _b = undefined;
                        _c.label = 10;
                    case 10:
                        lookAt = _b;
                        return [4 /*yield*/, this._springBoneImporter.import(gltf)];
                    case 11:
                        springBoneManager = (_c.sent()) || undefined;
                        return [2 /*return*/, new VRM_1.VRM({
                                scene: gltf.scene,
                                meta: meta,
                                materials: materials,
                                humanoid: humanoid,
                                firstPerson: firstPerson,
                                blendShapeProxy: blendShapeProxy,
                                lookAt: lookAt,
                                springBoneManager: springBoneManager,
                            })];
                }
            });
        });
    };
    return VRMImporter;
}());
exports.VRMImporter = VRMImporter;


/***/ }),

/***/ "./src/vrm/VRMUtils/extractThumbnailBlob.ts":
/*!**************************************************!*\
  !*** ./src/vrm/VRMUtils/extractThumbnailBlob.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.extractThumbnailBlob = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var _v2A = new THREE.Vector2();
var _camera = new THREE.OrthographicCamera(-1, 1, -1, 1, -1, 1);
var _plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }));
var _scene = new THREE.Scene();
_scene.add(_plane);
/**
 * Extract a thumbnail image blob from a {@link VRM}.
 * If the vrm does not have a thumbnail, it will throw an error.
 * @param renderer Renderer
 * @param vrm VRM with a thumbnail
 * @param size width / height of the image
 */
function extractThumbnailBlob(renderer, vrm, size) {
    var _a;
    if (size === void 0) { size = 512; }
    // get the texture
    var texture = (_a = vrm.meta) === null || _a === void 0 ? void 0 : _a.texture;
    if (!texture) {
        throw new Error('extractThumbnailBlob: This VRM does not have a thumbnail');
    }
    var canvas = renderer.getContext().canvas;
    // store the current resolution
    renderer.getSize(_v2A);
    var prevWidth = _v2A.x;
    var prevHeight = _v2A.y;
    // overwrite the resolution
    renderer.setSize(size, size, false);
    // assign the texture to plane
    _plane.material.map = texture;
    // render
    renderer.render(_scene, _camera);
    // unassign the texture
    _plane.material.map = null;
    // get blob
    if (canvas instanceof OffscreenCanvas) {
        return canvas.convertToBlob().finally(function () {
            // revert to previous resolution
            renderer.setSize(prevWidth, prevHeight, false);
        });
    }
    return new Promise(function (resolve, reject) {
        canvas.toBlob(function (blob) {
            // revert to previous resolution
            renderer.setSize(prevWidth, prevHeight, false);
            if (blob == null) {
                reject('extractThumbnailBlob: Failed to create a blob');
            }
            else {
                resolve(blob);
            }
        });
    });
}
exports.extractThumbnailBlob = extractThumbnailBlob;


/***/ }),

/***/ "./src/vrm/VRMUtils/index.ts":
/*!***********************************!*\
  !*** ./src/vrm/VRMUtils/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMUtils = void 0;
var extractThumbnailBlob_1 = __webpack_require__(/*! ./extractThumbnailBlob */ "./src/vrm/VRMUtils/extractThumbnailBlob.ts");
var removeUnnecessaryJoints_1 = __webpack_require__(/*! ./removeUnnecessaryJoints */ "./src/vrm/VRMUtils/removeUnnecessaryJoints.ts");
var VRMUtils = /** @class */ (function () {
    function VRMUtils() {
        // this class is not meant to be instantiated
    }
    VRMUtils.extractThumbnailBlob = extractThumbnailBlob_1.extractThumbnailBlob;
    VRMUtils.removeUnnecessaryJoints = removeUnnecessaryJoints_1.removeUnnecessaryJoints;
    return VRMUtils;
}());
exports.VRMUtils = VRMUtils;


/***/ }),

/***/ "./src/vrm/VRMUtils/removeUnnecessaryJoints.ts":
/*!*****************************************************!*\
  !*** ./src/vrm/VRMUtils/removeUnnecessaryJoints.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUnnecessaryJoints = void 0;
var THREE = __webpack_require__(/*! three */ "three");
/**
 * Traverse given object and remove unnecessarily bound joints from every `THREE.SkinnedMesh`.
 * Some environments like mobile devices have a lower limit of bones and might be unable to perform mesh skinning, this function might resolve such an issue.
 * Also this function might greatly improve the performance of mesh skinning.
 *
 * @param root Root object that will be traversed
 */
function removeUnnecessaryJoints(root) {
    // some meshes might share a same skinIndex attribute and this map prevents to convert the attribute twice
    var skeletonList = new Map();
    // Traverse an entire tree
    root.traverse(function (obj) {
        if (obj.type !== 'SkinnedMesh') {
            return;
        }
        var mesh = obj;
        var geometry = mesh.geometry;
        var attribute = geometry.getAttribute('skinIndex');
        // look for existing skeleton
        var skeleton = skeletonList.get(attribute);
        if (!skeleton) {
            // generate reduced bone list
            var bones = []; // new list of bone
            var boneInverses = []; // new list of boneInverse
            var boneIndexMap = {}; // map of old bone index vs. new bone index
            // create a new bone map
            var array = attribute.array;
            for (var i = 0; i < array.length; i++) {
                var index = array[i];
                // new skinIndex buffer
                if (boneIndexMap[index] === undefined) {
                    boneIndexMap[index] = bones.length;
                    bones.push(mesh.skeleton.bones[index]);
                    boneInverses.push(mesh.skeleton.boneInverses[index]);
                }
                array[i] = boneIndexMap[index];
            }
            // replace with new indices
            attribute.copyArray(array);
            attribute.needsUpdate = true;
            // replace with new indices
            skeleton = new THREE.Skeleton(bones, boneInverses);
            skeletonList.set(attribute, skeleton);
        }
        mesh.bind(skeleton, new THREE.Matrix4());
        //                  ^^^^^^^^^^^^^^^^^^^ transform of meshes should be ignored
        // See: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
    });
}
exports.removeUnnecessaryJoints = removeUnnecessaryJoints;


/***/ }),

/***/ "./src/vrm/blendshape/VRMBlendShapeGroup.ts":
/*!**************************************************!*\
  !*** ./src/vrm/blendshape/VRMBlendShapeGroup.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMBlendShapeGroup = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var VRMBlendShapeMaterialValueType;
(function (VRMBlendShapeMaterialValueType) {
    VRMBlendShapeMaterialValueType[VRMBlendShapeMaterialValueType["NUMBER"] = 0] = "NUMBER";
    VRMBlendShapeMaterialValueType[VRMBlendShapeMaterialValueType["VECTOR2"] = 1] = "VECTOR2";
    VRMBlendShapeMaterialValueType[VRMBlendShapeMaterialValueType["VECTOR3"] = 2] = "VECTOR3";
    VRMBlendShapeMaterialValueType[VRMBlendShapeMaterialValueType["VECTOR4"] = 3] = "VECTOR4";
    VRMBlendShapeMaterialValueType[VRMBlendShapeMaterialValueType["COLOR"] = 4] = "COLOR";
})(VRMBlendShapeMaterialValueType || (VRMBlendShapeMaterialValueType = {}));
var _v2 = new THREE.Vector2();
var _v3 = new THREE.Vector3();
var _v4 = new THREE.Vector4();
var _color = new THREE.Color();
// animationMixer の監視対象は、Scene の中に入っている必要がある。
// そのため、表示オブジェクトではないけれど、Object3D を継承して Scene に投入できるようにする。
var VRMBlendShapeGroup = /** @class */ (function (_super) {
    __extends(VRMBlendShapeGroup, _super);
    function VRMBlendShapeGroup(expressionName) {
        var _this = _super.call(this) || this;
        _this.weight = 0.0;
        _this.isBinary = false;
        _this._binds = [];
        _this._materialValues = [];
        _this.name = "BlendShapeController_" + expressionName;
        // traverse 時の救済手段として Object3D ではないことを明示しておく
        _this.type = 'BlendShapeController';
        // 表示目的のオブジェクトではないので、負荷軽減のために visible を false にしておく。
        // これにより、このインスタンスに対する毎フレームの matrix 自動計算を省略できる。
        _this.visible = false;
        return _this;
    }
    VRMBlendShapeGroup.prototype.addBind = function (args) {
        // original weight is 0-100 but we want to deal with this value within 0-1
        var weight = args.weight / 100;
        this._binds.push({
            meshes: args.meshes,
            morphTargetIndex: args.morphTargetIndex,
            weight: weight,
        });
    };
    VRMBlendShapeGroup.prototype.addMaterialValue = function (args) {
        var material = args.material;
        var propertyName = args.propertyName;
        var value = material[propertyName];
        if (!value) {
            // property has not been found
            return;
        }
        value = args.defaultValue || value;
        var type;
        var defaultValue;
        var targetValue;
        var deltaValue;
        if (value.isVector2) {
            type = VRMBlendShapeMaterialValueType.VECTOR2;
            defaultValue = value.clone();
            targetValue = new THREE.Vector2().fromArray(args.targetValue);
            deltaValue = targetValue.clone().sub(defaultValue);
        }
        else if (value.isVector3) {
            type = VRMBlendShapeMaterialValueType.VECTOR3;
            defaultValue = value.clone();
            targetValue = new THREE.Vector3().fromArray(args.targetValue);
            deltaValue = targetValue.clone().sub(defaultValue);
        }
        else if (value.isVector4) {
            type = VRMBlendShapeMaterialValueType.VECTOR4;
            defaultValue = value.clone();
            // vectorProperty and targetValue index is different from each other
            // exported vrm by UniVRM file is
            //
            // vectorProperty
            // offset = targetValue[0], targetValue[1]
            // tiling = targetValue[2], targetValue[3]
            //
            // targetValue
            // offset = targetValue[2], targetValue[3]
            // tiling = targetValue[0], targetValue[1]
            targetValue = new THREE.Vector4().fromArray([
                args.targetValue[2],
                args.targetValue[3],
                args.targetValue[0],
                args.targetValue[1],
            ]);
            deltaValue = targetValue.clone().sub(defaultValue);
        }
        else if (value.isColor) {
            type = VRMBlendShapeMaterialValueType.COLOR;
            defaultValue = value.clone();
            targetValue = new THREE.Color().fromArray(args.targetValue);
            deltaValue = targetValue.clone().sub(defaultValue);
        }
        else {
            type = VRMBlendShapeMaterialValueType.NUMBER;
            defaultValue = value;
            targetValue = args.targetValue[0];
            deltaValue = targetValue - defaultValue;
        }
        this._materialValues.push({
            material: material,
            propertyName: propertyName,
            defaultValue: defaultValue,
            targetValue: targetValue,
            deltaValue: deltaValue,
            type: type,
        });
    };
    /**
     * Apply weight to every assigned blend shapes.
     * Should be called via {@link BlendShapeMaster#update}.
     */
    VRMBlendShapeGroup.prototype.applyWeight = function () {
        var w = this.isBinary ? (this.weight < 0.5 ? 0.0 : 1.0) : this.weight;
        this._binds.forEach(function (bind) {
            bind.meshes.forEach(function (mesh) {
                if (!mesh.morphTargetInfluences) {
                    return;
                } // TODO: we should kick this at `addBind`
                mesh.morphTargetInfluences[bind.morphTargetIndex] += w * bind.weight;
            });
        });
        this._materialValues.forEach(function (materialValue) {
            var prop = materialValue.material[materialValue.propertyName];
            if (prop === undefined) {
                return;
            } // TODO: we should kick this at `addMaterialValue`
            if (materialValue.type === VRMBlendShapeMaterialValueType.NUMBER) {
                var deltaValue = materialValue.deltaValue;
                materialValue.material[materialValue.propertyName] += deltaValue * w;
            }
            else if (materialValue.type === VRMBlendShapeMaterialValueType.VECTOR2) {
                var deltaValue = materialValue.deltaValue;
                materialValue.material[materialValue.propertyName].add(_v2.copy(deltaValue).multiplyScalar(w));
            }
            else if (materialValue.type === VRMBlendShapeMaterialValueType.VECTOR3) {
                var deltaValue = materialValue.deltaValue;
                materialValue.material[materialValue.propertyName].add(_v3.copy(deltaValue).multiplyScalar(w));
            }
            else if (materialValue.type === VRMBlendShapeMaterialValueType.VECTOR4) {
                var deltaValue = materialValue.deltaValue;
                materialValue.material[materialValue.propertyName].add(_v4.copy(deltaValue).multiplyScalar(w));
            }
            else if (materialValue.type === VRMBlendShapeMaterialValueType.COLOR) {
                var deltaValue = materialValue.deltaValue;
                materialValue.material[materialValue.propertyName].add(_color.copy(deltaValue).multiplyScalar(w));
            }
            if (typeof materialValue.material.shouldApplyUniforms === 'boolean') {
                materialValue.material.shouldApplyUniforms = true;
            }
        });
    };
    /**
     * Clear previously assigned blend shapes.
     */
    VRMBlendShapeGroup.prototype.clearAppliedWeight = function () {
        this._binds.forEach(function (bind) {
            bind.meshes.forEach(function (mesh) {
                if (!mesh.morphTargetInfluences) {
                    return;
                } // TODO: we should kick this at `addBind`
                mesh.morphTargetInfluences[bind.morphTargetIndex] = 0.0;
            });
        });
        this._materialValues.forEach(function (materialValue) {
            var prop = materialValue.material[materialValue.propertyName];
            if (prop === undefined) {
                return;
            } // TODO: we should kick this at `addMaterialValue`
            if (materialValue.type === VRMBlendShapeMaterialValueType.NUMBER) {
                var defaultValue = materialValue.defaultValue;
                materialValue.material[materialValue.propertyName] = defaultValue;
            }
            else if (materialValue.type === VRMBlendShapeMaterialValueType.VECTOR2) {
                var defaultValue = materialValue.defaultValue;
                materialValue.material[materialValue.propertyName].copy(defaultValue);
            }
            else if (materialValue.type === VRMBlendShapeMaterialValueType.VECTOR3) {
                var defaultValue = materialValue.defaultValue;
                materialValue.material[materialValue.propertyName].copy(defaultValue);
            }
            else if (materialValue.type === VRMBlendShapeMaterialValueType.VECTOR4) {
                var defaultValue = materialValue.defaultValue;
                materialValue.material[materialValue.propertyName].copy(defaultValue);
            }
            else if (materialValue.type === VRMBlendShapeMaterialValueType.COLOR) {
                var defaultValue = materialValue.defaultValue;
                materialValue.material[materialValue.propertyName].copy(defaultValue);
            }
            if (typeof materialValue.material.shouldApplyUniforms === 'boolean') {
                materialValue.material.shouldApplyUniforms = true;
            }
        });
    };
    return VRMBlendShapeGroup;
}(THREE.Object3D));
exports.VRMBlendShapeGroup = VRMBlendShapeGroup;


/***/ }),

/***/ "./src/vrm/blendshape/VRMBlendShapeImporter.ts":
/*!*****************************************************!*\
  !*** ./src/vrm/blendshape/VRMBlendShapeImporter.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMBlendShapeImporter = void 0;
var types_1 = __webpack_require__(/*! ../types */ "./src/vrm/types/index.ts");
var renameMaterialProperty_1 = __webpack_require__(/*! ../utils/renameMaterialProperty */ "./src/vrm/utils/renameMaterialProperty.ts");
var VRMBlendShapeGroup_1 = __webpack_require__(/*! ./VRMBlendShapeGroup */ "./src/vrm/blendshape/VRMBlendShapeGroup.ts");
var VRMBlendShapeProxy_1 = __webpack_require__(/*! ./VRMBlendShapeProxy */ "./src/vrm/blendshape/VRMBlendShapeProxy.ts");
/**
 * An importer that imports a [[VRMBlendShape]] from a VRM extension of a GLTF.
 */
var VRMBlendShapeImporter = /** @class */ (function () {
    function VRMBlendShapeImporter() {
    }
    /**
     * Import a [[VRMBlendShape]] from a VRM.
     *
     * @param gltf A parsed result of GLTF taken from GLTFLoader
     */
    VRMBlendShapeImporter.prototype.import = function (gltf) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var vrmExt, schemaBlendShape, blendShape, blendShapeGroups, blendShapePresetMap;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        vrmExt = (_a = gltf.parser.json.extensions) === null || _a === void 0 ? void 0 : _a.VRM;
                        if (!vrmExt) {
                            return [2 /*return*/, null];
                        }
                        schemaBlendShape = vrmExt.blendShapeMaster;
                        if (!schemaBlendShape) {
                            return [2 /*return*/, null];
                        }
                        blendShape = new VRMBlendShapeProxy_1.VRMBlendShapeProxy();
                        blendShapeGroups = schemaBlendShape.blendShapeGroups;
                        if (!blendShapeGroups) {
                            return [2 /*return*/, blendShape];
                        }
                        blendShapePresetMap = {};
                        return [4 /*yield*/, Promise.all(blendShapeGroups.map(function (schemaGroup) { return __awaiter(_this, void 0, void 0, function () {
                                var name, presetName, group, materialValues;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    name = schemaGroup.name;
                                    if (name === undefined) {
                                        console.warn('VRMBlendShapeImporter: One of blendShapeGroups has no name');
                                        return [2 /*return*/];
                                    }
                                    if (schemaGroup.presetName &&
                                        schemaGroup.presetName !== types_1.VRMSchema.BlendShapePresetName.Unknown &&
                                        !blendShapePresetMap[schemaGroup.presetName]) {
                                        presetName = schemaGroup.presetName;
                                        blendShapePresetMap[schemaGroup.presetName] = name;
                                    }
                                    group = new VRMBlendShapeGroup_1.VRMBlendShapeGroup(name);
                                    gltf.scene.add(group);
                                    group.isBinary = schemaGroup.isBinary || false;
                                    if (schemaGroup.binds) {
                                        schemaGroup.binds.forEach(function (bind) { return __awaiter(_this, void 0, void 0, function () {
                                            var morphMeshes, primitives, morphTargetIndex;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (bind.mesh === undefined || bind.index === undefined) {
                                                            return [2 /*return*/];
                                                        }
                                                        return [4 /*yield*/, gltf.parser.getDependency('mesh', bind.mesh)];
                                                    case 1:
                                                        morphMeshes = _a.sent();
                                                        primitives = morphMeshes.type === 'Group'
                                                            ? morphMeshes.children
                                                            : [morphMeshes];
                                                        morphTargetIndex = bind.index;
                                                        if (!primitives.every(function (primitive) {
                                                            return Array.isArray(primitive.morphTargetInfluences) &&
                                                                morphTargetIndex < primitive.morphTargetInfluences.length;
                                                        })) {
                                                            console.warn("VRMBlendShapeImporter: " + schemaGroup.name + " attempts to index " + morphTargetIndex + "th morph but not found.");
                                                            return [2 /*return*/];
                                                        }
                                                        group.addBind({
                                                            meshes: primitives,
                                                            morphTargetIndex: morphTargetIndex,
                                                            weight: bind.weight || 100,
                                                        });
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                    }
                                    materialValues = schemaGroup.materialValues;
                                    if (materialValues) {
                                        materialValues.forEach(function (materialValue) {
                                            if (materialValue.materialName === undefined ||
                                                materialValue.propertyName === undefined ||
                                                materialValue.targetValue === undefined) {
                                                return;
                                            }
                                            var materials = [];
                                            gltf.scene.traverse(function (object) {
                                                if (object.material) {
                                                    var material = object.material;
                                                    if (Array.isArray(material)) {
                                                        materials.push.apply(materials, material.filter(function (mtl) { return mtl.name === materialValue.materialName && materials.indexOf(mtl) === -1; }));
                                                    }
                                                    else if (material.name === materialValue.materialName && materials.indexOf(material) === -1) {
                                                        materials.push(material);
                                                    }
                                                }
                                            });
                                            materials.forEach(function (material) {
                                                group.addMaterialValue({
                                                    material: material,
                                                    propertyName: renameMaterialProperty_1.renameMaterialProperty(materialValue.propertyName),
                                                    targetValue: materialValue.targetValue,
                                                });
                                            });
                                        });
                                    }
                                    blendShape.registerBlendShapeGroup(name, presetName, group);
                                    return [2 /*return*/];
                                });
                            }); }))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, blendShape];
                }
            });
        });
    };
    return VRMBlendShapeImporter;
}());
exports.VRMBlendShapeImporter = VRMBlendShapeImporter;


/***/ }),

/***/ "./src/vrm/blendshape/VRMBlendShapeProxy.ts":
/*!**************************************************!*\
  !*** ./src/vrm/blendshape/VRMBlendShapeProxy.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMBlendShapeProxy = void 0;
var math_1 = __webpack_require__(/*! ../utils/math */ "./src/vrm/utils/math.ts");
var VRMBlendShapeProxy = /** @class */ (function () {
    /**
     * Create a new VRMBlendShape.
     */
    function VRMBlendShapeProxy() {
        /**
         * List of registered blend shape.
         */
        this._blendShapeGroups = {};
        /**
         * A map from [[VRMSchema.BlendShapePresetName]] to its actual blend shape name.
         */
        this._blendShapePresetMap = {};
        /**
         * A list of name of unknown blend shapes.
         */
        this._unknownGroupNames = [];
        // do nothing
    }
    Object.defineProperty(VRMBlendShapeProxy.prototype, "expressions", {
        /**
         * List of name of registered blend shape group.
         */
        get: function () {
            return Object.keys(this._blendShapeGroups);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VRMBlendShapeProxy.prototype, "blendShapePresetMap", {
        /**
         * A map from [[VRMSchema.BlendShapePresetName]] to its actual blend shape name.
         */
        get: function () {
            return this._blendShapePresetMap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VRMBlendShapeProxy.prototype, "unknownGroupNames", {
        /**
         * A list of name of unknown blend shapes.
         */
        get: function () {
            return this._unknownGroupNames;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Return registered blend shape group.
     *
     * @param name Name of the blend shape group
     */
    VRMBlendShapeProxy.prototype.getBlendShapeGroup = function (name) {
        var presetName = this._blendShapePresetMap[name];
        var controller = presetName ? this._blendShapeGroups[presetName] : this._blendShapeGroups[name];
        if (!controller) {
            console.warn("no blend shape found by " + name);
            return undefined;
        }
        return controller;
    };
    /**
     * Register a blend shape group.
     *
     * @param name Name of the blend shape gorup
     * @param controller VRMBlendShapeController that describes the blend shape group
     */
    VRMBlendShapeProxy.prototype.registerBlendShapeGroup = function (name, presetName, controller) {
        this._blendShapeGroups[name] = controller;
        if (presetName) {
            this._blendShapePresetMap[presetName] = name;
        }
        else {
            this._unknownGroupNames.push(name);
        }
    };
    /**
     * Get current weight of specified blend shape group.
     *
     * @param name Name of the blend shape group
     */
    VRMBlendShapeProxy.prototype.getValue = function (name) {
        var _a;
        var controller = this.getBlendShapeGroup(name);
        return (_a = controller === null || controller === void 0 ? void 0 : controller.weight) !== null && _a !== void 0 ? _a : null;
    };
    /**
     * Set a weight to specified blend shape group.
     *
     * @param name Name of the blend shape group
     * @param weight Weight
     */
    VRMBlendShapeProxy.prototype.setValue = function (name, weight) {
        var controller = this.getBlendShapeGroup(name);
        if (controller) {
            controller.weight = math_1.saturate(weight);
        }
    };
    /**
     * Get a track name of specified blend shape group.
     * This track name is needed to manipulate its blend shape group via keyframe animations.
     *
     * @example Manipulate a blend shape group using keyframe animation
     * ```js
     * const trackName = vrm.blendShapeProxy.getBlendShapeTrackName( THREE.VRMSchema.BlendShapePresetName.Blink );
     * const track = new THREE.NumberKeyframeTrack(
     *   name,
     *   [ 0.0, 0.5, 1.0 ], // times
     *   [ 0.0, 1.0, 0.0 ] // values
     * );
     *
     * const clip = new THREE.AnimationClip(
     *   'blink', // name
     *   1.0, // duration
     *   [ track ] // tracks
     * );
     *
     * const mixer = new THREE.AnimationMixer( vrm.scene );
     * const action = mixer.clipAction( clip );
     * action.play();
     * ```
     *
     * @param name Name of the blend shape group
     */
    VRMBlendShapeProxy.prototype.getBlendShapeTrackName = function (name) {
        var controller = this.getBlendShapeGroup(name);
        return controller ? controller.name + ".weight" : null;
    };
    /**
     * Update every blend shape groups.
     */
    VRMBlendShapeProxy.prototype.update = function () {
        var _this = this;
        Object.keys(this._blendShapeGroups).forEach(function (name) {
            var controller = _this._blendShapeGroups[name];
            controller.clearAppliedWeight();
        });
        Object.keys(this._blendShapeGroups).forEach(function (name) {
            var controller = _this._blendShapeGroups[name];
            controller.applyWeight();
        });
    };
    return VRMBlendShapeProxy;
}());
exports.VRMBlendShapeProxy = VRMBlendShapeProxy;


/***/ }),

/***/ "./src/vrm/blendshape/index.ts":
/*!*************************************!*\
  !*** ./src/vrm/blendshape/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./VRMBlendShapeGroup */ "./src/vrm/blendshape/VRMBlendShapeGroup.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMBlendShapeImporter */ "./src/vrm/blendshape/VRMBlendShapeImporter.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMBlendShapeProxy */ "./src/vrm/blendshape/VRMBlendShapeProxy.ts"), exports);


/***/ }),

/***/ "./src/vrm/debug/VRMDebug.ts":
/*!***********************************!*\
  !*** ./src/vrm/debug/VRMDebug.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMDebug = exports.VRM_GIZMO_RENDER_ORDER = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var VRM_1 = __webpack_require__(/*! ../VRM */ "./src/vrm/VRM.ts");
var VRMImporterDebug_1 = __webpack_require__(/*! ./VRMImporterDebug */ "./src/vrm/debug/VRMImporterDebug.ts");
exports.VRM_GIZMO_RENDER_ORDER = 10000;
/**
 * [[VRM]] but it has some useful gizmos.
 */
var VRMDebug = /** @class */ (function (_super) {
    __extends(VRMDebug, _super);
    /**
     * Create a new VRMDebug instance.
     *
     * @param params [[VRMParameters]] that represents components of the VRM
     * @param debugOption Options for VRMDebug features
     */
    function VRMDebug(params, debugOption) {
        if (debugOption === void 0) { debugOption = {}; }
        var _this = _super.call(this, params) || this;
        // Gizmoを展開
        if (!debugOption.disableBoxHelper) {
            _this.scene.add(new THREE.BoxHelper(_this.scene));
        }
        if (!debugOption.disableSkeletonHelper) {
            _this.scene.add(new THREE.SkeletonHelper(_this.scene));
        }
        return _this;
    }
    /**
     * Create a new VRMDebug from a parsed result of GLTF taken from GLTFLoader.
     *
     * See [[VRM.from]] for a detailed example.
     *
     * @param gltf A parsed GLTF object taken from GLTFLoader
     * @param options Options that will be used in importer
     * @param debugOption Options for VRMDebug features
     */
    VRMDebug.from = function (gltf, options, debugOption) {
        if (options === void 0) { options = {}; }
        if (debugOption === void 0) { debugOption = {}; }
        return __awaiter(this, void 0, Promise, function () {
            var importer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        importer = new VRMImporterDebug_1.VRMImporterDebug(options);
                        return [4 /*yield*/, importer.import(gltf, debugOption)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VRMDebug.prototype.update = function (delta) {
        _super.prototype.update.call(this, delta);
    };
    return VRMDebug;
}(VRM_1.VRM));
exports.VRMDebug = VRMDebug;


/***/ }),

/***/ "./src/vrm/debug/VRMDebugOptions.ts":
/*!******************************************!*\
  !*** ./src/vrm/debug/VRMDebugOptions.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/vrm/debug/VRMImporterDebug.ts":
/*!*******************************************!*\
  !*** ./src/vrm/debug/VRMImporterDebug.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMImporterDebug = void 0;
var VRMImporter_1 = __webpack_require__(/*! ../VRMImporter */ "./src/vrm/VRMImporter.ts");
var VRMDebug_1 = __webpack_require__(/*! ./VRMDebug */ "./src/vrm/debug/VRMDebug.ts");
var VRMLookAtImporterDebug_1 = __webpack_require__(/*! ./VRMLookAtImporterDebug */ "./src/vrm/debug/VRMLookAtImporterDebug.ts");
var VRMSpringBoneImporterDebug_1 = __webpack_require__(/*! ./VRMSpringBoneImporterDebug */ "./src/vrm/debug/VRMSpringBoneImporterDebug.ts");
/**
 * An importer that imports a [[VRMDebug]] from a VRM extension of a GLTF.
 */
var VRMImporterDebug = /** @class */ (function (_super) {
    __extends(VRMImporterDebug, _super);
    function VRMImporterDebug(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        options.lookAtImporter = options.lookAtImporter || new VRMLookAtImporterDebug_1.VRMLookAtImporterDebug();
        options.springBoneImporter = options.springBoneImporter || new VRMSpringBoneImporterDebug_1.VRMSpringBoneImporterDebug();
        _this = _super.call(this, options) || this;
        return _this;
    }
    VRMImporterDebug.prototype.import = function (gltf, debugOptions) {
        if (debugOptions === void 0) { debugOptions = {}; }
        return __awaiter(this, void 0, Promise, function () {
            var scene, meta, materials, humanoid, firstPerson, _a, blendShapeProxy, lookAt, _b, springBoneManager;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (gltf.parser.json.extensions === undefined || gltf.parser.json.extensions.VRM === undefined) {
                            throw new Error('Could not find VRM extension on the GLTF');
                        }
                        scene = gltf.scene;
                        scene.updateMatrixWorld(false);
                        // Skinned object should not be frustumCulled
                        // Since pre-skinned position might be outside of view
                        scene.traverse(function (object3d) {
                            if (object3d.isMesh) {
                                object3d.frustumCulled = false;
                            }
                        });
                        return [4 /*yield*/, this._metaImporter.import(gltf)];
                    case 1:
                        meta = (_c.sent()) || undefined;
                        return [4 /*yield*/, this._materialImporter.convertGLTFMaterials(gltf)];
                    case 2:
                        materials = (_c.sent()) || undefined;
                        return [4 /*yield*/, this._humanoidImporter.import(gltf)];
                    case 3:
                        humanoid = (_c.sent()) || undefined;
                        if (!humanoid) return [3 /*break*/, 5];
                        return [4 /*yield*/, this._firstPersonImporter.import(gltf, humanoid)];
                    case 4:
                        _a = (_c.sent()) || undefined;
                        return [3 /*break*/, 6];
                    case 5:
                        _a = undefined;
                        _c.label = 6;
                    case 6:
                        firstPerson = _a;
                        return [4 /*yield*/, this._blendShapeImporter.import(gltf)];
                    case 7:
                        blendShapeProxy = (_c.sent()) || undefined;
                        if (!(firstPerson && blendShapeProxy && humanoid)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this._lookAtImporter.import(gltf, firstPerson, blendShapeProxy, humanoid)];
                    case 8:
                        _b = (_c.sent()) || undefined;
                        return [3 /*break*/, 10];
                    case 9:
                        _b = undefined;
                        _c.label = 10;
                    case 10:
                        lookAt = _b;
                        if (lookAt.setupHelper) {
                            lookAt.setupHelper(scene, debugOptions);
                        }
                        return [4 /*yield*/, this._springBoneImporter.import(gltf)];
                    case 11:
                        springBoneManager = (_c.sent()) || undefined;
                        if (springBoneManager.setupHelper) {
                            springBoneManager.setupHelper(scene, debugOptions);
                        }
                        return [2 /*return*/, new VRMDebug_1.VRMDebug({
                                scene: gltf.scene,
                                meta: meta,
                                materials: materials,
                                humanoid: humanoid,
                                firstPerson: firstPerson,
                                blendShapeProxy: blendShapeProxy,
                                lookAt: lookAt,
                                springBoneManager: springBoneManager,
                            }, debugOptions)];
                }
            });
        });
    };
    return VRMImporterDebug;
}(VRMImporter_1.VRMImporter));
exports.VRMImporterDebug = VRMImporterDebug;


/***/ }),

/***/ "./src/vrm/debug/VRMLookAtHeadDebug.ts":
/*!*********************************************!*\
  !*** ./src/vrm/debug/VRMLookAtHeadDebug.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMLookAtHeadDebug = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var VRMLookAtHead_1 = __webpack_require__(/*! ../lookat/VRMLookAtHead */ "./src/vrm/lookat/VRMLookAtHead.ts");
var _v3 = new THREE.Vector3();
var VRMLookAtHeadDebug = /** @class */ (function (_super) {
    __extends(VRMLookAtHeadDebug, _super);
    function VRMLookAtHeadDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VRMLookAtHeadDebug.prototype.setupHelper = function (scene, debugOption) {
        if (!debugOption.disableFaceDirectionHelper) {
            this._faceDirectionHelper = new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 0, 0), 0.5, 0xff00ff);
            scene.add(this._faceDirectionHelper);
        }
    };
    VRMLookAtHeadDebug.prototype.update = function (delta) {
        _super.prototype.update.call(this, delta);
        if (this._faceDirectionHelper) {
            this.firstPerson.getFirstPersonWorldPosition(this._faceDirectionHelper.position);
            this._faceDirectionHelper.setDirection(this.getLookAtWorldDirection(_v3));
        }
    };
    return VRMLookAtHeadDebug;
}(VRMLookAtHead_1.VRMLookAtHead));
exports.VRMLookAtHeadDebug = VRMLookAtHeadDebug;


/***/ }),

/***/ "./src/vrm/debug/VRMLookAtImporterDebug.ts":
/*!*************************************************!*\
  !*** ./src/vrm/debug/VRMLookAtImporterDebug.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMLookAtImporterDebug = void 0;
var VRMLookAtImporter_1 = __webpack_require__(/*! ../lookat/VRMLookAtImporter */ "./src/vrm/lookat/VRMLookAtImporter.ts");
var VRMLookAtHeadDebug_1 = __webpack_require__(/*! ./VRMLookAtHeadDebug */ "./src/vrm/debug/VRMLookAtHeadDebug.ts");
var VRMLookAtImporterDebug = /** @class */ (function (_super) {
    __extends(VRMLookAtImporterDebug, _super);
    function VRMLookAtImporterDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VRMLookAtImporterDebug.prototype.import = function (gltf, firstPerson, blendShapeProxy, humanoid) {
        var _a;
        var vrmExt = (_a = gltf.parser.json.extensions) === null || _a === void 0 ? void 0 : _a.VRM;
        if (!vrmExt) {
            return null;
        }
        var schemaFirstPerson = vrmExt.firstPerson;
        if (!schemaFirstPerson) {
            return null;
        }
        var applyer = this._importApplyer(schemaFirstPerson, blendShapeProxy, humanoid);
        return new VRMLookAtHeadDebug_1.VRMLookAtHeadDebug(firstPerson, applyer || undefined);
    };
    return VRMLookAtImporterDebug;
}(VRMLookAtImporter_1.VRMLookAtImporter));
exports.VRMLookAtImporterDebug = VRMLookAtImporterDebug;


/***/ }),

/***/ "./src/vrm/debug/VRMSpringBoneDebug.ts":
/*!*********************************************!*\
  !*** ./src/vrm/debug/VRMSpringBoneDebug.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMSpringBoneDebug = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var springbone_1 = __webpack_require__(/*! ../springbone */ "./src/vrm/springbone/index.ts");
var VRMDebug_1 = __webpack_require__(/*! ./VRMDebug */ "./src/vrm/debug/VRMDebug.ts");
var _v3A = new THREE.Vector3();
var VRMSpringBoneDebug = /** @class */ (function (_super) {
    __extends(VRMSpringBoneDebug, _super);
    function VRMSpringBoneDebug(bone, params) {
        return _super.call(this, bone, params) || this;
    }
    /**
     * Return spring bone gizmo, as `THREE.ArrowHelper`.
     * Useful for debugging spring bones.
     */
    VRMSpringBoneDebug.prototype.getGizmo = function () {
        // return if gizmo is already existed
        if (this._gizmo) {
            return this._gizmo;
        }
        var nextTailRelative = _v3A.copy(this._nextTail).sub(this._centerSpacePosition);
        var nextTailRelativeLength = nextTailRelative.length();
        this._gizmo = new THREE.ArrowHelper(nextTailRelative.normalize(), this._centerSpacePosition, nextTailRelativeLength, 0xffff00, this.radius, this.radius);
        // it should be always visible
        this._gizmo.line.renderOrder = VRMDebug_1.VRM_GIZMO_RENDER_ORDER;
        this._gizmo.cone.renderOrder = VRMDebug_1.VRM_GIZMO_RENDER_ORDER;
        this._gizmo.line.material.depthTest = false;
        this._gizmo.line.material.transparent = true;
        this._gizmo.cone.material.depthTest = false;
        this._gizmo.cone.material.transparent = true;
        return this._gizmo;
    };
    VRMSpringBoneDebug.prototype.update = function (delta) {
        _super.prototype.update.call(this, delta);
        // lastly we're gonna update gizmo
        this._updateGizmo();
    };
    VRMSpringBoneDebug.prototype._updateGizmo = function () {
        if (!this._gizmo) {
            return;
        }
        var nextTailRelative = _v3A.copy(this._currentTail).sub(this._centerSpacePosition);
        var nextTailRelativeLength = nextTailRelative.length();
        this._gizmo.setDirection(nextTailRelative.normalize());
        this._gizmo.setLength(nextTailRelativeLength, this.radius, this.radius);
        this._gizmo.position.copy(this._centerSpacePosition);
    };
    return VRMSpringBoneDebug;
}(springbone_1.VRMSpringBone));
exports.VRMSpringBoneDebug = VRMSpringBoneDebug;


/***/ }),

/***/ "./src/vrm/debug/VRMSpringBoneImporterDebug.ts":
/*!*****************************************************!*\
  !*** ./src/vrm/debug/VRMSpringBoneImporterDebug.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMSpringBoneImporterDebug = void 0;
var VRMSpringBoneImporter_1 = __webpack_require__(/*! ../springbone/VRMSpringBoneImporter */ "./src/vrm/springbone/VRMSpringBoneImporter.ts");
var VRMSpringBoneManagerDebug_1 = __webpack_require__(/*! ./VRMSpringBoneManagerDebug */ "./src/vrm/debug/VRMSpringBoneManagerDebug.ts");
var VRMSpringBoneDebug_1 = __webpack_require__(/*! ./VRMSpringBoneDebug */ "./src/vrm/debug/VRMSpringBoneDebug.ts");
var VRMSpringBoneImporterDebug = /** @class */ (function (_super) {
    __extends(VRMSpringBoneImporterDebug, _super);
    function VRMSpringBoneImporterDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VRMSpringBoneImporterDebug.prototype.import = function (gltf) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var vrmExt, schemaSecondaryAnimation, colliderGroups, springBoneGroupList;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        vrmExt = (_a = gltf.parser.json.extensions) === null || _a === void 0 ? void 0 : _a.VRM;
                        if (!vrmExt)
                            return [2 /*return*/, null];
                        schemaSecondaryAnimation = vrmExt.secondaryAnimation;
                        if (!schemaSecondaryAnimation)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this._importColliderMeshGroups(gltf, schemaSecondaryAnimation)];
                    case 1:
                        colliderGroups = _b.sent();
                        return [4 /*yield*/, this._importSpringBoneGroupList(gltf, schemaSecondaryAnimation, colliderGroups)];
                    case 2:
                        springBoneGroupList = _b.sent();
                        return [2 /*return*/, new VRMSpringBoneManagerDebug_1.VRMSpringBoneManagerDebug(colliderGroups, springBoneGroupList)];
                }
            });
        });
    };
    VRMSpringBoneImporterDebug.prototype._createSpringBone = function (bone, params) {
        return new VRMSpringBoneDebug_1.VRMSpringBoneDebug(bone, params);
    };
    return VRMSpringBoneImporterDebug;
}(VRMSpringBoneImporter_1.VRMSpringBoneImporter));
exports.VRMSpringBoneImporterDebug = VRMSpringBoneImporterDebug;


/***/ }),

/***/ "./src/vrm/debug/VRMSpringBoneManagerDebug.ts":
/*!****************************************************!*\
  !*** ./src/vrm/debug/VRMSpringBoneManagerDebug.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMSpringBoneManagerDebug = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var springbone_1 = __webpack_require__(/*! ../springbone */ "./src/vrm/springbone/index.ts");
var VRMDebug_1 = __webpack_require__(/*! ./VRMDebug */ "./src/vrm/debug/VRMDebug.ts");
var _colliderGizmoMaterial = new THREE.MeshBasicMaterial({
    color: 0xff00ff,
    wireframe: true,
    transparent: true,
    depthTest: false,
});
var VRMSpringBoneManagerDebug = /** @class */ (function (_super) {
    __extends(VRMSpringBoneManagerDebug, _super);
    function VRMSpringBoneManagerDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VRMSpringBoneManagerDebug.prototype.setupHelper = function (scene, debugOption) {
        if (debugOption.disableSpringBoneHelper)
            return;
        this.springBoneGroupList.forEach(function (springBoneGroup) {
            springBoneGroup.forEach(function (springBone) {
                if (springBone.getGizmo) {
                    var gizmo = springBone.getGizmo();
                    scene.add(gizmo);
                }
            });
        });
        this.colliderGroups.forEach(function (colliderGroup) {
            colliderGroup.colliders.forEach(function (collider) {
                collider.material = _colliderGizmoMaterial;
                collider.renderOrder = VRMDebug_1.VRM_GIZMO_RENDER_ORDER;
            });
        });
    };
    return VRMSpringBoneManagerDebug;
}(springbone_1.VRMSpringBoneManager));
exports.VRMSpringBoneManagerDebug = VRMSpringBoneManagerDebug;


/***/ }),

/***/ "./src/vrm/debug/index.ts":
/*!********************************!*\
  !*** ./src/vrm/debug/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./VRMDebugOptions */ "./src/vrm/debug/VRMDebugOptions.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMDebug */ "./src/vrm/debug/VRMDebug.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMSpringBoneDebug */ "./src/vrm/debug/VRMSpringBoneDebug.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMSpringBoneImporterDebug */ "./src/vrm/debug/VRMSpringBoneImporterDebug.ts"), exports);


/***/ }),

/***/ "./src/vrm/firstperson/VRMFirstPerson.ts":
/*!***********************************************!*\
  !*** ./src/vrm/firstperson/VRMFirstPerson.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMFirstPerson = exports.VRMRendererFirstPersonFlags = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var math_1 = __webpack_require__(/*! ../utils/math */ "./src/vrm/utils/math.ts");
var VECTOR3_FRONT = Object.freeze(new THREE.Vector3(0.0, 0.0, -1.0));
var _quat = new THREE.Quaternion();
var FirstPersonFlag;
(function (FirstPersonFlag) {
    FirstPersonFlag[FirstPersonFlag["Auto"] = 0] = "Auto";
    FirstPersonFlag[FirstPersonFlag["Both"] = 1] = "Both";
    FirstPersonFlag[FirstPersonFlag["ThirdPersonOnly"] = 2] = "ThirdPersonOnly";
    FirstPersonFlag[FirstPersonFlag["FirstPersonOnly"] = 3] = "FirstPersonOnly";
})(FirstPersonFlag || (FirstPersonFlag = {}));
/**
 * This class represents a single [`meshAnnotation`](https://github.com/vrm-c/UniVRM/blob/master/specification/0.0/schema/vrm.firstperson.meshannotation.schema.json) entry.
 * Each mesh will be assigned to specified layer when you call [[VRMFirstPerson.setup]].
 */
var VRMRendererFirstPersonFlags = /** @class */ (function () {
    /**
     * Create a new mesh annotation.
     *
     * @param firstPersonFlag A [[FirstPersonFlag]] of the annotation entry
     * @param node A node of the annotation entry.
     */
    function VRMRendererFirstPersonFlags(firstPersonFlag, mesh) {
        this.firstPersonFlag = VRMRendererFirstPersonFlags._parseFirstPersonFlag(firstPersonFlag);
        this.mesh = mesh;
    }
    VRMRendererFirstPersonFlags._parseFirstPersonFlag = function (firstPersonFlag) {
        switch (firstPersonFlag) {
            case 'Both':
                return FirstPersonFlag.Both;
            case 'ThirdPersonOnly':
                return FirstPersonFlag.ThirdPersonOnly;
            case 'FirstPersonOnly':
                return FirstPersonFlag.FirstPersonOnly;
            default:
                return FirstPersonFlag.Auto;
        }
    };
    return VRMRendererFirstPersonFlags;
}());
exports.VRMRendererFirstPersonFlags = VRMRendererFirstPersonFlags;
var VRMFirstPerson = /** @class */ (function () {
    /**
     * Create a new VRMFirstPerson object.
     *
     * @param firstPersonBone A first person bone
     * @param firstPersonBoneOffset An offset from the specified first person bone
     * @param meshAnnotations A renderer settings. See the description of [[RendererFirstPersonFlags]] for more info
     */
    function VRMFirstPerson(firstPersonBone, firstPersonBoneOffset, meshAnnotations) {
        this._meshAnnotations = [];
        this._firstPersonOnlyLayer = VRMFirstPerson._DEFAULT_FIRSTPERSON_ONLY_LAYER;
        this._thirdPersonOnlyLayer = VRMFirstPerson._DEFAULT_THIRDPERSON_ONLY_LAYER;
        this._initialized = false;
        this._firstPersonBone = firstPersonBone;
        this._firstPersonBoneOffset = firstPersonBoneOffset;
        this._meshAnnotations = meshAnnotations;
    }
    Object.defineProperty(VRMFirstPerson.prototype, "firstPersonBone", {
        get: function () {
            return this._firstPersonBone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VRMFirstPerson.prototype, "meshAnnotations", {
        get: function () {
            return this._meshAnnotations;
        },
        enumerable: false,
        configurable: true
    });
    VRMFirstPerson.prototype.getFirstPersonWorldDirection = function (target) {
        return target.copy(VECTOR3_FRONT).applyQuaternion(math_1.getWorldQuaternionLite(this._firstPersonBone, _quat));
    };
    Object.defineProperty(VRMFirstPerson.prototype, "firstPersonOnlyLayer", {
        /**
         * A camera layer represents `FirstPersonOnly` layer.
         * Note that **you must call [[setup]] first before you use the layer feature** or it does not work properly.
         *
         * The value is [[DEFAULT_FIRSTPERSON_ONLY_LAYER]] by default but you can change the layer by specifying via [[setup]] if you prefer.
         *
         * @see https://vrm.dev/en/univrm/api/univrm_use_firstperson/
         * @see https://threejs.org/docs/#api/en/core/Layers
         */
        get: function () {
            return this._firstPersonOnlyLayer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VRMFirstPerson.prototype, "thirdPersonOnlyLayer", {
        /**
         * A camera layer represents `ThirdPersonOnly` layer.
         * Note that **you must call [[setup]] first before you use the layer feature** or it does not work properly.
         *
         * The value is [[DEFAULT_THIRDPERSON_ONLY_LAYER]] by default but you can change the layer by specifying via [[setup]] if you prefer.
         *
         * @see https://vrm.dev/en/univrm/api/univrm_use_firstperson/
         * @see https://threejs.org/docs/#api/en/core/Layers
         */
        get: function () {
            return this._thirdPersonOnlyLayer;
        },
        enumerable: false,
        configurable: true
    });
    VRMFirstPerson.prototype.getFirstPersonBoneOffset = function (target) {
        return target.copy(this._firstPersonBoneOffset);
    };
    /**
     * Get current world position of the first person.
     * The position takes [[FirstPersonBone]] and [[FirstPersonOffset]] into account.
     *
     * @param v3 target
     * @returns Current world position of the first person
     */
    VRMFirstPerson.prototype.getFirstPersonWorldPosition = function (v3) {
        // UniVRM#VRMFirstPersonEditor
        // var worldOffset = head.localToWorldMatrix.MultiplyPoint(component.FirstPersonOffset);
        var offset = this._firstPersonBoneOffset;
        var v4 = new THREE.Vector4(offset.x, offset.y, offset.z, 1.0);
        v4.applyMatrix4(this._firstPersonBone.matrixWorld);
        return v3.set(v4.x, v4.y, v4.z);
    };
    /**
     * In this method, it assigns layers for every meshes based on mesh annotations.
     * You must call this method first before you use the layer feature.
     *
     * This is an equivalent of [VRMFirstPerson.Setup](https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/UniVRM/Scripts/FirstPerson/VRMFirstPerson.cs) of the UniVRM.
     *
     * The `cameraLayer` parameter specifies which layer will be assigned for `FirstPersonOnly` / `ThirdPersonOnly`.
     * In UniVRM, we specified those by naming each desired layer as `FIRSTPERSON_ONLY_LAYER` / `THIRDPERSON_ONLY_LAYER`
     * but we are going to specify these layers at here since we are unable to name layers in Three.js.
     *
     * @param cameraLayer Specify which layer will be for `FirstPersonOnly` / `ThirdPersonOnly`.
     */
    VRMFirstPerson.prototype.setup = function (_a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.firstPersonOnlyLayer, firstPersonOnlyLayer = _c === void 0 ? VRMFirstPerson._DEFAULT_FIRSTPERSON_ONLY_LAYER : _c, _d = _b.thirdPersonOnlyLayer, thirdPersonOnlyLayer = _d === void 0 ? VRMFirstPerson._DEFAULT_THIRDPERSON_ONLY_LAYER : _d;
        if (this._initialized) {
            return;
        }
        this._initialized = true;
        this._firstPersonOnlyLayer = firstPersonOnlyLayer;
        this._thirdPersonOnlyLayer = thirdPersonOnlyLayer;
        this._meshAnnotations.forEach(function (item) {
            if (item.firstPersonFlag === FirstPersonFlag.FirstPersonOnly) {
                item.mesh.layers.set(_this._firstPersonOnlyLayer);
                item.mesh.traverse(function (child) { return child.layers.set(_this._firstPersonOnlyLayer); });
            }
            else if (item.firstPersonFlag === FirstPersonFlag.ThirdPersonOnly) {
                item.mesh.layers.set(_this._thirdPersonOnlyLayer);
                item.mesh.traverse(function (child) { return child.layers.set(_this._thirdPersonOnlyLayer); });
            }
            else if (item.firstPersonFlag === FirstPersonFlag.Auto) {
                _this._createHeadlessModel(item.mesh);
            }
        });
    };
    VRMFirstPerson.prototype._excludeTriangles = function (triangles, bws, skinIndex, exclude) {
        var count = 0;
        if (bws != null && bws.length > 0) {
            for (var i = 0; i < triangles.length; i += 3) {
                var a = triangles[i];
                var b = triangles[i + 1];
                var c = triangles[i + 2];
                var bw0 = bws[a];
                var skin0 = skinIndex[a];
                if (bw0[0] > 0 && exclude.includes(skin0[0]))
                    continue;
                if (bw0[1] > 0 && exclude.includes(skin0[1]))
                    continue;
                if (bw0[2] > 0 && exclude.includes(skin0[2]))
                    continue;
                if (bw0[3] > 0 && exclude.includes(skin0[3]))
                    continue;
                var bw1 = bws[b];
                var skin1 = skinIndex[b];
                if (bw1[0] > 0 && exclude.includes(skin1[0]))
                    continue;
                if (bw1[1] > 0 && exclude.includes(skin1[1]))
                    continue;
                if (bw1[2] > 0 && exclude.includes(skin1[2]))
                    continue;
                if (bw1[3] > 0 && exclude.includes(skin1[3]))
                    continue;
                var bw2 = bws[c];
                var skin2 = skinIndex[c];
                if (bw2[0] > 0 && exclude.includes(skin2[0]))
                    continue;
                if (bw2[1] > 0 && exclude.includes(skin2[1]))
                    continue;
                if (bw2[2] > 0 && exclude.includes(skin2[2]))
                    continue;
                if (bw2[3] > 0 && exclude.includes(skin2[3]))
                    continue;
                triangles[count++] = a;
                triangles[count++] = b;
                triangles[count++] = c;
            }
        }
        return count;
    };
    VRMFirstPerson.prototype._createErasedMesh = function (src, erasingBonesIndex) {
        var dst = new THREE.SkinnedMesh(src.geometry.clone(), src.material);
        dst.name = src.name + "(erase)";
        dst.frustumCulled = src.frustumCulled;
        dst.layers.set(this._firstPersonOnlyLayer);
        var geometry = dst.geometry;
        var skinIndexAttr = geometry.getAttribute('skinIndex').array;
        var skinIndex = [];
        for (var i = 0; i < skinIndexAttr.length; i += 4) {
            skinIndex.push([skinIndexAttr[i], skinIndexAttr[i + 1], skinIndexAttr[i + 2], skinIndexAttr[i + 3]]);
        }
        var skinWeightAttr = geometry.getAttribute('skinWeight').array;
        var skinWeight = [];
        for (var i = 0; i < skinWeightAttr.length; i += 4) {
            skinWeight.push([skinWeightAttr[i], skinWeightAttr[i + 1], skinWeightAttr[i + 2], skinWeightAttr[i + 3]]);
        }
        var index = geometry.getIndex();
        if (!index) {
            throw new Error("The geometry doesn't have an index buffer");
        }
        var oldTriangles = Array.from(index.array);
        var count = this._excludeTriangles(oldTriangles, skinWeight, skinIndex, erasingBonesIndex);
        var newTriangle = [];
        for (var i = 0; i < count; i++) {
            newTriangle[i] = oldTriangles[i];
        }
        geometry.setIndex(newTriangle);
        // mtoon material includes onBeforeRender. this is unsupported at SkinnedMesh#clone
        if (src.onBeforeRender) {
            dst.onBeforeRender = src.onBeforeRender;
        }
        dst.bind(new THREE.Skeleton(src.skeleton.bones, src.skeleton.boneInverses), new THREE.Matrix4());
        return dst;
    };
    VRMFirstPerson.prototype._createHeadlessModelForSkinnedMesh = function (parent, mesh) {
        var _this = this;
        var eraseBoneIndexes = [];
        mesh.skeleton.bones.forEach(function (bone, index) {
            if (_this._isEraseTarget(bone))
                eraseBoneIndexes.push(index);
        });
        // Unlike UniVRM we don't copy mesh if no invisible bone was found
        if (!eraseBoneIndexes.length) {
            mesh.layers.enable(this._thirdPersonOnlyLayer);
            mesh.layers.enable(this._firstPersonOnlyLayer);
            return;
        }
        mesh.layers.set(this._thirdPersonOnlyLayer);
        var newMesh = this._createErasedMesh(mesh, eraseBoneIndexes);
        parent.add(newMesh);
    };
    VRMFirstPerson.prototype._createHeadlessModel = function (node) {
        var _this = this;
        if (node.type === 'Group') {
            node.layers.set(this._thirdPersonOnlyLayer);
            if (this._isEraseTarget(node)) {
                node.traverse(function (child) { return child.layers.set(_this._thirdPersonOnlyLayer); });
            }
            else {
                var parent_1 = new THREE.Group();
                parent_1.name = "_headless_" + node.name;
                parent_1.layers.set(this._firstPersonOnlyLayer);
                node.parent.add(parent_1);
                node.children
                    .filter(function (child) { return child.type === 'SkinnedMesh'; })
                    .forEach(function (child) {
                    var skinnedMesh = child;
                    _this._createHeadlessModelForSkinnedMesh(parent_1, skinnedMesh);
                });
            }
        }
        else if (node.type === 'SkinnedMesh') {
            var skinnedMesh = node;
            this._createHeadlessModelForSkinnedMesh(node.parent, skinnedMesh);
        }
        else {
            if (this._isEraseTarget(node)) {
                node.layers.set(this._thirdPersonOnlyLayer);
                node.traverse(function (child) { return child.layers.set(_this._thirdPersonOnlyLayer); });
            }
        }
    };
    VRMFirstPerson.prototype._isEraseTarget = function (bone) {
        if (bone.name === this._firstPersonBone.name) {
            return true;
        }
        else if (!bone.parent) {
            return false;
        }
        else {
            return this._isEraseTarget(bone.parent);
        }
    };
    /**
     * A default camera layer for `FirstPersonOnly` layer.
     *
     * @see [[getFirstPersonOnlyLayer]]
     */
    VRMFirstPerson._DEFAULT_FIRSTPERSON_ONLY_LAYER = 9;
    /**
     * A default camera layer for `ThirdPersonOnly` layer.
     *
     * @see [[getThirdPersonOnlyLayer]]
     */
    VRMFirstPerson._DEFAULT_THIRDPERSON_ONLY_LAYER = 10;
    return VRMFirstPerson;
}());
exports.VRMFirstPerson = VRMFirstPerson;


/***/ }),

/***/ "./src/vrm/firstperson/VRMFirstPersonImporter.ts":
/*!*******************************************************!*\
  !*** ./src/vrm/firstperson/VRMFirstPersonImporter.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMFirstPersonImporter = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var types_1 = __webpack_require__(/*! ../types */ "./src/vrm/types/index.ts");
var VRMFirstPerson_1 = __webpack_require__(/*! ./VRMFirstPerson */ "./src/vrm/firstperson/VRMFirstPerson.ts");
/**
 * An importer that imports a [[VRMFirstPerson]] from a VRM extension of a GLTF.
 */
var VRMFirstPersonImporter = /** @class */ (function () {
    function VRMFirstPersonImporter() {
    }
    /**
     * Import a [[VRMFirstPerson]] from a VRM.
     *
     * @param gltf A parsed result of GLTF taken from GLTFLoader
     * @param humanoid A [[VRMHumanoid]] instance that represents the VRM
     */
    VRMFirstPersonImporter.prototype.import = function (gltf, humanoid) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var vrmExt, schemaFirstPerson, firstPersonBoneIndex, firstPersonBone, firstPersonBoneOffset, meshAnnotations, meshes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        vrmExt = (_a = gltf.parser.json.extensions) === null || _a === void 0 ? void 0 : _a.VRM;
                        if (!vrmExt) {
                            return [2 /*return*/, null];
                        }
                        schemaFirstPerson = vrmExt.firstPerson;
                        if (!schemaFirstPerson) {
                            return [2 /*return*/, null];
                        }
                        firstPersonBoneIndex = schemaFirstPerson.firstPersonBone;
                        if (!(firstPersonBoneIndex === undefined || firstPersonBoneIndex === -1)) return [3 /*break*/, 1];
                        firstPersonBone = humanoid.getBoneNode(types_1.VRMSchema.HumanoidBoneName.Head);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, gltf.parser.getDependency('node', firstPersonBoneIndex)];
                    case 2:
                        firstPersonBone = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!firstPersonBone) {
                            console.warn('VRMFirstPersonImporter: Could not find firstPersonBone of the VRM');
                            return [2 /*return*/, null];
                        }
                        firstPersonBoneOffset = schemaFirstPerson.firstPersonBoneOffset
                            ? new THREE.Vector3(schemaFirstPerson.firstPersonBoneOffset.x, schemaFirstPerson.firstPersonBoneOffset.y, -schemaFirstPerson.firstPersonBoneOffset.z)
                            : new THREE.Vector3(0.0, 0.06, 0.0);
                        meshAnnotations = [];
                        return [4 /*yield*/, gltf.parser.getDependencies('mesh')];
                    case 4:
                        meshes = _b.sent();
                        meshes.forEach(function (mesh, meshIndex) {
                            var flag = schemaFirstPerson.meshAnnotations
                                ? schemaFirstPerson.meshAnnotations.find(function (a) { return a.mesh === meshIndex; })
                                : undefined;
                            meshAnnotations.push(new VRMFirstPerson_1.VRMRendererFirstPersonFlags(flag === null || flag === void 0 ? void 0 : flag.firstPersonFlag, mesh));
                        });
                        return [2 /*return*/, new VRMFirstPerson_1.VRMFirstPerson(firstPersonBone, firstPersonBoneOffset, meshAnnotations)];
                }
            });
        });
    };
    return VRMFirstPersonImporter;
}());
exports.VRMFirstPersonImporter = VRMFirstPersonImporter;


/***/ }),

/***/ "./src/vrm/firstperson/index.ts":
/*!**************************************!*\
  !*** ./src/vrm/firstperson/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./VRMFirstPerson */ "./src/vrm/firstperson/VRMFirstPerson.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMFirstPersonImporter */ "./src/vrm/firstperson/VRMFirstPersonImporter.ts"), exports);


/***/ }),

/***/ "./src/vrm/humanoid/VRMHumanBone.ts":
/*!******************************************!*\
  !*** ./src/vrm/humanoid/VRMHumanBone.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMHumanBone = void 0;
/**
 * A class represents a single `humanBone` of a VRM.
 */
var VRMHumanBone = /** @class */ (function () {
    /**
     * Create a new VRMHumanBone.
     *
     * @param node A [[GLTFNode]] that represents the new bone
     * @param humanLimit A [[VRMHumanLimit]] object that represents properties of the new bone
     */
    function VRMHumanBone(node, humanLimit) {
        this.node = node;
        this.humanLimit = humanLimit;
    }
    return VRMHumanBone;
}());
exports.VRMHumanBone = VRMHumanBone;


/***/ }),

/***/ "./src/vrm/humanoid/VRMHumanBones.ts":
/*!*******************************************!*\
  !*** ./src/vrm/humanoid/VRMHumanBones.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/vrm/humanoid/VRMHumanDescription.ts":
/*!*************************************************!*\
  !*** ./src/vrm/humanoid/VRMHumanDescription.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/vrm/humanoid/VRMHumanLimit.ts":
/*!*******************************************!*\
  !*** ./src/vrm/humanoid/VRMHumanLimit.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/vrm/humanoid/VRMHumanoid.ts":
/*!*****************************************!*\
  !*** ./src/vrm/humanoid/VRMHumanoid.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMHumanoid = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var types_1 = __webpack_require__(/*! ../types */ "./src/vrm/types/index.ts");
var _v3A = new THREE.Vector3();
var _quatA = new THREE.Quaternion();
/**
 * A class represents humanoid of a VRM.
 */
var VRMHumanoid = /** @class */ (function () {
    /**
     * Create a new [[VRMHumanoid]].
     * @param boneArray A [[VRMHumanBoneArray]] contains all the bones of the new humanoid
     * @param humanDescription A [[VRMHumanDescription]] that represents properties of the new humanoid
     */
    function VRMHumanoid(boneArray, humanDescription) {
        /**
         * A [[VRMPose]] that is its default state.
         * Note that it's not compatible with `setPose` and `getPose`, since it contains non-relative values of each local transforms.
         */
        this.restPose = {};
        this.humanBones = this._createHumanBones(boneArray);
        this.humanDescription = humanDescription;
        this.restPose = this.getPose();
    }
    /**
     * Return the current pose of this humanoid as a [[VRMPose]].
     *
     * Each transform is a local transform relative from rest pose (T-pose).
     */
    VRMHumanoid.prototype.getPose = function () {
        var _this = this;
        var pose = {};
        Object.keys(this.humanBones).forEach(function (vrmBoneName) {
            var node = _this.getBoneNode(vrmBoneName);
            // Ignore when there are no bone on the VRMHumanoid
            if (!node) {
                return;
            }
            // When there are two or more bones in a same name, we are not going to overwrite existing one
            if (pose[vrmBoneName]) {
                return;
            }
            // Take a diff from restPose
            // note that restPose also will use getPose to initialize itself
            _v3A.set(0, 0, 0);
            _quatA.identity();
            var restState = _this.restPose[vrmBoneName];
            if (restState === null || restState === void 0 ? void 0 : restState.position) {
                _v3A.fromArray(restState.position).negate();
            }
            if (restState === null || restState === void 0 ? void 0 : restState.rotation) {
                _quatA.fromArray(restState.rotation).inverse();
            }
            // Get the position / rotation from the node
            _v3A.add(node.position);
            _quatA.premultiply(node.quaternion);
            pose[vrmBoneName] = {
                position: _v3A.toArray(),
                rotation: _quatA.toArray(),
            };
        }, {});
        return pose;
    };
    /**
     * Let the humanoid do a specified pose.
     *
     * Each transform have to be a local transform relative from rest pose (T-pose).
     * You can pass what you got from {@link getPose}.
     *
     * @param poseObject A [[VRMPose]] that represents a single pose
     */
    VRMHumanoid.prototype.setPose = function (poseObject) {
        var _this = this;
        Object.keys(poseObject).forEach(function (boneName) {
            var state = poseObject[boneName];
            var node = _this.getBoneNode(boneName);
            // Ignore when there are no bone that is defined in the pose on the VRMHumanoid
            if (!node) {
                return;
            }
            var restState = _this.restPose[boneName];
            if (!restState) {
                return;
            }
            if (state.position) {
                node.position.fromArray(state.position);
                if (restState.position) {
                    node.position.add(_v3A.fromArray(restState.position));
                }
            }
            if (state.rotation) {
                node.quaternion.fromArray(state.rotation);
                if (restState.rotation) {
                    node.quaternion.multiply(_quatA.fromArray(restState.rotation));
                }
            }
        });
    };
    /**
     * Reset the humanoid to its rest pose.
     */
    VRMHumanoid.prototype.resetPose = function () {
        this.setPose({});
    };
    /**
     * Return a bone bound to a specified [[HumanBone]], as a [[VRMHumanBone]].
     *
     * See also: [[VRMHumanoid.getBones]]
     *
     * @param name Name of the bone you want
     */
    VRMHumanoid.prototype.getBone = function (name) {
        return this.humanBones[name][0] || undefined;
    };
    /**
     * Return bones bound to a specified [[HumanBone]], as an array of [[VRMHumanBone]].
     *
     * See also: [[VRMHumanoid.getBone]]
     *
     * @param name Name of the bone you want
     */
    VRMHumanoid.prototype.getBones = function (name) {
        return this.humanBones[name];
    };
    /**
     * Return a bone bound to a specified [[HumanBone]], as a THREE.Object3D.
     *
     * See also: [[VRMHumanoid.getBoneNodes]]
     *
     * @param name Name of the bone you want
     */
    VRMHumanoid.prototype.getBoneNode = function (name) {
        var _a, _b;
        return (_b = (_a = this.humanBones[name][0]) === null || _a === void 0 ? void 0 : _a.node) !== null && _b !== void 0 ? _b : null;
    };
    /**
     * Return bones bound to a specified [[HumanBone]], as an array of THREE.Object3D.
     *
     * See also: [[VRMHumanoid.getBoneNode]]
     *
     * @param name Name of the bone you want
     */
    VRMHumanoid.prototype.getBoneNodes = function (name) {
        return this.humanBones[name].map(function (bone) { return bone.node; });
    };
    /**
     * Prepare a [[VRMHumanBones]] from a [[VRMHumanBoneArray]].
     */
    VRMHumanoid.prototype._createHumanBones = function (boneArray) {
        var bones = Object.values(types_1.VRMSchema.HumanoidBoneName).reduce(function (accum, name) {
            accum[name] = [];
            return accum;
        }, {});
        boneArray.forEach(function (bone) {
            bones[bone.name].push(bone.bone);
        });
        return bones;
    };
    return VRMHumanoid;
}());
exports.VRMHumanoid = VRMHumanoid;


/***/ }),

/***/ "./src/vrm/humanoid/VRMHumanoidImporter.ts":
/*!*************************************************!*\
  !*** ./src/vrm/humanoid/VRMHumanoidImporter.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMHumanoidImporter = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var VRMHumanBone_1 = __webpack_require__(/*! ./VRMHumanBone */ "./src/vrm/humanoid/VRMHumanBone.ts");
var VRMHumanoid_1 = __webpack_require__(/*! ./VRMHumanoid */ "./src/vrm/humanoid/VRMHumanoid.ts");
/**
 * An importer that imports a [[VRMHumanoid]] from a VRM extension of a GLTF.
 */
var VRMHumanoidImporter = /** @class */ (function () {
    function VRMHumanoidImporter() {
    }
    /**
     * Import a [[VRMHumanoid]] from a VRM.
     *
     * @param gltf A parsed result of GLTF taken from GLTFLoader
     */
    VRMHumanoidImporter.prototype.import = function (gltf) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var vrmExt, schemaHumanoid, humanBoneArray, humanDescription;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        vrmExt = (_a = gltf.parser.json.extensions) === null || _a === void 0 ? void 0 : _a.VRM;
                        if (!vrmExt) {
                            return [2 /*return*/, null];
                        }
                        schemaHumanoid = vrmExt.humanoid;
                        if (!schemaHumanoid) {
                            return [2 /*return*/, null];
                        }
                        humanBoneArray = [];
                        if (!schemaHumanoid.humanBones) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(schemaHumanoid.humanBones.map(function (bone) { return __awaiter(_this, void 0, void 0, function () {
                                var node;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!bone.bone || !bone.node) {
                                                return [2 /*return*/];
                                            }
                                            return [4 /*yield*/, gltf.parser.getDependency('node', bone.node)];
                                        case 1:
                                            node = _a.sent();
                                            humanBoneArray.push({
                                                name: bone.bone,
                                                bone: new VRMHumanBone_1.VRMHumanBone(node, {
                                                    axisLength: bone.axisLength,
                                                    center: bone.center && new THREE.Vector3(bone.center.x, bone.center.y, bone.center.z),
                                                    max: bone.max && new THREE.Vector3(bone.max.x, bone.max.y, bone.max.z),
                                                    min: bone.min && new THREE.Vector3(bone.min.x, bone.min.y, bone.min.z),
                                                    useDefaultValues: bone.useDefaultValues,
                                                }),
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        humanDescription = {
                            armStretch: schemaHumanoid.armStretch,
                            legStretch: schemaHumanoid.legStretch,
                            upperArmTwist: schemaHumanoid.upperArmTwist,
                            lowerArmTwist: schemaHumanoid.lowerArmTwist,
                            upperLegTwist: schemaHumanoid.upperLegTwist,
                            lowerLegTwist: schemaHumanoid.lowerLegTwist,
                            feetSpacing: schemaHumanoid.feetSpacing,
                            hasTranslationDoF: schemaHumanoid.hasTranslationDoF,
                        };
                        return [2 /*return*/, new VRMHumanoid_1.VRMHumanoid(humanBoneArray, humanDescription)];
                }
            });
        });
    };
    return VRMHumanoidImporter;
}());
exports.VRMHumanoidImporter = VRMHumanoidImporter;


/***/ }),

/***/ "./src/vrm/humanoid/index.ts":
/*!***********************************!*\
  !*** ./src/vrm/humanoid/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./VRMHumanBone */ "./src/vrm/humanoid/VRMHumanBone.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMHumanBones */ "./src/vrm/humanoid/VRMHumanBones.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMHumanDescription */ "./src/vrm/humanoid/VRMHumanDescription.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMHumanLimit */ "./src/vrm/humanoid/VRMHumanLimit.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMHumanoid */ "./src/vrm/humanoid/VRMHumanoid.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMHumanoidImporter */ "./src/vrm/humanoid/VRMHumanoidImporter.ts"), exports);


/***/ }),

/***/ "./src/vrm/index.ts":
/*!**************************!*\
  !*** ./src/vrm/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./VRM */ "./src/vrm/VRM.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMImporter */ "./src/vrm/VRMImporter.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMUtils */ "./src/vrm/VRMUtils/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./blendshape */ "./src/vrm/blendshape/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./debug */ "./src/vrm/debug/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./firstperson */ "./src/vrm/firstperson/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./humanoid */ "./src/vrm/humanoid/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./lookat */ "./src/vrm/lookat/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./springbone */ "./src/vrm/springbone/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./src/vrm/types/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./material */ "./src/vrm/material/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./meta */ "./src/vrm/meta/index.ts"), exports);


/***/ }),

/***/ "./src/vrm/lookat/VRMCurveMapper.ts":
/*!******************************************!*\
  !*** ./src/vrm/lookat/VRMCurveMapper.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMCurveMapper = void 0;
/**
 * Evaluate a hermite spline.
 *
 * @param y0 y on start
 * @param y1 y on end
 * @param t0 delta y on start
 * @param t1 delta y on end
 * @param x input value
 */
var hermiteSpline = function (y0, y1, t0, t1, x) {
    var xc = x * x * x;
    var xs = x * x;
    var dy = y1 - y0;
    var h01 = -2.0 * xc + 3.0 * xs;
    var h10 = xc - 2.0 * xs + x;
    var h11 = xc - xs;
    return y0 + dy * h01 + t0 * h10 + t1 * h11;
};
/**
 * Evaluate an AnimationCurve array. See AnimationCurve class of Unity for its details.
 *
 * See: https://docs.unity3d.com/ja/current/ScriptReference/AnimationCurve.html
 *
 * @param arr An array represents a curve
 * @param x An input value
 */
var evaluateCurve = function (arr, x) {
    // -- sanity check -----------------------------------------------------------
    if (arr.length < 8) {
        throw new Error('evaluateCurve: Invalid curve detected! (Array length must be 8 at least)');
    }
    if (arr.length % 4 !== 0) {
        throw new Error('evaluateCurve: Invalid curve detected! (Array length must be multiples of 4');
    }
    // -- check range ------------------------------------------------------------
    var outNode;
    for (outNode = 0;; outNode++) {
        if (arr.length <= 4 * outNode) {
            return arr[4 * outNode - 3]; // too further!! assume as "Clamp"
        }
        else if (x <= arr[4 * outNode]) {
            break;
        }
    }
    var inNode = outNode - 1;
    if (inNode < 0) {
        return arr[4 * inNode + 5]; // too behind!! assume as "Clamp"
    }
    // -- calculate local x ------------------------------------------------------
    var x0 = arr[4 * inNode];
    var x1 = arr[4 * outNode];
    var xHermite = (x - x0) / (x1 - x0);
    // -- finally do the hermite spline ------------------------------------------
    var y0 = arr[4 * inNode + 1];
    var y1 = arr[4 * outNode + 1];
    var t0 = arr[4 * inNode + 3];
    var t1 = arr[4 * outNode + 2];
    return hermiteSpline(y0, y1, t0, t1, xHermite);
};
/**
 * This is an equivalent of CurveMapper class defined in UniVRM.
 * Will be used for [[VRMLookAtApplyer]]s, to define behavior of LookAt.
 *
 * See: https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/UniVRM/Scripts/LookAt/CurveMapper.cs
 */
var VRMCurveMapper = /** @class */ (function () {
    /**
     * Create a new [[VRMCurveMapper]].
     *
     * @param xRange The maximum input range
     * @param yRange The maximum output value
     * @param curve An array represents the curve
     */
    function VRMCurveMapper(xRange, yRange, curve) {
        /**
         * An array represents the curve. See AnimationCurve class of Unity for its details.
         *
         * See: https://docs.unity3d.com/ja/current/ScriptReference/AnimationCurve.html
         */
        this.curve = [0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0];
        /**
         * The maximum input range of the [[VRMCurveMapper]].
         */
        this.curveXRangeDegree = 90.0;
        /**
         * The maximum output value of the [[VRMCurveMapper]].
         */
        this.curveYRangeDegree = 10.0;
        if (xRange !== undefined) {
            this.curveXRangeDegree = xRange;
        }
        if (yRange !== undefined) {
            this.curveYRangeDegree = yRange;
        }
        if (curve !== undefined) {
            this.curve = curve;
        }
    }
    /**
     * Evaluate an input value and output a mapped value.
     *
     * @param src The input value
     */
    VRMCurveMapper.prototype.map = function (src) {
        var clampedSrc = Math.min(Math.max(src, 0.0), this.curveXRangeDegree);
        var x = clampedSrc / this.curveXRangeDegree;
        return this.curveYRangeDegree * evaluateCurve(this.curve, x);
    };
    return VRMCurveMapper;
}());
exports.VRMCurveMapper = VRMCurveMapper;


/***/ }),

/***/ "./src/vrm/lookat/VRMLookAtApplyer.ts":
/*!********************************************!*\
  !*** ./src/vrm/lookat/VRMLookAtApplyer.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMLookAtApplyer = void 0;
/**
 * This class is used by [[VRMLookAtHead]], applies look at direction.
 * There are currently two variant of applier: [[VRMLookAtBoneApplyer]] and [[VRMLookAtBlendShapeApplyer]].
 */
var VRMLookAtApplyer = /** @class */ (function () {
    function VRMLookAtApplyer() {
    }
    return VRMLookAtApplyer;
}());
exports.VRMLookAtApplyer = VRMLookAtApplyer;


/***/ }),

/***/ "./src/vrm/lookat/VRMLookAtBlendShapeApplyer.ts":
/*!******************************************************!*\
  !*** ./src/vrm/lookat/VRMLookAtBlendShapeApplyer.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMLookAtBlendShapeApplyer = void 0;
var types_1 = __webpack_require__(/*! ../types */ "./src/vrm/types/index.ts");
var VRMLookAtApplyer_1 = __webpack_require__(/*! ./VRMLookAtApplyer */ "./src/vrm/lookat/VRMLookAtApplyer.ts");
/**
 * This class is used by [[VRMLookAtHead]], applies look at direction to eye blend shapes of a VRM.
 */
var VRMLookAtBlendShapeApplyer = /** @class */ (function (_super) {
    __extends(VRMLookAtBlendShapeApplyer, _super);
    /**
     * Create a new VRMLookAtBlendShapeApplyer.
     *
     * @param blendShapeProxy A [[VRMBlendShapeProxy]] used by this applier
     * @param curveHorizontal A [[VRMCurveMapper]] used for transverse direction
     * @param curveVerticalDown A [[VRMCurveMapper]] used for down direction
     * @param curveVerticalUp A [[VRMCurveMapper]] used for up direction
     */
    function VRMLookAtBlendShapeApplyer(blendShapeProxy, curveHorizontal, curveVerticalDown, curveVerticalUp) {
        var _this = _super.call(this) || this;
        _this.type = types_1.VRMSchema.FirstPersonLookAtTypeName.BlendShape;
        _this._curveHorizontal = curveHorizontal;
        _this._curveVerticalDown = curveVerticalDown;
        _this._curveVerticalUp = curveVerticalUp;
        _this._blendShapeProxy = blendShapeProxy;
        return _this;
    }
    VRMLookAtBlendShapeApplyer.prototype.name = function () {
        return types_1.VRMSchema.FirstPersonLookAtTypeName.BlendShape;
    };
    VRMLookAtBlendShapeApplyer.prototype.lookAt = function (euler) {
        var srcX = euler.x;
        var srcY = euler.y;
        if (srcX < 0.0) {
            this._blendShapeProxy.setValue(types_1.VRMSchema.BlendShapePresetName.Lookup, 0.0);
            this._blendShapeProxy.setValue(types_1.VRMSchema.BlendShapePresetName.Lookdown, this._curveVerticalDown.map(-srcX));
        }
        else {
            this._blendShapeProxy.setValue(types_1.VRMSchema.BlendShapePresetName.Lookdown, 0.0);
            this._blendShapeProxy.setValue(types_1.VRMSchema.BlendShapePresetName.Lookup, this._curveVerticalUp.map(srcX));
        }
        if (srcY < 0.0) {
            this._blendShapeProxy.setValue(types_1.VRMSchema.BlendShapePresetName.Lookleft, 0.0);
            this._blendShapeProxy.setValue(types_1.VRMSchema.BlendShapePresetName.Lookright, this._curveHorizontal.map(-srcY));
        }
        else {
            this._blendShapeProxy.setValue(types_1.VRMSchema.BlendShapePresetName.Lookright, 0.0);
            this._blendShapeProxy.setValue(types_1.VRMSchema.BlendShapePresetName.Lookleft, this._curveHorizontal.map(srcY));
        }
    };
    return VRMLookAtBlendShapeApplyer;
}(VRMLookAtApplyer_1.VRMLookAtApplyer));
exports.VRMLookAtBlendShapeApplyer = VRMLookAtBlendShapeApplyer;


/***/ }),

/***/ "./src/vrm/lookat/VRMLookAtBoneApplyer.ts":
/*!************************************************!*\
  !*** ./src/vrm/lookat/VRMLookAtBoneApplyer.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMLookAtBoneApplyer = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var types_1 = __webpack_require__(/*! ../types */ "./src/vrm/types/index.ts");
var VRMLookAtApplyer_1 = __webpack_require__(/*! ./VRMLookAtApplyer */ "./src/vrm/lookat/VRMLookAtApplyer.ts");
var VRMLookAtHead_1 = __webpack_require__(/*! ./VRMLookAtHead */ "./src/vrm/lookat/VRMLookAtHead.ts");
var _euler = new THREE.Euler(0.0, 0.0, 0.0, VRMLookAtHead_1.VRMLookAtHead.EULER_ORDER);
/**
 * This class is used by [[VRMLookAtHead]], applies look at direction to eye bones of a VRM.
 */
var VRMLookAtBoneApplyer = /** @class */ (function (_super) {
    __extends(VRMLookAtBoneApplyer, _super);
    /**
     * Create a new VRMLookAtBoneApplyer.
     *
     * @param humanoid A [[VRMHumanoid]] used by this applier
     * @param curveHorizontalInner A [[VRMCurveMapper]] used for inner transverse direction
     * @param curveHorizontalOuter A [[VRMCurveMapper]] used for outer transverse direction
     * @param curveVerticalDown A [[VRMCurveMapper]] used for down direction
     * @param curveVerticalUp A [[VRMCurveMapper]] used for up direction
     */
    function VRMLookAtBoneApplyer(humanoid, curveHorizontalInner, curveHorizontalOuter, curveVerticalDown, curveVerticalUp) {
        var _this = _super.call(this) || this;
        _this.type = types_1.VRMSchema.FirstPersonLookAtTypeName.Bone;
        _this._curveHorizontalInner = curveHorizontalInner;
        _this._curveHorizontalOuter = curveHorizontalOuter;
        _this._curveVerticalDown = curveVerticalDown;
        _this._curveVerticalUp = curveVerticalUp;
        _this._leftEye = humanoid.getBoneNode(types_1.VRMSchema.HumanoidBoneName.LeftEye);
        _this._rightEye = humanoid.getBoneNode(types_1.VRMSchema.HumanoidBoneName.RightEye);
        return _this;
    }
    VRMLookAtBoneApplyer.prototype.lookAt = function (euler) {
        var srcX = euler.x;
        var srcY = euler.y;
        // left
        if (this._leftEye) {
            if (srcX < 0.0) {
                _euler.x = -this._curveVerticalDown.map(-srcX);
            }
            else {
                _euler.x = this._curveVerticalUp.map(srcX);
            }
            if (srcY < 0.0) {
                _euler.y = -this._curveHorizontalInner.map(-srcY);
            }
            else {
                _euler.y = this._curveHorizontalOuter.map(srcY);
            }
            this._leftEye.quaternion.setFromEuler(_euler);
        }
        // right
        if (this._rightEye) {
            if (srcX < 0.0) {
                _euler.x = -this._curveVerticalDown.map(-srcX);
            }
            else {
                _euler.x = this._curveVerticalUp.map(srcX);
            }
            if (srcY < 0.0) {
                _euler.y = -this._curveHorizontalOuter.map(-srcY);
            }
            else {
                _euler.y = this._curveHorizontalInner.map(srcY);
            }
            this._rightEye.quaternion.setFromEuler(_euler);
        }
    };
    return VRMLookAtBoneApplyer;
}(VRMLookAtApplyer_1.VRMLookAtApplyer));
exports.VRMLookAtBoneApplyer = VRMLookAtBoneApplyer;


/***/ }),

/***/ "./src/vrm/lookat/VRMLookAtHead.ts":
/*!*****************************************!*\
  !*** ./src/vrm/lookat/VRMLookAtHead.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMLookAtHead = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var math_1 = __webpack_require__(/*! ../utils/math */ "./src/vrm/utils/math.ts");
var VECTOR3_FRONT = Object.freeze(new THREE.Vector3(0.0, 0.0, -1.0));
var _v3A = new THREE.Vector3();
var _v3B = new THREE.Vector3();
var _v3C = new THREE.Vector3();
var _quat = new THREE.Quaternion();
/**
 * A class represents look at of a VRM.
 */
var VRMLookAtHead = /** @class */ (function () {
    /**
     * Create a new VRMLookAtHead.
     *
     * @param firstPerson A [[VRMFirstPerson]] that will be associated with this new VRMLookAtHead
     * @param applyer A [[VRMLookAtApplyer]] that will be associated with this new VRMLookAtHead
     */
    function VRMLookAtHead(firstPerson, applyer) {
        /**
         * If this is true, its look at direction will be updated automatically by calling [[VRMLookAtHead.update]] (which is called from [[VRM.update]]).
         *
         * See also: [[VRMLookAtHead.target]]
         */
        this.autoUpdate = true;
        this._euler = new THREE.Euler(0.0, 0.0, 0.0, VRMLookAtHead.EULER_ORDER);
        this.firstPerson = firstPerson;
        this.applyer = applyer;
    }
    /**
     * Get its look at direction in world coordinate.
     *
     * @param target A target `THREE.Vector3`
     */
    VRMLookAtHead.prototype.getLookAtWorldDirection = function (target) {
        var rot = math_1.getWorldQuaternionLite(this.firstPerson.firstPersonBone, _quat);
        return target.copy(VECTOR3_FRONT).applyEuler(this._euler).applyQuaternion(rot);
    };
    /**
     * Set its look at position.
     * Note that its result will be instantly overwritten if [[VRMLookAtHead.autoUpdate]] is enabled.
     *
     * @param position A target position
     */
    VRMLookAtHead.prototype.lookAt = function (position) {
        this._calcEuler(this._euler, position);
        if (this.applyer) {
            this.applyer.lookAt(this._euler);
        }
    };
    /**
     * Update the VRMLookAtHead.
     * If [[VRMLookAtHead.autoUpdate]] is disabled, it will do nothing.
     *
     * @param delta deltaTime
     */
    VRMLookAtHead.prototype.update = function (delta) {
        if (this.target && this.autoUpdate) {
            this.lookAt(this.target.getWorldPosition(_v3A));
            if (this.applyer) {
                this.applyer.lookAt(this._euler);
            }
        }
    };
    VRMLookAtHead.prototype._calcEuler = function (target, position) {
        var headPosition = this.firstPerson.getFirstPersonWorldPosition(_v3B);
        // Look at direction in world coordinate
        var lookAtDir = _v3C.copy(position).sub(headPosition).normalize();
        // Transform the direction into local coordinate from the first person bone
        lookAtDir.applyQuaternion(math_1.getWorldQuaternionLite(this.firstPerson.firstPersonBone, _quat).inverse());
        // convert the direction into euler
        target.x = Math.atan2(lookAtDir.y, Math.sqrt(lookAtDir.x * lookAtDir.x + lookAtDir.z * lookAtDir.z));
        target.y = Math.atan2(-lookAtDir.x, -lookAtDir.z);
        return target;
    };
    VRMLookAtHead.EULER_ORDER = 'YXZ'; // yaw-pitch-roll
    return VRMLookAtHead;
}());
exports.VRMLookAtHead = VRMLookAtHead;


/***/ }),

/***/ "./src/vrm/lookat/VRMLookAtImporter.ts":
/*!*********************************************!*\
  !*** ./src/vrm/lookat/VRMLookAtImporter.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMLookAtImporter = void 0;
var types_1 = __webpack_require__(/*! ../types */ "./src/vrm/types/index.ts");
var VRMCurveMapper_1 = __webpack_require__(/*! ./VRMCurveMapper */ "./src/vrm/lookat/VRMCurveMapper.ts");
var VRMLookAtBlendShapeApplyer_1 = __webpack_require__(/*! ./VRMLookAtBlendShapeApplyer */ "./src/vrm/lookat/VRMLookAtBlendShapeApplyer.ts");
var VRMLookAtBoneApplyer_1 = __webpack_require__(/*! ./VRMLookAtBoneApplyer */ "./src/vrm/lookat/VRMLookAtBoneApplyer.ts");
var VRMLookAtHead_1 = __webpack_require__(/*! ./VRMLookAtHead */ "./src/vrm/lookat/VRMLookAtHead.ts");
// THREE.Math has been renamed to THREE.MathUtils since r113.
// We are going to define the DEG2RAD by ourselves for a while
// https://github.com/mrdoob/three.js/pull/18270
var DEG2RAD = Math.PI / 180; // THREE.MathUtils.DEG2RAD;
/**
 * An importer that imports a [[VRMLookAtHead]] from a VRM extension of a GLTF.
 */
var VRMLookAtImporter = /** @class */ (function () {
    function VRMLookAtImporter() {
    }
    /**
     * Import a [[VRMLookAtHead]] from a VRM.
     *
     * @param gltf A parsed result of GLTF taken from GLTFLoader
     * @param blendShapeProxy A [[VRMBlendShapeProxy]] instance that represents the VRM
     * @param humanoid A [[VRMHumanoid]] instance that represents the VRM
     */
    VRMLookAtImporter.prototype.import = function (gltf, firstPerson, blendShapeProxy, humanoid) {
        var _a;
        var vrmExt = (_a = gltf.parser.json.extensions) === null || _a === void 0 ? void 0 : _a.VRM;
        if (!vrmExt) {
            return null;
        }
        var schemaFirstPerson = vrmExt.firstPerson;
        if (!schemaFirstPerson) {
            return null;
        }
        var applyer = this._importApplyer(schemaFirstPerson, blendShapeProxy, humanoid);
        return new VRMLookAtHead_1.VRMLookAtHead(firstPerson, applyer || undefined);
    };
    VRMLookAtImporter.prototype._importApplyer = function (schemaFirstPerson, blendShapeProxy, humanoid) {
        var lookAtHorizontalInner = schemaFirstPerson.lookAtHorizontalInner;
        var lookAtHorizontalOuter = schemaFirstPerson.lookAtHorizontalOuter;
        var lookAtVerticalDown = schemaFirstPerson.lookAtVerticalDown;
        var lookAtVerticalUp = schemaFirstPerson.lookAtVerticalUp;
        switch (schemaFirstPerson.lookAtTypeName) {
            case types_1.VRMSchema.FirstPersonLookAtTypeName.Bone: {
                if (lookAtHorizontalInner === undefined ||
                    lookAtHorizontalOuter === undefined ||
                    lookAtVerticalDown === undefined ||
                    lookAtVerticalUp === undefined) {
                    return null;
                }
                else {
                    return new VRMLookAtBoneApplyer_1.VRMLookAtBoneApplyer(humanoid, this._importCurveMapperBone(lookAtHorizontalInner), this._importCurveMapperBone(lookAtHorizontalOuter), this._importCurveMapperBone(lookAtVerticalDown), this._importCurveMapperBone(lookAtVerticalUp));
                }
            }
            case types_1.VRMSchema.FirstPersonLookAtTypeName.BlendShape: {
                if (lookAtHorizontalOuter === undefined || lookAtVerticalDown === undefined || lookAtVerticalUp === undefined) {
                    return null;
                }
                else {
                    return new VRMLookAtBlendShapeApplyer_1.VRMLookAtBlendShapeApplyer(blendShapeProxy, this._importCurveMapperBlendShape(lookAtHorizontalOuter), this._importCurveMapperBlendShape(lookAtVerticalDown), this._importCurveMapperBlendShape(lookAtVerticalUp));
                }
            }
            default: {
                return null;
            }
        }
    };
    VRMLookAtImporter.prototype._importCurveMapperBone = function (map) {
        return new VRMCurveMapper_1.VRMCurveMapper(typeof map.xRange === 'number' ? DEG2RAD * map.xRange : undefined, typeof map.yRange === 'number' ? DEG2RAD * map.yRange : undefined, map.curve);
    };
    VRMLookAtImporter.prototype._importCurveMapperBlendShape = function (map) {
        return new VRMCurveMapper_1.VRMCurveMapper(typeof map.xRange === 'number' ? DEG2RAD * map.xRange : undefined, map.yRange, map.curve);
    };
    return VRMLookAtImporter;
}());
exports.VRMLookAtImporter = VRMLookAtImporter;


/***/ }),

/***/ "./src/vrm/lookat/index.ts":
/*!*********************************!*\
  !*** ./src/vrm/lookat/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./VRMCurveMapper */ "./src/vrm/lookat/VRMCurveMapper.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMLookAtApplyer */ "./src/vrm/lookat/VRMLookAtApplyer.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMLookAtBlendShapeApplyer */ "./src/vrm/lookat/VRMLookAtBlendShapeApplyer.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMLookAtBoneApplyer */ "./src/vrm/lookat/VRMLookAtBoneApplyer.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMLookAtHead */ "./src/vrm/lookat/VRMLookAtHead.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMLookAtImporter */ "./src/vrm/lookat/VRMLookAtImporter.ts"), exports);


/***/ }),

/***/ "./src/vrm/material/MToonMaterial.ts":
/*!*******************************************!*\
  !*** ./src/vrm/material/MToonMaterial.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:member-ordering */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MToonMaterial = exports.MToonMaterialRenderMode = exports.MToonMaterialOutlineWidthMode = exports.MToonMaterialOutlineColorMode = exports.MToonMaterialDebugMode = exports.MToonMaterialCullMode = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var getTexelDecodingFunction_1 = __webpack_require__(/*! ./getTexelDecodingFunction */ "./src/vrm/material/getTexelDecodingFunction.ts");
var mtoon_vert_1 = __webpack_require__(/*! ./shaders/mtoon.vert */ "./src/vrm/material/shaders/mtoon.vert");
var mtoon_frag_1 = __webpack_require__(/*! ./shaders/mtoon.frag */ "./src/vrm/material/shaders/mtoon.frag");
var TAU = 2.0 * Math.PI;
var MToonMaterialCullMode;
(function (MToonMaterialCullMode) {
    MToonMaterialCullMode[MToonMaterialCullMode["Off"] = 0] = "Off";
    MToonMaterialCullMode[MToonMaterialCullMode["Front"] = 1] = "Front";
    MToonMaterialCullMode[MToonMaterialCullMode["Back"] = 2] = "Back";
})(MToonMaterialCullMode = exports.MToonMaterialCullMode || (exports.MToonMaterialCullMode = {}));
var MToonMaterialDebugMode;
(function (MToonMaterialDebugMode) {
    MToonMaterialDebugMode[MToonMaterialDebugMode["None"] = 0] = "None";
    MToonMaterialDebugMode[MToonMaterialDebugMode["Normal"] = 1] = "Normal";
    MToonMaterialDebugMode[MToonMaterialDebugMode["LitShadeRate"] = 2] = "LitShadeRate";
    MToonMaterialDebugMode[MToonMaterialDebugMode["UV"] = 3] = "UV";
})(MToonMaterialDebugMode = exports.MToonMaterialDebugMode || (exports.MToonMaterialDebugMode = {}));
var MToonMaterialOutlineColorMode;
(function (MToonMaterialOutlineColorMode) {
    MToonMaterialOutlineColorMode[MToonMaterialOutlineColorMode["FixedColor"] = 0] = "FixedColor";
    MToonMaterialOutlineColorMode[MToonMaterialOutlineColorMode["MixedLighting"] = 1] = "MixedLighting";
})(MToonMaterialOutlineColorMode = exports.MToonMaterialOutlineColorMode || (exports.MToonMaterialOutlineColorMode = {}));
var MToonMaterialOutlineWidthMode;
(function (MToonMaterialOutlineWidthMode) {
    MToonMaterialOutlineWidthMode[MToonMaterialOutlineWidthMode["None"] = 0] = "None";
    MToonMaterialOutlineWidthMode[MToonMaterialOutlineWidthMode["WorldCoordinates"] = 1] = "WorldCoordinates";
    MToonMaterialOutlineWidthMode[MToonMaterialOutlineWidthMode["ScreenCoordinates"] = 2] = "ScreenCoordinates";
})(MToonMaterialOutlineWidthMode = exports.MToonMaterialOutlineWidthMode || (exports.MToonMaterialOutlineWidthMode = {}));
var MToonMaterialRenderMode;
(function (MToonMaterialRenderMode) {
    MToonMaterialRenderMode[MToonMaterialRenderMode["Opaque"] = 0] = "Opaque";
    MToonMaterialRenderMode[MToonMaterialRenderMode["Cutout"] = 1] = "Cutout";
    MToonMaterialRenderMode[MToonMaterialRenderMode["Transparent"] = 2] = "Transparent";
    MToonMaterialRenderMode[MToonMaterialRenderMode["TransparentWithZWrite"] = 3] = "TransparentWithZWrite";
})(MToonMaterialRenderMode = exports.MToonMaterialRenderMode || (exports.MToonMaterialRenderMode = {}));
/**
 * MToon is a material specification that has various features.
 * The spec and implementation are originally founded for Unity engine and this is a port of the material.
 *
 * See: https://github.com/Santarh/MToon
 */
var MToonMaterial = /** @class */ (function (_super) {
    __extends(MToonMaterial, _super);
    function MToonMaterial(parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _this = _super.call(this) || this;
        /**
         * Readonly boolean that indicates this is a [[MToonMaterial]].
         */
        _this.isMToonMaterial = true;
        _this.cutoff = 0.5; // _Cutoff
        _this.color = new THREE.Vector4(1.0, 1.0, 1.0, 1.0); // _Color
        _this.shadeColor = new THREE.Vector4(0.97, 0.81, 0.86, 1.0); // _ShadeColor
        _this.map = null; // _MainTex
        // eslint-disable-next-line @typescript-eslint/naming-convention
        _this.mainTex_ST = new THREE.Vector4(0.0, 0.0, 1.0, 1.0); // _MainTex_ST
        _this.shadeTexture = null; // _ShadeTexture
        // public shadeTexture_ST = new THREE.Vector4(0.0, 0.0, 1.0, 1.0); // _ShadeTexture_ST (unused)
        _this.normalMap = null; // _BumpMap. again, THIS IS _BumpMap
        _this.normalMapType = THREE.TangentSpaceNormalMap; // Three.js requires this
        _this.normalScale = new THREE.Vector2(1.0, 1.0); // _BumpScale, in Vector2
        // public bumpMap_ST = new THREE.Vector4(0.0, 0.0, 1.0, 1.0); // _BumpMap_ST (unused)
        _this.receiveShadowRate = 1.0; // _ReceiveShadowRate
        _this.receiveShadowTexture = null; // _ReceiveShadowTexture
        // public receiveShadowTexture_ST = new THREE.Vector4(0.0, 0.0, 1.0, 1.0); // _ReceiveShadowTexture_ST (unused)
        _this.shadingGradeRate = 1.0; // _ShadingGradeRate
        _this.shadingGradeTexture = null; // _ShadingGradeTexture
        // public shadingGradeTexture_ST = new THREE.Vector4(0.0, 0.0, 1.0, 1.0); // _ShadingGradeTexture_ST (unused)
        _this.shadeShift = 0.0; // _ShadeShift
        _this.shadeToony = 0.9; // _ShadeToony
        _this.lightColorAttenuation = 0.0; // _LightColorAttenuation
        _this.indirectLightIntensity = 0.1; // _IndirectLightIntensity
        _this.rimTexture = null; // _RimTexture
        _this.rimColor = new THREE.Vector4(0.0, 0.0, 0.0, 1.0); // _RimColor
        _this.rimLightingMix = 0.0; // _RimLightingMix
        _this.rimFresnelPower = 1.0; // _RimFresnelPower
        _this.rimLift = 0.0; // _RimLift
        _this.sphereAdd = null; // _SphereAdd
        // public sphereAdd_ST = new THREE.Vector4(0.0, 0.0, 1.0, 1.0); // _SphereAdd_ST (unused)
        _this.emissionColor = new THREE.Vector4(0.0, 0.0, 0.0, 1.0); // _EmissionColor
        _this.emissiveMap = null; // _EmissionMap
        // public emissionMap_ST = new THREE.Vector4(0.0, 0.0, 1.0, 1.0); // _EmissionMap_ST (unused)
        _this.outlineWidthTexture = null; // _OutlineWidthTexture
        // public outlineWidthTexture_ST = new THREE.Vector4(0.0, 0.0, 1.0, 1.0); // _OutlineWidthTexture_ST (unused)
        _this.outlineWidth = 0.5; // _OutlineWidth
        _this.outlineScaledMaxDistance = 1.0; // _OutlineScaledMaxDistance
        _this.outlineColor = new THREE.Vector4(0.0, 0.0, 0.0, 1.0); // _OutlineColor
        _this.outlineLightingMix = 1.0; // _OutlineLightingMix
        _this.uvAnimMaskTexture = null; // _UvAnimMaskTexture
        _this.uvAnimScrollX = 0.0; // _UvAnimScrollX
        _this.uvAnimScrollY = 0.0; // _UvAnimScrollY
        _this.uvAnimRotation = 0.0; // _uvAnimRotation
        _this.shouldApplyUniforms = true; // when this is true, applyUniforms effects
        _this._debugMode = MToonMaterialDebugMode.None; // _DebugMode
        _this._blendMode = MToonMaterialRenderMode.Opaque; // _BlendMode
        _this._outlineWidthMode = MToonMaterialOutlineWidthMode.None; // _OutlineWidthMode
        _this._outlineColorMode = MToonMaterialOutlineColorMode.FixedColor; // _OutlineColorMode
        _this._cullMode = MToonMaterialCullMode.Back; // _CullMode
        _this._outlineCullMode = MToonMaterialCullMode.Front; // _OutlineCullMode
        // public srcBlend = 1.0; // _SrcBlend (is not supported)
        // public dstBlend = 0.0; // _DstBlend (is not supported)
        // public zWrite = 1.0; // _ZWrite (will be converted to depthWrite)
        _this._isOutline = false;
        _this._uvAnimOffsetX = 0.0;
        _this._uvAnimOffsetY = 0.0;
        _this._uvAnimPhase = 0.0;
        _this.encoding = parameters.encoding || THREE.LinearEncoding;
        if (_this.encoding !== THREE.LinearEncoding && _this.encoding !== THREE.sRGBEncoding) {
            console.warn('The specified color encoding does not work properly with MToonMaterial. You might want to use THREE.sRGBEncoding instead.');
        }
        // == these parameter has no compatibility with this implementation ========
        [
            'mToonVersion',
            'shadeTexture_ST',
            'bumpMap_ST',
            'receiveShadowTexture_ST',
            'shadingGradeTexture_ST',
            'rimTexture_ST',
            'sphereAdd_ST',
            'emissionMap_ST',
            'outlineWidthTexture_ST',
            'uvAnimMaskTexture_ST',
            'srcBlend',
            'dstBlend',
        ].forEach(function (key) {
            if (parameters[key] !== undefined) {
                // console.warn(`THREE.${this.type}: The parameter "${key}" is not supported.`);
                delete parameters[key];
            }
        });
        // == enabling bunch of stuff ==============================================
        parameters.fog = true;
        parameters.lights = true;
        parameters.clipping = true;
        parameters.skinning = parameters.skinning || false;
        parameters.morphTargets = parameters.morphTargets || false;
        parameters.morphNormals = parameters.morphNormals || false;
        // == uniforms =============================================================
        parameters.uniforms = THREE.UniformsUtils.merge([
            THREE.UniformsLib.common,
            THREE.UniformsLib.normalmap,
            THREE.UniformsLib.emissivemap,
            THREE.UniformsLib.fog,
            THREE.UniformsLib.lights,
            {
                cutoff: { value: 0.5 },
                color: { value: new THREE.Color(1.0, 1.0, 1.0) },
                colorAlpha: { value: 1.0 },
                shadeColor: { value: new THREE.Color(0.97, 0.81, 0.86) },
                // eslint-disable-next-line @typescript-eslint/naming-convention
                mainTex_ST: { value: new THREE.Vector4(0.0, 0.0, 1.0, 1.0) },
                shadeTexture: { value: null },
                receiveShadowRate: { value: 1.0 },
                receiveShadowTexture: { value: null },
                shadingGradeRate: { value: 1.0 },
                shadingGradeTexture: { value: null },
                shadeShift: { value: 0.0 },
                shadeToony: { value: 0.9 },
                lightColorAttenuation: { value: 0.0 },
                indirectLightIntensity: { value: 0.1 },
                rimTexture: { value: null },
                rimColor: { value: new THREE.Color(0.0, 0.0, 0.0) },
                rimLightingMix: { value: 0.0 },
                rimFresnelPower: { value: 1.0 },
                rimLift: { value: 0.0 },
                sphereAdd: { value: null },
                emissionColor: { value: new THREE.Color(0.0, 0.0, 0.0) },
                outlineWidthTexture: { value: null },
                outlineWidth: { value: 0.5 },
                outlineScaledMaxDistance: { value: 1.0 },
                outlineColor: { value: new THREE.Color(0.0, 0.0, 0.0) },
                outlineLightingMix: { value: 1.0 },
                uvAnimMaskTexture: { value: null },
                uvAnimOffsetX: { value: 0.0 },
                uvAnimOffsetY: { value: 0.0 },
                uvAnimTheta: { value: 0.0 },
            },
        ]);
        // == finally compile the shader program ===================================
        _this.setValues(parameters);
        // == update shader stuff ==================================================
        _this._updateShaderCode();
        _this._applyUniforms();
        return _this;
    }
    Object.defineProperty(MToonMaterial.prototype, "mainTex", {
        get: function () {
            return this.map;
        },
        set: function (t) {
            this.map = t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "bumpMap", {
        get: function () {
            return this.normalMap;
        },
        set: function (t) {
            this.normalMap = t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "bumpScale", {
        /**
         * Getting the `bumpScale` reutrns its x component of `normalScale` (assuming x and y component of `normalScale` are same).
         */
        get: function () {
            return this.normalScale.x;
        },
        /**
         * Setting the `bumpScale` will be convert the value into Vector2 `normalScale` .
         */
        set: function (t) {
            this.normalScale.set(t, t);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "emissionMap", {
        get: function () {
            return this.emissiveMap;
        },
        set: function (t) {
            this.emissiveMap = t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "blendMode", {
        get: function () {
            return this._blendMode;
        },
        set: function (m) {
            this._blendMode = m;
            this.depthWrite = this._blendMode !== MToonMaterialRenderMode.Transparent;
            this.transparent =
                this._blendMode === MToonMaterialRenderMode.Transparent ||
                    this._blendMode === MToonMaterialRenderMode.TransparentWithZWrite;
            this._updateShaderCode();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "debugMode", {
        get: function () {
            return this._debugMode;
        },
        set: function (m) {
            this._debugMode = m;
            this._updateShaderCode();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "outlineWidthMode", {
        get: function () {
            return this._outlineWidthMode;
        },
        set: function (m) {
            this._outlineWidthMode = m;
            this._updateShaderCode();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "outlineColorMode", {
        get: function () {
            return this._outlineColorMode;
        },
        set: function (m) {
            this._outlineColorMode = m;
            this._updateShaderCode();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "cullMode", {
        get: function () {
            return this._cullMode;
        },
        set: function (m) {
            this._cullMode = m;
            this._updateCullFace();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "outlineCullMode", {
        get: function () {
            return this._outlineCullMode;
        },
        set: function (m) {
            this._outlineCullMode = m;
            this._updateCullFace();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "zWrite", {
        get: function () {
            return this.depthWrite ? 1 : 0;
        },
        set: function (i) {
            this.depthWrite = 0.5 <= i;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MToonMaterial.prototype, "isOutline", {
        get: function () {
            return this._isOutline;
        },
        set: function (b) {
            this._isOutline = b;
            this._updateShaderCode();
            this._updateCullFace();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Update this material.
     * Usually this will be called via [[VRM.update]] so you don't have to call this manually.
     *
     * @param delta deltaTime since last update
     */
    MToonMaterial.prototype.updateVRMMaterials = function (delta) {
        this._uvAnimOffsetX = this._uvAnimOffsetX + delta * this.uvAnimScrollX;
        this._uvAnimOffsetY = this._uvAnimOffsetY - delta * this.uvAnimScrollY; // Negative since t axis of uvs are opposite from Unity's one
        this._uvAnimPhase = this._uvAnimPhase + delta * this.uvAnimRotation;
        this._applyUniforms();
    };
    MToonMaterial.prototype.copy = function (source) {
        _super.prototype.copy.call(this, source);
        // == copy members =========================================================
        this.cutoff = source.cutoff;
        this.color.copy(source.color);
        this.shadeColor.copy(source.shadeColor);
        this.map = source.map;
        this.mainTex_ST.copy(source.mainTex_ST);
        this.shadeTexture = source.shadeTexture;
        this.normalMap = source.normalMap;
        this.normalMapType = source.normalMapType;
        this.normalScale.copy(this.normalScale);
        this.receiveShadowRate = source.receiveShadowRate;
        this.receiveShadowTexture = source.receiveShadowTexture;
        this.shadingGradeRate = source.shadingGradeRate;
        this.shadingGradeTexture = source.shadingGradeTexture;
        this.shadeShift = source.shadeShift;
        this.shadeToony = source.shadeToony;
        this.lightColorAttenuation = source.lightColorAttenuation;
        this.indirectLightIntensity = source.indirectLightIntensity;
        this.rimTexture = source.rimTexture;
        this.rimColor.copy(source.rimColor);
        this.rimLightingMix = source.rimLightingMix;
        this.rimFresnelPower = source.rimFresnelPower;
        this.rimLift = source.rimLift;
        this.sphereAdd = source.sphereAdd;
        this.emissionColor.copy(source.emissionColor);
        this.emissiveMap = source.emissiveMap;
        this.outlineWidthTexture = source.outlineWidthTexture;
        this.outlineWidth = source.outlineWidth;
        this.outlineScaledMaxDistance = source.outlineScaledMaxDistance;
        this.outlineColor.copy(source.outlineColor);
        this.outlineLightingMix = source.outlineLightingMix;
        this.uvAnimMaskTexture = source.uvAnimMaskTexture;
        this.uvAnimScrollX = source.uvAnimScrollX;
        this.uvAnimScrollY = source.uvAnimScrollY;
        this.uvAnimRotation = source.uvAnimRotation;
        this.debugMode = source.debugMode;
        this.blendMode = source.blendMode;
        this.outlineWidthMode = source.outlineWidthMode;
        this.outlineColorMode = source.outlineColorMode;
        this.cullMode = source.cullMode;
        this.outlineCullMode = source.outlineCullMode;
        this.isOutline = source.isOutline;
        return this;
    };
    /**
     * Apply updated uniform variables.
     */
    MToonMaterial.prototype._applyUniforms = function () {
        this.uniforms.uvAnimOffsetX.value = this._uvAnimOffsetX;
        this.uniforms.uvAnimOffsetY.value = this._uvAnimOffsetY;
        this.uniforms.uvAnimTheta.value = TAU * this._uvAnimPhase;
        if (!this.shouldApplyUniforms) {
            return;
        }
        this.shouldApplyUniforms = false;
        this.uniforms.cutoff.value = this.cutoff;
        this.uniforms.color.value.setRGB(this.color.x, this.color.y, this.color.z);
        this.uniforms.colorAlpha.value = this.color.w;
        this.uniforms.shadeColor.value.setRGB(this.shadeColor.x, this.shadeColor.y, this.shadeColor.z);
        this.uniforms.map.value = this.map;
        this.uniforms.mainTex_ST.value.copy(this.mainTex_ST);
        this.uniforms.shadeTexture.value = this.shadeTexture;
        this.uniforms.normalMap.value = this.normalMap;
        this.uniforms.normalScale.value.copy(this.normalScale);
        this.uniforms.receiveShadowRate.value = this.receiveShadowRate;
        this.uniforms.receiveShadowTexture.value = this.receiveShadowTexture;
        this.uniforms.shadingGradeRate.value = this.shadingGradeRate;
        this.uniforms.shadingGradeTexture.value = this.shadingGradeTexture;
        this.uniforms.shadeShift.value = this.shadeShift;
        this.uniforms.shadeToony.value = this.shadeToony;
        this.uniforms.lightColorAttenuation.value = this.lightColorAttenuation;
        this.uniforms.indirectLightIntensity.value = this.indirectLightIntensity;
        this.uniforms.rimTexture.value = this.rimTexture;
        this.uniforms.rimColor.value.setRGB(this.rimColor.x, this.rimColor.y, this.rimColor.z);
        this.uniforms.rimLightingMix.value = this.rimLightingMix;
        this.uniforms.rimFresnelPower.value = this.rimFresnelPower;
        this.uniforms.rimLift.value = this.rimLift;
        this.uniforms.sphereAdd.value = this.sphereAdd;
        this.uniforms.emissionColor.value.setRGB(this.emissionColor.x, this.emissionColor.y, this.emissionColor.z);
        this.uniforms.emissiveMap.value = this.emissiveMap;
        this.uniforms.outlineWidthTexture.value = this.outlineWidthTexture;
        this.uniforms.outlineWidth.value = this.outlineWidth;
        this.uniforms.outlineScaledMaxDistance.value = this.outlineScaledMaxDistance;
        this.uniforms.outlineColor.value.setRGB(this.outlineColor.x, this.outlineColor.y, this.outlineColor.z);
        this.uniforms.outlineLightingMix.value = this.outlineLightingMix;
        this.uniforms.uvAnimMaskTexture.value = this.uvAnimMaskTexture;
        // apply color space to uniform colors
        if (this.encoding === THREE.sRGBEncoding) {
            this.uniforms.color.value.convertSRGBToLinear();
            this.uniforms.shadeColor.value.convertSRGBToLinear();
            this.uniforms.rimColor.value.convertSRGBToLinear();
            this.uniforms.emissionColor.value.convertSRGBToLinear();
            this.uniforms.outlineColor.value.convertSRGBToLinear();
        }
        this._updateCullFace();
    };
    MToonMaterial.prototype._updateShaderCode = function () {
        this.defines = {
            OUTLINE: this._isOutline,
            BLENDMODE_OPAQUE: this._blendMode === MToonMaterialRenderMode.Opaque,
            BLENDMODE_CUTOUT: this._blendMode === MToonMaterialRenderMode.Cutout,
            BLENDMODE_TRANSPARENT: this._blendMode === MToonMaterialRenderMode.Transparent ||
                this._blendMode === MToonMaterialRenderMode.TransparentWithZWrite,
            USE_SHADETEXTURE: this.shadeTexture !== null,
            USE_RECEIVESHADOWTEXTURE: this.receiveShadowTexture !== null,
            USE_SHADINGGRADETEXTURE: this.shadingGradeTexture !== null,
            USE_RIMTEXTURE: this.rimTexture !== null,
            USE_SPHEREADD: this.sphereAdd !== null,
            USE_OUTLINEWIDTHTEXTURE: this.outlineWidthTexture !== null,
            USE_UVANIMMASKTEXTURE: this.uvAnimMaskTexture !== null,
            DEBUG_NORMAL: this._debugMode === MToonMaterialDebugMode.Normal,
            DEBUG_LITSHADERATE: this._debugMode === MToonMaterialDebugMode.LitShadeRate,
            DEBUG_UV: this._debugMode === MToonMaterialDebugMode.UV,
            OUTLINE_WIDTH_WORLD: this._outlineWidthMode === MToonMaterialOutlineWidthMode.WorldCoordinates,
            OUTLINE_WIDTH_SCREEN: this._outlineWidthMode === MToonMaterialOutlineWidthMode.ScreenCoordinates,
            OUTLINE_COLOR_FIXED: this._outlineColorMode === MToonMaterialOutlineColorMode.FixedColor,
            OUTLINE_COLOR_MIXED: this._outlineColorMode === MToonMaterialOutlineColorMode.MixedLighting,
        };
        // == texture encodings ====================================================
        var encodings = (this.shadeTexture !== null
            ? getTexelDecodingFunction_1.getTexelDecodingFunction('shadeTextureTexelToLinear', this.shadeTexture.encoding) + '\n'
            : '') +
            (this.sphereAdd !== null
                ? getTexelDecodingFunction_1.getTexelDecodingFunction('sphereAddTexelToLinear', this.sphereAdd.encoding) + '\n'
                : '') +
            (this.rimTexture !== null
                ? getTexelDecodingFunction_1.getTexelDecodingFunction('rimTextureTexelToLinear', this.rimTexture.encoding) + '\n'
                : '');
        // == generate shader code =================================================
        this.vertexShader = mtoon_vert_1.default;
        this.fragmentShader = encodings + mtoon_frag_1.default;
        // == set needsUpdate flag =================================================
        this.needsUpdate = true;
    };
    MToonMaterial.prototype._updateCullFace = function () {
        if (!this.isOutline) {
            if (this.cullMode === MToonMaterialCullMode.Off) {
                this.side = THREE.DoubleSide;
            }
            else if (this.cullMode === MToonMaterialCullMode.Front) {
                this.side = THREE.BackSide;
            }
            else if (this.cullMode === MToonMaterialCullMode.Back) {
                this.side = THREE.FrontSide;
            }
        }
        else {
            if (this.outlineCullMode === MToonMaterialCullMode.Off) {
                this.side = THREE.DoubleSide;
            }
            else if (this.outlineCullMode === MToonMaterialCullMode.Front) {
                this.side = THREE.BackSide;
            }
            else if (this.outlineCullMode === MToonMaterialCullMode.Back) {
                this.side = THREE.FrontSide;
            }
        }
    };
    return MToonMaterial;
}(THREE.ShaderMaterial));
exports.MToonMaterial = MToonMaterial;


/***/ }),

/***/ "./src/vrm/material/VRMMaterialImporter.ts":
/*!*************************************************!*\
  !*** ./src/vrm/material/VRMMaterialImporter.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMMaterialImporter = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var MToonMaterial_1 = __webpack_require__(/*! ./MToonMaterial */ "./src/vrm/material/MToonMaterial.ts");
var VRMUnlitMaterial_1 = __webpack_require__(/*! ./VRMUnlitMaterial */ "./src/vrm/material/VRMUnlitMaterial.ts");
/**
 * An importer that imports VRM materials from a VRM extension of a GLTF.
 */
var VRMMaterialImporter = /** @class */ (function () {
    /**
     * Create a new VRMMaterialImporter.
     *
     * @param options Options of the VRMMaterialImporter
     */
    function VRMMaterialImporter(options) {
        if (options === void 0) { options = {}; }
        this._encoding = options.encoding || THREE.LinearEncoding;
        if (this._encoding !== THREE.LinearEncoding && this._encoding !== THREE.sRGBEncoding) {
            console.warn('The specified color encoding might not work properly with VRMMaterialImporter. You might want to use THREE.sRGBEncoding instead.');
        }
        this._requestEnvMap = options.requestEnvMap;
    }
    /**
     * Convert all the materials of given GLTF based on VRM extension field `materialProperties`.
     *
     * @param gltf A parsed result of GLTF taken from GLTFLoader
     */
    VRMMaterialImporter.prototype.convertGLTFMaterials = function (gltf) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var vrmExt, materialProperties, meshesMap, materialList, materials;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        vrmExt = (_a = gltf.parser.json.extensions) === null || _a === void 0 ? void 0 : _a.VRM;
                        if (!vrmExt) {
                            return [2 /*return*/, null];
                        }
                        materialProperties = vrmExt.materialProperties;
                        if (!materialProperties) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, gltf.parser.getDependencies('mesh')];
                    case 1:
                        meshesMap = _b.sent();
                        materialList = {};
                        materials = [];
                        return [4 /*yield*/, Promise.all(meshesMap.map(function (mesh, meshIndex) { return __awaiter(_this, void 0, void 0, function () {
                                var schemaMesh, primitives;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            schemaMesh = gltf.parser.json.meshes[meshIndex];
                                            primitives = mesh.type === 'Group' ? mesh.children : [mesh];
                                            return [4 /*yield*/, Promise.all(primitives.map(function (primitive, primitiveIndex) { return __awaiter(_this, void 0, void 0, function () {
                                                    var schemaPrimitive, primitiveGeometry, primitiveVertices, vrmMaterialIndex, props, vrmMaterials;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                schemaPrimitive = schemaMesh.primitives[primitiveIndex];
                                                                // some glTF might have both `node.mesh` and `node.children` at once
                                                                // and GLTFLoader handles both mesh primitives and "children" in glTF as "children" in THREE
                                                                // It seems GLTFLoader handles primitives first then handles "children" in glTF (it's lucky!)
                                                                // so we should ignore (primitives.length)th and following children of `mesh.children`
                                                                // TODO: sanitize this after GLTFLoader plugin system gets introduced : https://github.com/mrdoob/three.js/pull/18421
                                                                if (!schemaPrimitive) {
                                                                    return [2 /*return*/];
                                                                }
                                                                primitiveGeometry = primitive.geometry;
                                                                primitiveVertices = primitiveGeometry.index
                                                                    ? primitiveGeometry.index.count
                                                                    : primitiveGeometry.attributes.position.count / 3;
                                                                // if primitives material is not an array, make it an array
                                                                if (!Array.isArray(primitive.material)) {
                                                                    primitive.material = [primitive.material];
                                                                    primitiveGeometry.addGroup(0, primitiveVertices, 0);
                                                                }
                                                                vrmMaterialIndex = schemaPrimitive.material;
                                                                props = materialProperties[vrmMaterialIndex];
                                                                if (!props) {
                                                                    console.warn("VRMMaterialImporter: There are no material definition for material #" + vrmMaterialIndex + " on VRM extension.");
                                                                    props = { shader: 'VRM_USE_GLTFSHADER' }; // fallback
                                                                }
                                                                if (!materialList[vrmMaterialIndex]) return [3 /*break*/, 1];
                                                                vrmMaterials = materialList[vrmMaterialIndex];
                                                                return [3 /*break*/, 3];
                                                            case 1: return [4 /*yield*/, this.createVRMMaterials(primitive.material[0], props, gltf)];
                                                            case 2:
                                                                vrmMaterials = _a.sent();
                                                                materialList[vrmMaterialIndex] = vrmMaterials;
                                                                materials.push(vrmMaterials.surface);
                                                                if (vrmMaterials.outline) {
                                                                    materials.push(vrmMaterials.outline);
                                                                }
                                                                _a.label = 3;
                                                            case 3:
                                                                // surface
                                                                primitive.material[0] = vrmMaterials.surface;
                                                                // envmap
                                                                if (this._requestEnvMap && vrmMaterials.surface.isMeshStandardMaterial) {
                                                                    this._requestEnvMap().then(function (envMap) {
                                                                        vrmMaterials.surface.envMap = envMap;
                                                                        vrmMaterials.surface.needsUpdate = true;
                                                                    });
                                                                }
                                                                // render order
                                                                primitive.renderOrder = props.renderQueue || 2000;
                                                                // outline ("2 pass shading using groups" trick here)
                                                                if (vrmMaterials.outline) {
                                                                    primitive.material[1] = vrmMaterials.outline;
                                                                    primitiveGeometry.addGroup(0, primitiveVertices, 1);
                                                                }
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); }))];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, materials];
                }
            });
        });
    };
    VRMMaterialImporter.prototype.createVRMMaterials = function (originalMaterial, vrmProps, gltf) {
        return __awaiter(this, void 0, Promise, function () {
            var newSurface, newOutline, params_1, params, params, params, params;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(vrmProps.shader === 'VRM/MToon')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._extractMaterialProperties(originalMaterial, vrmProps, gltf)];
                    case 1:
                        params_1 = _a.sent();
                        // we need to get rid of these properties
                        ['srcBlend', 'dstBlend', 'isFirstSetup'].forEach(function (name) {
                            if (params_1[name] !== undefined) {
                                delete params_1[name];
                            }
                        });
                        // these textures must be sRGB Encoding, depends on current colorspace
                        ['mainTex', 'shadeTexture', 'emissionMap', 'sphereAdd', 'rimTexture'].forEach(function (name) {
                            if (params_1[name] !== undefined) {
                                params_1[name].encoding = _this._encoding;
                            }
                        });
                        // specify uniform color encodings
                        params_1.encoding = this._encoding;
                        // done
                        newSurface = new MToonMaterial_1.MToonMaterial(params_1);
                        // outline
                        if (params_1.outlineWidthMode !== MToonMaterial_1.MToonMaterialOutlineWidthMode.None) {
                            params_1.isOutline = true;
                            newOutline = new MToonMaterial_1.MToonMaterial(params_1);
                        }
                        return [3 /*break*/, 11];
                    case 2:
                        if (!(vrmProps.shader === 'VRM/UnlitTexture')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._extractMaterialProperties(originalMaterial, vrmProps, gltf)];
                    case 3:
                        params = _a.sent();
                        params.renderType = VRMUnlitMaterial_1.VRMUnlitMaterialRenderType.Opaque;
                        newSurface = new VRMUnlitMaterial_1.VRMUnlitMaterial(params);
                        return [3 /*break*/, 11];
                    case 4:
                        if (!(vrmProps.shader === 'VRM/UnlitCutout')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this._extractMaterialProperties(originalMaterial, vrmProps, gltf)];
                    case 5:
                        params = _a.sent();
                        params.renderType = VRMUnlitMaterial_1.VRMUnlitMaterialRenderType.Cutout;
                        newSurface = new VRMUnlitMaterial_1.VRMUnlitMaterial(params);
                        return [3 /*break*/, 11];
                    case 6:
                        if (!(vrmProps.shader === 'VRM/UnlitTransparent')) return [3 /*break*/, 8];
                        return [4 /*yield*/, this._extractMaterialProperties(originalMaterial, vrmProps, gltf)];
                    case 7:
                        params = _a.sent();
                        params.renderType = VRMUnlitMaterial_1.VRMUnlitMaterialRenderType.Transparent;
                        newSurface = new VRMUnlitMaterial_1.VRMUnlitMaterial(params);
                        return [3 /*break*/, 11];
                    case 8:
                        if (!(vrmProps.shader === 'VRM/UnlitTransparentZWrite')) return [3 /*break*/, 10];
                        return [4 /*yield*/, this._extractMaterialProperties(originalMaterial, vrmProps, gltf)];
                    case 9:
                        params = _a.sent();
                        params.renderType = VRMUnlitMaterial_1.VRMUnlitMaterialRenderType.TransparentWithZWrite;
                        newSurface = new VRMUnlitMaterial_1.VRMUnlitMaterial(params);
                        return [3 /*break*/, 11];
                    case 10:
                        if (vrmProps.shader !== 'VRM_USE_GLTFSHADER') {
                            console.warn("Unknown shader detected: \"" + vrmProps.shader + "\"");
                            // then presume as VRM_USE_GLTFSHADER
                        }
                        newSurface = this._convertGLTFMaterial(originalMaterial.clone());
                        _a.label = 11;
                    case 11:
                        newSurface.name = originalMaterial.name;
                        newSurface.userData = JSON.parse(JSON.stringify(originalMaterial.userData));
                        newSurface.userData.vrmMaterialProperties = vrmProps;
                        if (newOutline) {
                            newOutline.name = originalMaterial.name + ' (Outline)';
                            newOutline.userData = JSON.parse(JSON.stringify(originalMaterial.userData));
                            newOutline.userData.vrmMaterialProperties = vrmProps;
                        }
                        return [2 /*return*/, {
                                surface: newSurface,
                                outline: newOutline,
                            }];
                }
            });
        });
    };
    VRMMaterialImporter.prototype._renameMaterialProperty = function (name) {
        if (name[0] !== '_') {
            console.warn("VRMMaterials: Given property name \"" + name + "\" might be invalid");
            return name;
        }
        name = name.substring(1);
        if (!/[A-Z]/.test(name[0])) {
            console.warn("VRMMaterials: Given property name \"" + name + "\" might be invalid");
            return name;
        }
        return name[0].toLowerCase() + name.substring(1);
    };
    VRMMaterialImporter.prototype._convertGLTFMaterial = function (material) {
        if (material.isMeshStandardMaterial) {
            var mtl = material;
            if (mtl.map) {
                mtl.map.encoding = this._encoding;
            }
            if (mtl.emissiveMap) {
                mtl.emissiveMap.encoding = this._encoding;
            }
            if (this._encoding === THREE.LinearEncoding) {
                mtl.color.convertLinearToSRGB();
                mtl.emissive.convertLinearToSRGB();
            }
        }
        if (material.isMeshBasicMaterial) {
            var mtl = material;
            if (mtl.map) {
                mtl.map.encoding = this._encoding;
            }
            if (this._encoding === THREE.LinearEncoding) {
                mtl.color.convertLinearToSRGB();
            }
        }
        return material;
    };
    VRMMaterialImporter.prototype._extractMaterialProperties = function (originalMaterial, vrmProps, gltf) {
        var taskList = [];
        var params = {};
        // extract texture properties
        if (vrmProps.textureProperties) {
            var _loop_1 = function (name) {
                var newName = this_1._renameMaterialProperty(name);
                var textureIndex = vrmProps.textureProperties[name];
                taskList.push(gltf.parser.getDependency('texture', textureIndex).then(function (texture) {
                    params[newName] = texture;
                }));
            };
            var this_1 = this;
            for (var _i = 0, _a = Object.keys(vrmProps.textureProperties); _i < _a.length; _i++) {
                var name = _a[_i];
                _loop_1(name);
            }
        }
        // extract float properties
        if (vrmProps.floatProperties) {
            for (var _b = 0, _c = Object.keys(vrmProps.floatProperties); _b < _c.length; _b++) {
                var name = _c[_b];
                var newName = this._renameMaterialProperty(name);
                params[newName] = vrmProps.floatProperties[name];
            }
        }
        // extract vector (color tbh) properties
        if (vrmProps.vectorProperties) {
            var _loop_2 = function (name) {
                var _a;
                var newName = this_2._renameMaterialProperty(name);
                // if this is textureST (same name as texture name itself), add '_ST'
                var isTextureST = [
                    '_MainTex',
                    '_ShadeTexture',
                    '_BumpMap',
                    '_ReceiveShadowTexture',
                    '_ShadingGradeTexture',
                    '_RimTexture',
                    '_SphereAdd',
                    '_EmissionMap',
                    '_OutlineWidthTexture',
                    '_UvAnimMaskTexture',
                ].some(function (textureName) { return name === textureName; });
                if (isTextureST) {
                    newName += '_ST';
                }
                params[newName] = new ((_a = THREE.Vector4).bind.apply(_a, __spreadArrays([void 0], vrmProps.vectorProperties[name])))();
            };
            var this_2 = this;
            for (var _d = 0, _e = Object.keys(vrmProps.vectorProperties); _d < _e.length; _d++) {
                var name = _e[_d];
                _loop_2(name);
            }
        }
        // TODO: f (https://github.com/dwango/UniVRM/issues/172)
        if (vrmProps.keywordMap._ALPHATEST_ON && params.blendMode === MToonMaterial_1.MToonMaterialRenderMode.Opaque) {
            params.blendMode = MToonMaterial_1.MToonMaterialRenderMode.Cutout;
        }
        // set whether it needs skinning and morphing or not
        params.skinning = originalMaterial.skinning || false;
        params.morphTargets = originalMaterial.morphTargets || false;
        params.morphNormals = originalMaterial.morphNormals || false;
        return Promise.all(taskList).then(function () { return params; });
    };
    return VRMMaterialImporter;
}());
exports.VRMMaterialImporter = VRMMaterialImporter;


/***/ }),

/***/ "./src/vrm/material/VRMUnlitMaterial.ts":
/*!**********************************************!*\
  !*** ./src/vrm/material/VRMUnlitMaterial.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:member-ordering */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMUnlitMaterial = exports.VRMUnlitMaterialRenderType = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var unlit_vert_1 = __webpack_require__(/*! ./shaders/unlit.vert */ "./src/vrm/material/shaders/unlit.vert");
var unlit_frag_1 = __webpack_require__(/*! ./shaders/unlit.frag */ "./src/vrm/material/shaders/unlit.frag");
var VRMUnlitMaterialRenderType;
(function (VRMUnlitMaterialRenderType) {
    VRMUnlitMaterialRenderType[VRMUnlitMaterialRenderType["Opaque"] = 0] = "Opaque";
    VRMUnlitMaterialRenderType[VRMUnlitMaterialRenderType["Cutout"] = 1] = "Cutout";
    VRMUnlitMaterialRenderType[VRMUnlitMaterialRenderType["Transparent"] = 2] = "Transparent";
    VRMUnlitMaterialRenderType[VRMUnlitMaterialRenderType["TransparentWithZWrite"] = 3] = "TransparentWithZWrite";
})(VRMUnlitMaterialRenderType = exports.VRMUnlitMaterialRenderType || (exports.VRMUnlitMaterialRenderType = {}));
/**
 * This is a material that is an equivalent of "VRM/Unlit***" on VRM spec, those materials are already kinda deprecated though...
 */
var VRMUnlitMaterial = /** @class */ (function (_super) {
    __extends(VRMUnlitMaterial, _super);
    function VRMUnlitMaterial(parameters) {
        var _this = _super.call(this) || this;
        /**
         * Readonly boolean that indicates this is a [[VRMUnlitMaterial]].
         */
        _this.isVRMUnlitMaterial = true;
        _this.cutoff = 0.5;
        _this.map = null; // _MainTex
        // eslint-disable-next-line @typescript-eslint/naming-convention
        _this.mainTex_ST = new THREE.Vector4(0.0, 0.0, 1.0, 1.0); // _MainTex_ST
        _this._renderType = VRMUnlitMaterialRenderType.Opaque;
        _this.shouldApplyUniforms = true; // when this is true, applyUniforms effects
        if (parameters === undefined) {
            parameters = {};
        }
        // == enabling bunch of stuff ==============================================
        parameters.fog = true;
        parameters.clipping = true;
        parameters.skinning = parameters.skinning || false;
        parameters.morphTargets = parameters.morphTargets || false;
        parameters.morphNormals = parameters.morphNormals || false;
        // == uniforms =============================================================
        parameters.uniforms = THREE.UniformsUtils.merge([
            THREE.UniformsLib.common,
            THREE.UniformsLib.fog,
            {
                cutoff: { value: 0.5 },
                // eslint-disable-next-line @typescript-eslint/naming-convention
                mainTex_ST: { value: new THREE.Vector4(0.0, 0.0, 1.0, 1.0) },
            },
        ]);
        // == finally compile the shader program ===================================
        _this.setValues(parameters);
        // == update shader stuff ==================================================
        _this._updateShaderCode();
        _this._applyUniforms();
        return _this;
    }
    Object.defineProperty(VRMUnlitMaterial.prototype, "mainTex", {
        get: function () {
            return this.map;
        },
        set: function (t) {
            this.map = t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VRMUnlitMaterial.prototype, "renderType", {
        get: function () {
            return this._renderType;
        },
        set: function (t) {
            this._renderType = t;
            this.depthWrite = this._renderType !== VRMUnlitMaterialRenderType.Transparent;
            this.transparent =
                this._renderType === VRMUnlitMaterialRenderType.Transparent ||
                    this._renderType === VRMUnlitMaterialRenderType.TransparentWithZWrite;
            this._updateShaderCode();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Update this material.
     * Usually this will be called via [[VRM.update]] so you don't have to call this manually.
     *
     * @param delta deltaTime since last update
     */
    VRMUnlitMaterial.prototype.updateVRMMaterials = function (delta) {
        this._applyUniforms();
    };
    VRMUnlitMaterial.prototype.copy = function (source) {
        _super.prototype.copy.call(this, source);
        // == copy members =========================================================
        this.cutoff = source.cutoff;
        this.map = source.map;
        this.mainTex_ST.copy(source.mainTex_ST);
        this.renderType = source.renderType;
        return this;
    };
    /**
     * Apply updated uniform variables.
     */
    VRMUnlitMaterial.prototype._applyUniforms = function () {
        if (!this.shouldApplyUniforms) {
            return;
        }
        this.shouldApplyUniforms = false;
        this.uniforms.cutoff.value = this.cutoff;
        this.uniforms.map.value = this.map;
        this.uniforms.mainTex_ST.value.copy(this.mainTex_ST);
    };
    VRMUnlitMaterial.prototype._updateShaderCode = function () {
        this.defines = {
            RENDERTYPE_OPAQUE: this._renderType === VRMUnlitMaterialRenderType.Opaque,
            RENDERTYPE_CUTOUT: this._renderType === VRMUnlitMaterialRenderType.Cutout,
            RENDERTYPE_TRANSPARENT: this._renderType === VRMUnlitMaterialRenderType.Transparent ||
                this._renderType === VRMUnlitMaterialRenderType.TransparentWithZWrite,
        };
        this.vertexShader = unlit_vert_1.default;
        this.fragmentShader = unlit_frag_1.default;
        // == set needsUpdate flag =================================================
        this.needsUpdate = true;
    };
    return VRMUnlitMaterial;
}(THREE.ShaderMaterial));
exports.VRMUnlitMaterial = VRMUnlitMaterial;


/***/ }),

/***/ "./src/vrm/material/getTexelDecodingFunction.ts":
/*!******************************************************!*\
  !*** ./src/vrm/material/getTexelDecodingFunction.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTexelDecodingFunction = exports.getEncodingComponents = void 0;
var THREE = __webpack_require__(/*! three */ "three");
exports.getEncodingComponents = function (encoding) {
    switch (encoding) {
        case THREE.LinearEncoding:
            return ['Linear', '( value )'];
        case THREE.sRGBEncoding:
            return ['sRGB', '( value )'];
        case THREE.RGBEEncoding:
            return ['RGBE', '( value )'];
        case THREE.RGBM7Encoding:
            return ['RGBM', '( value, 7.0 )'];
        case THREE.RGBM16Encoding:
            return ['RGBM', '( value, 16.0 )'];
        case THREE.RGBDEncoding:
            return ['RGBD', '( value, 256.0 )'];
        case THREE.GammaEncoding:
            return ['Gamma', '( value, float( GAMMA_FACTOR ) )'];
        default:
            throw new Error('unsupported encoding: ' + encoding);
    }
};
exports.getTexelDecodingFunction = function (functionName, encoding) {
    var components = exports.getEncodingComponents(encoding);
    return 'vec4 ' + functionName + '( vec4 value ) { return ' + components[0] + 'ToLinear' + components[1] + '; }';
};


/***/ }),

/***/ "./src/vrm/material/index.ts":
/*!***********************************!*\
  !*** ./src/vrm/material/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./MToonMaterial */ "./src/vrm/material/MToonMaterial.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMMaterialImporter */ "./src/vrm/material/VRMMaterialImporter.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMUnlitMaterial */ "./src/vrm/material/VRMUnlitMaterial.ts"), exports);


/***/ }),

/***/ "./src/vrm/material/shaders/mtoon.frag":
/*!*********************************************!*\
  !*** ./src/vrm/material/shaders/mtoon.frag ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// #define PHONG\n\n#ifdef BLENDMODE_CUTOUT\n  uniform float cutoff;\n#endif\n\nuniform vec3 color;\nuniform float colorAlpha;\nuniform vec3 shadeColor;\n#ifdef USE_SHADETEXTURE\n  uniform sampler2D shadeTexture;\n#endif\n\nuniform float receiveShadowRate;\n#ifdef USE_RECEIVESHADOWTEXTURE\n  uniform sampler2D receiveShadowTexture;\n#endif\n\nuniform float shadingGradeRate;\n#ifdef USE_SHADINGGRADETEXTURE\n  uniform sampler2D shadingGradeTexture;\n#endif\n\nuniform float shadeShift;\nuniform float shadeToony;\nuniform float lightColorAttenuation;\nuniform float indirectLightIntensity;\n\n#ifdef USE_RIMTEXTURE\n  uniform sampler2D rimTexture;\n#endif\nuniform vec3 rimColor;\nuniform float rimLightingMix;\nuniform float rimFresnelPower;\nuniform float rimLift;\n\n#ifdef USE_SPHEREADD\n  uniform sampler2D sphereAdd;\n#endif\n\nuniform vec3 emissionColor;\n\nuniform vec3 outlineColor;\nuniform float outlineLightingMix;\n\n#ifdef USE_UVANIMMASKTEXTURE\n  uniform sampler2D uvAnimMaskTexture;\n#endif\n\nuniform float uvAnimOffsetX;\nuniform float uvAnimOffsetY;\nuniform float uvAnimTheta;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n\n// #include <uv_pars_fragment>\n#if defined( USE_MAP ) || defined( USE_SHADETEXTURE ) || defined( USE_NORMALMAP ) || defined( USE_RECEIVESHADOWTEXTURE ) || defined( USE_SHADINGGRADETEXTURE ) || defined( USE_RIMTEXTURE ) || defined( USE_EMISSIVEMAP ) || defined( USE_OUTLINEWIDTHTEXTURE ) || defined( USE_UVANIMMASKTEXTURE )\n  varying vec2 vUv;\n#endif\n\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n// #include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n// #include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n// #include <envmap_pars_fragment>\n// #include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n\n// #include <lights_phong_pars_fragment>\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n  varying vec3 vNormal;\n#endif\n\n#define Material_LightProbeLOD( material ) (0)\n\n#include <shadowmap_pars_fragment>\n// #include <bumpmap_pars_fragment>\n\n// #include <normalmap_pars_fragment>\n#ifdef USE_NORMALMAP\n\n  uniform sampler2D normalMap;\n  uniform vec2 normalScale;\n\n#endif\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n  uniform mat3 normalMatrix;\n\n#endif\n\n#if ! defined ( USE_TANGENT ) && defined ( TANGENTSPACE_NORMALMAP )\n\n  // Per-Pixel Tangent Space Normal Mapping\n  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n  // three-vrm specific change: it requires `uv` as an input in order to support uv scrolls\n\n  vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\n    // Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\n    vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n    vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n    vec2 st0 = dFdx( uv.st );\n    vec2 st1 = dFdy( uv.st );\n\n    float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude\n\n    vec3 S = ( q0 * st1.t - q1 * st0.t ) * scale;\n    vec3 T = ( - q0 * st1.s + q1 * st0.s ) * scale;\n\n    // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0\n    // TODO: Is this still required? Or shall I make a PR about it?\n\n    if ( length( S ) == 0.0 || length( T ) == 0.0 ) {\n      return surf_norm;\n    }\n\n    S = normalize( S );\n    T = normalize( T );\n    vec3 N = normalize( surf_norm );\n\n    #ifdef DOUBLE_SIDED\n\n      // Workaround for Adreno GPUs gl_FrontFacing bug. See #15850 and #10331\n\n      bool frontFacing = dot( cross( S, T ), N ) > 0.0;\n\n      mapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );\n\n    #else\n\n      mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\n    #endif\n\n    mat3 tsn = mat3( S, T, N );\n    return normalize( tsn * mapN );\n\n  }\n\n#endif\n\n// #include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\n// == lighting stuff ===========================================================\nfloat getLightIntensity(\n  const in IncidentLight directLight,\n  const in GeometricContext geometry,\n  const in float shadow,\n  const in float shadingGrade\n) {\n  float lightIntensity = dot( geometry.normal, directLight.direction );\n  lightIntensity = 0.5 + 0.5 * lightIntensity;\n  lightIntensity = lightIntensity * shadow;\n  lightIntensity = lightIntensity * shadingGrade;\n  lightIntensity = lightIntensity * 2.0 - 1.0;\n  return shadeToony == 1.0\n    ? step( shadeShift, lightIntensity )\n    : smoothstep( shadeShift, shadeShift + ( 1.0 - shadeToony ), lightIntensity );\n}\n\nvec3 getLighting( const in vec3 lightColor ) {\n  vec3 lighting = lightColor;\n  lighting = mix(\n    lighting,\n    vec3( max( 0.001, max( lighting.x, max( lighting.y, lighting.z ) ) ) ),\n    lightColorAttenuation\n  );\n\n  #ifndef PHYSICALLY_CORRECT_LIGHTS\n    lighting *= PI;\n  #endif\n\n  return lighting;\n}\n\nvec3 getDiffuse(\n  const in vec3 lit,\n  const in vec3 shade,\n  const in float lightIntensity,\n  const in vec3 lighting\n) {\n  #ifdef DEBUG_LITSHADERATE\n    return vec3( BRDF_Diffuse_Lambert( lightIntensity * lighting ) );\n  #endif\n\n  return lighting * BRDF_Diffuse_Lambert( mix( shade, lit, lightIntensity ) );\n}\n\nvec3 calcDirectDiffuse(\n  const in vec2 uv,\n  const in vec3 lit,\n  const in vec3 shade,\n  in GeometricContext geometry,\n  inout ReflectedLight reflectedLight\n) {\n  IncidentLight directLight;\n  vec3 lightingSum = vec3( 0.0 );\n\n  float shadingGrade = 1.0;\n  #ifdef USE_SHADINGGRADETEXTURE\n    shadingGrade = 1.0 - shadingGradeRate * ( 1.0 - texture2D( shadingGradeTexture, uv ).r );\n  #endif\n\n  float receiveShadow = receiveShadowRate;\n  #ifdef USE_RECEIVESHADOWTEXTURE\n    receiveShadow *= texture2D( receiveShadowTexture, uv ).a;\n  #endif\n\n  #if ( NUM_POINT_LIGHTS > 0 )\n    PointLight pointLight;\n\n    #pragma unroll_loop_start\n    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n      pointLight = pointLights[ i ];\n      getPointDirectLightIrradiance( pointLight, geometry, directLight );\n\n      float atten = 1.0;\n      #ifdef USE_SHADOWMAP\n        atten = all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n      #endif\n\n      float shadow = 1.0 - receiveShadow * ( 1.0 - ( 0.5 + 0.5 * atten ) );\n      float lightIntensity = getLightIntensity( directLight, geometry, shadow, shadingGrade );\n      vec3 lighting = getLighting( directLight.color );\n      reflectedLight.directDiffuse += getDiffuse( lit, shade, lightIntensity, lighting );\n      lightingSum += lighting;\n    }\n    #pragma unroll_loop_end\n  #endif\n\n  #if ( NUM_SPOT_LIGHTS > 0 )\n    SpotLight spotLight;\n\n    #pragma unroll_loop_start\n    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n      spotLight = spotLights[ i ];\n      getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\n      float atten = 1.0;\n      #ifdef USE_SHADOWMAP\n        atten = all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n      #endif\n\n      float shadow = 1.0 - receiveShadow * ( 1.0 - ( 0.5 + 0.5 * atten ) );\n      float lightIntensity = getLightIntensity( directLight, geometry, shadow, shadingGrade );\n      vec3 lighting = getLighting( directLight.color );\n      reflectedLight.directDiffuse += getDiffuse( lit, shade, lightIntensity, lighting );\n      lightingSum += lighting;\n    }\n    #pragma unroll_loop_end\n  #endif\n\n  #if ( NUM_DIR_LIGHTS > 0 )\n    DirectionalLight directionalLight;\n\n    #pragma unroll_loop_start\n    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n      directionalLight = directionalLights[ i ];\n      getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\n      float atten = 1.0;\n      #ifdef USE_SHADOWMAP\n        atten = all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n      #endif\n\n      float shadow = 1.0 - receiveShadow * ( 1.0 - ( 0.5 + 0.5 * atten ) );\n      float lightIntensity = getLightIntensity( directLight, geometry, shadow, shadingGrade );\n      vec3 lighting = getLighting( directLight.color );\n      reflectedLight.directDiffuse += getDiffuse( lit, shade, lightIntensity, lighting );\n      lightingSum += lighting;\n    }\n    #pragma unroll_loop_end\n  #endif\n\n  return lightingSum;\n}\n\n// == post correction ==========================================================\nvoid postCorrection() {\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n  #include <fog_fragment>\n  #include <premultiplied_alpha_fragment>\n  #include <dithering_fragment>\n}\n\n// == main procedure ===========================================================\nvoid main() {\n  #include <clipping_planes_fragment>\n\n  vec2 uv = vec2(0.5, 0.5);\n\n  #if defined( USE_MAP ) || defined( USE_SHADETEXTURE ) || defined( USE_NORMALMAP ) || defined( USE_RECEIVESHADOWTEXTURE ) || defined( USE_SHADINGGRADETEXTURE ) || defined( USE_RIMTEXTURE ) || defined( USE_EMISSIVEMAP ) || defined( USE_OUTLINEWIDTHTEXTURE ) || defined( USE_UVANIMMASKTEXTURE )\n    uv = vUv;\n\n    float uvAnimMask = 1.0;\n    #ifdef USE_UVANIMMASKTEXTURE\n      uvAnimMask = texture2D( uvAnimMaskTexture, uv ).x;\n    #endif\n\n    uv = uv + vec2( uvAnimOffsetX, uvAnimOffsetY ) * uvAnimMask;\n    float uvRotCos = cos( uvAnimTheta * uvAnimMask );\n    float uvRotSin = sin( uvAnimTheta * uvAnimMask );\n    uv = mat2( uvRotCos, uvRotSin, -uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;\n  #endif\n\n  #ifdef DEBUG_UV\n    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n    #if defined( USE_MAP ) || defined( USE_SHADETEXTURE ) || defined( USE_NORMALMAP ) || defined( USE_RECEIVESHADOWTEXTURE ) || defined( USE_SHADINGGRADETEXTURE ) || defined( USE_RIMTEXTURE ) || defined( USE_EMISSIVEMAP ) || defined( USE_OUTLINEWIDTHTEXTURE ) || defined( USE_UVANIMMASKTEXTURE )\n      gl_FragColor = vec4( uv, 0.0, 1.0 );\n    #endif\n    return;\n  #endif\n\n  vec4 diffuseColor = vec4( color, colorAlpha );\n  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n  vec3 totalEmissiveRadiance = emissionColor;\n\n  #include <logdepthbuf_fragment>\n\n  // #include <map_fragment>\n  #ifdef USE_MAP\n    diffuseColor *= mapTexelToLinear( texture2D( map, uv ) );\n  #endif\n\n  #include <color_fragment>\n  // #include <alphamap_fragment>\n\n  // -- MToon: alpha -----------------------------------------------------------\n  // #include <alphatest_fragment>\n  #ifdef BLENDMODE_CUTOUT\n    if ( diffuseColor.a <= cutoff ) { discard; }\n    diffuseColor.a = 1.0;\n  #endif\n\n  #ifdef BLENDMODE_OPAQUE\n    diffuseColor.a = 1.0;\n  #endif\n\n  #if defined( OUTLINE ) && defined( OUTLINE_COLOR_FIXED ) // omitting DebugMode\n    gl_FragColor = vec4( outlineColor, diffuseColor.a );\n    postCorrection();\n    return;\n  #endif\n\n  // #include <specularmap_fragment>\n  #include <normal_fragment_begin>\n\n  #ifdef OUTLINE\n    normal *= -1.0;\n  #endif\n\n  // #include <normal_fragment_maps>\n\n  #ifdef OBJECTSPACE_NORMALMAP\n\n    normal = texture2D( normalMap, uv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals\n\n    #ifdef FLIP_SIDED\n\n      normal = - normal;\n\n    #endif\n\n    #ifdef DOUBLE_SIDED\n\n      normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\n    #endif\n\n    normal = normalize( normalMatrix * normal );\n\n  #elif defined( TANGENTSPACE_NORMALMAP )\n\n    vec3 mapN = texture2D( normalMap, uv ).xyz * 2.0 - 1.0;\n    mapN.xy *= normalScale;\n\n    #ifdef USE_TANGENT\n\n      normal = normalize( vTBN * mapN );\n\n    #else\n\n      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN );\n\n    #endif\n\n  #endif\n\n  // #include <emissivemap_fragment>\n  #ifdef USE_EMISSIVEMAP\n    totalEmissiveRadiance *= emissiveMapTexelToLinear( texture2D( emissiveMap, uv ) ).rgb;\n  #endif\n\n  #ifdef DEBUG_NORMAL\n    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );\n    return;\n  #endif\n\n  // -- MToon: lighting --------------------------------------------------------\n  // accumulation\n  // #include <lights_phong_fragment>\n  // #include <lights_fragment_begin>\n  vec3 lit = diffuseColor.rgb;\n  vec3 shade = shadeColor;\n  #ifdef USE_SHADETEXTURE\n    shade *= shadeTextureTexelToLinear( texture2D( shadeTexture, uv ) ).rgb;\n  #endif\n\n  GeometricContext geometry;\n\n  geometry.position = - vViewPosition;\n  geometry.normal = normal;\n  geometry.viewDir = normalize( vViewPosition );\n\n  vec3 lighting = calcDirectDiffuse( uv, diffuseColor.rgb, shade, geometry, reflectedLight );\n\n  vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n  #if ( NUM_HEMI_LIGHTS > 0 )\n    #pragma unroll_loop_start\n    for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n      irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n    }\n    #pragma unroll_loop_end\n  #endif\n\n  // #include <lights_fragment_maps>\n  #ifdef USE_LIGHTMAP\n    vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).rgb * lightMapIntensity;\n    #ifndef PHYSICALLY_CORRECT_LIGHTS\n      lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage\n    #endif\n    irradiance += lightMapIrradiance;\n  #endif\n\n  // #include <lights_fragment_end>\n  reflectedLight.indirectDiffuse += indirectLightIntensity * irradiance * BRDF_Diffuse_Lambert( lit );\n\n  // modulation\n  #include <aomap_fragment>\n\n  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\n  #if defined( OUTLINE ) && defined( OUTLINE_COLOR_MIXED )\n    gl_FragColor = vec4(\n      outlineColor.rgb * mix( vec3( 1.0 ), col, outlineLightingMix ),\n      diffuseColor.a\n    );\n    postCorrection();\n    return;\n  #endif\n\n  #ifdef DEBUG_LITSHADERATE\n    gl_FragColor = vec4( col, diffuseColor.a );\n    postCorrection();\n    return;\n  #endif\n\n  // -- MToon: parametric rim lighting -----------------------------------------\n  vec3 viewDir = normalize( vViewPosition );\n  vec3 rimMix = mix(vec3(1.0), lighting + indirectLightIntensity * irradiance, rimLightingMix);\n  vec3 rim = rimColor * pow( saturate( 1.0 - dot( viewDir, normal ) + rimLift ), rimFresnelPower );\n  #ifdef USE_RIMTEXTURE\n    rim *= rimTextureTexelToLinear( texture2D( rimTexture, uv ) ).rgb;\n  #endif\n  col += rim;\n\n  // -- MToon: additive matcap -------------------------------------------------\n  #ifdef USE_SPHEREADD\n    {\n      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );\n      vec3 y = cross( viewDir, x ); // guaranteed to be normalized\n      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );\n      vec3 matcap = sphereAddTexelToLinear( texture2D( sphereAdd, sphereUv ) ).xyz;\n      col += matcap;\n    }\n  #endif\n\n  // -- MToon: Emission --------------------------------------------------------\n  col += totalEmissiveRadiance;\n\n  // #include <envmap_fragment>\n\n  // -- Almost done! -----------------------------------------------------------\n  gl_FragColor = vec4( col, diffuseColor.a );\n  postCorrection();\n}");

/***/ }),

/***/ "./src/vrm/material/shaders/mtoon.vert":
/*!*********************************************!*\
  !*** ./src/vrm/material/shaders/mtoon.vert ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// #define PHONG\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n  varying vec3 vNormal;\n#endif\n\n#include <common>\n\n// #include <uv_pars_vertex>\n#if defined( USE_MAP ) || defined( USE_SHADETEXTURE ) || defined( USE_NORMALMAP ) || defined( USE_RECEIVESHADOWTEXTURE ) || defined( USE_SHADINGGRADETEXTURE ) || defined( USE_RIMTEXTURE ) || defined( USE_EMISSIVEMAP ) || defined( USE_OUTLINEWIDTHTEXTURE ) || defined( USE_UVANIMMASKTEXTURE )\n  varying vec2 vUv;\n  uniform vec4 mainTex_ST;\n#endif\n\n#include <uv2_pars_vertex>\n// #include <displacementmap_pars_vertex>\n// #include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n#ifdef USE_OUTLINEWIDTHTEXTURE\n  uniform sampler2D outlineWidthTexture;\n#endif\n\nuniform float outlineWidth;\nuniform float outlineScaledMaxDistance;\n\nvoid main() {\n\n  // #include <uv_vertex>\n  #if defined( USE_MAP ) || defined( USE_SHADETEXTURE ) || defined( USE_NORMALMAP ) || defined( USE_RECEIVESHADOWTEXTURE ) || defined( USE_SHADINGGRADETEXTURE ) || defined( USE_RIMTEXTURE ) || defined( USE_EMISSIVEMAP ) || defined( USE_OUTLINEWIDTHTEXTURE ) || defined( USE_UVANIMMASKTEXTURE )\n    vUv = vec2( mainTex_ST.p * uv.x + mainTex_ST.s, mainTex_ST.q * uv.y + mainTex_ST.t );\n  #endif\n\n  #include <uv2_vertex>\n  #include <color_vertex>\n\n  #include <beginnormal_vertex>\n  #include <morphnormal_vertex>\n  #include <skinbase_vertex>\n  #include <skinnormal_vertex>\n\n  // we need this to compute the outline properly\n  objectNormal = normalize( objectNormal );\n\n  #include <defaultnormal_vertex>\n\n  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n    vNormal = normalize( transformedNormal );\n  #endif\n\n  #include <begin_vertex>\n\n  #include <morphtarget_vertex>\n  #include <skinning_vertex>\n  // #include <displacementmap_vertex>\n  #include <project_vertex>\n  #include <logdepthbuf_vertex>\n  #include <clipping_planes_vertex>\n\n  vViewPosition = - mvPosition.xyz;\n\n  float outlineTex = 1.0;\n\n  #ifdef OUTLINE\n    #ifdef USE_OUTLINEWIDTHTEXTURE\n      outlineTex = texture2D( outlineWidthTexture, vUv ).r;\n    #endif\n\n    #ifdef OUTLINE_WIDTH_WORLD\n      float worldNormalLength = length( transformedNormal );\n      vec3 outlineOffset = 0.01 * outlineWidth * outlineTex * worldNormalLength * objectNormal;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );\n    #endif\n\n    #ifdef OUTLINE_WIDTH_SCREEN\n      vec3 clipNormal = ( projectionMatrix * modelViewMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n      vec2 projectedNormal = normalize( clipNormal.xy );\n      projectedNormal *= min( gl_Position.w, outlineScaledMaxDistance );\n      projectedNormal.x *= projectionMatrix[ 0 ].x / projectionMatrix[ 1 ].y;\n      gl_Position.xy += 0.01 * outlineWidth * outlineTex * projectedNormal.xy;\n    #endif\n\n    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic\n  #endif\n\n  #include <worldpos_vertex>\n  // #include <envmap_vertex>\n  #include <shadowmap_vertex>\n  #include <fog_vertex>\n\n}");

/***/ }),

/***/ "./src/vrm/material/shaders/unlit.frag":
/*!*********************************************!*\
  !*** ./src/vrm/material/shaders/unlit.frag ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef RENDERTYPE_CUTOUT\n  uniform float cutoff;\n#endif\n\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n// #include <alphamap_pars_fragment>\n// #include <aomap_pars_fragment>\n// #include <lightmap_pars_fragment>\n// #include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n// #include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\n// == main procedure ===========================================================\nvoid main() {\n  #include <clipping_planes_fragment>\n\n  vec4 diffuseColor = vec4( 1.0 );\n\n  #include <logdepthbuf_fragment>\n\n  // #include <map_fragment>\n  #ifdef USE_MAP\n    diffuseColor *= mapTexelToLinear( texture2D( map, vUv ) );\n  #endif\n\n  #include <color_fragment>\n  // #include <alphamap_fragment>\n\n  // MToon: alpha\n  // #include <alphatest_fragment>\n  #ifdef RENDERTYPE_CUTOUT\n    if ( diffuseColor.a <= cutoff ) { discard; }\n    diffuseColor.a = 1.0;\n  #endif\n\n  #ifdef RENDERTYPE_OPAQUE\n    diffuseColor.a = 1.0;\n  #endif\n\n  // #include <specularmap_fragment>\n\n  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\n  // accumulation (baked indirect lighting only)\n  #ifdef USE_LIGHTMAP\n    reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n  #else\n    reflectedLight.indirectDiffuse += vec3( 1.0 );\n  #endif\n\n  // modulation\n  // #include <aomap_fragment>\n\n  reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n  vec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n  // #include <envmap_fragment>\n\n  gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n  #include <premultiplied_alpha_fragment>\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n  #include <fog_fragment>\n}");

/***/ }),

/***/ "./src/vrm/material/shaders/unlit.vert":
/*!*********************************************!*\
  !*** ./src/vrm/material/shaders/unlit.vert ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#include <common>\n\n// #include <uv_pars_vertex>\n#ifdef USE_MAP\n  varying vec2 vUv;\n  uniform vec4 mainTex_ST;\n#endif\n\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n  // #include <uv_vertex>\n  #ifdef USE_MAP\n    vUv = vec2( mainTex_ST.p * uv.x + mainTex_ST.s, mainTex_ST.q * uv.y + mainTex_ST.t );\n  #endif\n\n  #include <uv2_vertex>\n  #include <color_vertex>\n  #include <skinbase_vertex>\n\n  #ifdef USE_ENVMAP\n\n  #include <beginnormal_vertex>\n  #include <morphnormal_vertex>\n  #include <skinnormal_vertex>\n  #include <defaultnormal_vertex>\n\n  #endif\n\n  #include <begin_vertex>\n  #include <morphtarget_vertex>\n  #include <skinning_vertex>\n  #include <project_vertex>\n  #include <logdepthbuf_vertex>\n\n  #include <worldpos_vertex>\n  #include <clipping_planes_vertex>\n  #include <envmap_vertex>\n  #include <fog_vertex>\n\n}");

/***/ }),

/***/ "./src/vrm/meta/VRMMeta.ts":
/*!*********************************!*\
  !*** ./src/vrm/meta/VRMMeta.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/vrm/meta/VRMMetaImporter.ts":
/*!*****************************************!*\
  !*** ./src/vrm/meta/VRMMetaImporter.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMMetaImporter = void 0;
/**
 * An importer that imports a {@link VRMMeta} from a VRM extension of a GLTF.
 */
var VRMMetaImporter = /** @class */ (function () {
    function VRMMetaImporter(options) {
        var _a;
        this.ignoreTexture = (_a = options === null || options === void 0 ? void 0 : options.ignoreTexture) !== null && _a !== void 0 ? _a : false;
    }
    VRMMetaImporter.prototype.import = function (gltf) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var vrmExt, schemaMeta, texture;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        vrmExt = (_a = gltf.parser.json.extensions) === null || _a === void 0 ? void 0 : _a.VRM;
                        if (!vrmExt) {
                            return [2 /*return*/, null];
                        }
                        schemaMeta = vrmExt.meta;
                        if (!schemaMeta) {
                            return [2 /*return*/, null];
                        }
                        if (!(!this.ignoreTexture && schemaMeta.texture != null && schemaMeta.texture !== -1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, gltf.parser.getDependency('texture', schemaMeta.texture)];
                    case 1:
                        texture = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, {
                            allowedUserName: schemaMeta.allowedUserName,
                            author: schemaMeta.author,
                            commercialUssageName: schemaMeta.commercialUssageName,
                            contactInformation: schemaMeta.contactInformation,
                            licenseName: schemaMeta.licenseName,
                            otherLicenseUrl: schemaMeta.otherLicenseUrl,
                            otherPermissionUrl: schemaMeta.otherPermissionUrl,
                            reference: schemaMeta.reference,
                            sexualUssageName: schemaMeta.sexualUssageName,
                            texture: texture !== null && texture !== void 0 ? texture : undefined,
                            title: schemaMeta.title,
                            version: schemaMeta.version,
                            violentUssageName: schemaMeta.violentUssageName,
                        }];
                }
            });
        });
    };
    return VRMMetaImporter;
}());
exports.VRMMetaImporter = VRMMetaImporter;


/***/ }),

/***/ "./src/vrm/meta/VRMMetaImporterOptions.ts":
/*!************************************************!*\
  !*** ./src/vrm/meta/VRMMetaImporterOptions.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/vrm/meta/index.ts":
/*!*******************************!*\
  !*** ./src/vrm/meta/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMMetaImporterOptions = exports.VRMMetaImporter = exports.VRMMeta = void 0;
var VRMMeta_1 = __webpack_require__(/*! ./VRMMeta */ "./src/vrm/meta/VRMMeta.ts");
Object.defineProperty(exports, "VRMMeta", { enumerable: true, get: function () { return VRMMeta_1.VRMMeta; } });
var VRMMetaImporter_1 = __webpack_require__(/*! ./VRMMetaImporter */ "./src/vrm/meta/VRMMetaImporter.ts");
Object.defineProperty(exports, "VRMMetaImporter", { enumerable: true, get: function () { return VRMMetaImporter_1.VRMMetaImporter; } });
var VRMMetaImporterOptions_1 = __webpack_require__(/*! ./VRMMetaImporterOptions */ "./src/vrm/meta/VRMMetaImporterOptions.ts");
Object.defineProperty(exports, "VRMMetaImporterOptions", { enumerable: true, get: function () { return VRMMetaImporterOptions_1.VRMMetaImporterOptions; } });


/***/ }),

/***/ "./src/vrm/springbone/VRMSpringBone.ts":
/*!*********************************************!*\
  !*** ./src/vrm/springbone/VRMSpringBone.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMSpringBone = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var math_1 = __webpack_require__(/*! ../utils/math */ "./src/vrm/utils/math.ts");
var Matrix4InverseCache_1 = __webpack_require__(/*! ../utils/Matrix4InverseCache */ "./src/vrm/utils/Matrix4InverseCache.ts");
// based on
// http://rocketjump.skr.jp/unity3d/109/
// https://github.com/dwango/UniVRM/blob/master/Scripts/SpringBone/VRMSpringBone.cs
var IDENTITY_MATRIX4 = Object.freeze(new THREE.Matrix4());
var IDENTITY_QUATERNION = Object.freeze(new THREE.Quaternion());
// 計算中の一時保存用変数（一度インスタンスを作ったらあとは使い回す）
var _v3A = new THREE.Vector3();
var _v3B = new THREE.Vector3();
var _v3C = new THREE.Vector3();
var _quatA = new THREE.Quaternion();
var _matA = new THREE.Matrix4();
var _matB = new THREE.Matrix4();
/**
 * A class represents a single spring bone of a VRM.
 * It should be managed by a [[VRMSpringBoneManager]].
 */
var VRMSpringBone = /** @class */ (function () {
    /**
     * Create a new VRMSpringBone.
     *
     * @param bone An Object3D that will be attached to this bone
     * @param params Several parameters related to behavior of the spring bone
     */
    function VRMSpringBone(bone, params) {
        if (params === void 0) { params = {}; }
        var _a, _b, _c, _d, _e, _f;
        /**
         * Current position of child tail, in world unit. Will be used for verlet integration.
         */
        this._currentTail = new THREE.Vector3();
        /**
         * Previous position of child tail, in world unit. Will be used for verlet integration.
         */
        this._prevTail = new THREE.Vector3();
        /**
         * Next position of child tail, in world unit. Will be used for verlet integration.
         * Actually used only in [[update]] and it's kind of temporary variable.
         */
        this._nextTail = new THREE.Vector3();
        /**
         * Initial axis of the bone, in local unit.
         */
        this._boneAxis = new THREE.Vector3();
        /**
         * Position of this bone in relative space, kind of a temporary variable.
         */
        this._centerSpacePosition = new THREE.Vector3();
        /**
         * This springbone will be calculated based on the space relative from this object.
         * If this is `null`, springbone will be calculated in world space.
         */
        this._center = null;
        /**
         * Rotation of parent bone, in world unit.
         * We should update this constantly in [[update]].
         */
        this._parentWorldRotation = new THREE.Quaternion();
        /**
         * Initial state of the local matrix of the bone.
         */
        this._initialLocalMatrix = new THREE.Matrix4();
        /**
         * Initial state of the rotation of the bone.
         */
        this._initialLocalRotation = new THREE.Quaternion();
        /**
         * Initial state of the position of its child.
         */
        this._initialLocalChildPosition = new THREE.Vector3();
        this.bone = bone; // uniVRMでの parent
        this.bone.matrixAutoUpdate = false; // updateにより計算されるのでthree.js内での自動処理は不要
        this.radius = (_a = params.radius) !== null && _a !== void 0 ? _a : 0.02;
        this.stiffnessForce = (_b = params.stiffnessForce) !== null && _b !== void 0 ? _b : 1.0;
        this.gravityDir = params.gravityDir
            ? new THREE.Vector3().copy(params.gravityDir)
            : new THREE.Vector3().set(0.0, -1.0, 0.0);
        this.gravityPower = (_c = params.gravityPower) !== null && _c !== void 0 ? _c : 0.0;
        this.dragForce = (_d = params.dragForce) !== null && _d !== void 0 ? _d : 0.4;
        this.colliders = (_e = params.colliders) !== null && _e !== void 0 ? _e : [];
        this._centerSpacePosition.setFromMatrixPosition(this.bone.matrixWorld);
        this._initialLocalMatrix.copy(this.bone.matrix);
        this._initialLocalRotation.copy(this.bone.quaternion);
        if (this.bone.children.length === 0) {
            // 末端のボーン。子ボーンがいないため「自分の少し先」が子ボーンということにする
            // https://github.com/dwango/UniVRM/blob/master/Assets/VRM/UniVRM/Scripts/SpringBone/VRMSpringBone.cs#L246
            this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(0.07); // magic number! derives from original source
        }
        else {
            var firstChild = this.bone.children[0];
            this._initialLocalChildPosition.copy(firstChild.position);
        }
        this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition));
        this._prevTail.copy(this._currentTail);
        this._nextTail.copy(this._currentTail);
        this._boneAxis.copy(this._initialLocalChildPosition).normalize();
        this._centerSpaceBoneLength = _v3A
            .copy(this._initialLocalChildPosition)
            .applyMatrix4(this.bone.matrixWorld)
            .sub(this._centerSpacePosition)
            .length();
        this.center = (_f = params.center) !== null && _f !== void 0 ? _f : null;
    }
    Object.defineProperty(VRMSpringBone.prototype, "center", {
        get: function () {
            return this._center;
        },
        set: function (center) {
            var _a;
            // convert tails to world space
            this._getMatrixCenterToWorld(_matA);
            this._currentTail.applyMatrix4(_matA);
            this._prevTail.applyMatrix4(_matA);
            this._nextTail.applyMatrix4(_matA);
            // uninstall inverse cache
            if ((_a = this._center) === null || _a === void 0 ? void 0 : _a.userData.inverseCacheProxy) {
                this._center.userData.inverseCacheProxy.revert();
                delete this._center.userData.inverseCacheProxy;
            }
            // change the center
            this._center = center;
            // install inverse cache
            if (this._center) {
                if (!this._center.userData.inverseCacheProxy) {
                    this._center.userData.inverseCacheProxy = new Matrix4InverseCache_1.Matrix4InverseCache(this._center.matrixWorld);
                }
            }
            // convert tails to center space
            this._getMatrixWorldToCenter(_matA);
            this._currentTail.applyMatrix4(_matA);
            this._prevTail.applyMatrix4(_matA);
            this._nextTail.applyMatrix4(_matA);
            // convert center space dependant state
            _matA.multiply(this.bone.matrixWorld); // 🔥 ??
            this._centerSpacePosition.setFromMatrixPosition(_matA);
            this._centerSpaceBoneLength = _v3A
                .copy(this._initialLocalChildPosition)
                .applyMatrix4(_matA)
                .sub(this._centerSpacePosition)
                .length();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Reset the state of this bone.
     * You might want to call [[VRMSpringBoneManager.reset]] instead.
     */
    VRMSpringBone.prototype.reset = function () {
        this.bone.quaternion.copy(this._initialLocalRotation);
        // We need to update its matrixWorld manually, since we tweaked the bone by our hand
        this.bone.updateMatrix();
        this.bone.matrixWorld.multiplyMatrices(this._getParentMatrixWorld(), this.bone.matrix);
        this._centerSpacePosition.setFromMatrixPosition(this.bone.matrixWorld);
        // Apply updated position to tail states
        this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition));
        this._prevTail.copy(this._currentTail);
        this._nextTail.copy(this._currentTail);
    };
    /**
     * Update the state of this bone.
     * You might want to call [[VRMSpringBoneManager.update]] instead.
     *
     * @param delta deltaTime
     */
    VRMSpringBone.prototype.update = function (delta) {
        if (delta <= 0)
            return;
        // 親スプリングボーンの姿勢は常に変化している。
        // それに基づいて処理直前に自分のworldMatrixを更新しておく
        this.bone.matrixWorld.multiplyMatrices(this._getParentMatrixWorld(), this.bone.matrix);
        if (this.bone.parent) {
            // SpringBoneは親から順に処理されていくため、
            // 親のmatrixWorldは最新状態の前提でworldMatrixからquaternionを取り出す。
            // 制限はあるけれど、計算は少ないのでgetWorldQuaternionではなくこの方法を取る。
            math_1.getWorldQuaternionLite(this.bone.parent, this._parentWorldRotation);
        }
        else {
            this._parentWorldRotation.copy(IDENTITY_QUATERNION);
        }
        // Get bone position in center space
        this._getMatrixWorldToCenter(_matA);
        _matA.multiply(this.bone.matrixWorld); // 🔥 ??
        this._centerSpacePosition.setFromMatrixPosition(_matA);
        // Get parent position in center space
        this._getMatrixWorldToCenter(_matB);
        _matB.multiply(this._getParentMatrixWorld());
        // several parameters
        var stiffness = this.stiffnessForce * delta;
        var external = _v3B.copy(this.gravityDir).multiplyScalar(this.gravityPower * delta);
        // verlet積分で次の位置を計算
        this._nextTail
            .copy(this._currentTail)
            .add(_v3A
            .copy(this._currentTail)
            .sub(this._prevTail)
            .multiplyScalar(1 - this.dragForce)) // 前フレームの移動を継続する(減衰もあるよ)
            .add(_v3A
            .copy(this._boneAxis)
            .applyMatrix4(this._initialLocalMatrix)
            .applyMatrix4(_matB)
            .sub(this._centerSpacePosition)
            .normalize()
            .multiplyScalar(stiffness)) // 親の回転による子ボーンの移動目標
            .add(external); // 外力による移動量
        // normalize bone length
        this._nextTail
            .sub(this._centerSpacePosition)
            .normalize()
            .multiplyScalar(this._centerSpaceBoneLength)
            .add(this._centerSpacePosition);
        // Collisionで移動
        this._collision(this._nextTail);
        this._prevTail.copy(this._currentTail);
        this._currentTail.copy(this._nextTail);
        // Apply rotation, convert vector3 thing into actual quaternion
        // Original UniVRM is doing world unit calculus at here but we're gonna do this on local unit
        // since Three.js is not good at world coordination stuff
        var initialCenterSpaceMatrixInv = _matA.getInverse(_matB.multiply(this._initialLocalMatrix));
        var applyRotation = _quatA.setFromUnitVectors(this._boneAxis, _v3A.copy(this._nextTail).applyMatrix4(initialCenterSpaceMatrixInv).normalize());
        this.bone.quaternion.copy(this._initialLocalRotation).multiply(applyRotation);
        // We need to update its matrixWorld manually, since we tweaked the bone by our hand
        this.bone.updateMatrix();
        this.bone.matrixWorld.multiplyMatrices(this._getParentMatrixWorld(), this.bone.matrix);
    };
    /**
     * Do collision math against every colliders attached to this bone.
     *
     * @param tail The tail you want to process
     */
    VRMSpringBone.prototype._collision = function (tail) {
        var _this = this;
        this.colliders.forEach(function (collider) {
            _this._getMatrixWorldToCenter(_matA);
            _matA.multiply(collider.matrixWorld);
            var colliderCenterSpacePosition = _v3A.setFromMatrixPosition(_matA);
            var colliderRadius = collider.geometry.boundingSphere.radius; // the bounding sphere is guaranteed to be exist by VRMSpringBoneImporter._createColliderMesh
            var r = _this.radius + colliderRadius;
            if (tail.distanceToSquared(colliderCenterSpacePosition) <= r * r) {
                // ヒット。Colliderの半径方向に押し出す
                var normal = _v3B.subVectors(tail, colliderCenterSpacePosition).normalize();
                var posFromCollider = _v3C.addVectors(colliderCenterSpacePosition, normal.multiplyScalar(r));
                // normalize bone length
                tail.copy(posFromCollider
                    .sub(_this._centerSpacePosition)
                    .normalize()
                    .multiplyScalar(_this._centerSpaceBoneLength)
                    .add(_this._centerSpacePosition));
            }
        });
    };
    /**
     * Create a matrix that converts center space into world space.
     * @param target Target matrix
     */
    VRMSpringBone.prototype._getMatrixCenterToWorld = function (target) {
        if (this._center) {
            target.copy(this._center.matrixWorld);
        }
        else {
            target.identity();
        }
        return target;
    };
    /**
     * Create a matrix that converts world space into center space.
     * @param target Target matrix
     */
    VRMSpringBone.prototype._getMatrixWorldToCenter = function (target) {
        if (this._center) {
            target.copy(this._center.userData.inverseCacheProxy.inverse);
        }
        else {
            target.identity();
        }
        return target;
    };
    /**
     * Returns the world matrix of its parent object.
     */
    VRMSpringBone.prototype._getParentMatrixWorld = function () {
        return this.bone.parent ? this.bone.parent.matrixWorld : IDENTITY_MATRIX4;
    };
    return VRMSpringBone;
}());
exports.VRMSpringBone = VRMSpringBone;


/***/ }),

/***/ "./src/vrm/springbone/VRMSpringBoneColliderGroup.ts":
/*!**********************************************************!*\
  !*** ./src/vrm/springbone/VRMSpringBoneColliderGroup.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/vrm/springbone/VRMSpringBoneImporter.ts":
/*!*****************************************************!*\
  !*** ./src/vrm/springbone/VRMSpringBoneImporter.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMSpringBoneImporter = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var VRMSpringBone_1 = __webpack_require__(/*! ./VRMSpringBone */ "./src/vrm/springbone/VRMSpringBone.ts");
var VRMSpringBoneManager_1 = __webpack_require__(/*! ./VRMSpringBoneManager */ "./src/vrm/springbone/VRMSpringBoneManager.ts");
var _v3A = new THREE.Vector3();
var _colliderMaterial = new THREE.MeshBasicMaterial({ visible: false });
/**
 * An importer that imports a [[VRMSpringBoneManager]] from a VRM extension of a GLTF.
 */
var VRMSpringBoneImporter = /** @class */ (function () {
    function VRMSpringBoneImporter() {
    }
    /**
     * Import a [[VRMLookAtHead]] from a VRM.
     *
     * @param gltf A parsed result of GLTF taken from GLTFLoader
     */
    VRMSpringBoneImporter.prototype.import = function (gltf) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var vrmExt, schemaSecondaryAnimation, colliderGroups, springBoneGroupList;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        vrmExt = (_a = gltf.parser.json.extensions) === null || _a === void 0 ? void 0 : _a.VRM;
                        if (!vrmExt)
                            return [2 /*return*/, null];
                        schemaSecondaryAnimation = vrmExt.secondaryAnimation;
                        if (!schemaSecondaryAnimation)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this._importColliderMeshGroups(gltf, schemaSecondaryAnimation)];
                    case 1:
                        colliderGroups = _b.sent();
                        return [4 /*yield*/, this._importSpringBoneGroupList(gltf, schemaSecondaryAnimation, colliderGroups)];
                    case 2:
                        springBoneGroupList = _b.sent();
                        return [2 /*return*/, new VRMSpringBoneManager_1.VRMSpringBoneManager(colliderGroups, springBoneGroupList)];
                }
            });
        });
    };
    VRMSpringBoneImporter.prototype._createSpringBone = function (bone, params) {
        if (params === void 0) { params = {}; }
        return new VRMSpringBone_1.VRMSpringBone(bone, params);
    };
    VRMSpringBoneImporter.prototype._importSpringBoneGroupList = function (gltf, schemaSecondaryAnimation, colliderGroups) {
        return __awaiter(this, void 0, Promise, function () {
            var springBoneGroups, springBoneGroupList;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        springBoneGroups = schemaSecondaryAnimation.boneGroups || [];
                        springBoneGroupList = [];
                        return [4 /*yield*/, Promise.all(springBoneGroups.map(function (vrmBoneGroup) { return __awaiter(_this, void 0, void 0, function () {
                                var stiffnessForce, gravityDir, gravityPower, dragForce, radius, colliders, springBoneGroup;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (vrmBoneGroup.stiffiness === undefined ||
                                                vrmBoneGroup.gravityDir === undefined ||
                                                vrmBoneGroup.gravityDir.x === undefined ||
                                                vrmBoneGroup.gravityDir.y === undefined ||
                                                vrmBoneGroup.gravityDir.z === undefined ||
                                                vrmBoneGroup.gravityPower === undefined ||
                                                vrmBoneGroup.dragForce === undefined ||
                                                vrmBoneGroup.hitRadius === undefined ||
                                                vrmBoneGroup.colliderGroups === undefined ||
                                                vrmBoneGroup.bones === undefined ||
                                                vrmBoneGroup.center === undefined) {
                                                return [2 /*return*/];
                                            }
                                            stiffnessForce = vrmBoneGroup.stiffiness;
                                            gravityDir = new THREE.Vector3(vrmBoneGroup.gravityDir.x, vrmBoneGroup.gravityDir.y, -vrmBoneGroup.gravityDir.z);
                                            gravityPower = vrmBoneGroup.gravityPower;
                                            dragForce = vrmBoneGroup.dragForce;
                                            radius = vrmBoneGroup.hitRadius;
                                            colliders = [];
                                            vrmBoneGroup.colliderGroups.forEach(function (colliderIndex) {
                                                colliders.push.apply(colliders, colliderGroups[colliderIndex].colliders);
                                            });
                                            springBoneGroup = [];
                                            return [4 /*yield*/, Promise.all(vrmBoneGroup.bones.map(function (nodeIndex) { return __awaiter(_this, void 0, void 0, function () {
                                                    var springRootBone, center, _a;
                                                    var _this = this;
                                                    return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4 /*yield*/, gltf.parser.getDependency('node', nodeIndex)];
                                                            case 1:
                                                                springRootBone = _b.sent();
                                                                if (!(vrmBoneGroup.center !== -1)) return [3 /*break*/, 3];
                                                                return [4 /*yield*/, gltf.parser.getDependency('node', vrmBoneGroup.center)];
                                                            case 2:
                                                                _a = _b.sent();
                                                                return [3 /*break*/, 4];
                                                            case 3:
                                                                _a = null;
                                                                _b.label = 4;
                                                            case 4:
                                                                center = _a;
                                                                // it's weird but there might be cases we can't find the root bone
                                                                if (!springRootBone) {
                                                                    return [2 /*return*/];
                                                                }
                                                                springRootBone.traverse(function (bone) {
                                                                    var springBone = _this._createSpringBone(bone, {
                                                                        radius: radius,
                                                                        stiffnessForce: stiffnessForce,
                                                                        gravityDir: gravityDir,
                                                                        gravityPower: gravityPower,
                                                                        dragForce: dragForce,
                                                                        colliders: colliders,
                                                                        center: center,
                                                                    });
                                                                    springBoneGroup.push(springBone);
                                                                });
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); }))];
                                        case 1:
                                            _a.sent();
                                            springBoneGroupList.push(springBoneGroup);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, springBoneGroupList];
                }
            });
        });
    };
    /**
     * Create an array of [[VRMSpringBoneColliderGroup]].
     *
     * @param gltf A parsed result of GLTF taken from GLTFLoader
     * @param schemaSecondaryAnimation A `secondaryAnimation` field of VRM
     */
    VRMSpringBoneImporter.prototype._importColliderMeshGroups = function (gltf, schemaSecondaryAnimation) {
        return __awaiter(this, void 0, Promise, function () {
            var vrmColliderGroups, colliderGroups;
            var _this = this;
            return __generator(this, function (_a) {
                vrmColliderGroups = schemaSecondaryAnimation.colliderGroups;
                if (vrmColliderGroups === undefined)
                    return [2 /*return*/, []];
                colliderGroups = [];
                vrmColliderGroups.forEach(function (colliderGroup) { return __awaiter(_this, void 0, void 0, function () {
                    var bone, colliders, colliderMeshGroup;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (colliderGroup.node === undefined || colliderGroup.colliders === undefined) {
                                    return [2 /*return*/];
                                }
                                return [4 /*yield*/, gltf.parser.getDependency('node', colliderGroup.node)];
                            case 1:
                                bone = _a.sent();
                                colliders = [];
                                colliderGroup.colliders.forEach(function (collider) {
                                    if (collider.offset === undefined ||
                                        collider.offset.x === undefined ||
                                        collider.offset.y === undefined ||
                                        collider.offset.z === undefined ||
                                        collider.radius === undefined) {
                                        return;
                                    }
                                    var offset = _v3A.set(collider.offset.x, collider.offset.y, -collider.offset.z);
                                    var colliderMesh = _this._createColliderMesh(collider.radius, offset);
                                    bone.add(colliderMesh);
                                    colliders.push(colliderMesh);
                                });
                                colliderMeshGroup = {
                                    node: colliderGroup.node,
                                    colliders: colliders,
                                };
                                colliderGroups.push(colliderMeshGroup);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, colliderGroups];
            });
        });
    };
    /**
     * Create a collider mesh.
     *
     * @param radius Radius of the new collider mesh
     * @param offset Offest of the new collider mesh
     */
    VRMSpringBoneImporter.prototype._createColliderMesh = function (radius, offset) {
        var colliderMesh = new THREE.Mesh(new THREE.SphereBufferGeometry(radius, 8, 4), _colliderMaterial);
        colliderMesh.position.copy(offset);
        // the name have to be this in order to exclude colliders from bounding box
        // (See Viewer.ts, search for child.name === 'vrmColliderSphere')
        colliderMesh.name = 'vrmColliderSphere';
        // We will use the radius of the sphere for collision vs bones.
        // `boundingSphere` must be created to compute the radius.
        colliderMesh.geometry.computeBoundingSphere();
        return colliderMesh;
    };
    return VRMSpringBoneImporter;
}());
exports.VRMSpringBoneImporter = VRMSpringBoneImporter;


/***/ }),

/***/ "./src/vrm/springbone/VRMSpringBoneManager.ts":
/*!****************************************************!*\
  !*** ./src/vrm/springbone/VRMSpringBoneManager.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMSpringBoneManager = void 0;
/**
 * A class manages every spring bones on a VRM.
 */
var VRMSpringBoneManager = /** @class */ (function () {
    /**
     * Create a new [[VRMSpringBoneManager]]
     *
     * @param springBoneGroupList An array of [[VRMSpringBoneGroup]]
     */
    function VRMSpringBoneManager(colliderGroups, springBoneGroupList) {
        this.colliderGroups = [];
        this.springBoneGroupList = [];
        this.colliderGroups = colliderGroups;
        this.springBoneGroupList = springBoneGroupList;
    }
    /**
     * Set all bones be calculated based on the space relative from this object.
     * If `null` is given, springbone will be calculated in world space.
     * @param root Root object, or `null`
     */
    VRMSpringBoneManager.prototype.setCenter = function (root) {
        this.springBoneGroupList.forEach(function (springBoneGroup) {
            springBoneGroup.forEach(function (springBone) {
                springBone.center = root;
            });
        });
    };
    /**
     * Update every spring bone attached to this manager.
     *
     * @param delta deltaTime
     */
    VRMSpringBoneManager.prototype.lateUpdate = function (delta) {
        this.springBoneGroupList.forEach(function (springBoneGroup) {
            springBoneGroup.forEach(function (springBone) {
                springBone.update(delta);
            });
        });
    };
    /**
     * Reset every spring bone attached to this manager.
     */
    VRMSpringBoneManager.prototype.reset = function () {
        this.springBoneGroupList.forEach(function (springBoneGroup) {
            springBoneGroup.forEach(function (springBone) {
                springBone.reset();
            });
        });
    };
    return VRMSpringBoneManager;
}());
exports.VRMSpringBoneManager = VRMSpringBoneManager;


/***/ }),

/***/ "./src/vrm/springbone/VRMSpringBoneParameters.ts":
/*!*******************************************************!*\
  !*** ./src/vrm/springbone/VRMSpringBoneParameters.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/vrm/springbone/index.ts":
/*!*************************************!*\
  !*** ./src/vrm/springbone/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./VRMSpringBone */ "./src/vrm/springbone/VRMSpringBone.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMSpringBoneColliderGroup */ "./src/vrm/springbone/VRMSpringBoneColliderGroup.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMSpringBoneImporter */ "./src/vrm/springbone/VRMSpringBoneImporter.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMSpringBoneManager */ "./src/vrm/springbone/VRMSpringBoneManager.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMSpringBoneParameters */ "./src/vrm/springbone/VRMSpringBoneParameters.ts"), exports);


/***/ }),

/***/ "./src/vrm/types/GLTFSchema.ts":
/*!*************************************!*\
  !*** ./src/vrm/types/GLTFSchema.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Typedoc does not support export declarations yet
// then we have to use `namespace` instead of export declarations for now.
// See: https://github.com/TypeStrong/typedoc/pull/801
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/vrm/types/VRMSchema.ts":
/*!************************************!*\
  !*** ./src/vrm/types/VRMSchema.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Typedoc does not support export declarations yet
// then we have to use `namespace` instead of export declarations for now.
// See: https://github.com/TypeStrong/typedoc/pull/801
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRMSchema = void 0;
// eslint-disable-next-line @typescript-eslint/no-namespace
var VRMSchema;
(function (VRMSchema) {
    /**
     * Predefined Expression name
     */
    var BlendShapePresetName;
    (function (BlendShapePresetName) {
        BlendShapePresetName["A"] = "a";
        BlendShapePresetName["Angry"] = "angry";
        BlendShapePresetName["Blink"] = "blink";
        BlendShapePresetName["BlinkL"] = "blink_l";
        BlendShapePresetName["BlinkR"] = "blink_r";
        BlendShapePresetName["E"] = "e";
        BlendShapePresetName["Fun"] = "fun";
        BlendShapePresetName["I"] = "i";
        BlendShapePresetName["Joy"] = "joy";
        BlendShapePresetName["Lookdown"] = "lookdown";
        BlendShapePresetName["Lookleft"] = "lookleft";
        BlendShapePresetName["Lookright"] = "lookright";
        BlendShapePresetName["Lookup"] = "lookup";
        BlendShapePresetName["Neutral"] = "neutral";
        BlendShapePresetName["O"] = "o";
        BlendShapePresetName["Sorrow"] = "sorrow";
        BlendShapePresetName["U"] = "u";
        BlendShapePresetName["Unknown"] = "unknown";
    })(BlendShapePresetName = VRMSchema.BlendShapePresetName || (VRMSchema.BlendShapePresetName = {}));
    /**
     * Eye controller mode.
     */
    var FirstPersonLookAtTypeName;
    (function (FirstPersonLookAtTypeName) {
        FirstPersonLookAtTypeName["BlendShape"] = "BlendShape";
        FirstPersonLookAtTypeName["Bone"] = "Bone";
    })(FirstPersonLookAtTypeName = VRMSchema.FirstPersonLookAtTypeName || (VRMSchema.FirstPersonLookAtTypeName = {}));
    /**
     * Human bone name.
     */
    var HumanoidBoneName;
    (function (HumanoidBoneName) {
        HumanoidBoneName["Chest"] = "chest";
        HumanoidBoneName["Head"] = "head";
        HumanoidBoneName["Hips"] = "hips";
        HumanoidBoneName["Jaw"] = "jaw";
        HumanoidBoneName["LeftEye"] = "leftEye";
        HumanoidBoneName["LeftFoot"] = "leftFoot";
        HumanoidBoneName["LeftHand"] = "leftHand";
        HumanoidBoneName["LeftIndexDistal"] = "leftIndexDistal";
        HumanoidBoneName["LeftIndexIntermediate"] = "leftIndexIntermediate";
        HumanoidBoneName["LeftIndexProximal"] = "leftIndexProximal";
        HumanoidBoneName["LeftLittleDistal"] = "leftLittleDistal";
        HumanoidBoneName["LeftLittleIntermediate"] = "leftLittleIntermediate";
        HumanoidBoneName["LeftLittleProximal"] = "leftLittleProximal";
        HumanoidBoneName["LeftLowerArm"] = "leftLowerArm";
        HumanoidBoneName["LeftLowerLeg"] = "leftLowerLeg";
        HumanoidBoneName["LeftMiddleDistal"] = "leftMiddleDistal";
        HumanoidBoneName["LeftMiddleIntermediate"] = "leftMiddleIntermediate";
        HumanoidBoneName["LeftMiddleProximal"] = "leftMiddleProximal";
        HumanoidBoneName["LeftRingDistal"] = "leftRingDistal";
        HumanoidBoneName["LeftRingIntermediate"] = "leftRingIntermediate";
        HumanoidBoneName["LeftRingProximal"] = "leftRingProximal";
        HumanoidBoneName["LeftShoulder"] = "leftShoulder";
        HumanoidBoneName["LeftThumbDistal"] = "leftThumbDistal";
        HumanoidBoneName["LeftThumbIntermediate"] = "leftThumbIntermediate";
        HumanoidBoneName["LeftThumbProximal"] = "leftThumbProximal";
        HumanoidBoneName["LeftToes"] = "leftToes";
        HumanoidBoneName["LeftUpperArm"] = "leftUpperArm";
        HumanoidBoneName["LeftUpperLeg"] = "leftUpperLeg";
        HumanoidBoneName["Neck"] = "neck";
        HumanoidBoneName["RightEye"] = "rightEye";
        HumanoidBoneName["RightFoot"] = "rightFoot";
        HumanoidBoneName["RightHand"] = "rightHand";
        HumanoidBoneName["RightIndexDistal"] = "rightIndexDistal";
        HumanoidBoneName["RightIndexIntermediate"] = "rightIndexIntermediate";
        HumanoidBoneName["RightIndexProximal"] = "rightIndexProximal";
        HumanoidBoneName["RightLittleDistal"] = "rightLittleDistal";
        HumanoidBoneName["RightLittleIntermediate"] = "rightLittleIntermediate";
        HumanoidBoneName["RightLittleProximal"] = "rightLittleProximal";
        HumanoidBoneName["RightLowerArm"] = "rightLowerArm";
        HumanoidBoneName["RightLowerLeg"] = "rightLowerLeg";
        HumanoidBoneName["RightMiddleDistal"] = "rightMiddleDistal";
        HumanoidBoneName["RightMiddleIntermediate"] = "rightMiddleIntermediate";
        HumanoidBoneName["RightMiddleProximal"] = "rightMiddleProximal";
        HumanoidBoneName["RightRingDistal"] = "rightRingDistal";
        HumanoidBoneName["RightRingIntermediate"] = "rightRingIntermediate";
        HumanoidBoneName["RightRingProximal"] = "rightRingProximal";
        HumanoidBoneName["RightShoulder"] = "rightShoulder";
        HumanoidBoneName["RightThumbDistal"] = "rightThumbDistal";
        HumanoidBoneName["RightThumbIntermediate"] = "rightThumbIntermediate";
        HumanoidBoneName["RightThumbProximal"] = "rightThumbProximal";
        HumanoidBoneName["RightToes"] = "rightToes";
        HumanoidBoneName["RightUpperArm"] = "rightUpperArm";
        HumanoidBoneName["RightUpperLeg"] = "rightUpperLeg";
        HumanoidBoneName["Spine"] = "spine";
        HumanoidBoneName["UpperChest"] = "upperChest";
    })(HumanoidBoneName = VRMSchema.HumanoidBoneName || (VRMSchema.HumanoidBoneName = {}));
    /**
     * A person who can perform with this avatar
     */
    var MetaAllowedUserName;
    (function (MetaAllowedUserName) {
        MetaAllowedUserName["Everyone"] = "Everyone";
        MetaAllowedUserName["ExplicitlyLicensedPerson"] = "ExplicitlyLicensedPerson";
        MetaAllowedUserName["OnlyAuthor"] = "OnlyAuthor";
    })(MetaAllowedUserName = VRMSchema.MetaAllowedUserName || (VRMSchema.MetaAllowedUserName = {}));
    /**
     * For commercial use
     *
     * Permission to perform sexual acts with this avatar
     *
     * Permission to perform violent acts with this avatar
     */
    var MetaUssageName;
    (function (MetaUssageName) {
        MetaUssageName["Allow"] = "Allow";
        MetaUssageName["Disallow"] = "Disallow";
    })(MetaUssageName = VRMSchema.MetaUssageName || (VRMSchema.MetaUssageName = {}));
    /**
     * License type
     */
    var MetaLicenseName;
    (function (MetaLicenseName) {
        MetaLicenseName["Cc0"] = "CC0";
        MetaLicenseName["CcBy"] = "CC_BY";
        MetaLicenseName["CcByNc"] = "CC_BY_NC";
        MetaLicenseName["CcByNcNd"] = "CC_BY_NC_ND";
        MetaLicenseName["CcByNcSa"] = "CC_BY_NC_SA";
        MetaLicenseName["CcByNd"] = "CC_BY_ND";
        MetaLicenseName["CcBySa"] = "CC_BY_SA";
        MetaLicenseName["Other"] = "Other";
        MetaLicenseName["RedistributionProhibited"] = "Redistribution_Prohibited";
    })(MetaLicenseName = VRMSchema.MetaLicenseName || (VRMSchema.MetaLicenseName = {}));
})(VRMSchema = exports.VRMSchema || (exports.VRMSchema = {}));


/***/ }),

/***/ "./src/vrm/types/index.ts":
/*!********************************!*\
  !*** ./src/vrm/types/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Typedoc does not support export declarations yet
// then we have to use `namespace` instead of export declarations for now.
// See: https://github.com/TypeStrong/typedoc/pull/801
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as GLTFSchema from './GLTFSchema';
// import * as VRMSchema from './VRMSchema';
// export { GLTFSchema, VRMSchema };
__exportStar(__webpack_require__(/*! ./GLTFSchema */ "./src/vrm/types/GLTFSchema.ts"), exports);
__exportStar(__webpack_require__(/*! ./VRMSchema */ "./src/vrm/types/VRMSchema.ts"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./src/vrm/types/types.ts"), exports);


/***/ }),

/***/ "./src/vrm/types/types.ts":
/*!********************************!*\
  !*** ./src/vrm/types/types.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/vrm/utils/Matrix4InverseCache.ts":
/*!**********************************************!*\
  !*** ./src/vrm/utils/Matrix4InverseCache.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix4InverseCache = void 0;
var THREE = __webpack_require__(/*! three */ "three");
var Matrix4InverseCache = /** @class */ (function () {
    function Matrix4InverseCache(matrix) {
        var _this = this;
        /**
         * A cache of inverse of current matrix.
         */
        this._inverseCache = new THREE.Matrix4();
        /**
         * A flag that makes it want to recalculate its {@link _inverseCache}.
         * Will be set `true` when `elements` are mutated and be used in `getInverse`.
         */
        this._shouldUpdateInverse = true;
        this.matrix = matrix;
        var handler = {
            set: function (obj, prop, newVal) {
                _this._shouldUpdateInverse = true;
                obj[prop] = newVal;
                return true;
            },
        };
        this._originalElements = matrix.elements;
        matrix.elements = new Proxy(matrix.elements, handler);
    }
    Object.defineProperty(Matrix4InverseCache.prototype, "inverse", {
        /**
         * Inverse of given matrix.
         * Note that it will return its internal private instance.
         * Make sure copying this before mutate this.
         */
        get: function () {
            if (this._shouldUpdateInverse) {
                this._inverseCache.getInverse(this.matrix);
                this._shouldUpdateInverse = false;
            }
            return this._inverseCache;
        },
        enumerable: false,
        configurable: true
    });
    Matrix4InverseCache.prototype.revert = function () {
        this.matrix.elements = this._originalElements;
    };
    return Matrix4InverseCache;
}());
exports.Matrix4InverseCache = Matrix4InverseCache;


/***/ }),

/***/ "./src/vrm/utils/disposer.ts":
/*!***********************************!*\
  !*** ./src/vrm/utils/disposer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// See: https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepDispose = void 0;
function disposeMaterial(material) {
    Object.keys(material).forEach(function (propertyName) {
        var value = material[propertyName];
        if (value === null || value === void 0 ? void 0 : value.isTexture) {
            var texture = value;
            texture.dispose();
        }
    });
    material.dispose();
}
function dispose(object3D) {
    var geometry = object3D.geometry;
    if (geometry) {
        geometry.dispose();
    }
    var material = object3D.material;
    if (material) {
        if (Array.isArray(material)) {
            material.forEach(function (material) { return disposeMaterial(material); });
        }
        else if (material) {
            disposeMaterial(material);
        }
    }
}
function deepDispose(object3D) {
    object3D.traverse(dispose);
}
exports.deepDispose = deepDispose;


/***/ }),

/***/ "./src/vrm/utils/math.ts":
/*!*******************************!*\
  !*** ./src/vrm/utils/math.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorldQuaternionLite = exports.getWorldScaleLite = exports.getWorldPositionLite = exports.linstep = exports.saturate = void 0;
var THREE = __webpack_require__(/*! three */ "three");
/**
 * Clamp an input number within [ `0.0` - `1.0` ].
 *
 * @param value The input value
 */
function saturate(value) {
    return Math.max(Math.min(value, 1.0), 0.0);
}
exports.saturate = saturate;
/**
 * Map the range of an input value from [ `min` - `max` ] to [ `0.0` - `1.0` ].
 * If input value is less than `min` , it returns `0.0`.
 * If input value is greater than `max` , it returns `1.0`.
 *
 * See also: https://threejs.org/docs/#api/en/math/Math.smoothstep
 *
 * @param x The value that will be mapped into the specified range
 * @param min Minimum value of the range
 * @param max Maximum value of the range
 */
function linstep(x, min, max) {
    if (x <= min)
        return 0;
    if (x >= max)
        return 1;
    return (x - min) / (max - min);
}
exports.linstep = linstep;
var _position = new THREE.Vector3();
var _scale = new THREE.Vector3();
var _rotation = new THREE.Quaternion();
/**
 * Extract world position of an object from its world space matrix, in cheaper way.
 *
 * @param object The object
 * @param out Target vector
 */
function getWorldPositionLite(object, out) {
    object.matrixWorld.decompose(out, _rotation, _scale);
    return out;
}
exports.getWorldPositionLite = getWorldPositionLite;
/**
 * Extract world scale of an object from its world space matrix, in cheaper way.
 *
 * @param object The object
 * @param out Target vector
 */
function getWorldScaleLite(object, out) {
    object.matrixWorld.decompose(_position, _rotation, out);
    return out;
}
exports.getWorldScaleLite = getWorldScaleLite;
/**
 * Extract world rotation of an object from its world space matrix, in cheaper way.
 *
 * @param object The object
 * @param out Target vector
 */
function getWorldQuaternionLite(object, out) {
    object.matrixWorld.decompose(_position, out, _scale);
    return out;
}
exports.getWorldQuaternionLite = getWorldQuaternionLite;


/***/ }),

/***/ "./src/vrm/utils/renameMaterialProperty.ts":
/*!*************************************************!*\
  !*** ./src/vrm/utils/renameMaterialProperty.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.renameMaterialProperty = void 0;
function renameMaterialProperty(name) {
    if (name[0] !== '_') {
        console.warn("renameMaterialProperty: Given property name \"" + name + "\" might be invalid");
        return name;
    }
    name = name.substring(1);
    if (!/[A-Z]/.test(name[0])) {
        console.warn("renameMaterialProperty: Given property name \"" + name + "\" might be invalid");
        return name;
    }
    return name[0].toLowerCase() + name.substring(1);
}
exports.renameMaterialProperty = renameMaterialProperty;


/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "THREE" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = THREE;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvYXNzaWduLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vVlJNLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL1ZSTUltcG9ydGVyLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL1ZSTVV0aWxzL2V4dHJhY3RUaHVtYm5haWxCbG9iLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL1ZSTVV0aWxzL2luZGV4LnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL1ZSTVV0aWxzL3JlbW92ZVVubmVjZXNzYXJ5Sm9pbnRzLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL2JsZW5kc2hhcGUvVlJNQmxlbmRTaGFwZUdyb3VwLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL2JsZW5kc2hhcGUvVlJNQmxlbmRTaGFwZUltcG9ydGVyLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL2JsZW5kc2hhcGUvVlJNQmxlbmRTaGFwZVByb3h5LnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL2JsZW5kc2hhcGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vZGVidWcvVlJNRGVidWcudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vZGVidWcvVlJNRGVidWdPcHRpb25zLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL2RlYnVnL1ZSTUltcG9ydGVyRGVidWcudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vZGVidWcvVlJNTG9va0F0SGVhZERlYnVnLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL2RlYnVnL1ZSTUxvb2tBdEltcG9ydGVyRGVidWcudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vZGVidWcvVlJNU3ByaW5nQm9uZURlYnVnLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL2RlYnVnL1ZSTVNwcmluZ0JvbmVJbXBvcnRlckRlYnVnLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL2RlYnVnL1ZSTVNwcmluZ0JvbmVNYW5hZ2VyRGVidWcudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vZGVidWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vZmlyc3RwZXJzb24vVlJNRmlyc3RQZXJzb24udHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vZmlyc3RwZXJzb24vVlJNRmlyc3RQZXJzb25JbXBvcnRlci50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9maXJzdHBlcnNvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9odW1hbm9pZC9WUk1IdW1hbkJvbmUudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vaHVtYW5vaWQvVlJNSHVtYW5Cb25lcy50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9odW1hbm9pZC9WUk1IdW1hbkRlc2NyaXB0aW9uLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL2h1bWFub2lkL1ZSTUh1bWFuTGltaXQudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vaHVtYW5vaWQvVlJNSHVtYW5vaWQudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vaHVtYW5vaWQvVlJNSHVtYW5vaWRJbXBvcnRlci50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9odW1hbm9pZC9pbmRleC50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9pbmRleC50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9sb29rYXQvVlJNQ3VydmVNYXBwZXIudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vbG9va2F0L1ZSTUxvb2tBdEFwcGx5ZXIudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vbG9va2F0L1ZSTUxvb2tBdEJsZW5kU2hhcGVBcHBseWVyLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL2xvb2thdC9WUk1Mb29rQXRCb25lQXBwbHllci50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9sb29rYXQvVlJNTG9va0F0SGVhZC50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9sb29rYXQvVlJNTG9va0F0SW1wb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vbG9va2F0L2luZGV4LnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL21hdGVyaWFsL01Ub29uTWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vbWF0ZXJpYWwvVlJNTWF0ZXJpYWxJbXBvcnRlci50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9tYXRlcmlhbC9WUk1VbmxpdE1hdGVyaWFsLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL21hdGVyaWFsL2dldFRleGVsRGVjb2RpbmdGdW5jdGlvbi50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9tYXRlcmlhbC9pbmRleC50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9tYXRlcmlhbC9zaGFkZXJzL210b29uLmZyYWciLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vbWF0ZXJpYWwvc2hhZGVycy9tdG9vbi52ZXJ0Iiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL21hdGVyaWFsL3NoYWRlcnMvdW5saXQuZnJhZyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9tYXRlcmlhbC9zaGFkZXJzL3VubGl0LnZlcnQiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vbWV0YS9WUk1NZXRhLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL21ldGEvVlJNTWV0YUltcG9ydGVyLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL21ldGEvVlJNTWV0YUltcG9ydGVyT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9tZXRhL2luZGV4LnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL3NwcmluZ2JvbmUvVlJNU3ByaW5nQm9uZS50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9zcHJpbmdib25lL1ZSTVNwcmluZ0JvbmVDb2xsaWRlckdyb3VwLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL3NwcmluZ2JvbmUvVlJNU3ByaW5nQm9uZUltcG9ydGVyLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL3NwcmluZ2JvbmUvVlJNU3ByaW5nQm9uZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vc3ByaW5nYm9uZS9WUk1TcHJpbmdCb25lUGFyYW1ldGVycy50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS9zcHJpbmdib25lL2luZGV4LnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL3R5cGVzL0dMVEZTY2hlbWEudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vdHlwZXMvVlJNU2NoZW1hLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL3R5cGVzL2luZGV4LnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL3R5cGVzL3R5cGVzLnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vLi9zcmMvdnJtL3V0aWxzL01hdHJpeDRJbnZlcnNlQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vdXRpbHMvZGlzcG9zZXIudHMiLCJ3ZWJwYWNrOi8vX190aHJlZV92cm1fXy8uL3NyYy92cm0vdXRpbHMvbWF0aC50cyIsIndlYnBhY2s6Ly9fX3RocmVlX3ZybV9fLy4vc3JjL3ZybS91dGlscy9yZW5hbWVNYXRlcmlhbFByb3BlcnR5LnRzIiwid2VicGFjazovL19fdGhyZWVfdnJtX18vZXh0ZXJuYWwgXCJUSFJFRVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7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Q0EsQ0FBQywwQ0FBMEM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsc0RBQXNELEVBQUU7QUFDN0c7QUFDQTtBQUNBO0FBQ0EscURBQXFELHNEQUFzRCxFQUFFO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtB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LFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ25nQmE7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSxpREFBaUQsUUFBUTtBQUN6RCx3Q0FBd0MsUUFBUTtBQUNoRCx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixzQkFBc0IsbUJBQU8sQ0FBQyw0REFBaUI7QUFDL0MseUJBQXlCLG1CQUFPLENBQUMsa0VBQW9CO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLGdDQUFnQztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsaURBQWlELEVBQUUsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw2QkFBNkIsRUFBRSxFQUFFO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsMEVBQTBFLGdCQUFnQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsZ0JBQWdCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDZCQUE2QixFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxnQkFBZ0I7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGVBQWUsRUFBRTtBQUN4RTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaFhhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixtQkFBbUIsbUJBQU8sQ0FBQyxtRUFBc0I7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMsbUVBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNkdBQTZHO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEM7QUFDQSw2QkFBNkIsK0NBQStDO0FBQzVFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzNJYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDJEQUEyRCxFQUFFO0FBQ2xIOzs7Ozs7Ozs7Ozs7O0FDM0JhO0FBQ2I7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLDREQUFpQjtBQUN0QyxhQUFhLG1CQUFPLENBQUMsd0VBQXVCO0FBQzVDLGFBQWEsbUJBQU8sQ0FBQyxrRUFBb0I7Ozs7Ozs7Ozs7Ozs7QUNkekM7QUFBZSxvSUFBcUUsK0JBQStCLDJCQUEyQiwwQkFBMEIsNERBQTRELDRDQUE0Qyw0RUFBNEUsMkNBQTJDLDBFQUEwRSxxQ0FBcUMsMkJBQTJCLHNDQUFzQyx1Q0FBdUMsMERBQTBELGdDQUFnQywrQkFBK0IsZ0NBQWdDLHdCQUF3Qix3REFBd0QsdUNBQXVDLDhCQUE4QixtQ0FBbUMsd0VBQXdFLHdDQUF3Qyw4QkFBOEIsNEJBQTRCLHljQUF5Yyw0YkFBNGIsZ0RBQWdELHNPQUFzTyw2QkFBNkIsMEVBQTBFLDBZQUEwWSxrSkFBa0osZ0ZBQWdGLCtCQUErQiwrQkFBK0IsNERBQTRELDJGQUEyRixxREFBcUQsZ09BQWdPLHlCQUF5QixPQUFPLDJCQUEyQix5QkFBeUIsc0NBQXNDLHVLQUF1SywwREFBMEQsMEVBQTBFLGlEQUFpRCxxQ0FBcUMsT0FBTywrWEFBK1gseUVBQXlFLGdEQUFnRCw2Q0FBNkMsbURBQW1ELGdEQUFnRCwwSkFBMEosR0FBRyxrREFBa0QsK0JBQStCLGdKQUFnSiw0REFBNEQsZ0NBQWdDLEdBQUcsbUlBQW1JLG9HQUFvRyw0RkFBNEYsR0FBRywyS0FBMkssOEJBQThCLG1DQUFtQywrQkFBK0IsaUlBQWlJLHdEQUF3RCxrR0FBa0csd0VBQXdFLHVEQUF1RCxzQkFBc0IsU0FBUyxzQ0FBc0MsMkVBQTJFLDRCQUE0Qiw4U0FBOFMsNkZBQTZGLGdHQUFnRyx5REFBeUQsMkZBQTJGLGdDQUFnQyxPQUFPLGtHQUFrRyx1REFBdUQscUJBQXFCLFNBQVMsb0NBQW9DLHlFQUF5RSw0QkFBNEIsME9BQTBPLDZGQUE2RixnR0FBZ0cseURBQXlELDJGQUEyRixnQ0FBZ0MsT0FBTywrR0FBK0csdURBQXVELG9CQUFvQixTQUFTLGtEQUFrRCx1RkFBdUYsNEJBQTRCLG9SQUFvUiw2RkFBNkYsZ0dBQWdHLHlEQUF5RCwyRkFBMkYsZ0NBQWdDLE9BQU8sZ0VBQWdFLEdBQUcsNkdBQTZHLDhLQUE4SyxtR0FBbUcsc0VBQXNFLHdUQUF3VCwrQkFBK0IsNEZBQTRGLGdGQUFnRix1REFBdUQsdURBQXVELGdGQUFnRiwrRUFBK0UscVZBQXFWLHlCQUF5Qiw4REFBOEQseUdBQXlHLCtDQUErQyxzSkFBc0osc1FBQXNRLFNBQVMsRUFBRSwyQkFBMkIsa0VBQWtFLHdKQUF3Six1QkFBdUIsYUFBYSwrSEFBK0gsZ0pBQWdKLHlHQUF5Ryw2R0FBNkcsa0VBQWtFLDRHQUE0Ryw2QkFBNkIsc0VBQXNFLHNGQUFzRix3TEFBd0wsd0ZBQXdGLGFBQWEsK05BQStOLDRCQUE0Qix5R0FBeUcsMENBQTBDLDBDQUEwQyw2QkFBNkIsa0RBQWtELGlHQUFpRyx1RUFBdUUsb0ZBQW9GLHFCQUFxQixTQUFTLHNGQUFzRixPQUFPLDBMQUEwTCx3RUFBd0UsdUNBQXVDLHFGQUFxRix5SkFBeUosK0hBQStILDZMQUE2TCx1QkFBdUIsYUFBYSwwRkFBMEYsdUJBQXVCLGFBQWEsNElBQTRJLGlHQUFpRyxxR0FBcUcsaUdBQWlHLHlCQUF5QixtSEFBbUgsaUVBQWlFLHFDQUFxQywrR0FBK0cscUZBQXFGLHNCQUFzQixPQUFPLCtIQUErSCxzS0FBc0sscUJBQXFCLEdBQUcsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNBdDZlO0FBQWUsK0dBQWdELGdEQUFnRCx1WEFBdVgsNEJBQTRCLDRhQUE0YSx1Q0FBdUMseUNBQXlDLGlCQUFpQiwrWkFBK1osb1NBQW9TLGtLQUFrSywwUkFBMFIsNkJBQTZCLHFIQUFxSCw0R0FBNEcsaUdBQWlHLG9HQUFvRyxnSkFBZ0osMERBQTBELDBFQUEwRSwrRUFBK0UsZ0ZBQWdGLDBEQUEwRCw2SkFBNkosQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNBNXRHO0FBQWUsaUhBQWtELG1pQkFBbWlCLDZFQUE2RSx1SkFBdUosd01BQXdNLFNBQVMsRUFBRSwyQkFBMkIsbUVBQW1FLDZKQUE2Six1S0FBdUssNkRBQTZELHNIQUFzSCx3REFBd0QsOEZBQThGLCtJQUErSSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ0F0NUQ7QUFBZSxzSkFBdUYsNEJBQTRCLGlTQUFpUywwSUFBMEksaWlCQUFpaUIsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNBbGtDO0FBQ2IsOENBQThDLGNBQWM7Ozs7Ozs7Ozs7Ozs7QUNEL0M7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDeEZhO0FBQ2IsOENBQThDLGNBQWM7Ozs7Ozs7Ozs7Ozs7QUNEL0M7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDRDQUFXO0FBQ25DLDJDQUEyQyxxQ0FBcUMsMEJBQTBCLEVBQUUsRUFBRTtBQUM5Ryx3QkFBd0IsbUJBQU8sQ0FBQyw0REFBbUI7QUFDbkQsbURBQW1ELHFDQUFxQywwQ0FBMEMsRUFBRSxFQUFFO0FBQ3RJLCtCQUErQixtQkFBTyxDQUFDLDBFQUEwQjtBQUNqRSwwREFBMEQscUNBQXFDLHdEQUF3RCxFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUNSOUk7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixhQUFhLG1CQUFPLENBQUMsOENBQWU7QUFDcEMsNEJBQTRCLG1CQUFPLENBQUMsNEVBQThCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzR0FBc0c7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Y0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGtDQUFrQyxFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaENhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxZQUFZLG1CQUFPLENBQUMsb0JBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQSx1QiIsImZpbGUiOiJ0aHJlZS12cm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hc3NpZ24udHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG52YXIgX190aHJlZV92cm1fXyA9IHJlcXVpcmUoXCIuXCIpO1xyXG4vLyBAdHMtaWdub3JlXHJcbk9iamVjdC5hc3NpZ24oVEhSRUUsIF9fdGhyZWVfdnJtX18pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3ZybS9cIiksIGV4cG9ydHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5WUk0gPSB2b2lkIDA7XHJcbnZhciBkaXNwb3Nlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvZGlzcG9zZXJcIik7XHJcbnZhciBWUk1JbXBvcnRlcl8xID0gcmVxdWlyZShcIi4vVlJNSW1wb3J0ZXJcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIHRoYXQgcmVwcmVzZW50cyBhIHNpbmdsZSBWUk0gbW9kZWwuXHJcbiAqIFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBvZiBbW1ZSTS5mcm9tXV0gZm9yIHRoZSBtb3N0IGJhc2ljIHVzZSBvZiBWUk0uXHJcbiAqL1xyXG52YXIgVlJNID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgVlJNIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgW1tWUk1QYXJhbWV0ZXJzXV0gdGhhdCByZXByZXNlbnRzIGNvbXBvbmVudHMgb2YgdGhlIFZSTVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBWUk0ocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHBhcmFtcy5zY2VuZTtcclxuICAgICAgICB0aGlzLmh1bWFub2lkID0gcGFyYW1zLmh1bWFub2lkO1xyXG4gICAgICAgIHRoaXMuYmxlbmRTaGFwZVByb3h5ID0gcGFyYW1zLmJsZW5kU2hhcGVQcm94eTtcclxuICAgICAgICB0aGlzLmZpcnN0UGVyc29uID0gcGFyYW1zLmZpcnN0UGVyc29uO1xyXG4gICAgICAgIHRoaXMubG9va0F0ID0gcGFyYW1zLmxvb2tBdDtcclxuICAgICAgICB0aGlzLm1hdGVyaWFscyA9IHBhcmFtcy5tYXRlcmlhbHM7XHJcbiAgICAgICAgdGhpcy5zcHJpbmdCb25lTWFuYWdlciA9IHBhcmFtcy5zcHJpbmdCb25lTWFuYWdlcjtcclxuICAgICAgICB0aGlzLm1ldGEgPSBwYXJhbXMubWV0YTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IFZSTSBmcm9tIGEgcGFyc2VkIHJlc3VsdCBvZiBHTFRGIHRha2VuIGZyb20gR0xURkxvYWRlci5cclxuICAgICAqIEl0J3MgcHJvYmFibHkgYSB0aGluZyB3aGF0IHlvdSB3YW50IHRvIGdldCBzdGFydGVkIHdpdGggVlJNcy5cclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZSBNb3N0IGJhc2ljIHVzZSBvZiBWUk1cclxuICAgICAqIGBgYFxyXG4gICAgICogY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgICAqXHJcbiAgICAgKiBuZXcgVEhSRUUuR0xURkxvYWRlcigpLmxvYWQoICdtb2RlbHMvdGhyZWUtdnJtLWdpcmwudnJtJywgKCBnbHRmICkgPT4ge1xyXG4gICAgICpcclxuICAgICAqICAgVEhSRUUuVlJNLmZyb20oIGdsdGYgKS50aGVuKCAoIHZybSApID0+IHtcclxuICAgICAqXHJcbiAgICAgKiAgICAgc2NlbmUuYWRkKCB2cm0uc2NlbmUgKTtcclxuICAgICAqXHJcbiAgICAgKiAgIH0gKTtcclxuICAgICAqXHJcbiAgICAgKiB9ICk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZ2x0ZiBBIHBhcnNlZCBHTFRGIG9iamVjdCB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdGhhdCB3aWxsIGJlIHVzZWQgaW4gaW1wb3J0ZXJcclxuICAgICAqL1xyXG4gICAgVlJNLmZyb20gPSBmdW5jdGlvbiAoZ2x0Ziwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGltcG9ydGVyO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRlciA9IG5ldyBWUk1JbXBvcnRlcl8xLlZSTUltcG9ydGVyKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnRlci5pbXBvcnQoZ2x0ZildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogKipZb3UgbmVlZCB0byBjYWxsIHRoaXMgb24geW91ciB1cGRhdGUgbG9vcC4qKlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyBldmVyeSBWUk0gY29tcG9uZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZGVsdGEgZGVsdGFUaW1lXHJcbiAgICAgKi9cclxuICAgIFZSTS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9va0F0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9va0F0LnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJsZW5kU2hhcGVQcm94eSkge1xyXG4gICAgICAgICAgICB0aGlzLmJsZW5kU2hhcGVQcm94eS51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3ByaW5nQm9uZU1hbmFnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpbmdCb25lTWFuYWdlci5sYXRlVXBkYXRlKGRlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLmZvckVhY2goZnVuY3Rpb24gKG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWwudXBkYXRlVlJNTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwudXBkYXRlVlJNTWF0ZXJpYWxzKGRlbHRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZSBldmVyeXRoaW5nIGFib3V0IHRoZSBWUk0gaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIFZSTS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHZhciBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcbiAgICAgICAgaWYgKHNjZW5lKSB7XHJcbiAgICAgICAgICAgIGRpc3Bvc2VyXzEuZGVlcERpc3Bvc2Uoc2NlbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLm1ldGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50ZXh0dXJlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGlzcG9zZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWUk07XHJcbn0oKSk7XHJcbmV4cG9ydHMuVlJNID0gVlJNO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5WUk1JbXBvcnRlciA9IHZvaWQgMDtcclxudmFyIGJsZW5kc2hhcGVfMSA9IHJlcXVpcmUoXCIuL2JsZW5kc2hhcGVcIik7XHJcbnZhciBmaXJzdHBlcnNvbl8xID0gcmVxdWlyZShcIi4vZmlyc3RwZXJzb25cIik7XHJcbnZhciBWUk1IdW1hbm9pZEltcG9ydGVyXzEgPSByZXF1aXJlKFwiLi9odW1hbm9pZC9WUk1IdW1hbm9pZEltcG9ydGVyXCIpO1xyXG52YXIgVlJNTG9va0F0SW1wb3J0ZXJfMSA9IHJlcXVpcmUoXCIuL2xvb2thdC9WUk1Mb29rQXRJbXBvcnRlclwiKTtcclxudmFyIG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiLi9tYXRlcmlhbFwiKTtcclxudmFyIFZSTU1ldGFJbXBvcnRlcl8xID0gcmVxdWlyZShcIi4vbWV0YS9WUk1NZXRhSW1wb3J0ZXJcIik7XHJcbnZhciBWUk1TcHJpbmdCb25lSW1wb3J0ZXJfMSA9IHJlcXVpcmUoXCIuL3NwcmluZ2JvbmUvVlJNU3ByaW5nQm9uZUltcG9ydGVyXCIpO1xyXG52YXIgVlJNXzEgPSByZXF1aXJlKFwiLi9WUk1cIik7XHJcbi8qKlxyXG4gKiBBbiBpbXBvcnRlciB0aGF0IGltcG9ydHMgYSBbW1ZSTV1dIGZyb20gYSBWUk0gZXh0ZW5zaW9uIG9mIGEgR0xURi5cclxuICovXHJcbnZhciBWUk1JbXBvcnRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IFZSTUltcG9ydGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFtbVlJNSW1wb3J0ZXJPcHRpb25zXV0sIG9wdGlvbmFsbHkgY29udGFpbnMgaW1wb3J0ZXJzIGZvciBlYWNoIGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBWUk1JbXBvcnRlcihvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICB0aGlzLl9tZXRhSW1wb3J0ZXIgPSBvcHRpb25zLm1ldGFJbXBvcnRlciB8fCBuZXcgVlJNTWV0YUltcG9ydGVyXzEuVlJNTWV0YUltcG9ydGVyKCk7XHJcbiAgICAgICAgdGhpcy5fYmxlbmRTaGFwZUltcG9ydGVyID0gb3B0aW9ucy5ibGVuZFNoYXBlSW1wb3J0ZXIgfHwgbmV3IGJsZW5kc2hhcGVfMS5WUk1CbGVuZFNoYXBlSW1wb3J0ZXIoKTtcclxuICAgICAgICB0aGlzLl9sb29rQXRJbXBvcnRlciA9IG9wdGlvbnMubG9va0F0SW1wb3J0ZXIgfHwgbmV3IFZSTUxvb2tBdEltcG9ydGVyXzEuVlJNTG9va0F0SW1wb3J0ZXIoKTtcclxuICAgICAgICB0aGlzLl9odW1hbm9pZEltcG9ydGVyID0gb3B0aW9ucy5odW1hbm9pZEltcG9ydGVyIHx8IG5ldyBWUk1IdW1hbm9pZEltcG9ydGVyXzEuVlJNSHVtYW5vaWRJbXBvcnRlcigpO1xyXG4gICAgICAgIHRoaXMuX2ZpcnN0UGVyc29uSW1wb3J0ZXIgPSBvcHRpb25zLmZpcnN0UGVyc29uSW1wb3J0ZXIgfHwgbmV3IGZpcnN0cGVyc29uXzEuVlJNRmlyc3RQZXJzb25JbXBvcnRlcigpO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsSW1wb3J0ZXIgPSBvcHRpb25zLm1hdGVyaWFsSW1wb3J0ZXIgfHwgbmV3IG1hdGVyaWFsXzEuVlJNTWF0ZXJpYWxJbXBvcnRlcigpO1xyXG4gICAgICAgIHRoaXMuX3NwcmluZ0JvbmVJbXBvcnRlciA9IG9wdGlvbnMuc3ByaW5nQm9uZUltcG9ydGVyIHx8IG5ldyBWUk1TcHJpbmdCb25lSW1wb3J0ZXJfMS5WUk1TcHJpbmdCb25lSW1wb3J0ZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVjZWl2ZSBhIEdMVEYgb2JqZWN0IHJldHJpZXZlZCBmcm9tIGBUSFJFRS5HTFRGTG9hZGVyYCBhbmQgY3JlYXRlIGEgbmV3IFtbVlJNXV0gaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXHJcbiAgICAgKi9cclxuICAgIFZSTUltcG9ydGVyLnByb3RvdHlwZS5pbXBvcnQgPSBmdW5jdGlvbiAoZ2x0Zikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzY2VuZSwgbWV0YSwgbWF0ZXJpYWxzLCBodW1hbm9pZCwgZmlyc3RQZXJzb24sIF9hLCBibGVuZFNoYXBlUHJveHksIGxvb2tBdCwgX2IsIHNwcmluZ0JvbmVNYW5hZ2VyO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2x0Zi5wYXJzZXIuanNvbi5leHRlbnNpb25zID09PSB1bmRlZmluZWQgfHwgZ2x0Zi5wYXJzZXIuanNvbi5leHRlbnNpb25zLlZSTSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIFZSTSBleHRlbnNpb24gb24gdGhlIEdMVEYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZSA9IGdsdGYuc2NlbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnVwZGF0ZU1hdHJpeFdvcmxkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2tpbm5lZCBvYmplY3Qgc2hvdWxkIG5vdCBiZSBmcnVzdHVtQ3VsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHByZS1za2lubmVkIHBvc2l0aW9uIG1pZ2h0IGJlIG91dHNpZGUgb2Ygdmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS50cmF2ZXJzZShmdW5jdGlvbiAob2JqZWN0M2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QzZC5pc01lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QzZC5mcnVzdHVtQ3VsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tZXRhSW1wb3J0ZXIuaW1wb3J0KGdsdGYpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGEgPSAoX2Muc2VudCgpKSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX21hdGVyaWFsSW1wb3J0ZXIuY29udmVydEdMVEZNYXRlcmlhbHMoZ2x0ZildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzID0gKF9jLnNlbnQoKSkgfHwgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9odW1hbm9pZEltcG9ydGVyLmltcG9ydChnbHRmKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodW1hbm9pZCA9IChfYy5zZW50KCkpIHx8IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodW1hbm9pZCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX2ZpcnN0UGVyc29uSW1wb3J0ZXIuaW1wb3J0KGdsdGYsIGh1bWFub2lkKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IChfYy5zZW50KCkpIHx8IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RQZXJzb24gPSBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fYmxlbmRTaGFwZUltcG9ydGVyLmltcG9ydChnbHRmKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibGVuZFNoYXBlUHJveHkgPSAoX2Muc2VudCgpKSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGZpcnN0UGVyc29uICYmIGJsZW5kU2hhcGVQcm94eSAmJiBodW1hbm9pZCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9sb29rQXRJbXBvcnRlci5pbXBvcnQoZ2x0ZiwgZmlyc3RQZXJzb24sIGJsZW5kU2hhcGVQcm94eSwgaHVtYW5vaWQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gKF9jLnNlbnQoKSkgfHwgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29rQXQgPSBfYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fc3ByaW5nQm9uZUltcG9ydGVyLmltcG9ydChnbHRmKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaW5nQm9uZU1hbmFnZXIgPSAoX2Muc2VudCgpKSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgVlJNXzEuVlJNKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZTogZ2x0Zi5zY2VuZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhOiBtZXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsczogbWF0ZXJpYWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh1bWFub2lkOiBodW1hbm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFBlcnNvbjogZmlyc3RQZXJzb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxlbmRTaGFwZVByb3h5OiBibGVuZFNoYXBlUHJveHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9va0F0OiBsb29rQXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaW5nQm9uZU1hbmFnZXI6IHNwcmluZ0JvbmVNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVlJNSW1wb3J0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVlJNSW1wb3J0ZXIgPSBWUk1JbXBvcnRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5leHRyYWN0VGh1bWJuYWlsQmxvYiA9IHZvaWQgMDtcclxudmFyIFRIUkVFID0gcmVxdWlyZShcInRocmVlXCIpO1xyXG52YXIgX3YyQSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbnZhciBfY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSgtMSwgMSwgLTEsIDEsIC0xLCAxKTtcclxudmFyIF9wbGFuZSA9IG5ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDIsIDIpLCBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmZmYsIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUgfSkpO1xyXG52YXIgX3NjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbl9zY2VuZS5hZGQoX3BsYW5lKTtcclxuLyoqXHJcbiAqIEV4dHJhY3QgYSB0aHVtYm5haWwgaW1hZ2UgYmxvYiBmcm9tIGEge0BsaW5rIFZSTX0uXHJcbiAqIElmIHRoZSB2cm0gZG9lcyBub3QgaGF2ZSBhIHRodW1ibmFpbCwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cclxuICogQHBhcmFtIHJlbmRlcmVyIFJlbmRlcmVyXHJcbiAqIEBwYXJhbSB2cm0gVlJNIHdpdGggYSB0aHVtYm5haWxcclxuICogQHBhcmFtIHNpemUgd2lkdGggLyBoZWlnaHQgb2YgdGhlIGltYWdlXHJcbiAqL1xyXG5mdW5jdGlvbiBleHRyYWN0VGh1bWJuYWlsQmxvYihyZW5kZXJlciwgdnJtLCBzaXplKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAoc2l6ZSA9PT0gdm9pZCAwKSB7IHNpemUgPSA1MTI7IH1cclxuICAgIC8vIGdldCB0aGUgdGV4dHVyZVxyXG4gICAgdmFyIHRleHR1cmUgPSAoX2EgPSB2cm0ubWV0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHR1cmU7XHJcbiAgICBpZiAoIXRleHR1cmUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4dHJhY3RUaHVtYm5haWxCbG9iOiBUaGlzIFZSTSBkb2VzIG5vdCBoYXZlIGEgdGh1bWJuYWlsJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgY2FudmFzID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpLmNhbnZhcztcclxuICAgIC8vIHN0b3JlIHRoZSBjdXJyZW50IHJlc29sdXRpb25cclxuICAgIHJlbmRlcmVyLmdldFNpemUoX3YyQSk7XHJcbiAgICB2YXIgcHJldldpZHRoID0gX3YyQS54O1xyXG4gICAgdmFyIHByZXZIZWlnaHQgPSBfdjJBLnk7XHJcbiAgICAvLyBvdmVyd3JpdGUgdGhlIHJlc29sdXRpb25cclxuICAgIHJlbmRlcmVyLnNldFNpemUoc2l6ZSwgc2l6ZSwgZmFsc2UpO1xyXG4gICAgLy8gYXNzaWduIHRoZSB0ZXh0dXJlIHRvIHBsYW5lXHJcbiAgICBfcGxhbmUubWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcclxuICAgIC8vIHJlbmRlclxyXG4gICAgcmVuZGVyZXIucmVuZGVyKF9zY2VuZSwgX2NhbWVyYSk7XHJcbiAgICAvLyB1bmFzc2lnbiB0aGUgdGV4dHVyZVxyXG4gICAgX3BsYW5lLm1hdGVyaWFsLm1hcCA9IG51bGw7XHJcbiAgICAvLyBnZXQgYmxvYlxyXG4gICAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcykge1xyXG4gICAgICAgIHJldHVybiBjYW52YXMuY29udmVydFRvQmxvYigpLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyByZXZlcnQgdG8gcHJldmlvdXMgcmVzb2x1dGlvblxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHByZXZXaWR0aCwgcHJldkhlaWdodCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBjYW52YXMudG9CbG9iKGZ1bmN0aW9uIChibG9iKSB7XHJcbiAgICAgICAgICAgIC8vIHJldmVydCB0byBwcmV2aW91cyByZXNvbHV0aW9uXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUocHJldldpZHRoLCBwcmV2SGVpZ2h0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChibG9iID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgnZXh0cmFjdFRodW1ibmFpbEJsb2I6IEZhaWxlZCB0byBjcmVhdGUgYSBibG9iJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGJsb2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmV4dHJhY3RUaHVtYm5haWxCbG9iID0gZXh0cmFjdFRodW1ibmFpbEJsb2I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVlJNVXRpbHMgPSB2b2lkIDA7XHJcbnZhciBleHRyYWN0VGh1bWJuYWlsQmxvYl8xID0gcmVxdWlyZShcIi4vZXh0cmFjdFRodW1ibmFpbEJsb2JcIik7XHJcbnZhciByZW1vdmVVbm5lY2Vzc2FyeUpvaW50c18xID0gcmVxdWlyZShcIi4vcmVtb3ZlVW5uZWNlc3NhcnlKb2ludHNcIik7XHJcbnZhciBWUk1VdGlscyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZSTVV0aWxzKCkge1xyXG4gICAgICAgIC8vIHRoaXMgY2xhc3MgaXMgbm90IG1lYW50IHRvIGJlIGluc3RhbnRpYXRlZFxyXG4gICAgfVxyXG4gICAgVlJNVXRpbHMuZXh0cmFjdFRodW1ibmFpbEJsb2IgPSBleHRyYWN0VGh1bWJuYWlsQmxvYl8xLmV4dHJhY3RUaHVtYm5haWxCbG9iO1xyXG4gICAgVlJNVXRpbHMucmVtb3ZlVW5uZWNlc3NhcnlKb2ludHMgPSByZW1vdmVVbm5lY2Vzc2FyeUpvaW50c18xLnJlbW92ZVVubmVjZXNzYXJ5Sm9pbnRzO1xyXG4gICAgcmV0dXJuIFZSTVV0aWxzO1xyXG59KCkpO1xyXG5leHBvcnRzLlZSTVV0aWxzID0gVlJNVXRpbHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucmVtb3ZlVW5uZWNlc3NhcnlKb2ludHMgPSB2b2lkIDA7XHJcbnZhciBUSFJFRSA9IHJlcXVpcmUoXCJ0aHJlZVwiKTtcclxuLyoqXHJcbiAqIFRyYXZlcnNlIGdpdmVuIG9iamVjdCBhbmQgcmVtb3ZlIHVubmVjZXNzYXJpbHkgYm91bmQgam9pbnRzIGZyb20gZXZlcnkgYFRIUkVFLlNraW5uZWRNZXNoYC5cclxuICogU29tZSBlbnZpcm9ubWVudHMgbGlrZSBtb2JpbGUgZGV2aWNlcyBoYXZlIGEgbG93ZXIgbGltaXQgb2YgYm9uZXMgYW5kIG1pZ2h0IGJlIHVuYWJsZSB0byBwZXJmb3JtIG1lc2ggc2tpbm5pbmcsIHRoaXMgZnVuY3Rpb24gbWlnaHQgcmVzb2x2ZSBzdWNoIGFuIGlzc3VlLlxyXG4gKiBBbHNvIHRoaXMgZnVuY3Rpb24gbWlnaHQgZ3JlYXRseSBpbXByb3ZlIHRoZSBwZXJmb3JtYW5jZSBvZiBtZXNoIHNraW5uaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gcm9vdCBSb290IG9iamVjdCB0aGF0IHdpbGwgYmUgdHJhdmVyc2VkXHJcbiAqL1xyXG5mdW5jdGlvbiByZW1vdmVVbm5lY2Vzc2FyeUpvaW50cyhyb290KSB7XHJcbiAgICAvLyBzb21lIG1lc2hlcyBtaWdodCBzaGFyZSBhIHNhbWUgc2tpbkluZGV4IGF0dHJpYnV0ZSBhbmQgdGhpcyBtYXAgcHJldmVudHMgdG8gY29udmVydCB0aGUgYXR0cmlidXRlIHR3aWNlXHJcbiAgICB2YXIgc2tlbGV0b25MaXN0ID0gbmV3IE1hcCgpO1xyXG4gICAgLy8gVHJhdmVyc2UgYW4gZW50aXJlIHRyZWVcclxuICAgIHJvb3QudHJhdmVyc2UoZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGlmIChvYmoudHlwZSAhPT0gJ1NraW5uZWRNZXNoJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtZXNoID0gb2JqO1xyXG4gICAgICAgIHZhciBnZW9tZXRyeSA9IG1lc2guZ2VvbWV0cnk7XHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSgnc2tpbkluZGV4Jyk7XHJcbiAgICAgICAgLy8gbG9vayBmb3IgZXhpc3Rpbmcgc2tlbGV0b25cclxuICAgICAgICB2YXIgc2tlbGV0b24gPSBza2VsZXRvbkxpc3QuZ2V0KGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgaWYgKCFza2VsZXRvbikge1xyXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSByZWR1Y2VkIGJvbmUgbGlzdFxyXG4gICAgICAgICAgICB2YXIgYm9uZXMgPSBbXTsgLy8gbmV3IGxpc3Qgb2YgYm9uZVxyXG4gICAgICAgICAgICB2YXIgYm9uZUludmVyc2VzID0gW107IC8vIG5ldyBsaXN0IG9mIGJvbmVJbnZlcnNlXHJcbiAgICAgICAgICAgIHZhciBib25lSW5kZXhNYXAgPSB7fTsgLy8gbWFwIG9mIG9sZCBib25lIGluZGV4IHZzLiBuZXcgYm9uZSBpbmRleFxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgYm9uZSBtYXBcclxuICAgICAgICAgICAgdmFyIGFycmF5ID0gYXR0cmlidXRlLmFycmF5O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBhcnJheVtpXTtcclxuICAgICAgICAgICAgICAgIC8vIG5ldyBza2luSW5kZXggYnVmZmVyXHJcbiAgICAgICAgICAgICAgICBpZiAoYm9uZUluZGV4TWFwW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9uZUluZGV4TWFwW2luZGV4XSA9IGJvbmVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBib25lcy5wdXNoKG1lc2guc2tlbGV0b24uYm9uZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICBib25lSW52ZXJzZXMucHVzaChtZXNoLnNrZWxldG9uLmJvbmVJbnZlcnNlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXJyYXlbaV0gPSBib25lSW5kZXhNYXBbaW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2Ugd2l0aCBuZXcgaW5kaWNlc1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUuY29weUFycmF5KGFycmF5KTtcclxuICAgICAgICAgICAgYXR0cmlidXRlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gcmVwbGFjZSB3aXRoIG5ldyBpbmRpY2VzXHJcbiAgICAgICAgICAgIHNrZWxldG9uID0gbmV3IFRIUkVFLlNrZWxldG9uKGJvbmVzLCBib25lSW52ZXJzZXMpO1xyXG4gICAgICAgICAgICBza2VsZXRvbkxpc3Quc2V0KGF0dHJpYnV0ZSwgc2tlbGV0b24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXNoLmJpbmQoc2tlbGV0b24sIG5ldyBUSFJFRS5NYXRyaXg0KCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgXl5eXl5eXl5eXl5eXl5eXl5eXiB0cmFuc2Zvcm0gb2YgbWVzaGVzIHNob3VsZCBiZSBpZ25vcmVkXHJcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2tpbnNcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucmVtb3ZlVW5uZWNlc3NhcnlKb2ludHMgPSByZW1vdmVVbm5lY2Vzc2FyeUpvaW50cztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5WUk1CbGVuZFNoYXBlR3JvdXAgPSB2b2lkIDA7XHJcbnZhciBUSFJFRSA9IHJlcXVpcmUoXCJ0aHJlZVwiKTtcclxudmFyIFZSTUJsZW5kU2hhcGVNYXRlcmlhbFZhbHVlVHlwZTtcclxuKGZ1bmN0aW9uIChWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGUpIHtcclxuICAgIFZSTUJsZW5kU2hhcGVNYXRlcmlhbFZhbHVlVHlwZVtWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGVbXCJOVU1CRVJcIl0gPSAwXSA9IFwiTlVNQkVSXCI7XHJcbiAgICBWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGVbVlJNQmxlbmRTaGFwZU1hdGVyaWFsVmFsdWVUeXBlW1wiVkVDVE9SMlwiXSA9IDFdID0gXCJWRUNUT1IyXCI7XHJcbiAgICBWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGVbVlJNQmxlbmRTaGFwZU1hdGVyaWFsVmFsdWVUeXBlW1wiVkVDVE9SM1wiXSA9IDJdID0gXCJWRUNUT1IzXCI7XHJcbiAgICBWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGVbVlJNQmxlbmRTaGFwZU1hdGVyaWFsVmFsdWVUeXBlW1wiVkVDVE9SNFwiXSA9IDNdID0gXCJWRUNUT1I0XCI7XHJcbiAgICBWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGVbVlJNQmxlbmRTaGFwZU1hdGVyaWFsVmFsdWVUeXBlW1wiQ09MT1JcIl0gPSA0XSA9IFwiQ09MT1JcIjtcclxufSkoVlJNQmxlbmRTaGFwZU1hdGVyaWFsVmFsdWVUeXBlIHx8IChWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGUgPSB7fSkpO1xyXG52YXIgX3YyID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxudmFyIF92MyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbnZhciBfdjQgPSBuZXcgVEhSRUUuVmVjdG9yNCgpO1xyXG52YXIgX2NvbG9yID0gbmV3IFRIUkVFLkNvbG9yKCk7XHJcbi8vIGFuaW1hdGlvbk1peGVyIOOBruebo+imluWvvuixoeOBr+OAgVNjZW5lIOOBruS4reOBq+WFpeOBo+OBpuOBhOOCi+W/heimgeOBjOOBguOCi+OAglxyXG4vLyDjgZ3jga7jgZ/jgoHjgIHooajnpLrjgqrjg5bjgrjjgqfjgq/jg4jjgafjga/jgarjgYTjgZHjgozjganjgIFPYmplY3QzRCDjgpLntpnmib/jgZfjgaYgU2NlbmUg44Gr5oqV5YWl44Gn44GN44KL44KI44GG44Gr44GZ44KL44CCXHJcbnZhciBWUk1CbGVuZFNoYXBlR3JvdXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVlJNQmxlbmRTaGFwZUdyb3VwLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVlJNQmxlbmRTaGFwZUdyb3VwKGV4cHJlc3Npb25OYW1lKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy53ZWlnaHQgPSAwLjA7XHJcbiAgICAgICAgX3RoaXMuaXNCaW5hcnkgPSBmYWxzZTtcclxuICAgICAgICBfdGhpcy5fYmluZHMgPSBbXTtcclxuICAgICAgICBfdGhpcy5fbWF0ZXJpYWxWYWx1ZXMgPSBbXTtcclxuICAgICAgICBfdGhpcy5uYW1lID0gXCJCbGVuZFNoYXBlQ29udHJvbGxlcl9cIiArIGV4cHJlc3Npb25OYW1lO1xyXG4gICAgICAgIC8vIHRyYXZlcnNlIOaZguOBruaVkea4iOaJi+auteOBqOOBl+OBpiBPYmplY3QzRCDjgafjga/jgarjgYTjgZPjgajjgpLmmI7npLrjgZfjgabjgYrjgY9cclxuICAgICAgICBfdGhpcy50eXBlID0gJ0JsZW5kU2hhcGVDb250cm9sbGVyJztcclxuICAgICAgICAvLyDooajnpLrnm67nmoTjga7jgqrjg5bjgrjjgqfjgq/jg4jjgafjga/jgarjgYTjga7jgafjgIHosqDojbfou73muJvjga7jgZ/jgoHjgasgdmlzaWJsZSDjgpIgZmFsc2Ug44Gr44GX44Gm44GK44GP44CCXHJcbiAgICAgICAgLy8g44GT44KM44Gr44KI44KK44CB44GT44Gu44Kk44Oz44K544K/44Oz44K544Gr5a++44GZ44KL5q+O44OV44Os44O844Og44GuIG1hdHJpeCDoh6rli5XoqIjnrpfjgpLnnIHnlaXjgafjgY3jgovjgIJcclxuICAgICAgICBfdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVlJNQmxlbmRTaGFwZUdyb3VwLnByb3RvdHlwZS5hZGRCaW5kID0gZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICAvLyBvcmlnaW5hbCB3ZWlnaHQgaXMgMC0xMDAgYnV0IHdlIHdhbnQgdG8gZGVhbCB3aXRoIHRoaXMgdmFsdWUgd2l0aGluIDAtMVxyXG4gICAgICAgIHZhciB3ZWlnaHQgPSBhcmdzLndlaWdodCAvIDEwMDtcclxuICAgICAgICB0aGlzLl9iaW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgbWVzaGVzOiBhcmdzLm1lc2hlcyxcclxuICAgICAgICAgICAgbW9ycGhUYXJnZXRJbmRleDogYXJncy5tb3JwaFRhcmdldEluZGV4LFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IHdlaWdodCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBWUk1CbGVuZFNoYXBlR3JvdXAucHJvdG90eXBlLmFkZE1hdGVyaWFsVmFsdWUgPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHZhciBtYXRlcmlhbCA9IGFyZ3MubWF0ZXJpYWw7XHJcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IGFyZ3MucHJvcGVydHlOYW1lO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IG1hdGVyaWFsW3Byb3BlcnR5TmFtZV07XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAvLyBwcm9wZXJ0eSBoYXMgbm90IGJlZW4gZm91bmRcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YWx1ZSA9IGFyZ3MuZGVmYXVsdFZhbHVlIHx8IHZhbHVlO1xyXG4gICAgICAgIHZhciB0eXBlO1xyXG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgdmFyIHRhcmdldFZhbHVlO1xyXG4gICAgICAgIHZhciBkZWx0YVZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZS5pc1ZlY3RvcjIpIHtcclxuICAgICAgICAgICAgdHlwZSA9IFZSTUJsZW5kU2hhcGVNYXRlcmlhbFZhbHVlVHlwZS5WRUNUT1IyO1xyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSB2YWx1ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICB0YXJnZXRWYWx1ZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCkuZnJvbUFycmF5KGFyZ3MudGFyZ2V0VmFsdWUpO1xyXG4gICAgICAgICAgICBkZWx0YVZhbHVlID0gdGFyZ2V0VmFsdWUuY2xvbmUoKS5zdWIoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUuaXNWZWN0b3IzKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGUuVkVDVE9SMztcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gdmFsdWUuY2xvbmUoKTtcclxuICAgICAgICAgICAgdGFyZ2V0VmFsdWUgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmZyb21BcnJheShhcmdzLnRhcmdldFZhbHVlKTtcclxuICAgICAgICAgICAgZGVsdGFWYWx1ZSA9IHRhcmdldFZhbHVlLmNsb25lKCkuc3ViKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLmlzVmVjdG9yNCkge1xyXG4gICAgICAgICAgICB0eXBlID0gVlJNQmxlbmRTaGFwZU1hdGVyaWFsVmFsdWVUeXBlLlZFQ1RPUjQ7XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHZhbHVlLmNsb25lKCk7XHJcbiAgICAgICAgICAgIC8vIHZlY3RvclByb3BlcnR5IGFuZCB0YXJnZXRWYWx1ZSBpbmRleCBpcyBkaWZmZXJlbnQgZnJvbSBlYWNoIG90aGVyXHJcbiAgICAgICAgICAgIC8vIGV4cG9ydGVkIHZybSBieSBVbmlWUk0gZmlsZSBpc1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyB2ZWN0b3JQcm9wZXJ0eVxyXG4gICAgICAgICAgICAvLyBvZmZzZXQgPSB0YXJnZXRWYWx1ZVswXSwgdGFyZ2V0VmFsdWVbMV1cclxuICAgICAgICAgICAgLy8gdGlsaW5nID0gdGFyZ2V0VmFsdWVbMl0sIHRhcmdldFZhbHVlWzNdXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIHRhcmdldFZhbHVlXHJcbiAgICAgICAgICAgIC8vIG9mZnNldCA9IHRhcmdldFZhbHVlWzJdLCB0YXJnZXRWYWx1ZVszXVxyXG4gICAgICAgICAgICAvLyB0aWxpbmcgPSB0YXJnZXRWYWx1ZVswXSwgdGFyZ2V0VmFsdWVbMV1cclxuICAgICAgICAgICAgdGFyZ2V0VmFsdWUgPSBuZXcgVEhSRUUuVmVjdG9yNCgpLmZyb21BcnJheShbXHJcbiAgICAgICAgICAgICAgICBhcmdzLnRhcmdldFZhbHVlWzJdLFxyXG4gICAgICAgICAgICAgICAgYXJncy50YXJnZXRWYWx1ZVszXSxcclxuICAgICAgICAgICAgICAgIGFyZ3MudGFyZ2V0VmFsdWVbMF0sXHJcbiAgICAgICAgICAgICAgICBhcmdzLnRhcmdldFZhbHVlWzFdLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgZGVsdGFWYWx1ZSA9IHRhcmdldFZhbHVlLmNsb25lKCkuc3ViKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLmlzQ29sb3IpIHtcclxuICAgICAgICAgICAgdHlwZSA9IFZSTUJsZW5kU2hhcGVNYXRlcmlhbFZhbHVlVHlwZS5DT0xPUjtcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gdmFsdWUuY2xvbmUoKTtcclxuICAgICAgICAgICAgdGFyZ2V0VmFsdWUgPSBuZXcgVEhSRUUuQ29sb3IoKS5mcm9tQXJyYXkoYXJncy50YXJnZXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGRlbHRhVmFsdWUgPSB0YXJnZXRWYWx1ZS5jbG9uZSgpLnN1YihkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdHlwZSA9IFZSTUJsZW5kU2hhcGVNYXRlcmlhbFZhbHVlVHlwZS5OVU1CRVI7XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0YXJnZXRWYWx1ZSA9IGFyZ3MudGFyZ2V0VmFsdWVbMF07XHJcbiAgICAgICAgICAgIGRlbHRhVmFsdWUgPSB0YXJnZXRWYWx1ZSAtIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxWYWx1ZXMucHVzaCh7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbCxcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICB0YXJnZXRWYWx1ZTogdGFyZ2V0VmFsdWUsXHJcbiAgICAgICAgICAgIGRlbHRhVmFsdWU6IGRlbHRhVmFsdWUsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSB3ZWlnaHQgdG8gZXZlcnkgYXNzaWduZWQgYmxlbmQgc2hhcGVzLlxyXG4gICAgICogU2hvdWxkIGJlIGNhbGxlZCB2aWEge0BsaW5rIEJsZW5kU2hhcGVNYXN0ZXIjdXBkYXRlfS5cclxuICAgICAqL1xyXG4gICAgVlJNQmxlbmRTaGFwZUdyb3VwLnByb3RvdHlwZS5hcHBseVdlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdyA9IHRoaXMuaXNCaW5hcnkgPyAodGhpcy53ZWlnaHQgPCAwLjUgPyAwLjAgOiAxLjApIDogdGhpcy53ZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fYmluZHMuZm9yRWFjaChmdW5jdGlvbiAoYmluZCkge1xyXG4gICAgICAgICAgICBiaW5kLm1lc2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSAvLyBUT0RPOiB3ZSBzaG91bGQga2ljayB0aGlzIGF0IGBhZGRCaW5kYFxyXG4gICAgICAgICAgICAgICAgbWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXNbYmluZC5tb3JwaFRhcmdldEluZGV4XSArPSB3ICogYmluZC53ZWlnaHQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKG1hdGVyaWFsVmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIHByb3AgPSBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsW21hdGVyaWFsVmFsdWUucHJvcGVydHlOYW1lXTtcclxuICAgICAgICAgICAgaWYgKHByb3AgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IC8vIFRPRE86IHdlIHNob3VsZCBraWNrIHRoaXMgYXQgYGFkZE1hdGVyaWFsVmFsdWVgXHJcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbFZhbHVlLnR5cGUgPT09IFZSTUJsZW5kU2hhcGVNYXRlcmlhbFZhbHVlVHlwZS5OVU1CRVIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YVZhbHVlID0gbWF0ZXJpYWxWYWx1ZS5kZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxWYWx1ZS5tYXRlcmlhbFttYXRlcmlhbFZhbHVlLnByb3BlcnR5TmFtZV0gKz0gZGVsdGFWYWx1ZSAqIHc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobWF0ZXJpYWxWYWx1ZS50eXBlID09PSBWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGUuVkVDVE9SMikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhVmFsdWUgPSBtYXRlcmlhbFZhbHVlLmRlbHRhVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsW21hdGVyaWFsVmFsdWUucHJvcGVydHlOYW1lXS5hZGQoX3YyLmNvcHkoZGVsdGFWYWx1ZSkubXVsdGlwbHlTY2FsYXIodykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1hdGVyaWFsVmFsdWUudHlwZSA9PT0gVlJNQmxlbmRTaGFwZU1hdGVyaWFsVmFsdWVUeXBlLlZFQ1RPUjMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YVZhbHVlID0gbWF0ZXJpYWxWYWx1ZS5kZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxWYWx1ZS5tYXRlcmlhbFttYXRlcmlhbFZhbHVlLnByb3BlcnR5TmFtZV0uYWRkKF92My5jb3B5KGRlbHRhVmFsdWUpLm11bHRpcGx5U2NhbGFyKHcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChtYXRlcmlhbFZhbHVlLnR5cGUgPT09IFZSTUJsZW5kU2hhcGVNYXRlcmlhbFZhbHVlVHlwZS5WRUNUT1I0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGFWYWx1ZSA9IG1hdGVyaWFsVmFsdWUuZGVsdGFWYWx1ZTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxbbWF0ZXJpYWxWYWx1ZS5wcm9wZXJ0eU5hbWVdLmFkZChfdjQuY29weShkZWx0YVZhbHVlKS5tdWx0aXBseVNjYWxhcih3KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobWF0ZXJpYWxWYWx1ZS50eXBlID09PSBWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGUuQ09MT1IpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YVZhbHVlID0gbWF0ZXJpYWxWYWx1ZS5kZWx0YVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxWYWx1ZS5tYXRlcmlhbFttYXRlcmlhbFZhbHVlLnByb3BlcnR5TmFtZV0uYWRkKF9jb2xvci5jb3B5KGRlbHRhVmFsdWUpLm11bHRpcGx5U2NhbGFyKHcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1hdGVyaWFsVmFsdWUubWF0ZXJpYWwuc2hvdWxkQXBwbHlVbmlmb3JtcyA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsLnNob3VsZEFwcGx5VW5pZm9ybXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBwcmV2aW91c2x5IGFzc2lnbmVkIGJsZW5kIHNoYXBlcy5cclxuICAgICAqL1xyXG4gICAgVlJNQmxlbmRTaGFwZUdyb3VwLnByb3RvdHlwZS5jbGVhckFwcGxpZWRXZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fYmluZHMuZm9yRWFjaChmdW5jdGlvbiAoYmluZCkge1xyXG4gICAgICAgICAgICBiaW5kLm1lc2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSAvLyBUT0RPOiB3ZSBzaG91bGQga2ljayB0aGlzIGF0IGBhZGRCaW5kYFxyXG4gICAgICAgICAgICAgICAgbWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXNbYmluZC5tb3JwaFRhcmdldEluZGV4XSA9IDAuMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAobWF0ZXJpYWxWYWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgcHJvcCA9IG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxbbWF0ZXJpYWxWYWx1ZS5wcm9wZXJ0eU5hbWVdO1xyXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gLy8gVE9ETzogd2Ugc2hvdWxkIGtpY2sgdGhpcyBhdCBgYWRkTWF0ZXJpYWxWYWx1ZWBcclxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsVmFsdWUudHlwZSA9PT0gVlJNQmxlbmRTaGFwZU1hdGVyaWFsVmFsdWVUeXBlLk5VTUJFUikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IG1hdGVyaWFsVmFsdWUuZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxWYWx1ZS5tYXRlcmlhbFttYXRlcmlhbFZhbHVlLnByb3BlcnR5TmFtZV0gPSBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobWF0ZXJpYWxWYWx1ZS50eXBlID09PSBWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGUuVkVDVE9SMikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IG1hdGVyaWFsVmFsdWUuZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxWYWx1ZS5tYXRlcmlhbFttYXRlcmlhbFZhbHVlLnByb3BlcnR5TmFtZV0uY29weShkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1hdGVyaWFsVmFsdWUudHlwZSA9PT0gVlJNQmxlbmRTaGFwZU1hdGVyaWFsVmFsdWVUeXBlLlZFQ1RPUjMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBtYXRlcmlhbFZhbHVlLmRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxbbWF0ZXJpYWxWYWx1ZS5wcm9wZXJ0eU5hbWVdLmNvcHkoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChtYXRlcmlhbFZhbHVlLnR5cGUgPT09IFZSTUJsZW5kU2hhcGVNYXRlcmlhbFZhbHVlVHlwZS5WRUNUT1I0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gbWF0ZXJpYWxWYWx1ZS5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsW21hdGVyaWFsVmFsdWUucHJvcGVydHlOYW1lXS5jb3B5KGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobWF0ZXJpYWxWYWx1ZS50eXBlID09PSBWUk1CbGVuZFNoYXBlTWF0ZXJpYWxWYWx1ZVR5cGUuQ09MT1IpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBtYXRlcmlhbFZhbHVlLmRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxbbWF0ZXJpYWxWYWx1ZS5wcm9wZXJ0eU5hbWVdLmNvcHkoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1hdGVyaWFsVmFsdWUubWF0ZXJpYWwuc2hvdWxkQXBwbHlVbmlmb3JtcyA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsLnNob3VsZEFwcGx5VW5pZm9ybXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZSTUJsZW5kU2hhcGVHcm91cDtcclxufShUSFJFRS5PYmplY3QzRCkpO1xyXG5leHBvcnRzLlZSTUJsZW5kU2hhcGVHcm91cCA9IFZSTUJsZW5kU2hhcGVHcm91cDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVlJNQmxlbmRTaGFwZUltcG9ydGVyID0gdm9pZCAwO1xyXG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcclxudmFyIHJlbmFtZU1hdGVyaWFsUHJvcGVydHlfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9yZW5hbWVNYXRlcmlhbFByb3BlcnR5XCIpO1xyXG52YXIgVlJNQmxlbmRTaGFwZUdyb3VwXzEgPSByZXF1aXJlKFwiLi9WUk1CbGVuZFNoYXBlR3JvdXBcIik7XHJcbnZhciBWUk1CbGVuZFNoYXBlUHJveHlfMSA9IHJlcXVpcmUoXCIuL1ZSTUJsZW5kU2hhcGVQcm94eVwiKTtcclxuLyoqXHJcbiAqIEFuIGltcG9ydGVyIHRoYXQgaW1wb3J0cyBhIFtbVlJNQmxlbmRTaGFwZV1dIGZyb20gYSBWUk0gZXh0ZW5zaW9uIG9mIGEgR0xURi5cclxuICovXHJcbnZhciBWUk1CbGVuZFNoYXBlSW1wb3J0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWUk1CbGVuZFNoYXBlSW1wb3J0ZXIoKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEltcG9ydCBhIFtbVlJNQmxlbmRTaGFwZV1dIGZyb20gYSBWUk0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXHJcbiAgICAgKi9cclxuICAgIFZSTUJsZW5kU2hhcGVJbXBvcnRlci5wcm90b3R5cGUuaW1wb3J0ID0gZnVuY3Rpb24gKGdsdGYpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHZybUV4dCwgc2NoZW1hQmxlbmRTaGFwZSwgYmxlbmRTaGFwZSwgYmxlbmRTaGFwZUdyb3VwcywgYmxlbmRTaGFwZVByZXNldE1hcDtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdnJtRXh0ID0gKF9hID0gZ2x0Zi5wYXJzZXIuanNvbi5leHRlbnNpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuVlJNO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZybUV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYUJsZW5kU2hhcGUgPSB2cm1FeHQuYmxlbmRTaGFwZU1hc3RlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzY2hlbWFCbGVuZFNoYXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbnVsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxlbmRTaGFwZSA9IG5ldyBWUk1CbGVuZFNoYXBlUHJveHlfMS5WUk1CbGVuZFNoYXBlUHJveHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxlbmRTaGFwZUdyb3VwcyA9IHNjaGVtYUJsZW5kU2hhcGUuYmxlbmRTaGFwZUdyb3VwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFibGVuZFNoYXBlR3JvdXBzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYmxlbmRTaGFwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxlbmRTaGFwZVByZXNldE1hcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChibGVuZFNoYXBlR3JvdXBzLm1hcChmdW5jdGlvbiAoc2NoZW1hR3JvdXApIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSwgcHJlc2V0TmFtZSwgZ3JvdXAsIG1hdGVyaWFsVmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gc2NoZW1hR3JvdXAubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdWUk1CbGVuZFNoYXBlSW1wb3J0ZXI6IE9uZSBvZiBibGVuZFNoYXBlR3JvdXBzIGhhcyBubyBuYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVtYUdyb3VwLnByZXNldE5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYUdyb3VwLnByZXNldE5hbWUgIT09IHR5cGVzXzEuVlJNU2NoZW1hLkJsZW5kU2hhcGVQcmVzZXROYW1lLlVua25vd24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFibGVuZFNoYXBlUHJlc2V0TWFwW3NjaGVtYUdyb3VwLnByZXNldE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXROYW1lID0gc2NoZW1hR3JvdXAucHJlc2V0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsZW5kU2hhcGVQcmVzZXRNYXBbc2NoZW1hR3JvdXAucHJlc2V0TmFtZV0gPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwID0gbmV3IFZSTUJsZW5kU2hhcGVHcm91cF8xLlZSTUJsZW5kU2hhcGVHcm91cChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2x0Zi5zY2VuZS5hZGQoZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cC5pc0JpbmFyeSA9IHNjaGVtYUdyb3VwLmlzQmluYXJ5IHx8IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZW1hR3JvdXAuYmluZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYUdyb3VwLmJpbmRzLmZvckVhY2goZnVuY3Rpb24gKGJpbmQpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9ycGhNZXNoZXMsIHByaW1pdGl2ZXMsIG1vcnBoVGFyZ2V0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJpbmQubWVzaCA9PT0gdW5kZWZpbmVkIHx8IGJpbmQuaW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdsdGYucGFyc2VyLmdldERlcGVuZGVuY3koJ21lc2gnLCBiaW5kLm1lc2gpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaE1lc2hlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmVzID0gbW9ycGhNZXNoZXMudHlwZSA9PT0gJ0dyb3VwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1vcnBoTWVzaGVzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW21vcnBoTWVzaGVzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldEluZGV4ID0gYmluZC5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByaW1pdGl2ZXMuZXZlcnkoZnVuY3Rpb24gKHByaW1pdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwcmltaXRpdmUubW9ycGhUYXJnZXRJbmZsdWVuY2VzKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRJbmRleCA8IHByaW1pdGl2ZS5tb3JwaFRhcmdldEluZmx1ZW5jZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlZSTUJsZW5kU2hhcGVJbXBvcnRlcjogXCIgKyBzY2hlbWFHcm91cC5uYW1lICsgXCIgYXR0ZW1wdHMgdG8gaW5kZXggXCIgKyBtb3JwaFRhcmdldEluZGV4ICsgXCJ0aCBtb3JwaCBidXQgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cC5hZGRCaW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaGVzOiBwcmltaXRpdmVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldEluZGV4OiBtb3JwaFRhcmdldEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IGJpbmQud2VpZ2h0IHx8IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbFZhbHVlcyA9IHNjaGVtYUdyb3VwLm1hdGVyaWFsVmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWxWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKG1hdGVyaWFsVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWxWYWx1ZS5tYXRlcmlhbE5hbWUgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbFZhbHVlLnByb3BlcnR5TmFtZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsVmFsdWUudGFyZ2V0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRlcmlhbHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbHRmLnNjZW5lLnRyYXZlcnNlKGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC5tYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGVyaWFsID0gb2JqZWN0Lm1hdGVyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLnB1c2guYXBwbHkobWF0ZXJpYWxzLCBtYXRlcmlhbC5maWx0ZXIoZnVuY3Rpb24gKG10bCkgeyByZXR1cm4gbXRsLm5hbWUgPT09IG1hdGVyaWFsVmFsdWUubWF0ZXJpYWxOYW1lICYmIG1hdGVyaWFscy5pbmRleE9mKG10bCkgPT09IC0xOyB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRlcmlhbC5uYW1lID09PSBtYXRlcmlhbFZhbHVlLm1hdGVyaWFsTmFtZSAmJiBtYXRlcmlhbHMuaW5kZXhPZihtYXRlcmlhbCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLmZvckVhY2goZnVuY3Rpb24gKG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwLmFkZE1hdGVyaWFsVmFsdWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiByZW5hbWVNYXRlcmlhbFByb3BlcnR5XzEucmVuYW1lTWF0ZXJpYWxQcm9wZXJ0eShtYXRlcmlhbFZhbHVlLnByb3BlcnR5TmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRWYWx1ZTogbWF0ZXJpYWxWYWx1ZS50YXJnZXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGVuZFNoYXBlLnJlZ2lzdGVyQmxlbmRTaGFwZUdyb3VwKG5hbWUsIHByZXNldE5hbWUsIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH0pKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBibGVuZFNoYXBlXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZSTUJsZW5kU2hhcGVJbXBvcnRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5WUk1CbGVuZFNoYXBlSW1wb3J0ZXIgPSBWUk1CbGVuZFNoYXBlSW1wb3J0ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVlJNQmxlbmRTaGFwZVByb3h5ID0gdm9pZCAwO1xyXG52YXIgbWF0aF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL21hdGhcIik7XHJcbnZhciBWUk1CbGVuZFNoYXBlUHJveHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBWUk1CbGVuZFNoYXBlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBWUk1CbGVuZFNoYXBlUHJveHkoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTGlzdCBvZiByZWdpc3RlcmVkIGJsZW5kIHNoYXBlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2JsZW5kU2hhcGVHcm91cHMgPSB7fTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIG1hcCBmcm9tIFtbVlJNU2NoZW1hLkJsZW5kU2hhcGVQcmVzZXROYW1lXV0gdG8gaXRzIGFjdHVhbCBibGVuZCBzaGFwZSBuYW1lLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2JsZW5kU2hhcGVQcmVzZXRNYXAgPSB7fTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIGxpc3Qgb2YgbmFtZSBvZiB1bmtub3duIGJsZW5kIHNoYXBlcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl91bmtub3duR3JvdXBOYW1lcyA9IFtdO1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWUk1CbGVuZFNoYXBlUHJveHkucHJvdG90eXBlLCBcImV4cHJlc3Npb25zXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMaXN0IG9mIG5hbWUgb2YgcmVnaXN0ZXJlZCBibGVuZCBzaGFwZSBncm91cC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2JsZW5kU2hhcGVHcm91cHMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWUk1CbGVuZFNoYXBlUHJveHkucHJvdG90eXBlLCBcImJsZW5kU2hhcGVQcmVzZXRNYXBcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgbWFwIGZyb20gW1tWUk1TY2hlbWEuQmxlbmRTaGFwZVByZXNldE5hbWVdXSB0byBpdHMgYWN0dWFsIGJsZW5kIHNoYXBlIG5hbWUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibGVuZFNoYXBlUHJlc2V0TWFwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWUk1CbGVuZFNoYXBlUHJveHkucHJvdG90eXBlLCBcInVua25vd25Hcm91cE5hbWVzXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIGxpc3Qgb2YgbmFtZSBvZiB1bmtub3duIGJsZW5kIHNoYXBlcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Vua25vd25Hcm91cE5hbWVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHJlZ2lzdGVyZWQgYmxlbmQgc2hhcGUgZ3JvdXAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgYmxlbmQgc2hhcGUgZ3JvdXBcclxuICAgICAqL1xyXG4gICAgVlJNQmxlbmRTaGFwZVByb3h5LnByb3RvdHlwZS5nZXRCbGVuZFNoYXBlR3JvdXAgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHZhciBwcmVzZXROYW1lID0gdGhpcy5fYmxlbmRTaGFwZVByZXNldE1hcFtuYW1lXTtcclxuICAgICAgICB2YXIgY29udHJvbGxlciA9IHByZXNldE5hbWUgPyB0aGlzLl9ibGVuZFNoYXBlR3JvdXBzW3ByZXNldE5hbWVdIDogdGhpcy5fYmxlbmRTaGFwZUdyb3Vwc1tuYW1lXTtcclxuICAgICAgICBpZiAoIWNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibm8gYmxlbmQgc2hhcGUgZm91bmQgYnkgXCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGJsZW5kIHNoYXBlIGdyb3VwLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGJsZW5kIHNoYXBlIGdvcnVwXHJcbiAgICAgKiBAcGFyYW0gY29udHJvbGxlciBWUk1CbGVuZFNoYXBlQ29udHJvbGxlciB0aGF0IGRlc2NyaWJlcyB0aGUgYmxlbmQgc2hhcGUgZ3JvdXBcclxuICAgICAqL1xyXG4gICAgVlJNQmxlbmRTaGFwZVByb3h5LnByb3RvdHlwZS5yZWdpc3RlckJsZW5kU2hhcGVHcm91cCA9IGZ1bmN0aW9uIChuYW1lLCBwcmVzZXROYW1lLCBjb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5fYmxlbmRTaGFwZUdyb3Vwc1tuYW1lXSA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgaWYgKHByZXNldE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxlbmRTaGFwZVByZXNldE1hcFtwcmVzZXROYW1lXSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl91bmtub3duR3JvdXBOYW1lcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdldCBjdXJyZW50IHdlaWdodCBvZiBzcGVjaWZpZWQgYmxlbmQgc2hhcGUgZ3JvdXAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgYmxlbmQgc2hhcGUgZ3JvdXBcclxuICAgICAqL1xyXG4gICAgVlJNQmxlbmRTaGFwZVByb3h5LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gdGhpcy5nZXRCbGVuZFNoYXBlR3JvdXAobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIChfYSA9IGNvbnRyb2xsZXIgPT09IG51bGwgfHwgY29udHJvbGxlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udHJvbGxlci53ZWlnaHQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSB3ZWlnaHQgdG8gc3BlY2lmaWVkIGJsZW5kIHNoYXBlIGdyb3VwLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGJsZW5kIHNoYXBlIGdyb3VwXHJcbiAgICAgKiBAcGFyYW0gd2VpZ2h0IFdlaWdodFxyXG4gICAgICovXHJcbiAgICBWUk1CbGVuZFNoYXBlUHJveHkucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKG5hbWUsIHdlaWdodCkge1xyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gdGhpcy5nZXRCbGVuZFNoYXBlR3JvdXAobmFtZSk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgY29udHJvbGxlci53ZWlnaHQgPSBtYXRoXzEuc2F0dXJhdGUod2VpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSB0cmFjayBuYW1lIG9mIHNwZWNpZmllZCBibGVuZCBzaGFwZSBncm91cC5cclxuICAgICAqIFRoaXMgdHJhY2sgbmFtZSBpcyBuZWVkZWQgdG8gbWFuaXB1bGF0ZSBpdHMgYmxlbmQgc2hhcGUgZ3JvdXAgdmlhIGtleWZyYW1lIGFuaW1hdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGUgTWFuaXB1bGF0ZSBhIGJsZW5kIHNoYXBlIGdyb3VwIHVzaW5nIGtleWZyYW1lIGFuaW1hdGlvblxyXG4gICAgICogYGBganNcclxuICAgICAqIGNvbnN0IHRyYWNrTmFtZSA9IHZybS5ibGVuZFNoYXBlUHJveHkuZ2V0QmxlbmRTaGFwZVRyYWNrTmFtZSggVEhSRUUuVlJNU2NoZW1hLkJsZW5kU2hhcGVQcmVzZXROYW1lLkJsaW5rICk7XHJcbiAgICAgKiBjb25zdCB0cmFjayA9IG5ldyBUSFJFRS5OdW1iZXJLZXlmcmFtZVRyYWNrKFxyXG4gICAgICogICBuYW1lLFxyXG4gICAgICogICBbIDAuMCwgMC41LCAxLjAgXSwgLy8gdGltZXNcclxuICAgICAqICAgWyAwLjAsIDEuMCwgMC4wIF0gLy8gdmFsdWVzXHJcbiAgICAgKiApO1xyXG4gICAgICpcclxuICAgICAqIGNvbnN0IGNsaXAgPSBuZXcgVEhSRUUuQW5pbWF0aW9uQ2xpcChcclxuICAgICAqICAgJ2JsaW5rJywgLy8gbmFtZVxyXG4gICAgICogICAxLjAsIC8vIGR1cmF0aW9uXHJcbiAgICAgKiAgIFsgdHJhY2sgXSAvLyB0cmFja3NcclxuICAgICAqICk7XHJcbiAgICAgKlxyXG4gICAgICogY29uc3QgbWl4ZXIgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIoIHZybS5zY2VuZSApO1xyXG4gICAgICogY29uc3QgYWN0aW9uID0gbWl4ZXIuY2xpcEFjdGlvbiggY2xpcCApO1xyXG4gICAgICogYWN0aW9uLnBsYXkoKTtcclxuICAgICAqIGBgYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGJsZW5kIHNoYXBlIGdyb3VwXHJcbiAgICAgKi9cclxuICAgIFZSTUJsZW5kU2hhcGVQcm94eS5wcm90b3R5cGUuZ2V0QmxlbmRTaGFwZVRyYWNrTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSB0aGlzLmdldEJsZW5kU2hhcGVHcm91cChuYW1lKTtcclxuICAgICAgICByZXR1cm4gY29udHJvbGxlciA/IGNvbnRyb2xsZXIubmFtZSArIFwiLndlaWdodFwiIDogbnVsbDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBldmVyeSBibGVuZCBzaGFwZSBncm91cHMuXHJcbiAgICAgKi9cclxuICAgIFZSTUJsZW5kU2hhcGVQcm94eS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fYmxlbmRTaGFwZUdyb3VwcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbGxlciA9IF90aGlzLl9ibGVuZFNoYXBlR3JvdXBzW25hbWVdO1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLmNsZWFyQXBwbGllZFdlaWdodCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2JsZW5kU2hhcGVHcm91cHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBfdGhpcy5fYmxlbmRTaGFwZUdyb3Vwc1tuYW1lXTtcclxuICAgICAgICAgICAgY29udHJvbGxlci5hcHBseVdlaWdodCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWUk1CbGVuZFNoYXBlUHJveHk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVlJNQmxlbmRTaGFwZVByb3h5ID0gVlJNQmxlbmRTaGFwZVByb3h5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTUJsZW5kU2hhcGVHcm91cFwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9WUk1CbGVuZFNoYXBlSW1wb3J0ZXJcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vVlJNQmxlbmRTaGFwZVByb3h5XCIpLCBleHBvcnRzKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVlJNRGVidWcgPSBleHBvcnRzLlZSTV9HSVpNT19SRU5ERVJfT1JERVIgPSB2b2lkIDA7XHJcbnZhciBUSFJFRSA9IHJlcXVpcmUoXCJ0aHJlZVwiKTtcclxudmFyIFZSTV8xID0gcmVxdWlyZShcIi4uL1ZSTVwiKTtcclxudmFyIFZSTUltcG9ydGVyRGVidWdfMSA9IHJlcXVpcmUoXCIuL1ZSTUltcG9ydGVyRGVidWdcIik7XHJcbmV4cG9ydHMuVlJNX0dJWk1PX1JFTkRFUl9PUkRFUiA9IDEwMDAwO1xyXG4vKipcclxuICogW1tWUk1dXSBidXQgaXQgaGFzIHNvbWUgdXNlZnVsIGdpem1vcy5cclxuICovXHJcbnZhciBWUk1EZWJ1ZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWUk1EZWJ1ZywgX3N1cGVyKTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IFZSTURlYnVnIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgW1tWUk1QYXJhbWV0ZXJzXV0gdGhhdCByZXByZXNlbnRzIGNvbXBvbmVudHMgb2YgdGhlIFZSTVxyXG4gICAgICogQHBhcmFtIGRlYnVnT3B0aW9uIE9wdGlvbnMgZm9yIFZSTURlYnVnIGZlYXR1cmVzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFZSTURlYnVnKHBhcmFtcywgZGVidWdPcHRpb24pIHtcclxuICAgICAgICBpZiAoZGVidWdPcHRpb24gPT09IHZvaWQgMCkgeyBkZWJ1Z09wdGlvbiA9IHt9OyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcGFyYW1zKSB8fCB0aGlzO1xyXG4gICAgICAgIC8vIEdpem1v44KS5bGV6ZaLXHJcbiAgICAgICAgaWYgKCFkZWJ1Z09wdGlvbi5kaXNhYmxlQm94SGVscGVyKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnNjZW5lLmFkZChuZXcgVEhSRUUuQm94SGVscGVyKF90aGlzLnNjZW5lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGVidWdPcHRpb24uZGlzYWJsZVNrZWxldG9uSGVscGVyKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnNjZW5lLmFkZChuZXcgVEhSRUUuU2tlbGV0b25IZWxwZXIoX3RoaXMuc2NlbmUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgVlJNRGVidWcgZnJvbSBhIHBhcnNlZCByZXN1bHQgb2YgR0xURiB0YWtlbiBmcm9tIEdMVEZMb2FkZXIuXHJcbiAgICAgKlxyXG4gICAgICogU2VlIFtbVlJNLmZyb21dXSBmb3IgYSBkZXRhaWxlZCBleGFtcGxlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBnbHRmIEEgcGFyc2VkIEdMVEYgb2JqZWN0IHRha2VuIGZyb20gR0xURkxvYWRlclxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0aGF0IHdpbGwgYmUgdXNlZCBpbiBpbXBvcnRlclxyXG4gICAgICogQHBhcmFtIGRlYnVnT3B0aW9uIE9wdGlvbnMgZm9yIFZSTURlYnVnIGZlYXR1cmVzXHJcbiAgICAgKi9cclxuICAgIFZSTURlYnVnLmZyb20gPSBmdW5jdGlvbiAoZ2x0Ziwgb3B0aW9ucywgZGVidWdPcHRpb24pIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIGlmIChkZWJ1Z09wdGlvbiA9PT0gdm9pZCAwKSB7IGRlYnVnT3B0aW9uID0ge307IH1cclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW1wb3J0ZXI7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVyID0gbmV3IFZSTUltcG9ydGVyRGVidWdfMS5WUk1JbXBvcnRlckRlYnVnKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnRlci5pbXBvcnQoZ2x0ZiwgZGVidWdPcHRpb24pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBWUk1EZWJ1Zy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBkZWx0YSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZSTURlYnVnO1xyXG59KFZSTV8xLlZSTSkpO1xyXG5leHBvcnRzLlZSTURlYnVnID0gVlJNRGVidWc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZSTUltcG9ydGVyRGVidWcgPSB2b2lkIDA7XHJcbnZhciBWUk1JbXBvcnRlcl8xID0gcmVxdWlyZShcIi4uL1ZSTUltcG9ydGVyXCIpO1xyXG52YXIgVlJNRGVidWdfMSA9IHJlcXVpcmUoXCIuL1ZSTURlYnVnXCIpO1xyXG52YXIgVlJNTG9va0F0SW1wb3J0ZXJEZWJ1Z18xID0gcmVxdWlyZShcIi4vVlJNTG9va0F0SW1wb3J0ZXJEZWJ1Z1wiKTtcclxudmFyIFZSTVNwcmluZ0JvbmVJbXBvcnRlckRlYnVnXzEgPSByZXF1aXJlKFwiLi9WUk1TcHJpbmdCb25lSW1wb3J0ZXJEZWJ1Z1wiKTtcclxuLyoqXHJcbiAqIEFuIGltcG9ydGVyIHRoYXQgaW1wb3J0cyBhIFtbVlJNRGVidWddXSBmcm9tIGEgVlJNIGV4dGVuc2lvbiBvZiBhIEdMVEYuXHJcbiAqL1xyXG52YXIgVlJNSW1wb3J0ZXJEZWJ1ZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWUk1JbXBvcnRlckRlYnVnLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVlJNSW1wb3J0ZXJEZWJ1ZyhvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIG9wdGlvbnMubG9va0F0SW1wb3J0ZXIgPSBvcHRpb25zLmxvb2tBdEltcG9ydGVyIHx8IG5ldyBWUk1Mb29rQXRJbXBvcnRlckRlYnVnXzEuVlJNTG9va0F0SW1wb3J0ZXJEZWJ1ZygpO1xyXG4gICAgICAgIG9wdGlvbnMuc3ByaW5nQm9uZUltcG9ydGVyID0gb3B0aW9ucy5zcHJpbmdCb25lSW1wb3J0ZXIgfHwgbmV3IFZSTVNwcmluZ0JvbmVJbXBvcnRlckRlYnVnXzEuVlJNU3ByaW5nQm9uZUltcG9ydGVyRGVidWcoKTtcclxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpIHx8IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVlJNSW1wb3J0ZXJEZWJ1Zy5wcm90b3R5cGUuaW1wb3J0ID0gZnVuY3Rpb24gKGdsdGYsIGRlYnVnT3B0aW9ucykge1xyXG4gICAgICAgIGlmIChkZWJ1Z09wdGlvbnMgPT09IHZvaWQgMCkgeyBkZWJ1Z09wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzY2VuZSwgbWV0YSwgbWF0ZXJpYWxzLCBodW1hbm9pZCwgZmlyc3RQZXJzb24sIF9hLCBibGVuZFNoYXBlUHJveHksIGxvb2tBdCwgX2IsIHNwcmluZ0JvbmVNYW5hZ2VyO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2x0Zi5wYXJzZXIuanNvbi5leHRlbnNpb25zID09PSB1bmRlZmluZWQgfHwgZ2x0Zi5wYXJzZXIuanNvbi5leHRlbnNpb25zLlZSTSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIFZSTSBleHRlbnNpb24gb24gdGhlIEdMVEYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZSA9IGdsdGYuc2NlbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnVwZGF0ZU1hdHJpeFdvcmxkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2tpbm5lZCBvYmplY3Qgc2hvdWxkIG5vdCBiZSBmcnVzdHVtQ3VsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHByZS1za2lubmVkIHBvc2l0aW9uIG1pZ2h0IGJlIG91dHNpZGUgb2Ygdmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS50cmF2ZXJzZShmdW5jdGlvbiAob2JqZWN0M2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QzZC5pc01lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QzZC5mcnVzdHVtQ3VsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9tZXRhSW1wb3J0ZXIuaW1wb3J0KGdsdGYpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGEgPSAoX2Muc2VudCgpKSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX21hdGVyaWFsSW1wb3J0ZXIuY29udmVydEdMVEZNYXRlcmlhbHMoZ2x0ZildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzID0gKF9jLnNlbnQoKSkgfHwgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9odW1hbm9pZEltcG9ydGVyLmltcG9ydChnbHRmKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodW1hbm9pZCA9IChfYy5zZW50KCkpIHx8IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFodW1hbm9pZCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX2ZpcnN0UGVyc29uSW1wb3J0ZXIuaW1wb3J0KGdsdGYsIGh1bWFub2lkKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IChfYy5zZW50KCkpIHx8IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RQZXJzb24gPSBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fYmxlbmRTaGFwZUltcG9ydGVyLmltcG9ydChnbHRmKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibGVuZFNoYXBlUHJveHkgPSAoX2Muc2VudCgpKSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGZpcnN0UGVyc29uICYmIGJsZW5kU2hhcGVQcm94eSAmJiBodW1hbm9pZCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9sb29rQXRJbXBvcnRlci5pbXBvcnQoZ2x0ZiwgZmlyc3RQZXJzb24sIGJsZW5kU2hhcGVQcm94eSwgaHVtYW5vaWQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gKF9jLnNlbnQoKSkgfHwgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29rQXQgPSBfYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2tBdC5zZXR1cEhlbHBlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9va0F0LnNldHVwSGVscGVyKHNjZW5lLCBkZWJ1Z09wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3NwcmluZ0JvbmVJbXBvcnRlci5pbXBvcnQoZ2x0ZildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcmluZ0JvbmVNYW5hZ2VyID0gKF9jLnNlbnQoKSkgfHwgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ByaW5nQm9uZU1hbmFnZXIuc2V0dXBIZWxwZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcmluZ0JvbmVNYW5hZ2VyLnNldHVwSGVscGVyKHNjZW5lLCBkZWJ1Z09wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgVlJNRGVidWdfMS5WUk1EZWJ1Zyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmU6IGdsdGYuc2NlbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YTogbWV0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbHM6IG1hdGVyaWFscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodW1hbm9pZDogaHVtYW5vaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RQZXJzb246IGZpcnN0UGVyc29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsZW5kU2hhcGVQcm94eTogYmxlbmRTaGFwZVByb3h5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb2tBdDogbG9va0F0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcmluZ0JvbmVNYW5hZ2VyOiBzcHJpbmdCb25lTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRlYnVnT3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVlJNSW1wb3J0ZXJEZWJ1ZztcclxufShWUk1JbXBvcnRlcl8xLlZSTUltcG9ydGVyKSk7XHJcbmV4cG9ydHMuVlJNSW1wb3J0ZXJEZWJ1ZyA9IFZSTUltcG9ydGVyRGVidWc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVlJNTG9va0F0SGVhZERlYnVnID0gdm9pZCAwO1xyXG52YXIgVEhSRUUgPSByZXF1aXJlKFwidGhyZWVcIik7XHJcbnZhciBWUk1Mb29rQXRIZWFkXzEgPSByZXF1aXJlKFwiLi4vbG9va2F0L1ZSTUxvb2tBdEhlYWRcIik7XHJcbnZhciBfdjMgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG52YXIgVlJNTG9va0F0SGVhZERlYnVnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFZSTUxvb2tBdEhlYWREZWJ1ZywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFZSTUxvb2tBdEhlYWREZWJ1ZygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBWUk1Mb29rQXRIZWFkRGVidWcucHJvdG90eXBlLnNldHVwSGVscGVyID0gZnVuY3Rpb24gKHNjZW5lLCBkZWJ1Z09wdGlvbikge1xyXG4gICAgICAgIGlmICghZGVidWdPcHRpb24uZGlzYWJsZUZhY2VEaXJlY3Rpb25IZWxwZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fZmFjZURpcmVjdGlvbkhlbHBlciA9IG5ldyBUSFJFRS5BcnJvd0hlbHBlcihuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtMSksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApLCAwLjUsIDB4ZmYwMGZmKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkKHRoaXMuX2ZhY2VEaXJlY3Rpb25IZWxwZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBWUk1Mb29rQXRIZWFkRGVidWcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgZGVsdGEpO1xyXG4gICAgICAgIGlmICh0aGlzLl9mYWNlRGlyZWN0aW9uSGVscGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RQZXJzb24uZ2V0Rmlyc3RQZXJzb25Xb3JsZFBvc2l0aW9uKHRoaXMuX2ZhY2VEaXJlY3Rpb25IZWxwZXIucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLl9mYWNlRGlyZWN0aW9uSGVscGVyLnNldERpcmVjdGlvbih0aGlzLmdldExvb2tBdFdvcmxkRGlyZWN0aW9uKF92MykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVlJNTG9va0F0SGVhZERlYnVnO1xyXG59KFZSTUxvb2tBdEhlYWRfMS5WUk1Mb29rQXRIZWFkKSk7XHJcbmV4cG9ydHMuVlJNTG9va0F0SGVhZERlYnVnID0gVlJNTG9va0F0SGVhZERlYnVnO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZSTUxvb2tBdEltcG9ydGVyRGVidWcgPSB2b2lkIDA7XHJcbnZhciBWUk1Mb29rQXRJbXBvcnRlcl8xID0gcmVxdWlyZShcIi4uL2xvb2thdC9WUk1Mb29rQXRJbXBvcnRlclwiKTtcclxudmFyIFZSTUxvb2tBdEhlYWREZWJ1Z18xID0gcmVxdWlyZShcIi4vVlJNTG9va0F0SGVhZERlYnVnXCIpO1xyXG52YXIgVlJNTG9va0F0SW1wb3J0ZXJEZWJ1ZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWUk1Mb29rQXRJbXBvcnRlckRlYnVnLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVlJNTG9va0F0SW1wb3J0ZXJEZWJ1ZygpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBWUk1Mb29rQXRJbXBvcnRlckRlYnVnLnByb3RvdHlwZS5pbXBvcnQgPSBmdW5jdGlvbiAoZ2x0ZiwgZmlyc3RQZXJzb24sIGJsZW5kU2hhcGVQcm94eSwgaHVtYW5vaWQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIHZybUV4dCA9IChfYSA9IGdsdGYucGFyc2VyLmpzb24uZXh0ZW5zaW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLlZSTTtcclxuICAgICAgICBpZiAoIXZybUV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNjaGVtYUZpcnN0UGVyc29uID0gdnJtRXh0LmZpcnN0UGVyc29uO1xyXG4gICAgICAgIGlmICghc2NoZW1hRmlyc3RQZXJzb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhcHBseWVyID0gdGhpcy5faW1wb3J0QXBwbHllcihzY2hlbWFGaXJzdFBlcnNvbiwgYmxlbmRTaGFwZVByb3h5LCBodW1hbm9pZCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWUk1Mb29rQXRIZWFkRGVidWdfMS5WUk1Mb29rQXRIZWFkRGVidWcoZmlyc3RQZXJzb24sIGFwcGx5ZXIgfHwgdW5kZWZpbmVkKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVlJNTG9va0F0SW1wb3J0ZXJEZWJ1ZztcclxufShWUk1Mb29rQXRJbXBvcnRlcl8xLlZSTUxvb2tBdEltcG9ydGVyKSk7XHJcbmV4cG9ydHMuVlJNTG9va0F0SW1wb3J0ZXJEZWJ1ZyA9IFZSTUxvb2tBdEltcG9ydGVyRGVidWc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVlJNU3ByaW5nQm9uZURlYnVnID0gdm9pZCAwO1xyXG52YXIgVEhSRUUgPSByZXF1aXJlKFwidGhyZWVcIik7XHJcbnZhciBzcHJpbmdib25lXzEgPSByZXF1aXJlKFwiLi4vc3ByaW5nYm9uZVwiKTtcclxudmFyIFZSTURlYnVnXzEgPSByZXF1aXJlKFwiLi9WUk1EZWJ1Z1wiKTtcclxudmFyIF92M0EgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG52YXIgVlJNU3ByaW5nQm9uZURlYnVnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFZSTVNwcmluZ0JvbmVEZWJ1ZywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFZSTVNwcmluZ0JvbmVEZWJ1Zyhib25lLCBwYXJhbXMpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgYm9uZSwgcGFyYW1zKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gc3ByaW5nIGJvbmUgZ2l6bW8sIGFzIGBUSFJFRS5BcnJvd0hlbHBlcmAuXHJcbiAgICAgKiBVc2VmdWwgZm9yIGRlYnVnZ2luZyBzcHJpbmcgYm9uZXMuXHJcbiAgICAgKi9cclxuICAgIFZSTVNwcmluZ0JvbmVEZWJ1Zy5wcm90b3R5cGUuZ2V0R2l6bW8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGlmIGdpem1vIGlzIGFscmVhZHkgZXhpc3RlZFxyXG4gICAgICAgIGlmICh0aGlzLl9naXptbykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2l6bW87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuZXh0VGFpbFJlbGF0aXZlID0gX3YzQS5jb3B5KHRoaXMuX25leHRUYWlsKS5zdWIodGhpcy5fY2VudGVyU3BhY2VQb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIG5leHRUYWlsUmVsYXRpdmVMZW5ndGggPSBuZXh0VGFpbFJlbGF0aXZlLmxlbmd0aCgpO1xyXG4gICAgICAgIHRoaXMuX2dpem1vID0gbmV3IFRIUkVFLkFycm93SGVscGVyKG5leHRUYWlsUmVsYXRpdmUubm9ybWFsaXplKCksIHRoaXMuX2NlbnRlclNwYWNlUG9zaXRpb24sIG5leHRUYWlsUmVsYXRpdmVMZW5ndGgsIDB4ZmZmZjAwLCB0aGlzLnJhZGl1cywgdGhpcy5yYWRpdXMpO1xyXG4gICAgICAgIC8vIGl0IHNob3VsZCBiZSBhbHdheXMgdmlzaWJsZVxyXG4gICAgICAgIHRoaXMuX2dpem1vLmxpbmUucmVuZGVyT3JkZXIgPSBWUk1EZWJ1Z18xLlZSTV9HSVpNT19SRU5ERVJfT1JERVI7XHJcbiAgICAgICAgdGhpcy5fZ2l6bW8uY29uZS5yZW5kZXJPcmRlciA9IFZSTURlYnVnXzEuVlJNX0dJWk1PX1JFTkRFUl9PUkRFUjtcclxuICAgICAgICB0aGlzLl9naXptby5saW5lLm1hdGVyaWFsLmRlcHRoVGVzdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2dpem1vLmxpbmUubWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2dpem1vLmNvbmUubWF0ZXJpYWwuZGVwdGhUZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZ2l6bW8uY29uZS5tYXRlcmlhbC50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dpem1vO1xyXG4gICAgfTtcclxuICAgIFZSTVNwcmluZ0JvbmVEZWJ1Zy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBkZWx0YSk7XHJcbiAgICAgICAgLy8gbGFzdGx5IHdlJ3JlIGdvbm5hIHVwZGF0ZSBnaXptb1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUdpem1vKCk7XHJcbiAgICB9O1xyXG4gICAgVlJNU3ByaW5nQm9uZURlYnVnLnByb3RvdHlwZS5fdXBkYXRlR2l6bW8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9naXptbykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuZXh0VGFpbFJlbGF0aXZlID0gX3YzQS5jb3B5KHRoaXMuX2N1cnJlbnRUYWlsKS5zdWIodGhpcy5fY2VudGVyU3BhY2VQb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIG5leHRUYWlsUmVsYXRpdmVMZW5ndGggPSBuZXh0VGFpbFJlbGF0aXZlLmxlbmd0aCgpO1xyXG4gICAgICAgIHRoaXMuX2dpem1vLnNldERpcmVjdGlvbihuZXh0VGFpbFJlbGF0aXZlLm5vcm1hbGl6ZSgpKTtcclxuICAgICAgICB0aGlzLl9naXptby5zZXRMZW5ndGgobmV4dFRhaWxSZWxhdGl2ZUxlbmd0aCwgdGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzKTtcclxuICAgICAgICB0aGlzLl9naXptby5wb3NpdGlvbi5jb3B5KHRoaXMuX2NlbnRlclNwYWNlUG9zaXRpb24pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWUk1TcHJpbmdCb25lRGVidWc7XHJcbn0oc3ByaW5nYm9uZV8xLlZSTVNwcmluZ0JvbmUpKTtcclxuZXhwb3J0cy5WUk1TcHJpbmdCb25lRGVidWcgPSBWUk1TcHJpbmdCb25lRGVidWc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZSTVNwcmluZ0JvbmVJbXBvcnRlckRlYnVnID0gdm9pZCAwO1xyXG52YXIgVlJNU3ByaW5nQm9uZUltcG9ydGVyXzEgPSByZXF1aXJlKFwiLi4vc3ByaW5nYm9uZS9WUk1TcHJpbmdCb25lSW1wb3J0ZXJcIik7XHJcbnZhciBWUk1TcHJpbmdCb25lTWFuYWdlckRlYnVnXzEgPSByZXF1aXJlKFwiLi9WUk1TcHJpbmdCb25lTWFuYWdlckRlYnVnXCIpO1xyXG52YXIgVlJNU3ByaW5nQm9uZURlYnVnXzEgPSByZXF1aXJlKFwiLi9WUk1TcHJpbmdCb25lRGVidWdcIik7XHJcbnZhciBWUk1TcHJpbmdCb25lSW1wb3J0ZXJEZWJ1ZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWUk1TcHJpbmdCb25lSW1wb3J0ZXJEZWJ1ZywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFZSTVNwcmluZ0JvbmVJbXBvcnRlckRlYnVnKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFZSTVNwcmluZ0JvbmVJbXBvcnRlckRlYnVnLnByb3RvdHlwZS5pbXBvcnQgPSBmdW5jdGlvbiAoZ2x0Zikge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdnJtRXh0LCBzY2hlbWFTZWNvbmRhcnlBbmltYXRpb24sIGNvbGxpZGVyR3JvdXBzLCBzcHJpbmdCb25lR3JvdXBMaXN0O1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2cm1FeHQgPSAoX2EgPSBnbHRmLnBhcnNlci5qc29uLmV4dGVuc2lvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5WUk07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdnJtRXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFTZWNvbmRhcnlBbmltYXRpb24gPSB2cm1FeHQuc2Vjb25kYXJ5QW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNjaGVtYVNlY29uZGFyeUFuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5faW1wb3J0Q29sbGlkZXJNZXNoR3JvdXBzKGdsdGYsIHNjaGVtYVNlY29uZGFyeUFuaW1hdGlvbildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXJHcm91cHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX2ltcG9ydFNwcmluZ0JvbmVHcm91cExpc3QoZ2x0Ziwgc2NoZW1hU2Vjb25kYXJ5QW5pbWF0aW9uLCBjb2xsaWRlckdyb3VwcyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaW5nQm9uZUdyb3VwTGlzdCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBWUk1TcHJpbmdCb25lTWFuYWdlckRlYnVnXzEuVlJNU3ByaW5nQm9uZU1hbmFnZXJEZWJ1Zyhjb2xsaWRlckdyb3Vwcywgc3ByaW5nQm9uZUdyb3VwTGlzdCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBWUk1TcHJpbmdCb25lSW1wb3J0ZXJEZWJ1Zy5wcm90b3R5cGUuX2NyZWF0ZVNwcmluZ0JvbmUgPSBmdW5jdGlvbiAoYm9uZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWUk1TcHJpbmdCb25lRGVidWdfMS5WUk1TcHJpbmdCb25lRGVidWcoYm9uZSwgcGFyYW1zKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVlJNU3ByaW5nQm9uZUltcG9ydGVyRGVidWc7XHJcbn0oVlJNU3ByaW5nQm9uZUltcG9ydGVyXzEuVlJNU3ByaW5nQm9uZUltcG9ydGVyKSk7XHJcbmV4cG9ydHMuVlJNU3ByaW5nQm9uZUltcG9ydGVyRGVidWcgPSBWUk1TcHJpbmdCb25lSW1wb3J0ZXJEZWJ1ZztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5WUk1TcHJpbmdCb25lTWFuYWdlckRlYnVnID0gdm9pZCAwO1xyXG52YXIgVEhSRUUgPSByZXF1aXJlKFwidGhyZWVcIik7XHJcbnZhciBzcHJpbmdib25lXzEgPSByZXF1aXJlKFwiLi4vc3ByaW5nYm9uZVwiKTtcclxudmFyIFZSTURlYnVnXzEgPSByZXF1aXJlKFwiLi9WUk1EZWJ1Z1wiKTtcclxudmFyIF9jb2xsaWRlckdpem1vTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgY29sb3I6IDB4ZmYwMGZmLFxyXG4gICAgd2lyZWZyYW1lOiB0cnVlLFxyXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICBkZXB0aFRlc3Q6IGZhbHNlLFxyXG59KTtcclxudmFyIFZSTVNwcmluZ0JvbmVNYW5hZ2VyRGVidWcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVlJNU3ByaW5nQm9uZU1hbmFnZXJEZWJ1ZywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFZSTVNwcmluZ0JvbmVNYW5hZ2VyRGVidWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVlJNU3ByaW5nQm9uZU1hbmFnZXJEZWJ1Zy5wcm90b3R5cGUuc2V0dXBIZWxwZXIgPSBmdW5jdGlvbiAoc2NlbmUsIGRlYnVnT3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKGRlYnVnT3B0aW9uLmRpc2FibGVTcHJpbmdCb25lSGVscGVyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zcHJpbmdCb25lR3JvdXBMaXN0LmZvckVhY2goZnVuY3Rpb24gKHNwcmluZ0JvbmVHcm91cCkge1xyXG4gICAgICAgICAgICBzcHJpbmdCb25lR3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoc3ByaW5nQm9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwcmluZ0JvbmUuZ2V0R2l6bW8pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ2l6bW8gPSBzcHJpbmdCb25lLmdldEdpem1vKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuYWRkKGdpem1vKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlckdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xsaWRlckdyb3VwKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVyR3JvdXAuY29sbGlkZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbGxpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlci5tYXRlcmlhbCA9IF9jb2xsaWRlckdpem1vTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlci5yZW5kZXJPcmRlciA9IFZSTURlYnVnXzEuVlJNX0dJWk1PX1JFTkRFUl9PUkRFUjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZSTVNwcmluZ0JvbmVNYW5hZ2VyRGVidWc7XHJcbn0oc3ByaW5nYm9uZV8xLlZSTVNwcmluZ0JvbmVNYW5hZ2VyKSk7XHJcbmV4cG9ydHMuVlJNU3ByaW5nQm9uZU1hbmFnZXJEZWJ1ZyA9IFZSTVNwcmluZ0JvbmVNYW5hZ2VyRGVidWc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vVlJNRGVidWdPcHRpb25zXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTURlYnVnXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTVNwcmluZ0JvbmVEZWJ1Z1wiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9WUk1TcHJpbmdCb25lSW1wb3J0ZXJEZWJ1Z1wiKSwgZXhwb3J0cyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVlJNRmlyc3RQZXJzb24gPSBleHBvcnRzLlZSTVJlbmRlcmVyRmlyc3RQZXJzb25GbGFncyA9IHZvaWQgMDtcclxudmFyIFRIUkVFID0gcmVxdWlyZShcInRocmVlXCIpO1xyXG52YXIgbWF0aF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL21hdGhcIik7XHJcbnZhciBWRUNUT1IzX0ZST05UID0gT2JqZWN0LmZyZWV6ZShuZXcgVEhSRUUuVmVjdG9yMygwLjAsIDAuMCwgLTEuMCkpO1xyXG52YXIgX3F1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG52YXIgRmlyc3RQZXJzb25GbGFnO1xyXG4oZnVuY3Rpb24gKEZpcnN0UGVyc29uRmxhZykge1xyXG4gICAgRmlyc3RQZXJzb25GbGFnW0ZpcnN0UGVyc29uRmxhZ1tcIkF1dG9cIl0gPSAwXSA9IFwiQXV0b1wiO1xyXG4gICAgRmlyc3RQZXJzb25GbGFnW0ZpcnN0UGVyc29uRmxhZ1tcIkJvdGhcIl0gPSAxXSA9IFwiQm90aFwiO1xyXG4gICAgRmlyc3RQZXJzb25GbGFnW0ZpcnN0UGVyc29uRmxhZ1tcIlRoaXJkUGVyc29uT25seVwiXSA9IDJdID0gXCJUaGlyZFBlcnNvbk9ubHlcIjtcclxuICAgIEZpcnN0UGVyc29uRmxhZ1tGaXJzdFBlcnNvbkZsYWdbXCJGaXJzdFBlcnNvbk9ubHlcIl0gPSAzXSA9IFwiRmlyc3RQZXJzb25Pbmx5XCI7XHJcbn0pKEZpcnN0UGVyc29uRmxhZyB8fCAoRmlyc3RQZXJzb25GbGFnID0ge30pKTtcclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBbYG1lc2hBbm5vdGF0aW9uYF0oaHR0cHM6Ly9naXRodWIuY29tL3ZybS1jL1VuaVZSTS9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzAuMC9zY2hlbWEvdnJtLmZpcnN0cGVyc29uLm1lc2hhbm5vdGF0aW9uLnNjaGVtYS5qc29uKSBlbnRyeS5cclxuICogRWFjaCBtZXNoIHdpbGwgYmUgYXNzaWduZWQgdG8gc3BlY2lmaWVkIGxheWVyIHdoZW4geW91IGNhbGwgW1tWUk1GaXJzdFBlcnNvbi5zZXR1cF1dLlxyXG4gKi9cclxudmFyIFZSTVJlbmRlcmVyRmlyc3RQZXJzb25GbGFncyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IG1lc2ggYW5ub3RhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlyc3RQZXJzb25GbGFnIEEgW1tGaXJzdFBlcnNvbkZsYWddXSBvZiB0aGUgYW5ub3RhdGlvbiBlbnRyeVxyXG4gICAgICogQHBhcmFtIG5vZGUgQSBub2RlIG9mIHRoZSBhbm5vdGF0aW9uIGVudHJ5LlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBWUk1SZW5kZXJlckZpcnN0UGVyc29uRmxhZ3MoZmlyc3RQZXJzb25GbGFnLCBtZXNoKSB7XHJcbiAgICAgICAgdGhpcy5maXJzdFBlcnNvbkZsYWcgPSBWUk1SZW5kZXJlckZpcnN0UGVyc29uRmxhZ3MuX3BhcnNlRmlyc3RQZXJzb25GbGFnKGZpcnN0UGVyc29uRmxhZyk7XHJcbiAgICAgICAgdGhpcy5tZXNoID0gbWVzaDtcclxuICAgIH1cclxuICAgIFZSTVJlbmRlcmVyRmlyc3RQZXJzb25GbGFncy5fcGFyc2VGaXJzdFBlcnNvbkZsYWcgPSBmdW5jdGlvbiAoZmlyc3RQZXJzb25GbGFnKSB7XHJcbiAgICAgICAgc3dpdGNoIChmaXJzdFBlcnNvbkZsYWcpIHtcclxuICAgICAgICAgICAgY2FzZSAnQm90aCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRmlyc3RQZXJzb25GbGFnLkJvdGg7XHJcbiAgICAgICAgICAgIGNhc2UgJ1RoaXJkUGVyc29uT25seSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRmlyc3RQZXJzb25GbGFnLlRoaXJkUGVyc29uT25seTtcclxuICAgICAgICAgICAgY2FzZSAnRmlyc3RQZXJzb25Pbmx5JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBGaXJzdFBlcnNvbkZsYWcuRmlyc3RQZXJzb25Pbmx5O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZpcnN0UGVyc29uRmxhZy5BdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVlJNUmVuZGVyZXJGaXJzdFBlcnNvbkZsYWdzO1xyXG59KCkpO1xyXG5leHBvcnRzLlZSTVJlbmRlcmVyRmlyc3RQZXJzb25GbGFncyA9IFZSTVJlbmRlcmVyRmlyc3RQZXJzb25GbGFncztcclxudmFyIFZSTUZpcnN0UGVyc29uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgVlJNRmlyc3RQZXJzb24gb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmaXJzdFBlcnNvbkJvbmUgQSBmaXJzdCBwZXJzb24gYm9uZVxyXG4gICAgICogQHBhcmFtIGZpcnN0UGVyc29uQm9uZU9mZnNldCBBbiBvZmZzZXQgZnJvbSB0aGUgc3BlY2lmaWVkIGZpcnN0IHBlcnNvbiBib25lXHJcbiAgICAgKiBAcGFyYW0gbWVzaEFubm90YXRpb25zIEEgcmVuZGVyZXIgc2V0dGluZ3MuIFNlZSB0aGUgZGVzY3JpcHRpb24gb2YgW1tSZW5kZXJlckZpcnN0UGVyc29uRmxhZ3NdXSBmb3IgbW9yZSBpbmZvXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFZSTUZpcnN0UGVyc29uKGZpcnN0UGVyc29uQm9uZSwgZmlyc3RQZXJzb25Cb25lT2Zmc2V0LCBtZXNoQW5ub3RhdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9tZXNoQW5ub3RhdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllciA9IFZSTUZpcnN0UGVyc29uLl9ERUZBVUxUX0ZJUlNUUEVSU09OX09OTFlfTEFZRVI7XHJcbiAgICAgICAgdGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIgPSBWUk1GaXJzdFBlcnNvbi5fREVGQVVMVF9USElSRFBFUlNPTl9PTkxZX0xBWUVSO1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZmlyc3RQZXJzb25Cb25lID0gZmlyc3RQZXJzb25Cb25lO1xyXG4gICAgICAgIHRoaXMuX2ZpcnN0UGVyc29uQm9uZU9mZnNldCA9IGZpcnN0UGVyc29uQm9uZU9mZnNldDtcclxuICAgICAgICB0aGlzLl9tZXNoQW5ub3RhdGlvbnMgPSBtZXNoQW5ub3RhdGlvbnM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVlJNRmlyc3RQZXJzb24ucHJvdG90eXBlLCBcImZpcnN0UGVyc29uQm9uZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maXJzdFBlcnNvbkJvbmU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZSTUZpcnN0UGVyc29uLnByb3RvdHlwZSwgXCJtZXNoQW5ub3RhdGlvbnNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWVzaEFubm90YXRpb25zO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZSTUZpcnN0UGVyc29uLnByb3RvdHlwZS5nZXRGaXJzdFBlcnNvbldvcmxkRGlyZWN0aW9uID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQuY29weShWRUNUT1IzX0ZST05UKS5hcHBseVF1YXRlcm5pb24obWF0aF8xLmdldFdvcmxkUXVhdGVybmlvbkxpdGUodGhpcy5fZmlyc3RQZXJzb25Cb25lLCBfcXVhdCkpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWUk1GaXJzdFBlcnNvbi5wcm90b3R5cGUsIFwiZmlyc3RQZXJzb25Pbmx5TGF5ZXJcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgY2FtZXJhIGxheWVyIHJlcHJlc2VudHMgYEZpcnN0UGVyc29uT25seWAgbGF5ZXIuXHJcbiAgICAgICAgICogTm90ZSB0aGF0ICoqeW91IG11c3QgY2FsbCBbW3NldHVwXV0gZmlyc3QgYmVmb3JlIHlvdSB1c2UgdGhlIGxheWVyIGZlYXR1cmUqKiBvciBpdCBkb2VzIG5vdCB3b3JrIHByb3Blcmx5LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogVGhlIHZhbHVlIGlzIFtbREVGQVVMVF9GSVJTVFBFUlNPTl9PTkxZX0xBWUVSXV0gYnkgZGVmYXVsdCBidXQgeW91IGNhbiBjaGFuZ2UgdGhlIGxheWVyIGJ5IHNwZWNpZnlpbmcgdmlhIFtbc2V0dXBdXSBpZiB5b3UgcHJlZmVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHNlZSBodHRwczovL3ZybS5kZXYvZW4vdW5pdnJtL2FwaS91bml2cm1fdXNlX2ZpcnN0cGVyc29uL1xyXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzLyNhcGkvZW4vY29yZS9MYXllcnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWUk1GaXJzdFBlcnNvbi5wcm90b3R5cGUsIFwidGhpcmRQZXJzb25Pbmx5TGF5ZXJcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgY2FtZXJhIGxheWVyIHJlcHJlc2VudHMgYFRoaXJkUGVyc29uT25seWAgbGF5ZXIuXHJcbiAgICAgICAgICogTm90ZSB0aGF0ICoqeW91IG11c3QgY2FsbCBbW3NldHVwXV0gZmlyc3QgYmVmb3JlIHlvdSB1c2UgdGhlIGxheWVyIGZlYXR1cmUqKiBvciBpdCBkb2VzIG5vdCB3b3JrIHByb3Blcmx5LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogVGhlIHZhbHVlIGlzIFtbREVGQVVMVF9USElSRFBFUlNPTl9PTkxZX0xBWUVSXV0gYnkgZGVmYXVsdCBidXQgeW91IGNhbiBjaGFuZ2UgdGhlIGxheWVyIGJ5IHNwZWNpZnlpbmcgdmlhIFtbc2V0dXBdXSBpZiB5b3UgcHJlZmVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHNlZSBodHRwczovL3ZybS5kZXYvZW4vdW5pdnJtL2FwaS91bml2cm1fdXNlX2ZpcnN0cGVyc29uL1xyXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzLyNhcGkvZW4vY29yZS9MYXllcnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZSTUZpcnN0UGVyc29uLnByb3RvdHlwZS5nZXRGaXJzdFBlcnNvbkJvbmVPZmZzZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldC5jb3B5KHRoaXMuX2ZpcnN0UGVyc29uQm9uZU9mZnNldCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY3VycmVudCB3b3JsZCBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgcGVyc29uLlxyXG4gICAgICogVGhlIHBvc2l0aW9uIHRha2VzIFtbRmlyc3RQZXJzb25Cb25lXV0gYW5kIFtbRmlyc3RQZXJzb25PZmZzZXRdXSBpbnRvIGFjY291bnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHYzIHRhcmdldFxyXG4gICAgICogQHJldHVybnMgQ3VycmVudCB3b3JsZCBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgcGVyc29uXHJcbiAgICAgKi9cclxuICAgIFZSTUZpcnN0UGVyc29uLnByb3RvdHlwZS5nZXRGaXJzdFBlcnNvbldvcmxkUG9zaXRpb24gPSBmdW5jdGlvbiAodjMpIHtcclxuICAgICAgICAvLyBVbmlWUk0jVlJNRmlyc3RQZXJzb25FZGl0b3JcclxuICAgICAgICAvLyB2YXIgd29ybGRPZmZzZXQgPSBoZWFkLmxvY2FsVG9Xb3JsZE1hdHJpeC5NdWx0aXBseVBvaW50KGNvbXBvbmVudC5GaXJzdFBlcnNvbk9mZnNldCk7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuX2ZpcnN0UGVyc29uQm9uZU9mZnNldDtcclxuICAgICAgICB2YXIgdjQgPSBuZXcgVEhSRUUuVmVjdG9yNChvZmZzZXQueCwgb2Zmc2V0LnksIG9mZnNldC56LCAxLjApO1xyXG4gICAgICAgIHY0LmFwcGx5TWF0cml4NCh0aGlzLl9maXJzdFBlcnNvbkJvbmUubWF0cml4V29ybGQpO1xyXG4gICAgICAgIHJldHVybiB2My5zZXQodjQueCwgdjQueSwgdjQueik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbiB0aGlzIG1ldGhvZCwgaXQgYXNzaWducyBsYXllcnMgZm9yIGV2ZXJ5IG1lc2hlcyBiYXNlZCBvbiBtZXNoIGFubm90YXRpb25zLlxyXG4gICAgICogWW91IG11c3QgY2FsbCB0aGlzIG1ldGhvZCBmaXJzdCBiZWZvcmUgeW91IHVzZSB0aGUgbGF5ZXIgZmVhdHVyZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGlzIGFuIGVxdWl2YWxlbnQgb2YgW1ZSTUZpcnN0UGVyc29uLlNldHVwXShodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvVW5pVlJNL2Jsb2IvbWFzdGVyL0Fzc2V0cy9WUk0vVW5pVlJNL1NjcmlwdHMvRmlyc3RQZXJzb24vVlJNRmlyc3RQZXJzb24uY3MpIG9mIHRoZSBVbmlWUk0uXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGBjYW1lcmFMYXllcmAgcGFyYW1ldGVyIHNwZWNpZmllcyB3aGljaCBsYXllciB3aWxsIGJlIGFzc2lnbmVkIGZvciBgRmlyc3RQZXJzb25Pbmx5YCAvIGBUaGlyZFBlcnNvbk9ubHlgLlxyXG4gICAgICogSW4gVW5pVlJNLCB3ZSBzcGVjaWZpZWQgdGhvc2UgYnkgbmFtaW5nIGVhY2ggZGVzaXJlZCBsYXllciBhcyBgRklSU1RQRVJTT05fT05MWV9MQVlFUmAgLyBgVEhJUkRQRVJTT05fT05MWV9MQVlFUmBcclxuICAgICAqIGJ1dCB3ZSBhcmUgZ29pbmcgdG8gc3BlY2lmeSB0aGVzZSBsYXllcnMgYXQgaGVyZSBzaW5jZSB3ZSBhcmUgdW5hYmxlIHRvIG5hbWUgbGF5ZXJzIGluIFRocmVlLmpzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYW1lcmFMYXllciBTcGVjaWZ5IHdoaWNoIGxheWVyIHdpbGwgYmUgZm9yIGBGaXJzdFBlcnNvbk9ubHlgIC8gYFRoaXJkUGVyc29uT25seWAuXHJcbiAgICAgKi9cclxuICAgIFZSTUZpcnN0UGVyc29uLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIF9jID0gX2IuZmlyc3RQZXJzb25Pbmx5TGF5ZXIsIGZpcnN0UGVyc29uT25seUxheWVyID0gX2MgPT09IHZvaWQgMCA/IFZSTUZpcnN0UGVyc29uLl9ERUZBVUxUX0ZJUlNUUEVSU09OX09OTFlfTEFZRVIgOiBfYywgX2QgPSBfYi50aGlyZFBlcnNvbk9ubHlMYXllciwgdGhpcmRQZXJzb25Pbmx5TGF5ZXIgPSBfZCA9PT0gdm9pZCAwID8gVlJNRmlyc3RQZXJzb24uX0RFRkFVTFRfVEhJUkRQRVJTT05fT05MWV9MQVlFUiA6IF9kO1xyXG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllciA9IGZpcnN0UGVyc29uT25seUxheWVyO1xyXG4gICAgICAgIHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyID0gdGhpcmRQZXJzb25Pbmx5TGF5ZXI7XHJcbiAgICAgICAgdGhpcy5fbWVzaEFubm90YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uZmlyc3RQZXJzb25GbGFnID09PSBGaXJzdFBlcnNvbkZsYWcuRmlyc3RQZXJzb25Pbmx5KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm1lc2gubGF5ZXJzLnNldChfdGhpcy5fZmlyc3RQZXJzb25Pbmx5TGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5tZXNoLnRyYXZlcnNlKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQubGF5ZXJzLnNldChfdGhpcy5fZmlyc3RQZXJzb25Pbmx5TGF5ZXIpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtLmZpcnN0UGVyc29uRmxhZyA9PT0gRmlyc3RQZXJzb25GbGFnLlRoaXJkUGVyc29uT25seSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5tZXNoLmxheWVycy5zZXQoX3RoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubWVzaC50cmF2ZXJzZShmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLmxheWVycy5zZXQoX3RoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5maXJzdFBlcnNvbkZsYWcgPT09IEZpcnN0UGVyc29uRmxhZy5BdXRvKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fY3JlYXRlSGVhZGxlc3NNb2RlbChpdGVtLm1lc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVlJNRmlyc3RQZXJzb24ucHJvdG90eXBlLl9leGNsdWRlVHJpYW5nbGVzID0gZnVuY3Rpb24gKHRyaWFuZ2xlcywgYndzLCBza2luSW5kZXgsIGV4Y2x1ZGUpIHtcclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgIGlmIChid3MgIT0gbnVsbCAmJiBid3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyaWFuZ2xlcy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSB0cmlhbmdsZXNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHRyaWFuZ2xlc1tpICsgMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHRyaWFuZ2xlc1tpICsgMl07XHJcbiAgICAgICAgICAgICAgICB2YXIgYncwID0gYndzW2FdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNraW4wID0gc2tpbkluZGV4W2FdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ3MFswXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMFswXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYncwWzFdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4wWzFdKSlcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGlmIChidzBbMl0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjBbMl0pKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ3MFszXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMFszXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgYncxID0gYndzW2JdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNraW4xID0gc2tpbkluZGV4W2JdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ3MVswXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMVswXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYncxWzFdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4xWzFdKSlcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGlmIChidzFbMl0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjFbMl0pKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ3MVszXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMVszXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgYncyID0gYndzW2NdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNraW4yID0gc2tpbkluZGV4W2NdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ3MlswXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMlswXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYncyWzFdID4gMCAmJiBleGNsdWRlLmluY2x1ZGVzKHNraW4yWzFdKSlcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGlmIChidzJbMl0gPiAwICYmIGV4Y2x1ZGUuaW5jbHVkZXMoc2tpbjJbMl0pKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ3MlszXSA+IDAgJiYgZXhjbHVkZS5pbmNsdWRlcyhza2luMlszXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB0cmlhbmdsZXNbY291bnQrK10gPSBhO1xyXG4gICAgICAgICAgICAgICAgdHJpYW5nbGVzW2NvdW50KytdID0gYjtcclxuICAgICAgICAgICAgICAgIHRyaWFuZ2xlc1tjb3VudCsrXSA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfTtcclxuICAgIFZSTUZpcnN0UGVyc29uLnByb3RvdHlwZS5fY3JlYXRlRXJhc2VkTWVzaCA9IGZ1bmN0aW9uIChzcmMsIGVyYXNpbmdCb25lc0luZGV4KSB7XHJcbiAgICAgICAgdmFyIGRzdCA9IG5ldyBUSFJFRS5Ta2lubmVkTWVzaChzcmMuZ2VvbWV0cnkuY2xvbmUoKSwgc3JjLm1hdGVyaWFsKTtcclxuICAgICAgICBkc3QubmFtZSA9IHNyYy5uYW1lICsgXCIoZXJhc2UpXCI7XHJcbiAgICAgICAgZHN0LmZydXN0dW1DdWxsZWQgPSBzcmMuZnJ1c3R1bUN1bGxlZDtcclxuICAgICAgICBkc3QubGF5ZXJzLnNldCh0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllcik7XHJcbiAgICAgICAgdmFyIGdlb21ldHJ5ID0gZHN0Lmdlb21ldHJ5O1xyXG4gICAgICAgIHZhciBza2luSW5kZXhBdHRyID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCdza2luSW5kZXgnKS5hcnJheTtcclxuICAgICAgICB2YXIgc2tpbkluZGV4ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBza2luSW5kZXhBdHRyLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgICAgICAgIHNraW5JbmRleC5wdXNoKFtza2luSW5kZXhBdHRyW2ldLCBza2luSW5kZXhBdHRyW2kgKyAxXSwgc2tpbkluZGV4QXR0cltpICsgMl0sIHNraW5JbmRleEF0dHJbaSArIDNdXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBza2luV2VpZ2h0QXR0ciA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSgnc2tpbldlaWdodCcpLmFycmF5O1xyXG4gICAgICAgIHZhciBza2luV2VpZ2h0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBza2luV2VpZ2h0QXR0ci5sZW5ndGg7IGkgKz0gNCkge1xyXG4gICAgICAgICAgICBza2luV2VpZ2h0LnB1c2goW3NraW5XZWlnaHRBdHRyW2ldLCBza2luV2VpZ2h0QXR0cltpICsgMV0sIHNraW5XZWlnaHRBdHRyW2kgKyAyXSwgc2tpbldlaWdodEF0dHJbaSArIDNdXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XHJcbiAgICAgICAgaWYgKCFpbmRleCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2VvbWV0cnkgZG9lc24ndCBoYXZlIGFuIGluZGV4IGJ1ZmZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9sZFRyaWFuZ2xlcyA9IEFycmF5LmZyb20oaW5kZXguYXJyYXkpO1xyXG4gICAgICAgIHZhciBjb3VudCA9IHRoaXMuX2V4Y2x1ZGVUcmlhbmdsZXMob2xkVHJpYW5nbGVzLCBza2luV2VpZ2h0LCBza2luSW5kZXgsIGVyYXNpbmdCb25lc0luZGV4KTtcclxuICAgICAgICB2YXIgbmV3VHJpYW5nbGUgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbmV3VHJpYW5nbGVbaV0gPSBvbGRUcmlhbmdsZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdlb21ldHJ5LnNldEluZGV4KG5ld1RyaWFuZ2xlKTtcclxuICAgICAgICAvLyBtdG9vbiBtYXRlcmlhbCBpbmNsdWRlcyBvbkJlZm9yZVJlbmRlci4gdGhpcyBpcyB1bnN1cHBvcnRlZCBhdCBTa2lubmVkTWVzaCNjbG9uZVxyXG4gICAgICAgIGlmIChzcmMub25CZWZvcmVSZW5kZXIpIHtcclxuICAgICAgICAgICAgZHN0Lm9uQmVmb3JlUmVuZGVyID0gc3JjLm9uQmVmb3JlUmVuZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkc3QuYmluZChuZXcgVEhSRUUuU2tlbGV0b24oc3JjLnNrZWxldG9uLmJvbmVzLCBzcmMuc2tlbGV0b24uYm9uZUludmVyc2VzKSwgbmV3IFRIUkVFLk1hdHJpeDQoKSk7XHJcbiAgICAgICAgcmV0dXJuIGRzdDtcclxuICAgIH07XHJcbiAgICBWUk1GaXJzdFBlcnNvbi5wcm90b3R5cGUuX2NyZWF0ZUhlYWRsZXNzTW9kZWxGb3JTa2lubmVkTWVzaCA9IGZ1bmN0aW9uIChwYXJlbnQsIG1lc2gpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBlcmFzZUJvbmVJbmRleGVzID0gW107XHJcbiAgICAgICAgbWVzaC5za2VsZXRvbi5ib25lcy5mb3JFYWNoKGZ1bmN0aW9uIChib25lLCBpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX2lzRXJhc2VUYXJnZXQoYm9uZSkpXHJcbiAgICAgICAgICAgICAgICBlcmFzZUJvbmVJbmRleGVzLnB1c2goaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFVubGlrZSBVbmlWUk0gd2UgZG9uJ3QgY29weSBtZXNoIGlmIG5vIGludmlzaWJsZSBib25lIHdhcyBmb3VuZFxyXG4gICAgICAgIGlmICghZXJhc2VCb25lSW5kZXhlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWVzaC5sYXllcnMuZW5hYmxlKHRoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKTtcclxuICAgICAgICAgICAgbWVzaC5sYXllcnMuZW5hYmxlKHRoaXMuX2ZpcnN0UGVyc29uT25seUxheWVyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXNoLmxheWVycy5zZXQodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpO1xyXG4gICAgICAgIHZhciBuZXdNZXNoID0gdGhpcy5fY3JlYXRlRXJhc2VkTWVzaChtZXNoLCBlcmFzZUJvbmVJbmRleGVzKTtcclxuICAgICAgICBwYXJlbnQuYWRkKG5ld01lc2gpO1xyXG4gICAgfTtcclxuICAgIFZSTUZpcnN0UGVyc29uLnByb3RvdHlwZS5fY3JlYXRlSGVhZGxlc3NNb2RlbCA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnR3JvdXAnKSB7XHJcbiAgICAgICAgICAgIG5vZGUubGF5ZXJzLnNldCh0aGlzLl90aGlyZFBlcnNvbk9ubHlMYXllcik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0VyYXNlVGFyZ2V0KG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnRyYXZlcnNlKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQubGF5ZXJzLnNldChfdGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50XzEubmFtZSA9IFwiX2hlYWRsZXNzX1wiICsgbm9kZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50XzEubGF5ZXJzLnNldCh0aGlzLl9maXJzdFBlcnNvbk9ubHlMYXllcik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudC5hZGQocGFyZW50XzEpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC50eXBlID09PSAnU2tpbm5lZE1lc2gnOyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBza2lubmVkTWVzaCA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9jcmVhdGVIZWFkbGVzc01vZGVsRm9yU2tpbm5lZE1lc2gocGFyZW50XzEsIHNraW5uZWRNZXNoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ1NraW5uZWRNZXNoJykge1xyXG4gICAgICAgICAgICB2YXIgc2tpbm5lZE1lc2ggPSBub2RlO1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVIZWFkbGVzc01vZGVsRm9yU2tpbm5lZE1lc2gobm9kZS5wYXJlbnQsIHNraW5uZWRNZXNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0VyYXNlVGFyZ2V0KG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmxheWVycy5zZXQodGhpcy5fdGhpcmRQZXJzb25Pbmx5TGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS50cmF2ZXJzZShmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLmxheWVycy5zZXQoX3RoaXMuX3RoaXJkUGVyc29uT25seUxheWVyKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVlJNRmlyc3RQZXJzb24ucHJvdG90eXBlLl9pc0VyYXNlVGFyZ2V0ID0gZnVuY3Rpb24gKGJvbmUpIHtcclxuICAgICAgICBpZiAoYm9uZS5uYW1lID09PSB0aGlzLl9maXJzdFBlcnNvbkJvbmUubmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIWJvbmUucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0VyYXNlVGFyZ2V0KGJvbmUucGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIGRlZmF1bHQgY2FtZXJhIGxheWVyIGZvciBgRmlyc3RQZXJzb25Pbmx5YCBsYXllci5cclxuICAgICAqXHJcbiAgICAgKiBAc2VlIFtbZ2V0Rmlyc3RQZXJzb25Pbmx5TGF5ZXJdXVxyXG4gICAgICovXHJcbiAgICBWUk1GaXJzdFBlcnNvbi5fREVGQVVMVF9GSVJTVFBFUlNPTl9PTkxZX0xBWUVSID0gOTtcclxuICAgIC8qKlxyXG4gICAgICogQSBkZWZhdWx0IGNhbWVyYSBsYXllciBmb3IgYFRoaXJkUGVyc29uT25seWAgbGF5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHNlZSBbW2dldFRoaXJkUGVyc29uT25seUxheWVyXV1cclxuICAgICAqL1xyXG4gICAgVlJNRmlyc3RQZXJzb24uX0RFRkFVTFRfVEhJUkRQRVJTT05fT05MWV9MQVlFUiA9IDEwO1xyXG4gICAgcmV0dXJuIFZSTUZpcnN0UGVyc29uO1xyXG59KCkpO1xyXG5leHBvcnRzLlZSTUZpcnN0UGVyc29uID0gVlJNRmlyc3RQZXJzb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZSTUZpcnN0UGVyc29uSW1wb3J0ZXIgPSB2b2lkIDA7XHJcbnZhciBUSFJFRSA9IHJlcXVpcmUoXCJ0aHJlZVwiKTtcclxudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XHJcbnZhciBWUk1GaXJzdFBlcnNvbl8xID0gcmVxdWlyZShcIi4vVlJNRmlyc3RQZXJzb25cIik7XHJcbi8qKlxyXG4gKiBBbiBpbXBvcnRlciB0aGF0IGltcG9ydHMgYSBbW1ZSTUZpcnN0UGVyc29uXV0gZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxyXG4gKi9cclxudmFyIFZSTUZpcnN0UGVyc29uSW1wb3J0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWUk1GaXJzdFBlcnNvbkltcG9ydGVyKCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnQgYSBbW1ZSTUZpcnN0UGVyc29uXV0gZnJvbSBhIFZSTS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZ2x0ZiBBIHBhcnNlZCByZXN1bHQgb2YgR0xURiB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcclxuICAgICAqIEBwYXJhbSBodW1hbm9pZCBBIFtbVlJNSHVtYW5vaWRdXSBpbnN0YW5jZSB0aGF0IHJlcHJlc2VudHMgdGhlIFZSTVxyXG4gICAgICovXHJcbiAgICBWUk1GaXJzdFBlcnNvbkltcG9ydGVyLnByb3RvdHlwZS5pbXBvcnQgPSBmdW5jdGlvbiAoZ2x0ZiwgaHVtYW5vaWQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHZybUV4dCwgc2NoZW1hRmlyc3RQZXJzb24sIGZpcnN0UGVyc29uQm9uZUluZGV4LCBmaXJzdFBlcnNvbkJvbmUsIGZpcnN0UGVyc29uQm9uZU9mZnNldCwgbWVzaEFubm90YXRpb25zLCBtZXNoZXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZybUV4dCA9IChfYSA9IGdsdGYucGFyc2VyLmpzb24uZXh0ZW5zaW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLlZSTTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2cm1FeHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFGaXJzdFBlcnNvbiA9IHZybUV4dC5maXJzdFBlcnNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzY2hlbWFGaXJzdFBlcnNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0UGVyc29uQm9uZUluZGV4ID0gc2NoZW1hRmlyc3RQZXJzb24uZmlyc3RQZXJzb25Cb25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShmaXJzdFBlcnNvbkJvbmVJbmRleCA9PT0gdW5kZWZpbmVkIHx8IGZpcnN0UGVyc29uQm9uZUluZGV4ID09PSAtMSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFBlcnNvbkJvbmUgPSBodW1hbm9pZC5nZXRCb25lTm9kZSh0eXBlc18xLlZSTVNjaGVtYS5IdW1hbm9pZEJvbmVOYW1lLkhlYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIGdsdGYucGFyc2VyLmdldERlcGVuZGVuY3koJ25vZGUnLCBmaXJzdFBlcnNvbkJvbmVJbmRleCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RQZXJzb25Cb25lID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpcnN0UGVyc29uQm9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdWUk1GaXJzdFBlcnNvbkltcG9ydGVyOiBDb3VsZCBub3QgZmluZCBmaXJzdFBlcnNvbkJvbmUgb2YgdGhlIFZSTScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0UGVyc29uQm9uZU9mZnNldCA9IHNjaGVtYUZpcnN0UGVyc29uLmZpcnN0UGVyc29uQm9uZU9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgVEhSRUUuVmVjdG9yMyhzY2hlbWFGaXJzdFBlcnNvbi5maXJzdFBlcnNvbkJvbmVPZmZzZXQueCwgc2NoZW1hRmlyc3RQZXJzb24uZmlyc3RQZXJzb25Cb25lT2Zmc2V0LnksIC1zY2hlbWFGaXJzdFBlcnNvbi5maXJzdFBlcnNvbkJvbmVPZmZzZXQueilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IFRIUkVFLlZlY3RvcjMoMC4wLCAwLjA2LCAwLjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoQW5ub3RhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2x0Zi5wYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCdtZXNoJyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzaGVzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoZXMuZm9yRWFjaChmdW5jdGlvbiAobWVzaCwgbWVzaEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmxhZyA9IHNjaGVtYUZpcnN0UGVyc29uLm1lc2hBbm5vdGF0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2NoZW1hRmlyc3RQZXJzb24ubWVzaEFubm90YXRpb25zLmZpbmQoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEubWVzaCA9PT0gbWVzaEluZGV4OyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaEFubm90YXRpb25zLnB1c2gobmV3IFZSTUZpcnN0UGVyc29uXzEuVlJNUmVuZGVyZXJGaXJzdFBlcnNvbkZsYWdzKGZsYWcgPT09IG51bGwgfHwgZmxhZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmxhZy5maXJzdFBlcnNvbkZsYWcsIG1lc2gpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgVlJNRmlyc3RQZXJzb25fMS5WUk1GaXJzdFBlcnNvbihmaXJzdFBlcnNvbkJvbmUsIGZpcnN0UGVyc29uQm9uZU9mZnNldCwgbWVzaEFubm90YXRpb25zKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWUk1GaXJzdFBlcnNvbkltcG9ydGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLlZSTUZpcnN0UGVyc29uSW1wb3J0ZXIgPSBWUk1GaXJzdFBlcnNvbkltcG9ydGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTUZpcnN0UGVyc29uXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTUZpcnN0UGVyc29uSW1wb3J0ZXJcIiksIGV4cG9ydHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZSTUh1bWFuQm9uZSA9IHZvaWQgMDtcclxuLyoqXHJcbiAqIEEgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBgaHVtYW5Cb25lYCBvZiBhIFZSTS5cclxuICovXHJcbnZhciBWUk1IdW1hbkJvbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBWUk1IdW1hbkJvbmUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5vZGUgQSBbW0dMVEZOb2RlXV0gdGhhdCByZXByZXNlbnRzIHRoZSBuZXcgYm9uZVxyXG4gICAgICogQHBhcmFtIGh1bWFuTGltaXQgQSBbW1ZSTUh1bWFuTGltaXRdXSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHByb3BlcnRpZXMgb2YgdGhlIG5ldyBib25lXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFZSTUh1bWFuQm9uZShub2RlLCBodW1hbkxpbWl0KSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLmh1bWFuTGltaXQgPSBodW1hbkxpbWl0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFZSTUh1bWFuQm9uZTtcclxufSgpKTtcclxuZXhwb3J0cy5WUk1IdW1hbkJvbmUgPSBWUk1IdW1hbkJvbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVlJNSHVtYW5vaWQgPSB2b2lkIDA7XHJcbnZhciBUSFJFRSA9IHJlcXVpcmUoXCJ0aHJlZVwiKTtcclxudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XHJcbnZhciBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxudmFyIF9xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIHJlcHJlc2VudHMgaHVtYW5vaWQgb2YgYSBWUk0uXHJcbiAqL1xyXG52YXIgVlJNSHVtYW5vaWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBbW1ZSTUh1bWFub2lkXV0uXHJcbiAgICAgKiBAcGFyYW0gYm9uZUFycmF5IEEgW1tWUk1IdW1hbkJvbmVBcnJheV1dIGNvbnRhaW5zIGFsbCB0aGUgYm9uZXMgb2YgdGhlIG5ldyBodW1hbm9pZFxyXG4gICAgICogQHBhcmFtIGh1bWFuRGVzY3JpcHRpb24gQSBbW1ZSTUh1bWFuRGVzY3JpcHRpb25dXSB0aGF0IHJlcHJlc2VudHMgcHJvcGVydGllcyBvZiB0aGUgbmV3IGh1bWFub2lkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFZSTUh1bWFub2lkKGJvbmVBcnJheSwgaHVtYW5EZXNjcmlwdGlvbikge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgW1tWUk1Qb3NlXV0gdGhhdCBpcyBpdHMgZGVmYXVsdCBzdGF0ZS5cclxuICAgICAgICAgKiBOb3RlIHRoYXQgaXQncyBub3QgY29tcGF0aWJsZSB3aXRoIGBzZXRQb3NlYCBhbmQgYGdldFBvc2VgLCBzaW5jZSBpdCBjb250YWlucyBub24tcmVsYXRpdmUgdmFsdWVzIG9mIGVhY2ggbG9jYWwgdHJhbnNmb3Jtcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnJlc3RQb3NlID0ge307XHJcbiAgICAgICAgdGhpcy5odW1hbkJvbmVzID0gdGhpcy5fY3JlYXRlSHVtYW5Cb25lcyhib25lQXJyYXkpO1xyXG4gICAgICAgIHRoaXMuaHVtYW5EZXNjcmlwdGlvbiA9IGh1bWFuRGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5yZXN0UG9zZSA9IHRoaXMuZ2V0UG9zZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgcG9zZSBvZiB0aGlzIGh1bWFub2lkIGFzIGEgW1tWUk1Qb3NlXV0uXHJcbiAgICAgKlxyXG4gICAgICogRWFjaCB0cmFuc2Zvcm0gaXMgYSBsb2NhbCB0cmFuc2Zvcm0gcmVsYXRpdmUgZnJvbSByZXN0IHBvc2UgKFQtcG9zZSkuXHJcbiAgICAgKi9cclxuICAgIFZSTUh1bWFub2lkLnByb3RvdHlwZS5nZXRQb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBvc2UgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmh1bWFuQm9uZXMpLmZvckVhY2goZnVuY3Rpb24gKHZybUJvbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gX3RoaXMuZ2V0Qm9uZU5vZGUodnJtQm9uZU5hbWUpO1xyXG4gICAgICAgICAgICAvLyBJZ25vcmUgd2hlbiB0aGVyZSBhcmUgbm8gYm9uZSBvbiB0aGUgVlJNSHVtYW5vaWRcclxuICAgICAgICAgICAgaWYgKCFub2RlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gV2hlbiB0aGVyZSBhcmUgdHdvIG9yIG1vcmUgYm9uZXMgaW4gYSBzYW1lIG5hbWUsIHdlIGFyZSBub3QgZ29pbmcgdG8gb3ZlcndyaXRlIGV4aXN0aW5nIG9uZVxyXG4gICAgICAgICAgICBpZiAocG9zZVt2cm1Cb25lTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUYWtlIGEgZGlmZiBmcm9tIHJlc3RQb3NlXHJcbiAgICAgICAgICAgIC8vIG5vdGUgdGhhdCByZXN0UG9zZSBhbHNvIHdpbGwgdXNlIGdldFBvc2UgdG8gaW5pdGlhbGl6ZSBpdHNlbGZcclxuICAgICAgICAgICAgX3YzQS5zZXQoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIF9xdWF0QS5pZGVudGl0eSgpO1xyXG4gICAgICAgICAgICB2YXIgcmVzdFN0YXRlID0gX3RoaXMucmVzdFBvc2VbdnJtQm9uZU5hbWVdO1xyXG4gICAgICAgICAgICBpZiAocmVzdFN0YXRlID09PSBudWxsIHx8IHJlc3RTdGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzdFN0YXRlLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBfdjNBLmZyb21BcnJheShyZXN0U3RhdGUucG9zaXRpb24pLm5lZ2F0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN0U3RhdGUgPT09IG51bGwgfHwgcmVzdFN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXN0U3RhdGUucm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIF9xdWF0QS5mcm9tQXJyYXkocmVzdFN0YXRlLnJvdGF0aW9uKS5pbnZlcnNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBwb3NpdGlvbiAvIHJvdGF0aW9uIGZyb20gdGhlIG5vZGVcclxuICAgICAgICAgICAgX3YzQS5hZGQobm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIF9xdWF0QS5wcmVtdWx0aXBseShub2RlLnF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICBwb3NlW3ZybUJvbmVOYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBfdjNBLnRvQXJyYXkoKSxcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBfcXVhdEEudG9BcnJheSgpLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgICAgICByZXR1cm4gcG9zZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIExldCB0aGUgaHVtYW5vaWQgZG8gYSBzcGVjaWZpZWQgcG9zZS5cclxuICAgICAqXHJcbiAgICAgKiBFYWNoIHRyYW5zZm9ybSBoYXZlIHRvIGJlIGEgbG9jYWwgdHJhbnNmb3JtIHJlbGF0aXZlIGZyb20gcmVzdCBwb3NlIChULXBvc2UpLlxyXG4gICAgICogWW91IGNhbiBwYXNzIHdoYXQgeW91IGdvdCBmcm9tIHtAbGluayBnZXRQb3NlfS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcG9zZU9iamVjdCBBIFtbVlJNUG9zZV1dIHRoYXQgcmVwcmVzZW50cyBhIHNpbmdsZSBwb3NlXHJcbiAgICAgKi9cclxuICAgIFZSTUh1bWFub2lkLnByb3RvdHlwZS5zZXRQb3NlID0gZnVuY3Rpb24gKHBvc2VPYmplY3QpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHBvc2VPYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKGJvbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHBvc2VPYmplY3RbYm9uZU5hbWVdO1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IF90aGlzLmdldEJvbmVOb2RlKGJvbmVOYW1lKTtcclxuICAgICAgICAgICAgLy8gSWdub3JlIHdoZW4gdGhlcmUgYXJlIG5vIGJvbmUgdGhhdCBpcyBkZWZpbmVkIGluIHRoZSBwb3NlIG9uIHRoZSBWUk1IdW1hbm9pZFxyXG4gICAgICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVzdFN0YXRlID0gX3RoaXMucmVzdFBvc2VbYm9uZU5hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3RTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbi5mcm9tQXJyYXkoc3RhdGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3RTdGF0ZS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24uYWRkKF92M0EuZnJvbUFycmF5KHJlc3RTdGF0ZS5wb3NpdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yb3RhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5xdWF0ZXJuaW9uLmZyb21BcnJheShzdGF0ZS5yb3RhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdFN0YXRlLnJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5xdWF0ZXJuaW9uLm11bHRpcGx5KF9xdWF0QS5mcm9tQXJyYXkocmVzdFN0YXRlLnJvdGF0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBodW1hbm9pZCB0byBpdHMgcmVzdCBwb3NlLlxyXG4gICAgICovXHJcbiAgICBWUk1IdW1hbm9pZC5wcm90b3R5cGUucmVzZXRQb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2V0UG9zZSh7fSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBib25lIGJvdW5kIHRvIGEgc3BlY2lmaWVkIFtbSHVtYW5Cb25lXV0sIGFzIGEgW1tWUk1IdW1hbkJvbmVdXS5cclxuICAgICAqXHJcbiAgICAgKiBTZWUgYWxzbzogW1tWUk1IdW1hbm9pZC5nZXRCb25lc11dXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgYm9uZSB5b3Ugd2FudFxyXG4gICAgICovXHJcbiAgICBWUk1IdW1hbm9pZC5wcm90b3R5cGUuZ2V0Qm9uZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHVtYW5Cb25lc1tuYW1lXVswXSB8fCB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYm9uZXMgYm91bmQgdG8gYSBzcGVjaWZpZWQgW1tIdW1hbkJvbmVdXSwgYXMgYW4gYXJyYXkgb2YgW1tWUk1IdW1hbkJvbmVdXS5cclxuICAgICAqXHJcbiAgICAgKiBTZWUgYWxzbzogW1tWUk1IdW1hbm9pZC5nZXRCb25lXV1cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XHJcbiAgICAgKi9cclxuICAgIFZSTUh1bWFub2lkLnByb3RvdHlwZS5nZXRCb25lcyA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHVtYW5Cb25lc1tuYW1lXTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhIGJvbmUgYm91bmQgdG8gYSBzcGVjaWZpZWQgW1tIdW1hbkJvbmVdXSwgYXMgYSBUSFJFRS5PYmplY3QzRC5cclxuICAgICAqXHJcbiAgICAgKiBTZWUgYWxzbzogW1tWUk1IdW1hbm9pZC5nZXRCb25lTm9kZXNdXVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGJvbmUgeW91IHdhbnRcclxuICAgICAqL1xyXG4gICAgVlJNSHVtYW5vaWQucHJvdG90eXBlLmdldEJvbmVOb2RlID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLmh1bWFuQm9uZXNbbmFtZV1bMF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub2RlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGJvbmVzIGJvdW5kIHRvIGEgc3BlY2lmaWVkIFtbSHVtYW5Cb25lXV0sIGFzIGFuIGFycmF5IG9mIFRIUkVFLk9iamVjdDNELlxyXG4gICAgICpcclxuICAgICAqIFNlZSBhbHNvOiBbW1ZSTUh1bWFub2lkLmdldEJvbmVOb2RlXV1cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBib25lIHlvdSB3YW50XHJcbiAgICAgKi9cclxuICAgIFZSTUh1bWFub2lkLnByb3RvdHlwZS5nZXRCb25lTm9kZXMgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh1bWFuQm9uZXNbbmFtZV0ubWFwKGZ1bmN0aW9uIChib25lKSB7IHJldHVybiBib25lLm5vZGU7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUHJlcGFyZSBhIFtbVlJNSHVtYW5Cb25lc11dIGZyb20gYSBbW1ZSTUh1bWFuQm9uZUFycmF5XV0uXHJcbiAgICAgKi9cclxuICAgIFZSTUh1bWFub2lkLnByb3RvdHlwZS5fY3JlYXRlSHVtYW5Cb25lcyA9IGZ1bmN0aW9uIChib25lQXJyYXkpIHtcclxuICAgICAgICB2YXIgYm9uZXMgPSBPYmplY3QudmFsdWVzKHR5cGVzXzEuVlJNU2NoZW1hLkh1bWFub2lkQm9uZU5hbWUpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW0sIG5hbWUpIHtcclxuICAgICAgICAgICAgYWNjdW1bbmFtZV0gPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY3VtO1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgICAgICBib25lQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoYm9uZSkge1xyXG4gICAgICAgICAgICBib25lc1tib25lLm5hbWVdLnB1c2goYm9uZS5ib25lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYm9uZXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZSTUh1bWFub2lkO1xyXG59KCkpO1xyXG5leHBvcnRzLlZSTUh1bWFub2lkID0gVlJNSHVtYW5vaWQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZSTUh1bWFub2lkSW1wb3J0ZXIgPSB2b2lkIDA7XHJcbnZhciBUSFJFRSA9IHJlcXVpcmUoXCJ0aHJlZVwiKTtcclxudmFyIFZSTUh1bWFuQm9uZV8xID0gcmVxdWlyZShcIi4vVlJNSHVtYW5Cb25lXCIpO1xyXG52YXIgVlJNSHVtYW5vaWRfMSA9IHJlcXVpcmUoXCIuL1ZSTUh1bWFub2lkXCIpO1xyXG4vKipcclxuICogQW4gaW1wb3J0ZXIgdGhhdCBpbXBvcnRzIGEgW1tWUk1IdW1hbm9pZF1dIGZyb20gYSBWUk0gZXh0ZW5zaW9uIG9mIGEgR0xURi5cclxuICovXHJcbnZhciBWUk1IdW1hbm9pZEltcG9ydGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVlJNSHVtYW5vaWRJbXBvcnRlcigpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW1wb3J0IGEgW1tWUk1IdW1hbm9pZF1dIGZyb20gYSBWUk0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXHJcbiAgICAgKi9cclxuICAgIFZSTUh1bWFub2lkSW1wb3J0ZXIucHJvdG90eXBlLmltcG9ydCA9IGZ1bmN0aW9uIChnbHRmKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB2cm1FeHQsIHNjaGVtYUh1bWFub2lkLCBodW1hbkJvbmVBcnJheSwgaHVtYW5EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdnJtRXh0ID0gKF9hID0gZ2x0Zi5wYXJzZXIuanNvbi5leHRlbnNpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuVlJNO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZybUV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYUh1bWFub2lkID0gdnJtRXh0Lmh1bWFub2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNjaGVtYUh1bWFub2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbnVsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHVtYW5Cb25lQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzY2hlbWFIdW1hbm9pZC5odW1hbkJvbmVzKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwoc2NoZW1hSHVtYW5vaWQuaHVtYW5Cb25lcy5tYXAoZnVuY3Rpb24gKGJvbmUpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJvbmUuYm9uZSB8fCAhYm9uZS5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2x0Zi5wYXJzZXIuZ2V0RGVwZW5kZW5jeSgnbm9kZScsIGJvbmUubm9kZSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHVtYW5Cb25lQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGJvbmUuYm9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9uZTogbmV3IFZSTUh1bWFuQm9uZV8xLlZSTUh1bWFuQm9uZShub2RlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlzTGVuZ3RoOiBib25lLmF4aXNMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IGJvbmUuY2VudGVyICYmIG5ldyBUSFJFRS5WZWN0b3IzKGJvbmUuY2VudGVyLngsIGJvbmUuY2VudGVyLnksIGJvbmUuY2VudGVyLnopLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBib25lLm1heCAmJiBuZXcgVEhSRUUuVmVjdG9yMyhib25lLm1heC54LCBib25lLm1heC55LCBib25lLm1heC56KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogYm9uZS5taW4gJiYgbmV3IFRIUkVFLlZlY3RvcjMoYm9uZS5taW4ueCwgYm9uZS5taW4ueSwgYm9uZS5taW4ueiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VEZWZhdWx0VmFsdWVzOiBib25lLnVzZURlZmF1bHRWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH0pKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh1bWFuRGVzY3JpcHRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcm1TdHJldGNoOiBzY2hlbWFIdW1hbm9pZC5hcm1TdHJldGNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnU3RyZXRjaDogc2NoZW1hSHVtYW5vaWQubGVnU3RyZXRjaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyQXJtVHdpc3Q6IHNjaGVtYUh1bWFub2lkLnVwcGVyQXJtVHdpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dlckFybVR3aXN0OiBzY2hlbWFIdW1hbm9pZC5sb3dlckFybVR3aXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXJMZWdUd2lzdDogc2NoZW1hSHVtYW5vaWQudXBwZXJMZWdUd2lzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyTGVnVHdpc3Q6IHNjaGVtYUh1bWFub2lkLmxvd2VyTGVnVHdpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWV0U3BhY2luZzogc2NoZW1hSHVtYW5vaWQuZmVldFNwYWNpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNUcmFuc2xhdGlvbkRvRjogc2NoZW1hSHVtYW5vaWQuaGFzVHJhbnNsYXRpb25Eb0YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgVlJNSHVtYW5vaWRfMS5WUk1IdW1hbm9pZChodW1hbkJvbmVBcnJheSwgaHVtYW5EZXNjcmlwdGlvbildO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVlJNSHVtYW5vaWRJbXBvcnRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5WUk1IdW1hbm9pZEltcG9ydGVyID0gVlJNSHVtYW5vaWRJbXBvcnRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9WUk1IdW1hbkJvbmVcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vVlJNSHVtYW5Cb25lc1wiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9WUk1IdW1hbkRlc2NyaXB0aW9uXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTUh1bWFuTGltaXRcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vVlJNSHVtYW5vaWRcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vVlJNSHVtYW5vaWRJbXBvcnRlclwiKSwgZXhwb3J0cyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vVlJNXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTUltcG9ydGVyXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTVV0aWxzXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2JsZW5kc2hhcGVcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZGVidWdcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZmlyc3RwZXJzb25cIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaHVtYW5vaWRcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbG9va2F0XCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3NwcmluZ2JvbmVcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbWF0ZXJpYWxcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbWV0YVwiKSwgZXhwb3J0cyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVlJNQ3VydmVNYXBwZXIgPSB2b2lkIDA7XHJcbi8qKlxyXG4gKiBFdmFsdWF0ZSBhIGhlcm1pdGUgc3BsaW5lLlxyXG4gKlxyXG4gKiBAcGFyYW0geTAgeSBvbiBzdGFydFxyXG4gKiBAcGFyYW0geTEgeSBvbiBlbmRcclxuICogQHBhcmFtIHQwIGRlbHRhIHkgb24gc3RhcnRcclxuICogQHBhcmFtIHQxIGRlbHRhIHkgb24gZW5kXHJcbiAqIEBwYXJhbSB4IGlucHV0IHZhbHVlXHJcbiAqL1xyXG52YXIgaGVybWl0ZVNwbGluZSA9IGZ1bmN0aW9uICh5MCwgeTEsIHQwLCB0MSwgeCkge1xyXG4gICAgdmFyIHhjID0geCAqIHggKiB4O1xyXG4gICAgdmFyIHhzID0geCAqIHg7XHJcbiAgICB2YXIgZHkgPSB5MSAtIHkwO1xyXG4gICAgdmFyIGgwMSA9IC0yLjAgKiB4YyArIDMuMCAqIHhzO1xyXG4gICAgdmFyIGgxMCA9IHhjIC0gMi4wICogeHMgKyB4O1xyXG4gICAgdmFyIGgxMSA9IHhjIC0geHM7XHJcbiAgICByZXR1cm4geTAgKyBkeSAqIGgwMSArIHQwICogaDEwICsgdDEgKiBoMTE7XHJcbn07XHJcbi8qKlxyXG4gKiBFdmFsdWF0ZSBhbiBBbmltYXRpb25DdXJ2ZSBhcnJheS4gU2VlIEFuaW1hdGlvbkN1cnZlIGNsYXNzIG9mIFVuaXR5IGZvciBpdHMgZGV0YWlscy5cclxuICpcclxuICogU2VlOiBodHRwczovL2RvY3MudW5pdHkzZC5jb20vamEvY3VycmVudC9TY3JpcHRSZWZlcmVuY2UvQW5pbWF0aW9uQ3VydmUuaHRtbFxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyIEFuIGFycmF5IHJlcHJlc2VudHMgYSBjdXJ2ZVxyXG4gKiBAcGFyYW0geCBBbiBpbnB1dCB2YWx1ZVxyXG4gKi9cclxudmFyIGV2YWx1YXRlQ3VydmUgPSBmdW5jdGlvbiAoYXJyLCB4KSB7XHJcbiAgICAvLyAtLSBzYW5pdHkgY2hlY2sgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGlmIChhcnIubGVuZ3RoIDwgOCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXZhbHVhdGVDdXJ2ZTogSW52YWxpZCBjdXJ2ZSBkZXRlY3RlZCEgKEFycmF5IGxlbmd0aCBtdXN0IGJlIDggYXQgbGVhc3QpJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyLmxlbmd0aCAlIDQgIT09IDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2V2YWx1YXRlQ3VydmU6IEludmFsaWQgY3VydmUgZGV0ZWN0ZWQhIChBcnJheSBsZW5ndGggbXVzdCBiZSBtdWx0aXBsZXMgb2YgNCcpO1xyXG4gICAgfVxyXG4gICAgLy8gLS0gY2hlY2sgcmFuZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgb3V0Tm9kZTtcclxuICAgIGZvciAob3V0Tm9kZSA9IDA7OyBvdXROb2RlKyspIHtcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA8PSA0ICogb3V0Tm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyWzQgKiBvdXROb2RlIC0gM107IC8vIHRvbyBmdXJ0aGVyISEgYXNzdW1lIGFzIFwiQ2xhbXBcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh4IDw9IGFycls0ICogb3V0Tm9kZV0pIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGluTm9kZSA9IG91dE5vZGUgLSAxO1xyXG4gICAgaWYgKGluTm9kZSA8IDApIHtcclxuICAgICAgICByZXR1cm4gYXJyWzQgKiBpbk5vZGUgKyA1XTsgLy8gdG9vIGJlaGluZCEhIGFzc3VtZSBhcyBcIkNsYW1wXCJcclxuICAgIH1cclxuICAgIC8vIC0tIGNhbGN1bGF0ZSBsb2NhbCB4IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdmFyIHgwID0gYXJyWzQgKiBpbk5vZGVdO1xyXG4gICAgdmFyIHgxID0gYXJyWzQgKiBvdXROb2RlXTtcclxuICAgIHZhciB4SGVybWl0ZSA9ICh4IC0geDApIC8gKHgxIC0geDApO1xyXG4gICAgLy8gLS0gZmluYWxseSBkbyB0aGUgaGVybWl0ZSBzcGxpbmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB2YXIgeTAgPSBhcnJbNCAqIGluTm9kZSArIDFdO1xyXG4gICAgdmFyIHkxID0gYXJyWzQgKiBvdXROb2RlICsgMV07XHJcbiAgICB2YXIgdDAgPSBhcnJbNCAqIGluTm9kZSArIDNdO1xyXG4gICAgdmFyIHQxID0gYXJyWzQgKiBvdXROb2RlICsgMl07XHJcbiAgICByZXR1cm4gaGVybWl0ZVNwbGluZSh5MCwgeTEsIHQwLCB0MSwgeEhlcm1pdGUpO1xyXG59O1xyXG4vKipcclxuICogVGhpcyBpcyBhbiBlcXVpdmFsZW50IG9mIEN1cnZlTWFwcGVyIGNsYXNzIGRlZmluZWQgaW4gVW5pVlJNLlxyXG4gKiBXaWxsIGJlIHVzZWQgZm9yIFtbVlJNTG9va0F0QXBwbHllcl1dcywgdG8gZGVmaW5lIGJlaGF2aW9yIG9mIExvb2tBdC5cclxuICpcclxuICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdnJtLWMvVW5pVlJNL2Jsb2IvbWFzdGVyL0Fzc2V0cy9WUk0vVW5pVlJNL1NjcmlwdHMvTG9va0F0L0N1cnZlTWFwcGVyLmNzXHJcbiAqL1xyXG52YXIgVlJNQ3VydmVNYXBwZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBbW1ZSTUN1cnZlTWFwcGVyXV0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHhSYW5nZSBUaGUgbWF4aW11bSBpbnB1dCByYW5nZVxyXG4gICAgICogQHBhcmFtIHlSYW5nZSBUaGUgbWF4aW11bSBvdXRwdXQgdmFsdWVcclxuICAgICAqIEBwYXJhbSBjdXJ2ZSBBbiBhcnJheSByZXByZXNlbnRzIHRoZSBjdXJ2ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBWUk1DdXJ2ZU1hcHBlcih4UmFuZ2UsIHlSYW5nZSwgY3VydmUpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBhcnJheSByZXByZXNlbnRzIHRoZSBjdXJ2ZS4gU2VlIEFuaW1hdGlvbkN1cnZlIGNsYXNzIG9mIFVuaXR5IGZvciBpdHMgZGV0YWlscy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFNlZTogaHR0cHM6Ly9kb2NzLnVuaXR5M2QuY29tL2phL2N1cnJlbnQvU2NyaXB0UmVmZXJlbmNlL0FuaW1hdGlvbkN1cnZlLmh0bWxcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1cnZlID0gWzAuMCwgMC4wLCAwLjAsIDEuMCwgMS4wLCAxLjAsIDEuMCwgMC4wXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWF4aW11bSBpbnB1dCByYW5nZSBvZiB0aGUgW1tWUk1DdXJ2ZU1hcHBlcl1dLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VydmVYUmFuZ2VEZWdyZWUgPSA5MC4wO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtYXhpbXVtIG91dHB1dCB2YWx1ZSBvZiB0aGUgW1tWUk1DdXJ2ZU1hcHBlcl1dLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VydmVZUmFuZ2VEZWdyZWUgPSAxMC4wO1xyXG4gICAgICAgIGlmICh4UmFuZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnZlWFJhbmdlRGVncmVlID0geFJhbmdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeVJhbmdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJ2ZVlSYW5nZURlZ3JlZSA9IHlSYW5nZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnZlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJ2ZSA9IGN1cnZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRXZhbHVhdGUgYW4gaW5wdXQgdmFsdWUgYW5kIG91dHB1dCBhIG1hcHBlZCB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3JjIFRoZSBpbnB1dCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBWUk1DdXJ2ZU1hcHBlci5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKHNyYykge1xyXG4gICAgICAgIHZhciBjbGFtcGVkU3JjID0gTWF0aC5taW4oTWF0aC5tYXgoc3JjLCAwLjApLCB0aGlzLmN1cnZlWFJhbmdlRGVncmVlKTtcclxuICAgICAgICB2YXIgeCA9IGNsYW1wZWRTcmMgLyB0aGlzLmN1cnZlWFJhbmdlRGVncmVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnZlWVJhbmdlRGVncmVlICogZXZhbHVhdGVDdXJ2ZSh0aGlzLmN1cnZlLCB4KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVlJNQ3VydmVNYXBwZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVlJNQ3VydmVNYXBwZXIgPSBWUk1DdXJ2ZU1hcHBlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5WUk1Mb29rQXRBcHBseWVyID0gdm9pZCAwO1xyXG4vKipcclxuICogVGhpcyBjbGFzcyBpcyB1c2VkIGJ5IFtbVlJNTG9va0F0SGVhZF1dLCBhcHBsaWVzIGxvb2sgYXQgZGlyZWN0aW9uLlxyXG4gKiBUaGVyZSBhcmUgY3VycmVudGx5IHR3byB2YXJpYW50IG9mIGFwcGxpZXI6IFtbVlJNTG9va0F0Qm9uZUFwcGx5ZXJdXSBhbmQgW1tWUk1Mb29rQXRCbGVuZFNoYXBlQXBwbHllcl1dLlxyXG4gKi9cclxudmFyIFZSTUxvb2tBdEFwcGx5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWUk1Mb29rQXRBcHBseWVyKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFZSTUxvb2tBdEFwcGx5ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVlJNTG9va0F0QXBwbHllciA9IFZSTUxvb2tBdEFwcGx5ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVlJNTG9va0F0QmxlbmRTaGFwZUFwcGx5ZXIgPSB2b2lkIDA7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xyXG52YXIgVlJNTG9va0F0QXBwbHllcl8xID0gcmVxdWlyZShcIi4vVlJNTG9va0F0QXBwbHllclwiKTtcclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCBieSBbW1ZSTUxvb2tBdEhlYWRdXSwgYXBwbGllcyBsb29rIGF0IGRpcmVjdGlvbiB0byBleWUgYmxlbmQgc2hhcGVzIG9mIGEgVlJNLlxyXG4gKi9cclxudmFyIFZSTUxvb2tBdEJsZW5kU2hhcGVBcHBseWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFZSTUxvb2tBdEJsZW5kU2hhcGVBcHBseWVyLCBfc3VwZXIpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgVlJNTG9va0F0QmxlbmRTaGFwZUFwcGx5ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGJsZW5kU2hhcGVQcm94eSBBIFtbVlJNQmxlbmRTaGFwZVByb3h5XV0gdXNlZCBieSB0aGlzIGFwcGxpZXJcclxuICAgICAqIEBwYXJhbSBjdXJ2ZUhvcml6b250YWwgQSBbW1ZSTUN1cnZlTWFwcGVyXV0gdXNlZCBmb3IgdHJhbnN2ZXJzZSBkaXJlY3Rpb25cclxuICAgICAqIEBwYXJhbSBjdXJ2ZVZlcnRpY2FsRG93biBBIFtbVlJNQ3VydmVNYXBwZXJdXSB1c2VkIGZvciBkb3duIGRpcmVjdGlvblxyXG4gICAgICogQHBhcmFtIGN1cnZlVmVydGljYWxVcCBBIFtbVlJNQ3VydmVNYXBwZXJdXSB1c2VkIGZvciB1cCBkaXJlY3Rpb25cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gVlJNTG9va0F0QmxlbmRTaGFwZUFwcGx5ZXIoYmxlbmRTaGFwZVByb3h5LCBjdXJ2ZUhvcml6b250YWwsIGN1cnZlVmVydGljYWxEb3duLCBjdXJ2ZVZlcnRpY2FsVXApIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnR5cGUgPSB0eXBlc18xLlZSTVNjaGVtYS5GaXJzdFBlcnNvbkxvb2tBdFR5cGVOYW1lLkJsZW5kU2hhcGU7XHJcbiAgICAgICAgX3RoaXMuX2N1cnZlSG9yaXpvbnRhbCA9IGN1cnZlSG9yaXpvbnRhbDtcclxuICAgICAgICBfdGhpcy5fY3VydmVWZXJ0aWNhbERvd24gPSBjdXJ2ZVZlcnRpY2FsRG93bjtcclxuICAgICAgICBfdGhpcy5fY3VydmVWZXJ0aWNhbFVwID0gY3VydmVWZXJ0aWNhbFVwO1xyXG4gICAgICAgIF90aGlzLl9ibGVuZFNoYXBlUHJveHkgPSBibGVuZFNoYXBlUHJveHk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVlJNTG9va0F0QmxlbmRTaGFwZUFwcGx5ZXIucHJvdG90eXBlLm5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVzXzEuVlJNU2NoZW1hLkZpcnN0UGVyc29uTG9va0F0VHlwZU5hbWUuQmxlbmRTaGFwZTtcclxuICAgIH07XHJcbiAgICBWUk1Mb29rQXRCbGVuZFNoYXBlQXBwbHllci5wcm90b3R5cGUubG9va0F0ID0gZnVuY3Rpb24gKGV1bGVyKSB7XHJcbiAgICAgICAgdmFyIHNyY1ggPSBldWxlci54O1xyXG4gICAgICAgIHZhciBzcmNZID0gZXVsZXIueTtcclxuICAgICAgICBpZiAoc3JjWCA8IDAuMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ibGVuZFNoYXBlUHJveHkuc2V0VmFsdWUodHlwZXNfMS5WUk1TY2hlbWEuQmxlbmRTaGFwZVByZXNldE5hbWUuTG9va3VwLCAwLjApO1xyXG4gICAgICAgICAgICB0aGlzLl9ibGVuZFNoYXBlUHJveHkuc2V0VmFsdWUodHlwZXNfMS5WUk1TY2hlbWEuQmxlbmRTaGFwZVByZXNldE5hbWUuTG9va2Rvd24sIHRoaXMuX2N1cnZlVmVydGljYWxEb3duLm1hcCgtc3JjWCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxlbmRTaGFwZVByb3h5LnNldFZhbHVlKHR5cGVzXzEuVlJNU2NoZW1hLkJsZW5kU2hhcGVQcmVzZXROYW1lLkxvb2tkb3duLCAwLjApO1xyXG4gICAgICAgICAgICB0aGlzLl9ibGVuZFNoYXBlUHJveHkuc2V0VmFsdWUodHlwZXNfMS5WUk1TY2hlbWEuQmxlbmRTaGFwZVByZXNldE5hbWUuTG9va3VwLCB0aGlzLl9jdXJ2ZVZlcnRpY2FsVXAubWFwKHNyY1gpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNyY1kgPCAwLjApIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxlbmRTaGFwZVByb3h5LnNldFZhbHVlKHR5cGVzXzEuVlJNU2NoZW1hLkJsZW5kU2hhcGVQcmVzZXROYW1lLkxvb2tsZWZ0LCAwLjApO1xyXG4gICAgICAgICAgICB0aGlzLl9ibGVuZFNoYXBlUHJveHkuc2V0VmFsdWUodHlwZXNfMS5WUk1TY2hlbWEuQmxlbmRTaGFwZVByZXNldE5hbWUuTG9va3JpZ2h0LCB0aGlzLl9jdXJ2ZUhvcml6b250YWwubWFwKC1zcmNZKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ibGVuZFNoYXBlUHJveHkuc2V0VmFsdWUodHlwZXNfMS5WUk1TY2hlbWEuQmxlbmRTaGFwZVByZXNldE5hbWUuTG9va3JpZ2h0LCAwLjApO1xyXG4gICAgICAgICAgICB0aGlzLl9ibGVuZFNoYXBlUHJveHkuc2V0VmFsdWUodHlwZXNfMS5WUk1TY2hlbWEuQmxlbmRTaGFwZVByZXNldE5hbWUuTG9va2xlZnQsIHRoaXMuX2N1cnZlSG9yaXpvbnRhbC5tYXAoc3JjWSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVlJNTG9va0F0QmxlbmRTaGFwZUFwcGx5ZXI7XHJcbn0oVlJNTG9va0F0QXBwbHllcl8xLlZSTUxvb2tBdEFwcGx5ZXIpKTtcclxuZXhwb3J0cy5WUk1Mb29rQXRCbGVuZFNoYXBlQXBwbHllciA9IFZSTUxvb2tBdEJsZW5kU2hhcGVBcHBseWVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZSTUxvb2tBdEJvbmVBcHBseWVyID0gdm9pZCAwO1xyXG52YXIgVEhSRUUgPSByZXF1aXJlKFwidGhyZWVcIik7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xyXG52YXIgVlJNTG9va0F0QXBwbHllcl8xID0gcmVxdWlyZShcIi4vVlJNTG9va0F0QXBwbHllclwiKTtcclxudmFyIFZSTUxvb2tBdEhlYWRfMSA9IHJlcXVpcmUoXCIuL1ZSTUxvb2tBdEhlYWRcIik7XHJcbnZhciBfZXVsZXIgPSBuZXcgVEhSRUUuRXVsZXIoMC4wLCAwLjAsIDAuMCwgVlJNTG9va0F0SGVhZF8xLlZSTUxvb2tBdEhlYWQuRVVMRVJfT1JERVIpO1xyXG4vKipcclxuICogVGhpcyBjbGFzcyBpcyB1c2VkIGJ5IFtbVlJNTG9va0F0SGVhZF1dLCBhcHBsaWVzIGxvb2sgYXQgZGlyZWN0aW9uIHRvIGV5ZSBib25lcyBvZiBhIFZSTS5cclxuICovXHJcbnZhciBWUk1Mb29rQXRCb25lQXBwbHllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWUk1Mb29rQXRCb25lQXBwbHllciwgX3N1cGVyKTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IFZSTUxvb2tBdEJvbmVBcHBseWVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBodW1hbm9pZCBBIFtbVlJNSHVtYW5vaWRdXSB1c2VkIGJ5IHRoaXMgYXBwbGllclxyXG4gICAgICogQHBhcmFtIGN1cnZlSG9yaXpvbnRhbElubmVyIEEgW1tWUk1DdXJ2ZU1hcHBlcl1dIHVzZWQgZm9yIGlubmVyIHRyYW5zdmVyc2UgZGlyZWN0aW9uXHJcbiAgICAgKiBAcGFyYW0gY3VydmVIb3Jpem9udGFsT3V0ZXIgQSBbW1ZSTUN1cnZlTWFwcGVyXV0gdXNlZCBmb3Igb3V0ZXIgdHJhbnN2ZXJzZSBkaXJlY3Rpb25cclxuICAgICAqIEBwYXJhbSBjdXJ2ZVZlcnRpY2FsRG93biBBIFtbVlJNQ3VydmVNYXBwZXJdXSB1c2VkIGZvciBkb3duIGRpcmVjdGlvblxyXG4gICAgICogQHBhcmFtIGN1cnZlVmVydGljYWxVcCBBIFtbVlJNQ3VydmVNYXBwZXJdXSB1c2VkIGZvciB1cCBkaXJlY3Rpb25cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gVlJNTG9va0F0Qm9uZUFwcGx5ZXIoaHVtYW5vaWQsIGN1cnZlSG9yaXpvbnRhbElubmVyLCBjdXJ2ZUhvcml6b250YWxPdXRlciwgY3VydmVWZXJ0aWNhbERvd24sIGN1cnZlVmVydGljYWxVcCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMudHlwZSA9IHR5cGVzXzEuVlJNU2NoZW1hLkZpcnN0UGVyc29uTG9va0F0VHlwZU5hbWUuQm9uZTtcclxuICAgICAgICBfdGhpcy5fY3VydmVIb3Jpem9udGFsSW5uZXIgPSBjdXJ2ZUhvcml6b250YWxJbm5lcjtcclxuICAgICAgICBfdGhpcy5fY3VydmVIb3Jpem9udGFsT3V0ZXIgPSBjdXJ2ZUhvcml6b250YWxPdXRlcjtcclxuICAgICAgICBfdGhpcy5fY3VydmVWZXJ0aWNhbERvd24gPSBjdXJ2ZVZlcnRpY2FsRG93bjtcclxuICAgICAgICBfdGhpcy5fY3VydmVWZXJ0aWNhbFVwID0gY3VydmVWZXJ0aWNhbFVwO1xyXG4gICAgICAgIF90aGlzLl9sZWZ0RXllID0gaHVtYW5vaWQuZ2V0Qm9uZU5vZGUodHlwZXNfMS5WUk1TY2hlbWEuSHVtYW5vaWRCb25lTmFtZS5MZWZ0RXllKTtcclxuICAgICAgICBfdGhpcy5fcmlnaHRFeWUgPSBodW1hbm9pZC5nZXRCb25lTm9kZSh0eXBlc18xLlZSTVNjaGVtYS5IdW1hbm9pZEJvbmVOYW1lLlJpZ2h0RXllKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBWUk1Mb29rQXRCb25lQXBwbHllci5wcm90b3R5cGUubG9va0F0ID0gZnVuY3Rpb24gKGV1bGVyKSB7XHJcbiAgICAgICAgdmFyIHNyY1ggPSBldWxlci54O1xyXG4gICAgICAgIHZhciBzcmNZID0gZXVsZXIueTtcclxuICAgICAgICAvLyBsZWZ0XHJcbiAgICAgICAgaWYgKHRoaXMuX2xlZnRFeWUpIHtcclxuICAgICAgICAgICAgaWYgKHNyY1ggPCAwLjApIHtcclxuICAgICAgICAgICAgICAgIF9ldWxlci54ID0gLXRoaXMuX2N1cnZlVmVydGljYWxEb3duLm1hcCgtc3JjWCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfZXVsZXIueCA9IHRoaXMuX2N1cnZlVmVydGljYWxVcC5tYXAoc3JjWCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNyY1kgPCAwLjApIHtcclxuICAgICAgICAgICAgICAgIF9ldWxlci55ID0gLXRoaXMuX2N1cnZlSG9yaXpvbnRhbElubmVyLm1hcCgtc3JjWSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfZXVsZXIueSA9IHRoaXMuX2N1cnZlSG9yaXpvbnRhbE91dGVyLm1hcChzcmNZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sZWZ0RXllLnF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKF9ldWxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJpZ2h0XHJcbiAgICAgICAgaWYgKHRoaXMuX3JpZ2h0RXllKSB7XHJcbiAgICAgICAgICAgIGlmIChzcmNYIDwgMC4wKSB7XHJcbiAgICAgICAgICAgICAgICBfZXVsZXIueCA9IC10aGlzLl9jdXJ2ZVZlcnRpY2FsRG93bi5tYXAoLXNyY1gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX2V1bGVyLnggPSB0aGlzLl9jdXJ2ZVZlcnRpY2FsVXAubWFwKHNyY1gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcmNZIDwgMC4wKSB7XHJcbiAgICAgICAgICAgICAgICBfZXVsZXIueSA9IC10aGlzLl9jdXJ2ZUhvcml6b250YWxPdXRlci5tYXAoLXNyY1kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX2V1bGVyLnkgPSB0aGlzLl9jdXJ2ZUhvcml6b250YWxJbm5lci5tYXAoc3JjWSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcmlnaHRFeWUucXVhdGVybmlvbi5zZXRGcm9tRXVsZXIoX2V1bGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZSTUxvb2tBdEJvbmVBcHBseWVyO1xyXG59KFZSTUxvb2tBdEFwcGx5ZXJfMS5WUk1Mb29rQXRBcHBseWVyKSk7XHJcbmV4cG9ydHMuVlJNTG9va0F0Qm9uZUFwcGx5ZXIgPSBWUk1Mb29rQXRCb25lQXBwbHllcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5WUk1Mb29rQXRIZWFkID0gdm9pZCAwO1xyXG52YXIgVEhSRUUgPSByZXF1aXJlKFwidGhyZWVcIik7XHJcbnZhciBtYXRoXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvbWF0aFwiKTtcclxudmFyIFZFQ1RPUjNfRlJPTlQgPSBPYmplY3QuZnJlZXplKG5ldyBUSFJFRS5WZWN0b3IzKDAuMCwgMC4wLCAtMS4wKSk7XHJcbnZhciBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxudmFyIF92M0IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG52YXIgX3YzQyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbnZhciBfcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIHJlcHJlc2VudHMgbG9vayBhdCBvZiBhIFZSTS5cclxuICovXHJcbnZhciBWUk1Mb29rQXRIZWFkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgVlJNTG9va0F0SGVhZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlyc3RQZXJzb24gQSBbW1ZSTUZpcnN0UGVyc29uXV0gdGhhdCB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5ldyBWUk1Mb29rQXRIZWFkXHJcbiAgICAgKiBAcGFyYW0gYXBwbHllciBBIFtbVlJNTG9va0F0QXBwbHllcl1dIHRoYXQgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBuZXcgVlJNTG9va0F0SGVhZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBWUk1Mb29rQXRIZWFkKGZpcnN0UGVyc29uLCBhcHBseWVyKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSWYgdGhpcyBpcyB0cnVlLCBpdHMgbG9vayBhdCBkaXJlY3Rpb24gd2lsbCBiZSB1cGRhdGVkIGF1dG9tYXRpY2FsbHkgYnkgY2FsbGluZyBbW1ZSTUxvb2tBdEhlYWQudXBkYXRlXV0gKHdoaWNoIGlzIGNhbGxlZCBmcm9tIFtbVlJNLnVwZGF0ZV1dKS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFNlZSBhbHNvOiBbW1ZSTUxvb2tBdEhlYWQudGFyZ2V0XV1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmF1dG9VcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2V1bGVyID0gbmV3IFRIUkVFLkV1bGVyKDAuMCwgMC4wLCAwLjAsIFZSTUxvb2tBdEhlYWQuRVVMRVJfT1JERVIpO1xyXG4gICAgICAgIHRoaXMuZmlyc3RQZXJzb24gPSBmaXJzdFBlcnNvbjtcclxuICAgICAgICB0aGlzLmFwcGx5ZXIgPSBhcHBseWVyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaXRzIGxvb2sgYXQgZGlyZWN0aW9uIGluIHdvcmxkIGNvb3JkaW5hdGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRhcmdldCBBIHRhcmdldCBgVEhSRUUuVmVjdG9yM2BcclxuICAgICAqL1xyXG4gICAgVlJNTG9va0F0SGVhZC5wcm90b3R5cGUuZ2V0TG9va0F0V29ybGREaXJlY3Rpb24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIHJvdCA9IG1hdGhfMS5nZXRXb3JsZFF1YXRlcm5pb25MaXRlKHRoaXMuZmlyc3RQZXJzb24uZmlyc3RQZXJzb25Cb25lLCBfcXVhdCk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldC5jb3B5KFZFQ1RPUjNfRlJPTlQpLmFwcGx5RXVsZXIodGhpcy5fZXVsZXIpLmFwcGx5UXVhdGVybmlvbihyb3QpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0IGl0cyBsb29rIGF0IHBvc2l0aW9uLlxyXG4gICAgICogTm90ZSB0aGF0IGl0cyByZXN1bHQgd2lsbCBiZSBpbnN0YW50bHkgb3ZlcndyaXR0ZW4gaWYgW1tWUk1Mb29rQXRIZWFkLmF1dG9VcGRhdGVdXSBpcyBlbmFibGVkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBBIHRhcmdldCBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBWUk1Mb29rQXRIZWFkLnByb3RvdHlwZS5sb29rQXQgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLl9jYWxjRXVsZXIodGhpcy5fZXVsZXIsIHBvc2l0aW9uKTtcclxuICAgICAgICBpZiAodGhpcy5hcHBseWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHllci5sb29rQXQodGhpcy5fZXVsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgVlJNTG9va0F0SGVhZC5cclxuICAgICAqIElmIFtbVlJNTG9va0F0SGVhZC5hdXRvVXBkYXRlXV0gaXMgZGlzYWJsZWQsIGl0IHdpbGwgZG8gbm90aGluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZGVsdGEgZGVsdGFUaW1lXHJcbiAgICAgKi9cclxuICAgIFZSTUxvb2tBdEhlYWQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLmF1dG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb29rQXQodGhpcy50YXJnZXQuZ2V0V29ybGRQb3NpdGlvbihfdjNBKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGx5ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHllci5sb29rQXQodGhpcy5fZXVsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFZSTUxvb2tBdEhlYWQucHJvdG90eXBlLl9jYWxjRXVsZXIgPSBmdW5jdGlvbiAodGFyZ2V0LCBwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciBoZWFkUG9zaXRpb24gPSB0aGlzLmZpcnN0UGVyc29uLmdldEZpcnN0UGVyc29uV29ybGRQb3NpdGlvbihfdjNCKTtcclxuICAgICAgICAvLyBMb29rIGF0IGRpcmVjdGlvbiBpbiB3b3JsZCBjb29yZGluYXRlXHJcbiAgICAgICAgdmFyIGxvb2tBdERpciA9IF92M0MuY29weShwb3NpdGlvbikuc3ViKGhlYWRQb3NpdGlvbikubm9ybWFsaXplKCk7XHJcbiAgICAgICAgLy8gVHJhbnNmb3JtIHRoZSBkaXJlY3Rpb24gaW50byBsb2NhbCBjb29yZGluYXRlIGZyb20gdGhlIGZpcnN0IHBlcnNvbiBib25lXHJcbiAgICAgICAgbG9va0F0RGlyLmFwcGx5UXVhdGVybmlvbihtYXRoXzEuZ2V0V29ybGRRdWF0ZXJuaW9uTGl0ZSh0aGlzLmZpcnN0UGVyc29uLmZpcnN0UGVyc29uQm9uZSwgX3F1YXQpLmludmVyc2UoKSk7XHJcbiAgICAgICAgLy8gY29udmVydCB0aGUgZGlyZWN0aW9uIGludG8gZXVsZXJcclxuICAgICAgICB0YXJnZXQueCA9IE1hdGguYXRhbjIobG9va0F0RGlyLnksIE1hdGguc3FydChsb29rQXREaXIueCAqIGxvb2tBdERpci54ICsgbG9va0F0RGlyLnogKiBsb29rQXREaXIueikpO1xyXG4gICAgICAgIHRhcmdldC55ID0gTWF0aC5hdGFuMigtbG9va0F0RGlyLngsIC1sb29rQXREaXIueik7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH07XHJcbiAgICBWUk1Mb29rQXRIZWFkLkVVTEVSX09SREVSID0gJ1lYWic7IC8vIHlhdy1waXRjaC1yb2xsXHJcbiAgICByZXR1cm4gVlJNTG9va0F0SGVhZDtcclxufSgpKTtcclxuZXhwb3J0cy5WUk1Mb29rQXRIZWFkID0gVlJNTG9va0F0SGVhZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5WUk1Mb29rQXRJbXBvcnRlciA9IHZvaWQgMDtcclxudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XHJcbnZhciBWUk1DdXJ2ZU1hcHBlcl8xID0gcmVxdWlyZShcIi4vVlJNQ3VydmVNYXBwZXJcIik7XHJcbnZhciBWUk1Mb29rQXRCbGVuZFNoYXBlQXBwbHllcl8xID0gcmVxdWlyZShcIi4vVlJNTG9va0F0QmxlbmRTaGFwZUFwcGx5ZXJcIik7XHJcbnZhciBWUk1Mb29rQXRCb25lQXBwbHllcl8xID0gcmVxdWlyZShcIi4vVlJNTG9va0F0Qm9uZUFwcGx5ZXJcIik7XHJcbnZhciBWUk1Mb29rQXRIZWFkXzEgPSByZXF1aXJlKFwiLi9WUk1Mb29rQXRIZWFkXCIpO1xyXG4vLyBUSFJFRS5NYXRoIGhhcyBiZWVuIHJlbmFtZWQgdG8gVEhSRUUuTWF0aFV0aWxzIHNpbmNlIHIxMTMuXHJcbi8vIFdlIGFyZSBnb2luZyB0byBkZWZpbmUgdGhlIERFRzJSQUQgYnkgb3Vyc2VsdmVzIGZvciBhIHdoaWxlXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvcHVsbC8xODI3MFxyXG52YXIgREVHMlJBRCA9IE1hdGguUEkgLyAxODA7IC8vIFRIUkVFLk1hdGhVdGlscy5ERUcyUkFEO1xyXG4vKipcclxuICogQW4gaW1wb3J0ZXIgdGhhdCBpbXBvcnRzIGEgW1tWUk1Mb29rQXRIZWFkXV0gZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxyXG4gKi9cclxudmFyIFZSTUxvb2tBdEltcG9ydGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVlJNTG9va0F0SW1wb3J0ZXIoKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEltcG9ydCBhIFtbVlJNTG9va0F0SGVhZF1dIGZyb20gYSBWUk0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXHJcbiAgICAgKiBAcGFyYW0gYmxlbmRTaGFwZVByb3h5IEEgW1tWUk1CbGVuZFNoYXBlUHJveHldXSBpbnN0YW5jZSB0aGF0IHJlcHJlc2VudHMgdGhlIFZSTVxyXG4gICAgICogQHBhcmFtIGh1bWFub2lkIEEgW1tWUk1IdW1hbm9pZF1dIGluc3RhbmNlIHRoYXQgcmVwcmVzZW50cyB0aGUgVlJNXHJcbiAgICAgKi9cclxuICAgIFZSTUxvb2tBdEltcG9ydGVyLnByb3RvdHlwZS5pbXBvcnQgPSBmdW5jdGlvbiAoZ2x0ZiwgZmlyc3RQZXJzb24sIGJsZW5kU2hhcGVQcm94eSwgaHVtYW5vaWQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIHZybUV4dCA9IChfYSA9IGdsdGYucGFyc2VyLmpzb24uZXh0ZW5zaW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLlZSTTtcclxuICAgICAgICBpZiAoIXZybUV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNjaGVtYUZpcnN0UGVyc29uID0gdnJtRXh0LmZpcnN0UGVyc29uO1xyXG4gICAgICAgIGlmICghc2NoZW1hRmlyc3RQZXJzb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhcHBseWVyID0gdGhpcy5faW1wb3J0QXBwbHllcihzY2hlbWFGaXJzdFBlcnNvbiwgYmxlbmRTaGFwZVByb3h5LCBodW1hbm9pZCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWUk1Mb29rQXRIZWFkXzEuVlJNTG9va0F0SGVhZChmaXJzdFBlcnNvbiwgYXBwbHllciB8fCB1bmRlZmluZWQpO1xyXG4gICAgfTtcclxuICAgIFZSTUxvb2tBdEltcG9ydGVyLnByb3RvdHlwZS5faW1wb3J0QXBwbHllciA9IGZ1bmN0aW9uIChzY2hlbWFGaXJzdFBlcnNvbiwgYmxlbmRTaGFwZVByb3h5LCBodW1hbm9pZCkge1xyXG4gICAgICAgIHZhciBsb29rQXRIb3Jpem9udGFsSW5uZXIgPSBzY2hlbWFGaXJzdFBlcnNvbi5sb29rQXRIb3Jpem9udGFsSW5uZXI7XHJcbiAgICAgICAgdmFyIGxvb2tBdEhvcml6b250YWxPdXRlciA9IHNjaGVtYUZpcnN0UGVyc29uLmxvb2tBdEhvcml6b250YWxPdXRlcjtcclxuICAgICAgICB2YXIgbG9va0F0VmVydGljYWxEb3duID0gc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0VmVydGljYWxEb3duO1xyXG4gICAgICAgIHZhciBsb29rQXRWZXJ0aWNhbFVwID0gc2NoZW1hRmlyc3RQZXJzb24ubG9va0F0VmVydGljYWxVcDtcclxuICAgICAgICBzd2l0Y2ggKHNjaGVtYUZpcnN0UGVyc29uLmxvb2tBdFR5cGVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMS5WUk1TY2hlbWEuRmlyc3RQZXJzb25Mb29rQXRUeXBlTmFtZS5Cb25lOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9va0F0SG9yaXpvbnRhbElubmVyID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb29rQXRIb3Jpem9udGFsT3V0ZXIgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvb2tBdFZlcnRpY2FsRG93biA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG9va0F0VmVydGljYWxVcCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZSTUxvb2tBdEJvbmVBcHBseWVyXzEuVlJNTG9va0F0Qm9uZUFwcGx5ZXIoaHVtYW5vaWQsIHRoaXMuX2ltcG9ydEN1cnZlTWFwcGVyQm9uZShsb29rQXRIb3Jpem9udGFsSW5uZXIpLCB0aGlzLl9pbXBvcnRDdXJ2ZU1hcHBlckJvbmUobG9va0F0SG9yaXpvbnRhbE91dGVyKSwgdGhpcy5faW1wb3J0Q3VydmVNYXBwZXJCb25lKGxvb2tBdFZlcnRpY2FsRG93biksIHRoaXMuX2ltcG9ydEN1cnZlTWFwcGVyQm9uZShsb29rQXRWZXJ0aWNhbFVwKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0eXBlc18xLlZSTVNjaGVtYS5GaXJzdFBlcnNvbkxvb2tBdFR5cGVOYW1lLkJsZW5kU2hhcGU6IHtcclxuICAgICAgICAgICAgICAgIGlmIChsb29rQXRIb3Jpem9udGFsT3V0ZXIgPT09IHVuZGVmaW5lZCB8fCBsb29rQXRWZXJ0aWNhbERvd24gPT09IHVuZGVmaW5lZCB8fCBsb29rQXRWZXJ0aWNhbFVwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVlJNTG9va0F0QmxlbmRTaGFwZUFwcGx5ZXJfMS5WUk1Mb29rQXRCbGVuZFNoYXBlQXBwbHllcihibGVuZFNoYXBlUHJveHksIHRoaXMuX2ltcG9ydEN1cnZlTWFwcGVyQmxlbmRTaGFwZShsb29rQXRIb3Jpem9udGFsT3V0ZXIpLCB0aGlzLl9pbXBvcnRDdXJ2ZU1hcHBlckJsZW5kU2hhcGUobG9va0F0VmVydGljYWxEb3duKSwgdGhpcy5faW1wb3J0Q3VydmVNYXBwZXJCbGVuZFNoYXBlKGxvb2tBdFZlcnRpY2FsVXApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBWUk1Mb29rQXRJbXBvcnRlci5wcm90b3R5cGUuX2ltcG9ydEN1cnZlTWFwcGVyQm9uZSA9IGZ1bmN0aW9uIChtYXApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZSTUN1cnZlTWFwcGVyXzEuVlJNQ3VydmVNYXBwZXIodHlwZW9mIG1hcC54UmFuZ2UgPT09ICdudW1iZXInID8gREVHMlJBRCAqIG1hcC54UmFuZ2UgOiB1bmRlZmluZWQsIHR5cGVvZiBtYXAueVJhbmdlID09PSAnbnVtYmVyJyA/IERFRzJSQUQgKiBtYXAueVJhbmdlIDogdW5kZWZpbmVkLCBtYXAuY3VydmUpO1xyXG4gICAgfTtcclxuICAgIFZSTUxvb2tBdEltcG9ydGVyLnByb3RvdHlwZS5faW1wb3J0Q3VydmVNYXBwZXJCbGVuZFNoYXBlID0gZnVuY3Rpb24gKG1hcCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVlJNQ3VydmVNYXBwZXJfMS5WUk1DdXJ2ZU1hcHBlcih0eXBlb2YgbWFwLnhSYW5nZSA9PT0gJ251bWJlcicgPyBERUcyUkFEICogbWFwLnhSYW5nZSA6IHVuZGVmaW5lZCwgbWFwLnlSYW5nZSwgbWFwLmN1cnZlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVlJNTG9va0F0SW1wb3J0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVlJNTG9va0F0SW1wb3J0ZXIgPSBWUk1Mb29rQXRJbXBvcnRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9WUk1DdXJ2ZU1hcHBlclwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9WUk1Mb29rQXRBcHBseWVyXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTUxvb2tBdEJsZW5kU2hhcGVBcHBseWVyXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTUxvb2tBdEJvbmVBcHBseWVyXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTUxvb2tBdEhlYWRcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vVlJNTG9va0F0SW1wb3J0ZXJcIiksIGV4cG9ydHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyogdHNsaW50OmRpc2FibGU6bWVtYmVyLW9yZGVyaW5nICovXHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5NVG9vbk1hdGVyaWFsID0gZXhwb3J0cy5NVG9vbk1hdGVyaWFsUmVuZGVyTW9kZSA9IGV4cG9ydHMuTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUgPSBleHBvcnRzLk1Ub29uTWF0ZXJpYWxPdXRsaW5lQ29sb3JNb2RlID0gZXhwb3J0cy5NVG9vbk1hdGVyaWFsRGVidWdNb2RlID0gZXhwb3J0cy5NVG9vbk1hdGVyaWFsQ3VsbE1vZGUgPSB2b2lkIDA7XHJcbnZhciBUSFJFRSA9IHJlcXVpcmUoXCJ0aHJlZVwiKTtcclxudmFyIGdldFRleGVsRGVjb2RpbmdGdW5jdGlvbl8xID0gcmVxdWlyZShcIi4vZ2V0VGV4ZWxEZWNvZGluZ0Z1bmN0aW9uXCIpO1xyXG52YXIgbXRvb25fdmVydF8xID0gcmVxdWlyZShcIi4vc2hhZGVycy9tdG9vbi52ZXJ0XCIpO1xyXG52YXIgbXRvb25fZnJhZ18xID0gcmVxdWlyZShcIi4vc2hhZGVycy9tdG9vbi5mcmFnXCIpO1xyXG52YXIgVEFVID0gMi4wICogTWF0aC5QSTtcclxudmFyIE1Ub29uTWF0ZXJpYWxDdWxsTW9kZTtcclxuKGZ1bmN0aW9uIChNVG9vbk1hdGVyaWFsQ3VsbE1vZGUpIHtcclxuICAgIE1Ub29uTWF0ZXJpYWxDdWxsTW9kZVtNVG9vbk1hdGVyaWFsQ3VsbE1vZGVbXCJPZmZcIl0gPSAwXSA9IFwiT2ZmXCI7XHJcbiAgICBNVG9vbk1hdGVyaWFsQ3VsbE1vZGVbTVRvb25NYXRlcmlhbEN1bGxNb2RlW1wiRnJvbnRcIl0gPSAxXSA9IFwiRnJvbnRcIjtcclxuICAgIE1Ub29uTWF0ZXJpYWxDdWxsTW9kZVtNVG9vbk1hdGVyaWFsQ3VsbE1vZGVbXCJCYWNrXCJdID0gMl0gPSBcIkJhY2tcIjtcclxufSkoTVRvb25NYXRlcmlhbEN1bGxNb2RlID0gZXhwb3J0cy5NVG9vbk1hdGVyaWFsQ3VsbE1vZGUgfHwgKGV4cG9ydHMuTVRvb25NYXRlcmlhbEN1bGxNb2RlID0ge30pKTtcclxudmFyIE1Ub29uTWF0ZXJpYWxEZWJ1Z01vZGU7XHJcbihmdW5jdGlvbiAoTVRvb25NYXRlcmlhbERlYnVnTW9kZSkge1xyXG4gICAgTVRvb25NYXRlcmlhbERlYnVnTW9kZVtNVG9vbk1hdGVyaWFsRGVidWdNb2RlW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XHJcbiAgICBNVG9vbk1hdGVyaWFsRGVidWdNb2RlW01Ub29uTWF0ZXJpYWxEZWJ1Z01vZGVbXCJOb3JtYWxcIl0gPSAxXSA9IFwiTm9ybWFsXCI7XHJcbiAgICBNVG9vbk1hdGVyaWFsRGVidWdNb2RlW01Ub29uTWF0ZXJpYWxEZWJ1Z01vZGVbXCJMaXRTaGFkZVJhdGVcIl0gPSAyXSA9IFwiTGl0U2hhZGVSYXRlXCI7XHJcbiAgICBNVG9vbk1hdGVyaWFsRGVidWdNb2RlW01Ub29uTWF0ZXJpYWxEZWJ1Z01vZGVbXCJVVlwiXSA9IDNdID0gXCJVVlwiO1xyXG59KShNVG9vbk1hdGVyaWFsRGVidWdNb2RlID0gZXhwb3J0cy5NVG9vbk1hdGVyaWFsRGVidWdNb2RlIHx8IChleHBvcnRzLk1Ub29uTWF0ZXJpYWxEZWJ1Z01vZGUgPSB7fSkpO1xyXG52YXIgTVRvb25NYXRlcmlhbE91dGxpbmVDb2xvck1vZGU7XHJcbihmdW5jdGlvbiAoTVRvb25NYXRlcmlhbE91dGxpbmVDb2xvck1vZGUpIHtcclxuICAgIE1Ub29uTWF0ZXJpYWxPdXRsaW5lQ29sb3JNb2RlW01Ub29uTWF0ZXJpYWxPdXRsaW5lQ29sb3JNb2RlW1wiRml4ZWRDb2xvclwiXSA9IDBdID0gXCJGaXhlZENvbG9yXCI7XHJcbiAgICBNVG9vbk1hdGVyaWFsT3V0bGluZUNvbG9yTW9kZVtNVG9vbk1hdGVyaWFsT3V0bGluZUNvbG9yTW9kZVtcIk1peGVkTGlnaHRpbmdcIl0gPSAxXSA9IFwiTWl4ZWRMaWdodGluZ1wiO1xyXG59KShNVG9vbk1hdGVyaWFsT3V0bGluZUNvbG9yTW9kZSA9IGV4cG9ydHMuTVRvb25NYXRlcmlhbE91dGxpbmVDb2xvck1vZGUgfHwgKGV4cG9ydHMuTVRvb25NYXRlcmlhbE91dGxpbmVDb2xvck1vZGUgPSB7fSkpO1xyXG52YXIgTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGU7XHJcbihmdW5jdGlvbiAoTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUpIHtcclxuICAgIE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlW01Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XHJcbiAgICBNVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZVtNVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZVtcIldvcmxkQ29vcmRpbmF0ZXNcIl0gPSAxXSA9IFwiV29ybGRDb29yZGluYXRlc1wiO1xyXG4gICAgTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGVbTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGVbXCJTY3JlZW5Db29yZGluYXRlc1wiXSA9IDJdID0gXCJTY3JlZW5Db29yZGluYXRlc1wiO1xyXG59KShNVG9vbk1hdGVyaWFsT3V0bGluZVdpZHRoTW9kZSA9IGV4cG9ydHMuTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUgfHwgKGV4cG9ydHMuTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUgPSB7fSkpO1xyXG52YXIgTVRvb25NYXRlcmlhbFJlbmRlck1vZGU7XHJcbihmdW5jdGlvbiAoTVRvb25NYXRlcmlhbFJlbmRlck1vZGUpIHtcclxuICAgIE1Ub29uTWF0ZXJpYWxSZW5kZXJNb2RlW01Ub29uTWF0ZXJpYWxSZW5kZXJNb2RlW1wiT3BhcXVlXCJdID0gMF0gPSBcIk9wYXF1ZVwiO1xyXG4gICAgTVRvb25NYXRlcmlhbFJlbmRlck1vZGVbTVRvb25NYXRlcmlhbFJlbmRlck1vZGVbXCJDdXRvdXRcIl0gPSAxXSA9IFwiQ3V0b3V0XCI7XHJcbiAgICBNVG9vbk1hdGVyaWFsUmVuZGVyTW9kZVtNVG9vbk1hdGVyaWFsUmVuZGVyTW9kZVtcIlRyYW5zcGFyZW50XCJdID0gMl0gPSBcIlRyYW5zcGFyZW50XCI7XHJcbiAgICBNVG9vbk1hdGVyaWFsUmVuZGVyTW9kZVtNVG9vbk1hdGVyaWFsUmVuZGVyTW9kZVtcIlRyYW5zcGFyZW50V2l0aFpXcml0ZVwiXSA9IDNdID0gXCJUcmFuc3BhcmVudFdpdGhaV3JpdGVcIjtcclxufSkoTVRvb25NYXRlcmlhbFJlbmRlck1vZGUgPSBleHBvcnRzLk1Ub29uTWF0ZXJpYWxSZW5kZXJNb2RlIHx8IChleHBvcnRzLk1Ub29uTWF0ZXJpYWxSZW5kZXJNb2RlID0ge30pKTtcclxuLyoqXHJcbiAqIE1Ub29uIGlzIGEgbWF0ZXJpYWwgc3BlY2lmaWNhdGlvbiB0aGF0IGhhcyB2YXJpb3VzIGZlYXR1cmVzLlxyXG4gKiBUaGUgc3BlYyBhbmQgaW1wbGVtZW50YXRpb24gYXJlIG9yaWdpbmFsbHkgZm91bmRlZCBmb3IgVW5pdHkgZW5naW5lIGFuZCB0aGlzIGlzIGEgcG9ydCBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAqXHJcbiAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL1NhbnRhcmgvTVRvb25cclxuICovXHJcbnZhciBNVG9vbk1hdGVyaWFsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1Ub29uTWF0ZXJpYWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBNVG9vbk1hdGVyaWFsKHBhcmFtZXRlcnMpIHtcclxuICAgICAgICBpZiAocGFyYW1ldGVycyA9PT0gdm9pZCAwKSB7IHBhcmFtZXRlcnMgPSB7fTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVhZG9ubHkgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB0aGlzIGlzIGEgW1tNVG9vbk1hdGVyaWFsXV0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX3RoaXMuaXNNVG9vbk1hdGVyaWFsID0gdHJ1ZTtcclxuICAgICAgICBfdGhpcy5jdXRvZmYgPSAwLjU7IC8vIF9DdXRvZmZcclxuICAgICAgICBfdGhpcy5jb2xvciA9IG5ldyBUSFJFRS5WZWN0b3I0KDEuMCwgMS4wLCAxLjAsIDEuMCk7IC8vIF9Db2xvclxyXG4gICAgICAgIF90aGlzLnNoYWRlQ29sb3IgPSBuZXcgVEhSRUUuVmVjdG9yNCgwLjk3LCAwLjgxLCAwLjg2LCAxLjApOyAvLyBfU2hhZGVDb2xvclxyXG4gICAgICAgIF90aGlzLm1hcCA9IG51bGw7IC8vIF9NYWluVGV4XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgICAgIF90aGlzLm1haW5UZXhfU1QgPSBuZXcgVEhSRUUuVmVjdG9yNCgwLjAsIDAuMCwgMS4wLCAxLjApOyAvLyBfTWFpblRleF9TVFxyXG4gICAgICAgIF90aGlzLnNoYWRlVGV4dHVyZSA9IG51bGw7IC8vIF9TaGFkZVRleHR1cmVcclxuICAgICAgICAvLyBwdWJsaWMgc2hhZGVUZXh0dXJlX1NUID0gbmV3IFRIUkVFLlZlY3RvcjQoMC4wLCAwLjAsIDEuMCwgMS4wKTsgLy8gX1NoYWRlVGV4dHVyZV9TVCAodW51c2VkKVxyXG4gICAgICAgIF90aGlzLm5vcm1hbE1hcCA9IG51bGw7IC8vIF9CdW1wTWFwLiBhZ2FpbiwgVEhJUyBJUyBfQnVtcE1hcFxyXG4gICAgICAgIF90aGlzLm5vcm1hbE1hcFR5cGUgPSBUSFJFRS5UYW5nZW50U3BhY2VOb3JtYWxNYXA7IC8vIFRocmVlLmpzIHJlcXVpcmVzIHRoaXNcclxuICAgICAgICBfdGhpcy5ub3JtYWxTY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IyKDEuMCwgMS4wKTsgLy8gX0J1bXBTY2FsZSwgaW4gVmVjdG9yMlxyXG4gICAgICAgIC8vIHB1YmxpYyBidW1wTWFwX1NUID0gbmV3IFRIUkVFLlZlY3RvcjQoMC4wLCAwLjAsIDEuMCwgMS4wKTsgLy8gX0J1bXBNYXBfU1QgKHVudXNlZClcclxuICAgICAgICBfdGhpcy5yZWNlaXZlU2hhZG93UmF0ZSA9IDEuMDsgLy8gX1JlY2VpdmVTaGFkb3dSYXRlXHJcbiAgICAgICAgX3RoaXMucmVjZWl2ZVNoYWRvd1RleHR1cmUgPSBudWxsOyAvLyBfUmVjZWl2ZVNoYWRvd1RleHR1cmVcclxuICAgICAgICAvLyBwdWJsaWMgcmVjZWl2ZVNoYWRvd1RleHR1cmVfU1QgPSBuZXcgVEhSRUUuVmVjdG9yNCgwLjAsIDAuMCwgMS4wLCAxLjApOyAvLyBfUmVjZWl2ZVNoYWRvd1RleHR1cmVfU1QgKHVudXNlZClcclxuICAgICAgICBfdGhpcy5zaGFkaW5nR3JhZGVSYXRlID0gMS4wOyAvLyBfU2hhZGluZ0dyYWRlUmF0ZVxyXG4gICAgICAgIF90aGlzLnNoYWRpbmdHcmFkZVRleHR1cmUgPSBudWxsOyAvLyBfU2hhZGluZ0dyYWRlVGV4dHVyZVxyXG4gICAgICAgIC8vIHB1YmxpYyBzaGFkaW5nR3JhZGVUZXh0dXJlX1NUID0gbmV3IFRIUkVFLlZlY3RvcjQoMC4wLCAwLjAsIDEuMCwgMS4wKTsgLy8gX1NoYWRpbmdHcmFkZVRleHR1cmVfU1QgKHVudXNlZClcclxuICAgICAgICBfdGhpcy5zaGFkZVNoaWZ0ID0gMC4wOyAvLyBfU2hhZGVTaGlmdFxyXG4gICAgICAgIF90aGlzLnNoYWRlVG9vbnkgPSAwLjk7IC8vIF9TaGFkZVRvb255XHJcbiAgICAgICAgX3RoaXMubGlnaHRDb2xvckF0dGVudWF0aW9uID0gMC4wOyAvLyBfTGlnaHRDb2xvckF0dGVudWF0aW9uXHJcbiAgICAgICAgX3RoaXMuaW5kaXJlY3RMaWdodEludGVuc2l0eSA9IDAuMTsgLy8gX0luZGlyZWN0TGlnaHRJbnRlbnNpdHlcclxuICAgICAgICBfdGhpcy5yaW1UZXh0dXJlID0gbnVsbDsgLy8gX1JpbVRleHR1cmVcclxuICAgICAgICBfdGhpcy5yaW1Db2xvciA9IG5ldyBUSFJFRS5WZWN0b3I0KDAuMCwgMC4wLCAwLjAsIDEuMCk7IC8vIF9SaW1Db2xvclxyXG4gICAgICAgIF90aGlzLnJpbUxpZ2h0aW5nTWl4ID0gMC4wOyAvLyBfUmltTGlnaHRpbmdNaXhcclxuICAgICAgICBfdGhpcy5yaW1GcmVzbmVsUG93ZXIgPSAxLjA7IC8vIF9SaW1GcmVzbmVsUG93ZXJcclxuICAgICAgICBfdGhpcy5yaW1MaWZ0ID0gMC4wOyAvLyBfUmltTGlmdFxyXG4gICAgICAgIF90aGlzLnNwaGVyZUFkZCA9IG51bGw7IC8vIF9TcGhlcmVBZGRcclxuICAgICAgICAvLyBwdWJsaWMgc3BoZXJlQWRkX1NUID0gbmV3IFRIUkVFLlZlY3RvcjQoMC4wLCAwLjAsIDEuMCwgMS4wKTsgLy8gX1NwaGVyZUFkZF9TVCAodW51c2VkKVxyXG4gICAgICAgIF90aGlzLmVtaXNzaW9uQ29sb3IgPSBuZXcgVEhSRUUuVmVjdG9yNCgwLjAsIDAuMCwgMC4wLCAxLjApOyAvLyBfRW1pc3Npb25Db2xvclxyXG4gICAgICAgIF90aGlzLmVtaXNzaXZlTWFwID0gbnVsbDsgLy8gX0VtaXNzaW9uTWFwXHJcbiAgICAgICAgLy8gcHVibGljIGVtaXNzaW9uTWFwX1NUID0gbmV3IFRIUkVFLlZlY3RvcjQoMC4wLCAwLjAsIDEuMCwgMS4wKTsgLy8gX0VtaXNzaW9uTWFwX1NUICh1bnVzZWQpXHJcbiAgICAgICAgX3RoaXMub3V0bGluZVdpZHRoVGV4dHVyZSA9IG51bGw7IC8vIF9PdXRsaW5lV2lkdGhUZXh0dXJlXHJcbiAgICAgICAgLy8gcHVibGljIG91dGxpbmVXaWR0aFRleHR1cmVfU1QgPSBuZXcgVEhSRUUuVmVjdG9yNCgwLjAsIDAuMCwgMS4wLCAxLjApOyAvLyBfT3V0bGluZVdpZHRoVGV4dHVyZV9TVCAodW51c2VkKVxyXG4gICAgICAgIF90aGlzLm91dGxpbmVXaWR0aCA9IDAuNTsgLy8gX091dGxpbmVXaWR0aFxyXG4gICAgICAgIF90aGlzLm91dGxpbmVTY2FsZWRNYXhEaXN0YW5jZSA9IDEuMDsgLy8gX091dGxpbmVTY2FsZWRNYXhEaXN0YW5jZVxyXG4gICAgICAgIF90aGlzLm91dGxpbmVDb2xvciA9IG5ldyBUSFJFRS5WZWN0b3I0KDAuMCwgMC4wLCAwLjAsIDEuMCk7IC8vIF9PdXRsaW5lQ29sb3JcclxuICAgICAgICBfdGhpcy5vdXRsaW5lTGlnaHRpbmdNaXggPSAxLjA7IC8vIF9PdXRsaW5lTGlnaHRpbmdNaXhcclxuICAgICAgICBfdGhpcy51dkFuaW1NYXNrVGV4dHVyZSA9IG51bGw7IC8vIF9VdkFuaW1NYXNrVGV4dHVyZVxyXG4gICAgICAgIF90aGlzLnV2QW5pbVNjcm9sbFggPSAwLjA7IC8vIF9VdkFuaW1TY3JvbGxYXHJcbiAgICAgICAgX3RoaXMudXZBbmltU2Nyb2xsWSA9IDAuMDsgLy8gX1V2QW5pbVNjcm9sbFlcclxuICAgICAgICBfdGhpcy51dkFuaW1Sb3RhdGlvbiA9IDAuMDsgLy8gX3V2QW5pbVJvdGF0aW9uXHJcbiAgICAgICAgX3RoaXMuc2hvdWxkQXBwbHlVbmlmb3JtcyA9IHRydWU7IC8vIHdoZW4gdGhpcyBpcyB0cnVlLCBhcHBseVVuaWZvcm1zIGVmZmVjdHNcclxuICAgICAgICBfdGhpcy5fZGVidWdNb2RlID0gTVRvb25NYXRlcmlhbERlYnVnTW9kZS5Ob25lOyAvLyBfRGVidWdNb2RlXHJcbiAgICAgICAgX3RoaXMuX2JsZW5kTW9kZSA9IE1Ub29uTWF0ZXJpYWxSZW5kZXJNb2RlLk9wYXF1ZTsgLy8gX0JsZW5kTW9kZVxyXG4gICAgICAgIF90aGlzLl9vdXRsaW5lV2lkdGhNb2RlID0gTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUuTm9uZTsgLy8gX091dGxpbmVXaWR0aE1vZGVcclxuICAgICAgICBfdGhpcy5fb3V0bGluZUNvbG9yTW9kZSA9IE1Ub29uTWF0ZXJpYWxPdXRsaW5lQ29sb3JNb2RlLkZpeGVkQ29sb3I7IC8vIF9PdXRsaW5lQ29sb3JNb2RlXHJcbiAgICAgICAgX3RoaXMuX2N1bGxNb2RlID0gTVRvb25NYXRlcmlhbEN1bGxNb2RlLkJhY2s7IC8vIF9DdWxsTW9kZVxyXG4gICAgICAgIF90aGlzLl9vdXRsaW5lQ3VsbE1vZGUgPSBNVG9vbk1hdGVyaWFsQ3VsbE1vZGUuRnJvbnQ7IC8vIF9PdXRsaW5lQ3VsbE1vZGVcclxuICAgICAgICAvLyBwdWJsaWMgc3JjQmxlbmQgPSAxLjA7IC8vIF9TcmNCbGVuZCAoaXMgbm90IHN1cHBvcnRlZClcclxuICAgICAgICAvLyBwdWJsaWMgZHN0QmxlbmQgPSAwLjA7IC8vIF9Ec3RCbGVuZCAoaXMgbm90IHN1cHBvcnRlZClcclxuICAgICAgICAvLyBwdWJsaWMgeldyaXRlID0gMS4wOyAvLyBfWldyaXRlICh3aWxsIGJlIGNvbnZlcnRlZCB0byBkZXB0aFdyaXRlKVxyXG4gICAgICAgIF90aGlzLl9pc091dGxpbmUgPSBmYWxzZTtcclxuICAgICAgICBfdGhpcy5fdXZBbmltT2Zmc2V0WCA9IDAuMDtcclxuICAgICAgICBfdGhpcy5fdXZBbmltT2Zmc2V0WSA9IDAuMDtcclxuICAgICAgICBfdGhpcy5fdXZBbmltUGhhc2UgPSAwLjA7XHJcbiAgICAgICAgX3RoaXMuZW5jb2RpbmcgPSBwYXJhbWV0ZXJzLmVuY29kaW5nIHx8IFRIUkVFLkxpbmVhckVuY29kaW5nO1xyXG4gICAgICAgIGlmIChfdGhpcy5lbmNvZGluZyAhPT0gVEhSRUUuTGluZWFyRW5jb2RpbmcgJiYgX3RoaXMuZW5jb2RpbmcgIT09IFRIUkVFLnNSR0JFbmNvZGluZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBzcGVjaWZpZWQgY29sb3IgZW5jb2RpbmcgZG9lcyBub3Qgd29yayBwcm9wZXJseSB3aXRoIE1Ub29uTWF0ZXJpYWwuIFlvdSBtaWdodCB3YW50IHRvIHVzZSBUSFJFRS5zUkdCRW5jb2RpbmcgaW5zdGVhZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gPT0gdGhlc2UgcGFyYW1ldGVyIGhhcyBubyBjb21wYXRpYmlsaXR5IHdpdGggdGhpcyBpbXBsZW1lbnRhdGlvbiA9PT09PT09PVxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ21Ub29uVmVyc2lvbicsXHJcbiAgICAgICAgICAgICdzaGFkZVRleHR1cmVfU1QnLFxyXG4gICAgICAgICAgICAnYnVtcE1hcF9TVCcsXHJcbiAgICAgICAgICAgICdyZWNlaXZlU2hhZG93VGV4dHVyZV9TVCcsXHJcbiAgICAgICAgICAgICdzaGFkaW5nR3JhZGVUZXh0dXJlX1NUJyxcclxuICAgICAgICAgICAgJ3JpbVRleHR1cmVfU1QnLFxyXG4gICAgICAgICAgICAnc3BoZXJlQWRkX1NUJyxcclxuICAgICAgICAgICAgJ2VtaXNzaW9uTWFwX1NUJyxcclxuICAgICAgICAgICAgJ291dGxpbmVXaWR0aFRleHR1cmVfU1QnLFxyXG4gICAgICAgICAgICAndXZBbmltTWFza1RleHR1cmVfU1QnLFxyXG4gICAgICAgICAgICAnc3JjQmxlbmQnLFxyXG4gICAgICAgICAgICAnZHN0QmxlbmQnLFxyXG4gICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKGBUSFJFRS4ke3RoaXMudHlwZX06IFRoZSBwYXJhbWV0ZXIgXCIke2tleX1cIiBpcyBub3Qgc3VwcG9ydGVkLmApO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFtZXRlcnNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vID09IGVuYWJsaW5nIGJ1bmNoIG9mIHN0dWZmID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBwYXJhbWV0ZXJzLmZvZyA9IHRydWU7XHJcbiAgICAgICAgcGFyYW1ldGVycy5saWdodHMgPSB0cnVlO1xyXG4gICAgICAgIHBhcmFtZXRlcnMuY2xpcHBpbmcgPSB0cnVlO1xyXG4gICAgICAgIHBhcmFtZXRlcnMuc2tpbm5pbmcgPSBwYXJhbWV0ZXJzLnNraW5uaW5nIHx8IGZhbHNlO1xyXG4gICAgICAgIHBhcmFtZXRlcnMubW9ycGhUYXJnZXRzID0gcGFyYW1ldGVycy5tb3JwaFRhcmdldHMgfHwgZmFsc2U7XHJcbiAgICAgICAgcGFyYW1ldGVycy5tb3JwaE5vcm1hbHMgPSBwYXJhbWV0ZXJzLm1vcnBoTm9ybWFscyB8fCBmYWxzZTtcclxuICAgICAgICAvLyA9PSB1bmlmb3JtcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgcGFyYW1ldGVycy51bmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMubWVyZ2UoW1xyXG4gICAgICAgICAgICBUSFJFRS5Vbmlmb3Jtc0xpYi5jb21tb24sXHJcbiAgICAgICAgICAgIFRIUkVFLlVuaWZvcm1zTGliLm5vcm1hbG1hcCxcclxuICAgICAgICAgICAgVEhSRUUuVW5pZm9ybXNMaWIuZW1pc3NpdmVtYXAsXHJcbiAgICAgICAgICAgIFRIUkVFLlVuaWZvcm1zTGliLmZvZyxcclxuICAgICAgICAgICAgVEhSRUUuVW5pZm9ybXNMaWIubGlnaHRzLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjdXRvZmY6IHsgdmFsdWU6IDAuNSB9LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigxLjAsIDEuMCwgMS4wKSB9LFxyXG4gICAgICAgICAgICAgICAgY29sb3JBbHBoYTogeyB2YWx1ZTogMS4wIH0sXHJcbiAgICAgICAgICAgICAgICBzaGFkZUNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMC45NywgMC44MSwgMC44NikgfSxcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgICAgICAgICAgICAgIG1haW5UZXhfU1Q6IHsgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3I0KDAuMCwgMC4wLCAxLjAsIDEuMCkgfSxcclxuICAgICAgICAgICAgICAgIHNoYWRlVGV4dHVyZTogeyB2YWx1ZTogbnVsbCB9LFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvd1JhdGU6IHsgdmFsdWU6IDEuMCB9LFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvd1RleHR1cmU6IHsgdmFsdWU6IG51bGwgfSxcclxuICAgICAgICAgICAgICAgIHNoYWRpbmdHcmFkZVJhdGU6IHsgdmFsdWU6IDEuMCB9LFxyXG4gICAgICAgICAgICAgICAgc2hhZGluZ0dyYWRlVGV4dHVyZTogeyB2YWx1ZTogbnVsbCB9LFxyXG4gICAgICAgICAgICAgICAgc2hhZGVTaGlmdDogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgICAgICAgICBzaGFkZVRvb255OiB7IHZhbHVlOiAwLjkgfSxcclxuICAgICAgICAgICAgICAgIGxpZ2h0Q29sb3JBdHRlbnVhdGlvbjogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgICAgICAgICBpbmRpcmVjdExpZ2h0SW50ZW5zaXR5OiB7IHZhbHVlOiAwLjEgfSxcclxuICAgICAgICAgICAgICAgIHJpbVRleHR1cmU6IHsgdmFsdWU6IG51bGwgfSxcclxuICAgICAgICAgICAgICAgIHJpbUNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMC4wLCAwLjAsIDAuMCkgfSxcclxuICAgICAgICAgICAgICAgIHJpbUxpZ2h0aW5nTWl4OiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICAgICAgICAgIHJpbUZyZXNuZWxQb3dlcjogeyB2YWx1ZTogMS4wIH0sXHJcbiAgICAgICAgICAgICAgICByaW1MaWZ0OiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICAgICAgICAgIHNwaGVyZUFkZDogeyB2YWx1ZTogbnVsbCB9LFxyXG4gICAgICAgICAgICAgICAgZW1pc3Npb25Db2xvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDAuMCwgMC4wLCAwLjApIH0sXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lV2lkdGhUZXh0dXJlOiB7IHZhbHVlOiBudWxsIH0sXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lV2lkdGg6IHsgdmFsdWU6IDAuNSB9LFxyXG4gICAgICAgICAgICAgICAgb3V0bGluZVNjYWxlZE1heERpc3RhbmNlOiB7IHZhbHVlOiAxLjAgfSxcclxuICAgICAgICAgICAgICAgIG91dGxpbmVDb2xvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDAuMCwgMC4wLCAwLjApIH0sXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lTGlnaHRpbmdNaXg6IHsgdmFsdWU6IDEuMCB9LFxyXG4gICAgICAgICAgICAgICAgdXZBbmltTWFza1RleHR1cmU6IHsgdmFsdWU6IG51bGwgfSxcclxuICAgICAgICAgICAgICAgIHV2QW5pbU9mZnNldFg6IHsgdmFsdWU6IDAuMCB9LFxyXG4gICAgICAgICAgICAgICAgdXZBbmltT2Zmc2V0WTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgICAgICAgICB1dkFuaW1UaGV0YTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgLy8gPT0gZmluYWxseSBjb21waWxlIHRoZSBzaGFkZXIgcHJvZ3JhbSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIF90aGlzLnNldFZhbHVlcyhwYXJhbWV0ZXJzKTtcclxuICAgICAgICAvLyA9PSB1cGRhdGUgc2hhZGVyIHN0dWZmID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgX3RoaXMuX3VwZGF0ZVNoYWRlckNvZGUoKTtcclxuICAgICAgICBfdGhpcy5fYXBwbHlVbmlmb3JtcygpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNVG9vbk1hdGVyaWFsLnByb3RvdHlwZSwgXCJtYWluVGV4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcCA9IHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1Ub29uTWF0ZXJpYWwucHJvdG90eXBlLCBcImJ1bXBNYXBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxNYXA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFsTWFwID0gdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTVRvb25NYXRlcmlhbC5wcm90b3R5cGUsIFwiYnVtcFNjYWxlXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXR0aW5nIHRoZSBgYnVtcFNjYWxlYCByZXV0cm5zIGl0cyB4IGNvbXBvbmVudCBvZiBgbm9ybWFsU2NhbGVgIChhc3N1bWluZyB4IGFuZCB5IGNvbXBvbmVudCBvZiBgbm9ybWFsU2NhbGVgIGFyZSBzYW1lKS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsU2NhbGUueDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNldHRpbmcgdGhlIGBidW1wU2NhbGVgIHdpbGwgYmUgY29udmVydCB0aGUgdmFsdWUgaW50byBWZWN0b3IyIGBub3JtYWxTY2FsZWAgLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxTY2FsZS5zZXQodCwgdCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1Ub29uTWF0ZXJpYWwucHJvdG90eXBlLCBcImVtaXNzaW9uTWFwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pc3NpdmVNYXA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pc3NpdmVNYXAgPSB0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNVG9vbk1hdGVyaWFsLnByb3RvdHlwZSwgXCJibGVuZE1vZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxlbmRNb2RlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ibGVuZE1vZGUgPSBtO1xyXG4gICAgICAgICAgICB0aGlzLmRlcHRoV3JpdGUgPSB0aGlzLl9ibGVuZE1vZGUgIT09IE1Ub29uTWF0ZXJpYWxSZW5kZXJNb2RlLlRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zcGFyZW50ID1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2JsZW5kTW9kZSA9PT0gTVRvb25NYXRlcmlhbFJlbmRlck1vZGUuVHJhbnNwYXJlbnQgfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibGVuZE1vZGUgPT09IE1Ub29uTWF0ZXJpYWxSZW5kZXJNb2RlLlRyYW5zcGFyZW50V2l0aFpXcml0ZTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2hhZGVyQ29kZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNVG9vbk1hdGVyaWFsLnByb3RvdHlwZSwgXCJkZWJ1Z01vZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVidWdNb2RlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1Z01vZGUgPSBtO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTaGFkZXJDb2RlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1Ub29uTWF0ZXJpYWwucHJvdG90eXBlLCBcIm91dGxpbmVXaWR0aE1vZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3V0bGluZVdpZHRoTW9kZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgdGhpcy5fb3V0bGluZVdpZHRoTW9kZSA9IG07XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNoYWRlckNvZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTVRvb25NYXRlcmlhbC5wcm90b3R5cGUsIFwib3V0bGluZUNvbG9yTW9kZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vdXRsaW5lQ29sb3JNb2RlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vdXRsaW5lQ29sb3JNb2RlID0gbTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2hhZGVyQ29kZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNVG9vbk1hdGVyaWFsLnByb3RvdHlwZSwgXCJjdWxsTW9kZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdWxsTW9kZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VsbE1vZGUgPSBtO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVDdWxsRmFjZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNVG9vbk1hdGVyaWFsLnByb3RvdHlwZSwgXCJvdXRsaW5lQ3VsbE1vZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3V0bGluZUN1bGxNb2RlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vdXRsaW5lQ3VsbE1vZGUgPSBtO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVDdWxsRmFjZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNVG9vbk1hdGVyaWFsLnByb3RvdHlwZSwgXCJ6V3JpdGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXB0aFdyaXRlID8gMSA6IDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVwdGhXcml0ZSA9IDAuNSA8PSBpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNVG9vbk1hdGVyaWFsLnByb3RvdHlwZSwgXCJpc091dGxpbmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNPdXRsaW5lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYikge1xyXG4gICAgICAgICAgICB0aGlzLl9pc091dGxpbmUgPSBiO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTaGFkZXJDb2RlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUN1bGxGYWNlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhpcyBtYXRlcmlhbC5cclxuICAgICAqIFVzdWFsbHkgdGhpcyB3aWxsIGJlIGNhbGxlZCB2aWEgW1tWUk0udXBkYXRlXV0gc28geW91IGRvbid0IGhhdmUgdG8gY2FsbCB0aGlzIG1hbnVhbGx5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBkZWx0YSBkZWx0YVRpbWUgc2luY2UgbGFzdCB1cGRhdGVcclxuICAgICAqL1xyXG4gICAgTVRvb25NYXRlcmlhbC5wcm90b3R5cGUudXBkYXRlVlJNTWF0ZXJpYWxzID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5fdXZBbmltT2Zmc2V0WCA9IHRoaXMuX3V2QW5pbU9mZnNldFggKyBkZWx0YSAqIHRoaXMudXZBbmltU2Nyb2xsWDtcclxuICAgICAgICB0aGlzLl91dkFuaW1PZmZzZXRZID0gdGhpcy5fdXZBbmltT2Zmc2V0WSAtIGRlbHRhICogdGhpcy51dkFuaW1TY3JvbGxZOyAvLyBOZWdhdGl2ZSBzaW5jZSB0IGF4aXMgb2YgdXZzIGFyZSBvcHBvc2l0ZSBmcm9tIFVuaXR5J3Mgb25lXHJcbiAgICAgICAgdGhpcy5fdXZBbmltUGhhc2UgPSB0aGlzLl91dkFuaW1QaGFzZSArIGRlbHRhICogdGhpcy51dkFuaW1Sb3RhdGlvbjtcclxuICAgICAgICB0aGlzLl9hcHBseVVuaWZvcm1zKCk7XHJcbiAgICB9O1xyXG4gICAgTVRvb25NYXRlcmlhbC5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmNvcHkuY2FsbCh0aGlzLCBzb3VyY2UpO1xyXG4gICAgICAgIC8vID09IGNvcHkgbWVtYmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICB0aGlzLmN1dG9mZiA9IHNvdXJjZS5jdXRvZmY7XHJcbiAgICAgICAgdGhpcy5jb2xvci5jb3B5KHNvdXJjZS5jb2xvcik7XHJcbiAgICAgICAgdGhpcy5zaGFkZUNvbG9yLmNvcHkoc291cmNlLnNoYWRlQ29sb3IpO1xyXG4gICAgICAgIHRoaXMubWFwID0gc291cmNlLm1hcDtcclxuICAgICAgICB0aGlzLm1haW5UZXhfU1QuY29weShzb3VyY2UubWFpblRleF9TVCk7XHJcbiAgICAgICAgdGhpcy5zaGFkZVRleHR1cmUgPSBzb3VyY2Uuc2hhZGVUZXh0dXJlO1xyXG4gICAgICAgIHRoaXMubm9ybWFsTWFwID0gc291cmNlLm5vcm1hbE1hcDtcclxuICAgICAgICB0aGlzLm5vcm1hbE1hcFR5cGUgPSBzb3VyY2Uubm9ybWFsTWFwVHlwZTtcclxuICAgICAgICB0aGlzLm5vcm1hbFNjYWxlLmNvcHkodGhpcy5ub3JtYWxTY2FsZSk7XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlU2hhZG93UmF0ZSA9IHNvdXJjZS5yZWNlaXZlU2hhZG93UmF0ZTtcclxuICAgICAgICB0aGlzLnJlY2VpdmVTaGFkb3dUZXh0dXJlID0gc291cmNlLnJlY2VpdmVTaGFkb3dUZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuc2hhZGluZ0dyYWRlUmF0ZSA9IHNvdXJjZS5zaGFkaW5nR3JhZGVSYXRlO1xyXG4gICAgICAgIHRoaXMuc2hhZGluZ0dyYWRlVGV4dHVyZSA9IHNvdXJjZS5zaGFkaW5nR3JhZGVUZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuc2hhZGVTaGlmdCA9IHNvdXJjZS5zaGFkZVNoaWZ0O1xyXG4gICAgICAgIHRoaXMuc2hhZGVUb29ueSA9IHNvdXJjZS5zaGFkZVRvb255O1xyXG4gICAgICAgIHRoaXMubGlnaHRDb2xvckF0dGVudWF0aW9uID0gc291cmNlLmxpZ2h0Q29sb3JBdHRlbnVhdGlvbjtcclxuICAgICAgICB0aGlzLmluZGlyZWN0TGlnaHRJbnRlbnNpdHkgPSBzb3VyY2UuaW5kaXJlY3RMaWdodEludGVuc2l0eTtcclxuICAgICAgICB0aGlzLnJpbVRleHR1cmUgPSBzb3VyY2UucmltVGV4dHVyZTtcclxuICAgICAgICB0aGlzLnJpbUNvbG9yLmNvcHkoc291cmNlLnJpbUNvbG9yKTtcclxuICAgICAgICB0aGlzLnJpbUxpZ2h0aW5nTWl4ID0gc291cmNlLnJpbUxpZ2h0aW5nTWl4O1xyXG4gICAgICAgIHRoaXMucmltRnJlc25lbFBvd2VyID0gc291cmNlLnJpbUZyZXNuZWxQb3dlcjtcclxuICAgICAgICB0aGlzLnJpbUxpZnQgPSBzb3VyY2UucmltTGlmdDtcclxuICAgICAgICB0aGlzLnNwaGVyZUFkZCA9IHNvdXJjZS5zcGhlcmVBZGQ7XHJcbiAgICAgICAgdGhpcy5lbWlzc2lvbkNvbG9yLmNvcHkoc291cmNlLmVtaXNzaW9uQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuZW1pc3NpdmVNYXAgPSBzb3VyY2UuZW1pc3NpdmVNYXA7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lV2lkdGhUZXh0dXJlID0gc291cmNlLm91dGxpbmVXaWR0aFRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lV2lkdGggPSBzb3VyY2Uub3V0bGluZVdpZHRoO1xyXG4gICAgICAgIHRoaXMub3V0bGluZVNjYWxlZE1heERpc3RhbmNlID0gc291cmNlLm91dGxpbmVTY2FsZWRNYXhEaXN0YW5jZTtcclxuICAgICAgICB0aGlzLm91dGxpbmVDb2xvci5jb3B5KHNvdXJjZS5vdXRsaW5lQ29sb3IpO1xyXG4gICAgICAgIHRoaXMub3V0bGluZUxpZ2h0aW5nTWl4ID0gc291cmNlLm91dGxpbmVMaWdodGluZ01peDtcclxuICAgICAgICB0aGlzLnV2QW5pbU1hc2tUZXh0dXJlID0gc291cmNlLnV2QW5pbU1hc2tUZXh0dXJlO1xyXG4gICAgICAgIHRoaXMudXZBbmltU2Nyb2xsWCA9IHNvdXJjZS51dkFuaW1TY3JvbGxYO1xyXG4gICAgICAgIHRoaXMudXZBbmltU2Nyb2xsWSA9IHNvdXJjZS51dkFuaW1TY3JvbGxZO1xyXG4gICAgICAgIHRoaXMudXZBbmltUm90YXRpb24gPSBzb3VyY2UudXZBbmltUm90YXRpb247XHJcbiAgICAgICAgdGhpcy5kZWJ1Z01vZGUgPSBzb3VyY2UuZGVidWdNb2RlO1xyXG4gICAgICAgIHRoaXMuYmxlbmRNb2RlID0gc291cmNlLmJsZW5kTW9kZTtcclxuICAgICAgICB0aGlzLm91dGxpbmVXaWR0aE1vZGUgPSBzb3VyY2Uub3V0bGluZVdpZHRoTW9kZTtcclxuICAgICAgICB0aGlzLm91dGxpbmVDb2xvck1vZGUgPSBzb3VyY2Uub3V0bGluZUNvbG9yTW9kZTtcclxuICAgICAgICB0aGlzLmN1bGxNb2RlID0gc291cmNlLmN1bGxNb2RlO1xyXG4gICAgICAgIHRoaXMub3V0bGluZUN1bGxNb2RlID0gc291cmNlLm91dGxpbmVDdWxsTW9kZTtcclxuICAgICAgICB0aGlzLmlzT3V0bGluZSA9IHNvdXJjZS5pc091dGxpbmU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSB1cGRhdGVkIHVuaWZvcm0gdmFyaWFibGVzLlxyXG4gICAgICovXHJcbiAgICBNVG9vbk1hdGVyaWFsLnByb3RvdHlwZS5fYXBwbHlVbmlmb3JtcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLnV2QW5pbU9mZnNldFgudmFsdWUgPSB0aGlzLl91dkFuaW1PZmZzZXRYO1xyXG4gICAgICAgIHRoaXMudW5pZm9ybXMudXZBbmltT2Zmc2V0WS52YWx1ZSA9IHRoaXMuX3V2QW5pbU9mZnNldFk7XHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy51dkFuaW1UaGV0YS52YWx1ZSA9IFRBVSAqIHRoaXMuX3V2QW5pbVBoYXNlO1xyXG4gICAgICAgIGlmICghdGhpcy5zaG91bGRBcHBseVVuaWZvcm1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG91bGRBcHBseVVuaWZvcm1zID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy5jdXRvZmYudmFsdWUgPSB0aGlzLmN1dG9mZjtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLmNvbG9yLnZhbHVlLnNldFJHQih0aGlzLmNvbG9yLngsIHRoaXMuY29sb3IueSwgdGhpcy5jb2xvci56KTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLmNvbG9yQWxwaGEudmFsdWUgPSB0aGlzLmNvbG9yLnc7XHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy5zaGFkZUNvbG9yLnZhbHVlLnNldFJHQih0aGlzLnNoYWRlQ29sb3IueCwgdGhpcy5zaGFkZUNvbG9yLnksIHRoaXMuc2hhZGVDb2xvci56KTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLm1hcC52YWx1ZSA9IHRoaXMubWFwO1xyXG4gICAgICAgIHRoaXMudW5pZm9ybXMubWFpblRleF9TVC52YWx1ZS5jb3B5KHRoaXMubWFpblRleF9TVCk7XHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy5zaGFkZVRleHR1cmUudmFsdWUgPSB0aGlzLnNoYWRlVGV4dHVyZTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLm5vcm1hbE1hcC52YWx1ZSA9IHRoaXMubm9ybWFsTWFwO1xyXG4gICAgICAgIHRoaXMudW5pZm9ybXMubm9ybWFsU2NhbGUudmFsdWUuY29weSh0aGlzLm5vcm1hbFNjYWxlKTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLnJlY2VpdmVTaGFkb3dSYXRlLnZhbHVlID0gdGhpcy5yZWNlaXZlU2hhZG93UmF0ZTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLnJlY2VpdmVTaGFkb3dUZXh0dXJlLnZhbHVlID0gdGhpcy5yZWNlaXZlU2hhZG93VGV4dHVyZTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLnNoYWRpbmdHcmFkZVJhdGUudmFsdWUgPSB0aGlzLnNoYWRpbmdHcmFkZVJhdGU7XHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy5zaGFkaW5nR3JhZGVUZXh0dXJlLnZhbHVlID0gdGhpcy5zaGFkaW5nR3JhZGVUZXh0dXJlO1xyXG4gICAgICAgIHRoaXMudW5pZm9ybXMuc2hhZGVTaGlmdC52YWx1ZSA9IHRoaXMuc2hhZGVTaGlmdDtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLnNoYWRlVG9vbnkudmFsdWUgPSB0aGlzLnNoYWRlVG9vbnk7XHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy5saWdodENvbG9yQXR0ZW51YXRpb24udmFsdWUgPSB0aGlzLmxpZ2h0Q29sb3JBdHRlbnVhdGlvbjtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLmluZGlyZWN0TGlnaHRJbnRlbnNpdHkudmFsdWUgPSB0aGlzLmluZGlyZWN0TGlnaHRJbnRlbnNpdHk7XHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy5yaW1UZXh0dXJlLnZhbHVlID0gdGhpcy5yaW1UZXh0dXJlO1xyXG4gICAgICAgIHRoaXMudW5pZm9ybXMucmltQ29sb3IudmFsdWUuc2V0UkdCKHRoaXMucmltQ29sb3IueCwgdGhpcy5yaW1Db2xvci55LCB0aGlzLnJpbUNvbG9yLnopO1xyXG4gICAgICAgIHRoaXMudW5pZm9ybXMucmltTGlnaHRpbmdNaXgudmFsdWUgPSB0aGlzLnJpbUxpZ2h0aW5nTWl4O1xyXG4gICAgICAgIHRoaXMudW5pZm9ybXMucmltRnJlc25lbFBvd2VyLnZhbHVlID0gdGhpcy5yaW1GcmVzbmVsUG93ZXI7XHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy5yaW1MaWZ0LnZhbHVlID0gdGhpcy5yaW1MaWZ0O1xyXG4gICAgICAgIHRoaXMudW5pZm9ybXMuc3BoZXJlQWRkLnZhbHVlID0gdGhpcy5zcGhlcmVBZGQ7XHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy5lbWlzc2lvbkNvbG9yLnZhbHVlLnNldFJHQih0aGlzLmVtaXNzaW9uQ29sb3IueCwgdGhpcy5lbWlzc2lvbkNvbG9yLnksIHRoaXMuZW1pc3Npb25Db2xvci56KTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLmVtaXNzaXZlTWFwLnZhbHVlID0gdGhpcy5lbWlzc2l2ZU1hcDtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLm91dGxpbmVXaWR0aFRleHR1cmUudmFsdWUgPSB0aGlzLm91dGxpbmVXaWR0aFRleHR1cmU7XHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy5vdXRsaW5lV2lkdGgudmFsdWUgPSB0aGlzLm91dGxpbmVXaWR0aDtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLm91dGxpbmVTY2FsZWRNYXhEaXN0YW5jZS52YWx1ZSA9IHRoaXMub3V0bGluZVNjYWxlZE1heERpc3RhbmNlO1xyXG4gICAgICAgIHRoaXMudW5pZm9ybXMub3V0bGluZUNvbG9yLnZhbHVlLnNldFJHQih0aGlzLm91dGxpbmVDb2xvci54LCB0aGlzLm91dGxpbmVDb2xvci55LCB0aGlzLm91dGxpbmVDb2xvci56KTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLm91dGxpbmVMaWdodGluZ01peC52YWx1ZSA9IHRoaXMub3V0bGluZUxpZ2h0aW5nTWl4O1xyXG4gICAgICAgIHRoaXMudW5pZm9ybXMudXZBbmltTWFza1RleHR1cmUudmFsdWUgPSB0aGlzLnV2QW5pbU1hc2tUZXh0dXJlO1xyXG4gICAgICAgIC8vIGFwcGx5IGNvbG9yIHNwYWNlIHRvIHVuaWZvcm0gY29sb3JzXHJcbiAgICAgICAgaWYgKHRoaXMuZW5jb2RpbmcgPT09IFRIUkVFLnNSR0JFbmNvZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1zLmNvbG9yLnZhbHVlLmNvbnZlcnRTUkdCVG9MaW5lYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bmlmb3Jtcy5zaGFkZUNvbG9yLnZhbHVlLmNvbnZlcnRTUkdCVG9MaW5lYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bmlmb3Jtcy5yaW1Db2xvci52YWx1ZS5jb252ZXJ0U1JHQlRvTGluZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXMuZW1pc3Npb25Db2xvci52YWx1ZS5jb252ZXJ0U1JHQlRvTGluZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXMub3V0bGluZUNvbG9yLnZhbHVlLmNvbnZlcnRTUkdCVG9MaW5lYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQ3VsbEZhY2UoKTtcclxuICAgIH07XHJcbiAgICBNVG9vbk1hdGVyaWFsLnByb3RvdHlwZS5fdXBkYXRlU2hhZGVyQ29kZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRlZmluZXMgPSB7XHJcbiAgICAgICAgICAgIE9VVExJTkU6IHRoaXMuX2lzT3V0bGluZSxcclxuICAgICAgICAgICAgQkxFTkRNT0RFX09QQVFVRTogdGhpcy5fYmxlbmRNb2RlID09PSBNVG9vbk1hdGVyaWFsUmVuZGVyTW9kZS5PcGFxdWUsXHJcbiAgICAgICAgICAgIEJMRU5ETU9ERV9DVVRPVVQ6IHRoaXMuX2JsZW5kTW9kZSA9PT0gTVRvb25NYXRlcmlhbFJlbmRlck1vZGUuQ3V0b3V0LFxyXG4gICAgICAgICAgICBCTEVORE1PREVfVFJBTlNQQVJFTlQ6IHRoaXMuX2JsZW5kTW9kZSA9PT0gTVRvb25NYXRlcmlhbFJlbmRlck1vZGUuVHJhbnNwYXJlbnQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JsZW5kTW9kZSA9PT0gTVRvb25NYXRlcmlhbFJlbmRlck1vZGUuVHJhbnNwYXJlbnRXaXRoWldyaXRlLFxyXG4gICAgICAgICAgICBVU0VfU0hBREVURVhUVVJFOiB0aGlzLnNoYWRlVGV4dHVyZSAhPT0gbnVsbCxcclxuICAgICAgICAgICAgVVNFX1JFQ0VJVkVTSEFET1dURVhUVVJFOiB0aGlzLnJlY2VpdmVTaGFkb3dUZXh0dXJlICE9PSBudWxsLFxyXG4gICAgICAgICAgICBVU0VfU0hBRElOR0dSQURFVEVYVFVSRTogdGhpcy5zaGFkaW5nR3JhZGVUZXh0dXJlICE9PSBudWxsLFxyXG4gICAgICAgICAgICBVU0VfUklNVEVYVFVSRTogdGhpcy5yaW1UZXh0dXJlICE9PSBudWxsLFxyXG4gICAgICAgICAgICBVU0VfU1BIRVJFQUREOiB0aGlzLnNwaGVyZUFkZCAhPT0gbnVsbCxcclxuICAgICAgICAgICAgVVNFX09VVExJTkVXSURUSFRFWFRVUkU6IHRoaXMub3V0bGluZVdpZHRoVGV4dHVyZSAhPT0gbnVsbCxcclxuICAgICAgICAgICAgVVNFX1VWQU5JTU1BU0tURVhUVVJFOiB0aGlzLnV2QW5pbU1hc2tUZXh0dXJlICE9PSBudWxsLFxyXG4gICAgICAgICAgICBERUJVR19OT1JNQUw6IHRoaXMuX2RlYnVnTW9kZSA9PT0gTVRvb25NYXRlcmlhbERlYnVnTW9kZS5Ob3JtYWwsXHJcbiAgICAgICAgICAgIERFQlVHX0xJVFNIQURFUkFURTogdGhpcy5fZGVidWdNb2RlID09PSBNVG9vbk1hdGVyaWFsRGVidWdNb2RlLkxpdFNoYWRlUmF0ZSxcclxuICAgICAgICAgICAgREVCVUdfVVY6IHRoaXMuX2RlYnVnTW9kZSA9PT0gTVRvb25NYXRlcmlhbERlYnVnTW9kZS5VVixcclxuICAgICAgICAgICAgT1VUTElORV9XSURUSF9XT1JMRDogdGhpcy5fb3V0bGluZVdpZHRoTW9kZSA9PT0gTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUuV29ybGRDb29yZGluYXRlcyxcclxuICAgICAgICAgICAgT1VUTElORV9XSURUSF9TQ1JFRU46IHRoaXMuX291dGxpbmVXaWR0aE1vZGUgPT09IE1Ub29uTWF0ZXJpYWxPdXRsaW5lV2lkdGhNb2RlLlNjcmVlbkNvb3JkaW5hdGVzLFxyXG4gICAgICAgICAgICBPVVRMSU5FX0NPTE9SX0ZJWEVEOiB0aGlzLl9vdXRsaW5lQ29sb3JNb2RlID09PSBNVG9vbk1hdGVyaWFsT3V0bGluZUNvbG9yTW9kZS5GaXhlZENvbG9yLFxyXG4gICAgICAgICAgICBPVVRMSU5FX0NPTE9SX01JWEVEOiB0aGlzLl9vdXRsaW5lQ29sb3JNb2RlID09PSBNVG9vbk1hdGVyaWFsT3V0bGluZUNvbG9yTW9kZS5NaXhlZExpZ2h0aW5nLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gPT0gdGV4dHVyZSBlbmNvZGluZ3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIHZhciBlbmNvZGluZ3MgPSAodGhpcy5zaGFkZVRleHR1cmUgIT09IG51bGxcclxuICAgICAgICAgICAgPyBnZXRUZXhlbERlY29kaW5nRnVuY3Rpb25fMS5nZXRUZXhlbERlY29kaW5nRnVuY3Rpb24oJ3NoYWRlVGV4dHVyZVRleGVsVG9MaW5lYXInLCB0aGlzLnNoYWRlVGV4dHVyZS5lbmNvZGluZykgKyAnXFxuJ1xyXG4gICAgICAgICAgICA6ICcnKSArXHJcbiAgICAgICAgICAgICh0aGlzLnNwaGVyZUFkZCAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgPyBnZXRUZXhlbERlY29kaW5nRnVuY3Rpb25fMS5nZXRUZXhlbERlY29kaW5nRnVuY3Rpb24oJ3NwaGVyZUFkZFRleGVsVG9MaW5lYXInLCB0aGlzLnNwaGVyZUFkZC5lbmNvZGluZykgKyAnXFxuJ1xyXG4gICAgICAgICAgICAgICAgOiAnJykgK1xyXG4gICAgICAgICAgICAodGhpcy5yaW1UZXh0dXJlICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICA/IGdldFRleGVsRGVjb2RpbmdGdW5jdGlvbl8xLmdldFRleGVsRGVjb2RpbmdGdW5jdGlvbigncmltVGV4dHVyZVRleGVsVG9MaW5lYXInLCB0aGlzLnJpbVRleHR1cmUuZW5jb2RpbmcpICsgJ1xcbidcclxuICAgICAgICAgICAgICAgIDogJycpO1xyXG4gICAgICAgIC8vID09IGdlbmVyYXRlIHNoYWRlciBjb2RlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICB0aGlzLnZlcnRleFNoYWRlciA9IG10b29uX3ZlcnRfMS5kZWZhdWx0O1xyXG4gICAgICAgIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBlbmNvZGluZ3MgKyBtdG9vbl9mcmFnXzEuZGVmYXVsdDtcclxuICAgICAgICAvLyA9PSBzZXQgbmVlZHNVcGRhdGUgZmxhZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgTVRvb25NYXRlcmlhbC5wcm90b3R5cGUuX3VwZGF0ZUN1bGxGYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc091dGxpbmUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VsbE1vZGUgPT09IE1Ub29uTWF0ZXJpYWxDdWxsTW9kZS5PZmYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdWxsTW9kZSA9PT0gTVRvb25NYXRlcmlhbEN1bGxNb2RlLkZyb250KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGUgPSBUSFJFRS5CYWNrU2lkZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1bGxNb2RlID09PSBNVG9vbk1hdGVyaWFsQ3VsbE1vZGUuQmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlID0gVEhSRUUuRnJvbnRTaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vdXRsaW5lQ3VsbE1vZGUgPT09IE1Ub29uTWF0ZXJpYWxDdWxsTW9kZS5PZmYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5vdXRsaW5lQ3VsbE1vZGUgPT09IE1Ub29uTWF0ZXJpYWxDdWxsTW9kZS5Gcm9udCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWRlID0gVEhSRUUuQmFja1NpZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5vdXRsaW5lQ3VsbE1vZGUgPT09IE1Ub29uTWF0ZXJpYWxDdWxsTW9kZS5CYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGUgPSBUSFJFRS5Gcm9udFNpZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1Ub29uTWF0ZXJpYWw7XHJcbn0oVEhSRUUuU2hhZGVyTWF0ZXJpYWwpKTtcclxuZXhwb3J0cy5NVG9vbk1hdGVyaWFsID0gTVRvb25NYXRlcmlhbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZSTU1hdGVyaWFsSW1wb3J0ZXIgPSB2b2lkIDA7XHJcbnZhciBUSFJFRSA9IHJlcXVpcmUoXCJ0aHJlZVwiKTtcclxudmFyIE1Ub29uTWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCIuL01Ub29uTWF0ZXJpYWxcIik7XHJcbnZhciBWUk1VbmxpdE1hdGVyaWFsXzEgPSByZXF1aXJlKFwiLi9WUk1VbmxpdE1hdGVyaWFsXCIpO1xyXG4vKipcclxuICogQW4gaW1wb3J0ZXIgdGhhdCBpbXBvcnRzIFZSTSBtYXRlcmlhbHMgZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxyXG4gKi9cclxudmFyIFZSTU1hdGVyaWFsSW1wb3J0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBWUk1NYXRlcmlhbEltcG9ydGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgb2YgdGhlIFZSTU1hdGVyaWFsSW1wb3J0ZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gVlJNTWF0ZXJpYWxJbXBvcnRlcihvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICB0aGlzLl9lbmNvZGluZyA9IG9wdGlvbnMuZW5jb2RpbmcgfHwgVEhSRUUuTGluZWFyRW5jb2Rpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VuY29kaW5nICE9PSBUSFJFRS5MaW5lYXJFbmNvZGluZyAmJiB0aGlzLl9lbmNvZGluZyAhPT0gVEhSRUUuc1JHQkVuY29kaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIHNwZWNpZmllZCBjb2xvciBlbmNvZGluZyBtaWdodCBub3Qgd29yayBwcm9wZXJseSB3aXRoIFZSTU1hdGVyaWFsSW1wb3J0ZXIuIFlvdSBtaWdodCB3YW50IHRvIHVzZSBUSFJFRS5zUkdCRW5jb2RpbmcgaW5zdGVhZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdEVudk1hcCA9IG9wdGlvbnMucmVxdWVzdEVudk1hcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhbGwgdGhlIG1hdGVyaWFscyBvZiBnaXZlbiBHTFRGIGJhc2VkIG9uIFZSTSBleHRlbnNpb24gZmllbGQgYG1hdGVyaWFsUHJvcGVydGllc2AuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGdsdGYgQSBwYXJzZWQgcmVzdWx0IG9mIEdMVEYgdGFrZW4gZnJvbSBHTFRGTG9hZGVyXHJcbiAgICAgKi9cclxuICAgIFZSTU1hdGVyaWFsSW1wb3J0ZXIucHJvdG90eXBlLmNvbnZlcnRHTFRGTWF0ZXJpYWxzID0gZnVuY3Rpb24gKGdsdGYpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHZybUV4dCwgbWF0ZXJpYWxQcm9wZXJ0aWVzLCBtZXNoZXNNYXAsIG1hdGVyaWFsTGlzdCwgbWF0ZXJpYWxzO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2cm1FeHQgPSAoX2EgPSBnbHRmLnBhcnNlci5qc29uLmV4dGVuc2lvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5WUk07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdnJtRXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbnVsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxQcm9wZXJ0aWVzID0gdnJtRXh0Lm1hdGVyaWFsUHJvcGVydGllcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnbHRmLnBhcnNlci5nZXREZXBlbmRlbmNpZXMoJ21lc2gnKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoZXNNYXAgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsTGlzdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwobWVzaGVzTWFwLm1hcChmdW5jdGlvbiAobWVzaCwgbWVzaEluZGV4KSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjaGVtYU1lc2gsIHByaW1pdGl2ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFNZXNoID0gZ2x0Zi5wYXJzZXIuanNvbi5tZXNoZXNbbWVzaEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmVzID0gbWVzaC50eXBlID09PSAnR3JvdXAnID8gbWVzaC5jaGlsZHJlbiA6IFttZXNoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChwcmltaXRpdmVzLm1hcChmdW5jdGlvbiAocHJpbWl0aXZlLCBwcmltaXRpdmVJbmRleCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjaGVtYVByaW1pdGl2ZSwgcHJpbWl0aXZlR2VvbWV0cnksIHByaW1pdGl2ZVZlcnRpY2VzLCB2cm1NYXRlcmlhbEluZGV4LCBwcm9wcywgdnJtTWF0ZXJpYWxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUHJpbWl0aXZlID0gc2NoZW1hTWVzaC5wcmltaXRpdmVzW3ByaW1pdGl2ZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvbWUgZ2xURiBtaWdodCBoYXZlIGJvdGggYG5vZGUubWVzaGAgYW5kIGBub2RlLmNoaWxkcmVuYCBhdCBvbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgR0xURkxvYWRlciBoYW5kbGVzIGJvdGggbWVzaCBwcmltaXRpdmVzIGFuZCBcImNoaWxkcmVuXCIgaW4gZ2xURiBhcyBcImNoaWxkcmVuXCIgaW4gVEhSRUVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0IHNlZW1zIEdMVEZMb2FkZXIgaGFuZGxlcyBwcmltaXRpdmVzIGZpcnN0IHRoZW4gaGFuZGxlcyBcImNoaWxkcmVuXCIgaW4gZ2xURiAoaXQncyBsdWNreSEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBzaG91bGQgaWdub3JlIChwcmltaXRpdmVzLmxlbmd0aCl0aCBhbmQgZm9sbG93aW5nIGNoaWxkcmVuIG9mIGBtZXNoLmNoaWxkcmVuYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc2FuaXRpemUgdGhpcyBhZnRlciBHTFRGTG9hZGVyIHBsdWdpbiBzeXN0ZW0gZ2V0cyBpbnRyb2R1Y2VkIDogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9wdWxsLzE4NDIxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNjaGVtYVByaW1pdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZUdlb21ldHJ5ID0gcHJpbWl0aXZlLmdlb21ldHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlVmVydGljZXMgPSBwcmltaXRpdmVHZW9tZXRyeS5pbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJpbWl0aXZlR2VvbWV0cnkuaW5kZXguY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByaW1pdGl2ZUdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQgLyAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgcHJpbWl0aXZlcyBtYXRlcmlhbCBpcyBub3QgYW4gYXJyYXksIG1ha2UgaXQgYW4gYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcmltaXRpdmUubWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlLm1hdGVyaWFsID0gW3ByaW1pdGl2ZS5tYXRlcmlhbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlR2VvbWV0cnkuYWRkR3JvdXAoMCwgcHJpbWl0aXZlVmVydGljZXMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnJtTWF0ZXJpYWxJbmRleCA9IHNjaGVtYVByaW1pdGl2ZS5tYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzID0gbWF0ZXJpYWxQcm9wZXJ0aWVzW3ZybU1hdGVyaWFsSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlZSTU1hdGVyaWFsSW1wb3J0ZXI6IFRoZXJlIGFyZSBubyBtYXRlcmlhbCBkZWZpbml0aW9uIGZvciBtYXRlcmlhbCAjXCIgKyB2cm1NYXRlcmlhbEluZGV4ICsgXCIgb24gVlJNIGV4dGVuc2lvbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMgPSB7IHNoYWRlcjogJ1ZSTV9VU0VfR0xURlNIQURFUicgfTsgLy8gZmFsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0ZXJpYWxMaXN0W3ZybU1hdGVyaWFsSW5kZXhdKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZybU1hdGVyaWFscyA9IG1hdGVyaWFsTGlzdFt2cm1NYXRlcmlhbEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlVlJNTWF0ZXJpYWxzKHByaW1pdGl2ZS5tYXRlcmlhbFswXSwgcHJvcHMsIGdsdGYpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnJtTWF0ZXJpYWxzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxMaXN0W3ZybU1hdGVyaWFsSW5kZXhdID0gdnJtTWF0ZXJpYWxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLnB1c2godnJtTWF0ZXJpYWxzLnN1cmZhY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZybU1hdGVyaWFscy5vdXRsaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLnB1c2godnJtTWF0ZXJpYWxzLm91dGxpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdXJmYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUubWF0ZXJpYWxbMF0gPSB2cm1NYXRlcmlhbHMuc3VyZmFjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVudm1hcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JlcXVlc3RFbnZNYXAgJiYgdnJtTWF0ZXJpYWxzLnN1cmZhY2UuaXNNZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVlc3RFbnZNYXAoKS50aGVuKGZ1bmN0aW9uIChlbnZNYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnJtTWF0ZXJpYWxzLnN1cmZhY2UuZW52TWFwID0gZW52TWFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2cm1NYXRlcmlhbHMuc3VyZmFjZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXIgb3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5yZW5kZXJPcmRlciA9IHByb3BzLnJlbmRlclF1ZXVlIHx8IDIwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXRsaW5lIChcIjIgcGFzcyBzaGFkaW5nIHVzaW5nIGdyb3Vwc1wiIHRyaWNrIGhlcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodnJtTWF0ZXJpYWxzLm91dGxpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUubWF0ZXJpYWxbMV0gPSB2cm1NYXRlcmlhbHMub3V0bGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmVHZW9tZXRyeS5hZGRHcm91cCgwLCBwcmltaXRpdmVWZXJ0aWNlcywgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbWF0ZXJpYWxzXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVlJNTWF0ZXJpYWxJbXBvcnRlci5wcm90b3R5cGUuY3JlYXRlVlJNTWF0ZXJpYWxzID0gZnVuY3Rpb24gKG9yaWdpbmFsTWF0ZXJpYWwsIHZybVByb3BzLCBnbHRmKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1N1cmZhY2UsIG5ld091dGxpbmUsIHBhcmFtc18xLCBwYXJhbXMsIHBhcmFtcywgcGFyYW1zLCBwYXJhbXM7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZybVByb3BzLnNoYWRlciA9PT0gJ1ZSTS9NVG9vbicpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fZXh0cmFjdE1hdGVyaWFsUHJvcGVydGllcyhvcmlnaW5hbE1hdGVyaWFsLCB2cm1Qcm9wcywgZ2x0ZildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gZ2V0IHJpZCBvZiB0aGVzZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnc3JjQmxlbmQnLCAnZHN0QmxlbmQnLCAnaXNGaXJzdFNldHVwJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtc18xW25hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFyYW1zXzFbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB0ZXh0dXJlcyBtdXN0IGJlIHNSR0IgRW5jb2RpbmcsIGRlcGVuZHMgb24gY3VycmVudCBjb2xvcnNwYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnbWFpblRleCcsICdzaGFkZVRleHR1cmUnLCAnZW1pc3Npb25NYXAnLCAnc3BoZXJlQWRkJywgJ3JpbVRleHR1cmUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zXzFbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc18xW25hbWVdLmVuY29kaW5nID0gX3RoaXMuX2VuY29kaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3BlY2lmeSB1bmlmb3JtIGNvbG9yIGVuY29kaW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNfMS5lbmNvZGluZyA9IHRoaXMuX2VuY29kaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkb25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N1cmZhY2UgPSBuZXcgTVRvb25NYXRlcmlhbF8xLk1Ub29uTWF0ZXJpYWwocGFyYW1zXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXRsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXNfMS5vdXRsaW5lV2lkdGhNb2RlICE9PSBNVG9vbk1hdGVyaWFsXzEuTVRvb25NYXRlcmlhbE91dGxpbmVXaWR0aE1vZGUuTm9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zXzEuaXNPdXRsaW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld091dGxpbmUgPSBuZXcgTVRvb25NYXRlcmlhbF8xLk1Ub29uTWF0ZXJpYWwocGFyYW1zXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZybVByb3BzLnNoYWRlciA9PT0gJ1ZSTS9VbmxpdFRleHR1cmUnKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX2V4dHJhY3RNYXRlcmlhbFByb3BlcnRpZXMob3JpZ2luYWxNYXRlcmlhbCwgdnJtUHJvcHMsIGdsdGYpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJlbmRlclR5cGUgPSBWUk1VbmxpdE1hdGVyaWFsXzEuVlJNVW5saXRNYXRlcmlhbFJlbmRlclR5cGUuT3BhcXVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdXJmYWNlID0gbmV3IFZSTVVubGl0TWF0ZXJpYWxfMS5WUk1VbmxpdE1hdGVyaWFsKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZybVByb3BzLnNoYWRlciA9PT0gJ1ZSTS9VbmxpdEN1dG91dCcpKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fZXh0cmFjdE1hdGVyaWFsUHJvcGVydGllcyhvcmlnaW5hbE1hdGVyaWFsLCB2cm1Qcm9wcywgZ2x0ZildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucmVuZGVyVHlwZSA9IFZSTVVubGl0TWF0ZXJpYWxfMS5WUk1VbmxpdE1hdGVyaWFsUmVuZGVyVHlwZS5DdXRvdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N1cmZhY2UgPSBuZXcgVlJNVW5saXRNYXRlcmlhbF8xLlZSTVVubGl0TWF0ZXJpYWwocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodnJtUHJvcHMuc2hhZGVyID09PSAnVlJNL1VubGl0VHJhbnNwYXJlbnQnKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX2V4dHJhY3RNYXRlcmlhbFByb3BlcnRpZXMob3JpZ2luYWxNYXRlcmlhbCwgdnJtUHJvcHMsIGdsdGYpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJlbmRlclR5cGUgPSBWUk1VbmxpdE1hdGVyaWFsXzEuVlJNVW5saXRNYXRlcmlhbFJlbmRlclR5cGUuVHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N1cmZhY2UgPSBuZXcgVlJNVW5saXRNYXRlcmlhbF8xLlZSTVVubGl0TWF0ZXJpYWwocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodnJtUHJvcHMuc2hhZGVyID09PSAnVlJNL1VubGl0VHJhbnNwYXJlbnRaV3JpdGUnKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9leHRyYWN0TWF0ZXJpYWxQcm9wZXJ0aWVzKG9yaWdpbmFsTWF0ZXJpYWwsIHZybVByb3BzLCBnbHRmKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yZW5kZXJUeXBlID0gVlJNVW5saXRNYXRlcmlhbF8xLlZSTVVubGl0TWF0ZXJpYWxSZW5kZXJUeXBlLlRyYW5zcGFyZW50V2l0aFpXcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3VyZmFjZSA9IG5ldyBWUk1VbmxpdE1hdGVyaWFsXzEuVlJNVW5saXRNYXRlcmlhbChwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZybVByb3BzLnNoYWRlciAhPT0gJ1ZSTV9VU0VfR0xURlNIQURFUicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlVua25vd24gc2hhZGVyIGRldGVjdGVkOiBcXFwiXCIgKyB2cm1Qcm9wcy5zaGFkZXIgKyBcIlxcXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVuIHByZXN1bWUgYXMgVlJNX1VTRV9HTFRGU0hBREVSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3VyZmFjZSA9IHRoaXMuX2NvbnZlcnRHTFRGTWF0ZXJpYWwob3JpZ2luYWxNYXRlcmlhbC5jbG9uZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdXJmYWNlLm5hbWUgPSBvcmlnaW5hbE1hdGVyaWFsLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N1cmZhY2UudXNlckRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9yaWdpbmFsTWF0ZXJpYWwudXNlckRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3VyZmFjZS51c2VyRGF0YS52cm1NYXRlcmlhbFByb3BlcnRpZXMgPSB2cm1Qcm9wcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld091dGxpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld091dGxpbmUubmFtZSA9IG9yaWdpbmFsTWF0ZXJpYWwubmFtZSArICcgKE91dGxpbmUpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld091dGxpbmUudXNlckRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9yaWdpbmFsTWF0ZXJpYWwudXNlckRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld091dGxpbmUudXNlckRhdGEudnJtTWF0ZXJpYWxQcm9wZXJ0aWVzID0gdnJtUHJvcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJmYWNlOiBuZXdTdXJmYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5ld091dGxpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVlJNTWF0ZXJpYWxJbXBvcnRlci5wcm90b3R5cGUuX3JlbmFtZU1hdGVyaWFsUHJvcGVydHkgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lWzBdICE9PSAnXycpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVlJNTWF0ZXJpYWxzOiBHaXZlbiBwcm9wZXJ0eSBuYW1lIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgbWlnaHQgYmUgaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygxKTtcclxuICAgICAgICBpZiAoIS9bQS1aXS8udGVzdChuYW1lWzBdKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJWUk1NYXRlcmlhbHM6IEdpdmVuIHByb3BlcnR5IG5hbWUgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBtaWdodCBiZSBpbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5hbWVbMF0udG9Mb3dlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgfTtcclxuICAgIFZSTU1hdGVyaWFsSW1wb3J0ZXIucHJvdG90eXBlLl9jb252ZXJ0R0xURk1hdGVyaWFsID0gZnVuY3Rpb24gKG1hdGVyaWFsKSB7XHJcbiAgICAgICAgaWYgKG1hdGVyaWFsLmlzTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgdmFyIG10bCA9IG1hdGVyaWFsO1xyXG4gICAgICAgICAgICBpZiAobXRsLm1hcCkge1xyXG4gICAgICAgICAgICAgICAgbXRsLm1hcC5lbmNvZGluZyA9IHRoaXMuX2VuY29kaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtdGwuZW1pc3NpdmVNYXApIHtcclxuICAgICAgICAgICAgICAgIG10bC5lbWlzc2l2ZU1hcC5lbmNvZGluZyA9IHRoaXMuX2VuY29kaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbmNvZGluZyA9PT0gVEhSRUUuTGluZWFyRW5jb2RpbmcpIHtcclxuICAgICAgICAgICAgICAgIG10bC5jb2xvci5jb252ZXJ0TGluZWFyVG9TUkdCKCk7XHJcbiAgICAgICAgICAgICAgICBtdGwuZW1pc3NpdmUuY29udmVydExpbmVhclRvU1JHQigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXRlcmlhbC5pc01lc2hCYXNpY01hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIHZhciBtdGwgPSBtYXRlcmlhbDtcclxuICAgICAgICAgICAgaWYgKG10bC5tYXApIHtcclxuICAgICAgICAgICAgICAgIG10bC5tYXAuZW5jb2RpbmcgPSB0aGlzLl9lbmNvZGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZW5jb2RpbmcgPT09IFRIUkVFLkxpbmVhckVuY29kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBtdGwuY29sb3IuY29udmVydExpbmVhclRvU1JHQigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRlcmlhbDtcclxuICAgIH07XHJcbiAgICBWUk1NYXRlcmlhbEltcG9ydGVyLnByb3RvdHlwZS5fZXh0cmFjdE1hdGVyaWFsUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvcmlnaW5hbE1hdGVyaWFsLCB2cm1Qcm9wcywgZ2x0Zikge1xyXG4gICAgICAgIHZhciB0YXNrTGlzdCA9IFtdO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7fTtcclxuICAgICAgICAvLyBleHRyYWN0IHRleHR1cmUgcHJvcGVydGllc1xyXG4gICAgICAgIGlmICh2cm1Qcm9wcy50ZXh0dXJlUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3TmFtZSA9IHRoaXNfMS5fcmVuYW1lTWF0ZXJpYWxQcm9wZXJ0eShuYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0dXJlSW5kZXggPSB2cm1Qcm9wcy50ZXh0dXJlUHJvcGVydGllc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIHRhc2tMaXN0LnB1c2goZ2x0Zi5wYXJzZXIuZ2V0RGVwZW5kZW5jeSgndGV4dHVyZScsIHRleHR1cmVJbmRleCkudGhlbihmdW5jdGlvbiAodGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1tuZXdOYW1lXSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXModnJtUHJvcHMudGV4dHVyZVByb3BlcnRpZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICBfbG9vcF8xKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGV4dHJhY3QgZmxvYXQgcHJvcGVydGllc1xyXG4gICAgICAgIGlmICh2cm1Qcm9wcy5mbG9hdFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IE9iamVjdC5rZXlzKHZybVByb3BzLmZsb2F0UHJvcGVydGllcyk7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9jW19iXTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdOYW1lID0gdGhpcy5fcmVuYW1lTWF0ZXJpYWxQcm9wZXJ0eShuYW1lKTtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1tuZXdOYW1lXSA9IHZybVByb3BzLmZsb2F0UHJvcGVydGllc1tuYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBleHRyYWN0IHZlY3RvciAoY29sb3IgdGJoKSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgaWYgKHZybVByb3BzLnZlY3RvclByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld05hbWUgPSB0aGlzXzIuX3JlbmFtZU1hdGVyaWFsUHJvcGVydHkobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGlzIHRleHR1cmVTVCAoc2FtZSBuYW1lIGFzIHRleHR1cmUgbmFtZSBpdHNlbGYpLCBhZGQgJ19TVCdcclxuICAgICAgICAgICAgICAgIHZhciBpc1RleHR1cmVTVCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAnX01haW5UZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdfU2hhZGVUZXh0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAnX0J1bXBNYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICdfUmVjZWl2ZVNoYWRvd1RleHR1cmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdfU2hhZGluZ0dyYWRlVGV4dHVyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ19SaW1UZXh0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAnX1NwaGVyZUFkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ19FbWlzc2lvbk1hcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ19PdXRsaW5lV2lkdGhUZXh0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAnX1V2QW5pbU1hc2tUZXh0dXJlJyxcclxuICAgICAgICAgICAgICAgIF0uc29tZShmdW5jdGlvbiAodGV4dHVyZU5hbWUpIHsgcmV0dXJuIG5hbWUgPT09IHRleHR1cmVOYW1lOyB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1RleHR1cmVTVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ19TVCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbbmV3TmFtZV0gPSBuZXcgKChfYSA9IFRIUkVFLlZlY3RvcjQpLmJpbmQuYXBwbHkoX2EsIF9fc3ByZWFkQXJyYXlzKFt2b2lkIDBdLCB2cm1Qcm9wcy52ZWN0b3JQcm9wZXJ0aWVzW25hbWVdKSkpKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciB0aGlzXzIgPSB0aGlzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfZCA9IDAsIF9lID0gT2JqZWN0LmtleXModnJtUHJvcHMudmVjdG9yUHJvcGVydGllcyk7IF9kIDwgX2UubGVuZ3RoOyBfZCsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9lW19kXTtcclxuICAgICAgICAgICAgICAgIF9sb29wXzIobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETzogZiAoaHR0cHM6Ly9naXRodWIuY29tL2R3YW5nby9VbmlWUk0vaXNzdWVzLzE3MilcclxuICAgICAgICBpZiAodnJtUHJvcHMua2V5d29yZE1hcC5fQUxQSEFURVNUX09OICYmIHBhcmFtcy5ibGVuZE1vZGUgPT09IE1Ub29uTWF0ZXJpYWxfMS5NVG9vbk1hdGVyaWFsUmVuZGVyTW9kZS5PcGFxdWUpIHtcclxuICAgICAgICAgICAgcGFyYW1zLmJsZW5kTW9kZSA9IE1Ub29uTWF0ZXJpYWxfMS5NVG9vbk1hdGVyaWFsUmVuZGVyTW9kZS5DdXRvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCB3aGV0aGVyIGl0IG5lZWRzIHNraW5uaW5nIGFuZCBtb3JwaGluZyBvciBub3RcclxuICAgICAgICBwYXJhbXMuc2tpbm5pbmcgPSBvcmlnaW5hbE1hdGVyaWFsLnNraW5uaW5nIHx8IGZhbHNlO1xyXG4gICAgICAgIHBhcmFtcy5tb3JwaFRhcmdldHMgPSBvcmlnaW5hbE1hdGVyaWFsLm1vcnBoVGFyZ2V0cyB8fCBmYWxzZTtcclxuICAgICAgICBwYXJhbXMubW9ycGhOb3JtYWxzID0gb3JpZ2luYWxNYXRlcmlhbC5tb3JwaE5vcm1hbHMgfHwgZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRhc2tMaXN0KS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBhcmFtczsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZSTU1hdGVyaWFsSW1wb3J0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVlJNTWF0ZXJpYWxJbXBvcnRlciA9IFZSTU1hdGVyaWFsSW1wb3J0ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKiB0c2xpbnQ6ZGlzYWJsZTptZW1iZXItb3JkZXJpbmcgKi9cclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZSTVVubGl0TWF0ZXJpYWwgPSBleHBvcnRzLlZSTVVubGl0TWF0ZXJpYWxSZW5kZXJUeXBlID0gdm9pZCAwO1xyXG52YXIgVEhSRUUgPSByZXF1aXJlKFwidGhyZWVcIik7XHJcbnZhciB1bmxpdF92ZXJ0XzEgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3VubGl0LnZlcnRcIik7XHJcbnZhciB1bmxpdF9mcmFnXzEgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3VubGl0LmZyYWdcIik7XHJcbnZhciBWUk1VbmxpdE1hdGVyaWFsUmVuZGVyVHlwZTtcclxuKGZ1bmN0aW9uIChWUk1VbmxpdE1hdGVyaWFsUmVuZGVyVHlwZSkge1xyXG4gICAgVlJNVW5saXRNYXRlcmlhbFJlbmRlclR5cGVbVlJNVW5saXRNYXRlcmlhbFJlbmRlclR5cGVbXCJPcGFxdWVcIl0gPSAwXSA9IFwiT3BhcXVlXCI7XHJcbiAgICBWUk1VbmxpdE1hdGVyaWFsUmVuZGVyVHlwZVtWUk1VbmxpdE1hdGVyaWFsUmVuZGVyVHlwZVtcIkN1dG91dFwiXSA9IDFdID0gXCJDdXRvdXRcIjtcclxuICAgIFZSTVVubGl0TWF0ZXJpYWxSZW5kZXJUeXBlW1ZSTVVubGl0TWF0ZXJpYWxSZW5kZXJUeXBlW1wiVHJhbnNwYXJlbnRcIl0gPSAyXSA9IFwiVHJhbnNwYXJlbnRcIjtcclxuICAgIFZSTVVubGl0TWF0ZXJpYWxSZW5kZXJUeXBlW1ZSTVVubGl0TWF0ZXJpYWxSZW5kZXJUeXBlW1wiVHJhbnNwYXJlbnRXaXRoWldyaXRlXCJdID0gM10gPSBcIlRyYW5zcGFyZW50V2l0aFpXcml0ZVwiO1xyXG59KShWUk1VbmxpdE1hdGVyaWFsUmVuZGVyVHlwZSA9IGV4cG9ydHMuVlJNVW5saXRNYXRlcmlhbFJlbmRlclR5cGUgfHwgKGV4cG9ydHMuVlJNVW5saXRNYXRlcmlhbFJlbmRlclR5cGUgPSB7fSkpO1xyXG4vKipcclxuICogVGhpcyBpcyBhIG1hdGVyaWFsIHRoYXQgaXMgYW4gZXF1aXZhbGVudCBvZiBcIlZSTS9VbmxpdCoqKlwiIG9uIFZSTSBzcGVjLCB0aG9zZSBtYXRlcmlhbHMgYXJlIGFscmVhZHkga2luZGEgZGVwcmVjYXRlZCB0aG91Z2guLi5cclxuICovXHJcbnZhciBWUk1VbmxpdE1hdGVyaWFsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFZSTVVubGl0TWF0ZXJpYWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBWUk1VbmxpdE1hdGVyaWFsKHBhcmFtZXRlcnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlYWRvbmx5IGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgdGhpcyBpcyBhIFtbVlJNVW5saXRNYXRlcmlhbF1dLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF90aGlzLmlzVlJNVW5saXRNYXRlcmlhbCA9IHRydWU7XHJcbiAgICAgICAgX3RoaXMuY3V0b2ZmID0gMC41O1xyXG4gICAgICAgIF90aGlzLm1hcCA9IG51bGw7IC8vIF9NYWluVGV4XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgICAgIF90aGlzLm1haW5UZXhfU1QgPSBuZXcgVEhSRUUuVmVjdG9yNCgwLjAsIDAuMCwgMS4wLCAxLjApOyAvLyBfTWFpblRleF9TVFxyXG4gICAgICAgIF90aGlzLl9yZW5kZXJUeXBlID0gVlJNVW5saXRNYXRlcmlhbFJlbmRlclR5cGUuT3BhcXVlO1xyXG4gICAgICAgIF90aGlzLnNob3VsZEFwcGx5VW5pZm9ybXMgPSB0cnVlOyAvLyB3aGVuIHRoaXMgaXMgdHJ1ZSwgYXBwbHlVbmlmb3JtcyBlZmZlY3RzXHJcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vID09IGVuYWJsaW5nIGJ1bmNoIG9mIHN0dWZmID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBwYXJhbWV0ZXJzLmZvZyA9IHRydWU7XHJcbiAgICAgICAgcGFyYW1ldGVycy5jbGlwcGluZyA9IHRydWU7XHJcbiAgICAgICAgcGFyYW1ldGVycy5za2lubmluZyA9IHBhcmFtZXRlcnMuc2tpbm5pbmcgfHwgZmFsc2U7XHJcbiAgICAgICAgcGFyYW1ldGVycy5tb3JwaFRhcmdldHMgPSBwYXJhbWV0ZXJzLm1vcnBoVGFyZ2V0cyB8fCBmYWxzZTtcclxuICAgICAgICBwYXJhbWV0ZXJzLm1vcnBoTm9ybWFscyA9IHBhcmFtZXRlcnMubW9ycGhOb3JtYWxzIHx8IGZhbHNlO1xyXG4gICAgICAgIC8vID09IHVuaWZvcm1zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBwYXJhbWV0ZXJzLnVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5tZXJnZShbXHJcbiAgICAgICAgICAgIFRIUkVFLlVuaWZvcm1zTGliLmNvbW1vbixcclxuICAgICAgICAgICAgVEhSRUUuVW5pZm9ybXNMaWIuZm9nLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjdXRvZmY6IHsgdmFsdWU6IDAuNSB9LFxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgICAgICAgICAgICAgbWFpblRleF9TVDogeyB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjQoMC4wLCAwLjAsIDEuMCwgMS4wKSB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIC8vID09IGZpbmFsbHkgY29tcGlsZSB0aGUgc2hhZGVyIHByb2dyYW0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBfdGhpcy5zZXRWYWx1ZXMocGFyYW1ldGVycyk7XHJcbiAgICAgICAgLy8gPT0gdXBkYXRlIHNoYWRlciBzdHVmZiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIF90aGlzLl91cGRhdGVTaGFkZXJDb2RlKCk7XHJcbiAgICAgICAgX3RoaXMuX2FwcGx5VW5pZm9ybXMoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVlJNVW5saXRNYXRlcmlhbC5wcm90b3R5cGUsIFwibWFpblRleFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXAgPSB0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWUk1VbmxpdE1hdGVyaWFsLnByb3RvdHlwZSwgXCJyZW5kZXJUeXBlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclR5cGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlclR5cGUgPSB0O1xyXG4gICAgICAgICAgICB0aGlzLmRlcHRoV3JpdGUgPSB0aGlzLl9yZW5kZXJUeXBlICE9PSBWUk1VbmxpdE1hdGVyaWFsUmVuZGVyVHlwZS5UcmFuc3BhcmVudDtcclxuICAgICAgICAgICAgdGhpcy50cmFuc3BhcmVudCA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJUeXBlID09PSBWUk1VbmxpdE1hdGVyaWFsUmVuZGVyVHlwZS5UcmFuc3BhcmVudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlclR5cGUgPT09IFZSTVVubGl0TWF0ZXJpYWxSZW5kZXJUeXBlLlRyYW5zcGFyZW50V2l0aFpXcml0ZTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2hhZGVyQ29kZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoaXMgbWF0ZXJpYWwuXHJcbiAgICAgKiBVc3VhbGx5IHRoaXMgd2lsbCBiZSBjYWxsZWQgdmlhIFtbVlJNLnVwZGF0ZV1dIHNvIHlvdSBkb24ndCBoYXZlIHRvIGNhbGwgdGhpcyBtYW51YWxseS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZGVsdGEgZGVsdGFUaW1lIHNpbmNlIGxhc3QgdXBkYXRlXHJcbiAgICAgKi9cclxuICAgIFZSTVVubGl0TWF0ZXJpYWwucHJvdG90eXBlLnVwZGF0ZVZSTU1hdGVyaWFscyA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuX2FwcGx5VW5pZm9ybXMoKTtcclxuICAgIH07XHJcbiAgICBWUk1VbmxpdE1hdGVyaWFsLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuY29weS5jYWxsKHRoaXMsIHNvdXJjZSk7XHJcbiAgICAgICAgLy8gPT0gY29weSBtZW1iZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIHRoaXMuY3V0b2ZmID0gc291cmNlLmN1dG9mZjtcclxuICAgICAgICB0aGlzLm1hcCA9IHNvdXJjZS5tYXA7XHJcbiAgICAgICAgdGhpcy5tYWluVGV4X1NULmNvcHkoc291cmNlLm1haW5UZXhfU1QpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVHlwZSA9IHNvdXJjZS5yZW5kZXJUeXBlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgdXBkYXRlZCB1bmlmb3JtIHZhcmlhYmxlcy5cclxuICAgICAqL1xyXG4gICAgVlJNVW5saXRNYXRlcmlhbC5wcm90b3R5cGUuX2FwcGx5VW5pZm9ybXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZEFwcGx5VW5pZm9ybXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3VsZEFwcGx5VW5pZm9ybXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zLmN1dG9mZi52YWx1ZSA9IHRoaXMuY3V0b2ZmO1xyXG4gICAgICAgIHRoaXMudW5pZm9ybXMubWFwLnZhbHVlID0gdGhpcy5tYXA7XHJcbiAgICAgICAgdGhpcy51bmlmb3Jtcy5tYWluVGV4X1NULnZhbHVlLmNvcHkodGhpcy5tYWluVGV4X1NUKTtcclxuICAgIH07XHJcbiAgICBWUk1VbmxpdE1hdGVyaWFsLnByb3RvdHlwZS5fdXBkYXRlU2hhZGVyQ29kZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRlZmluZXMgPSB7XHJcbiAgICAgICAgICAgIFJFTkRFUlRZUEVfT1BBUVVFOiB0aGlzLl9yZW5kZXJUeXBlID09PSBWUk1VbmxpdE1hdGVyaWFsUmVuZGVyVHlwZS5PcGFxdWUsXHJcbiAgICAgICAgICAgIFJFTkRFUlRZUEVfQ1VUT1VUOiB0aGlzLl9yZW5kZXJUeXBlID09PSBWUk1VbmxpdE1hdGVyaWFsUmVuZGVyVHlwZS5DdXRvdXQsXHJcbiAgICAgICAgICAgIFJFTkRFUlRZUEVfVFJBTlNQQVJFTlQ6IHRoaXMuX3JlbmRlclR5cGUgPT09IFZSTVVubGl0TWF0ZXJpYWxSZW5kZXJUeXBlLlRyYW5zcGFyZW50IHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJUeXBlID09PSBWUk1VbmxpdE1hdGVyaWFsUmVuZGVyVHlwZS5UcmFuc3BhcmVudFdpdGhaV3JpdGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnZlcnRleFNoYWRlciA9IHVubGl0X3ZlcnRfMS5kZWZhdWx0O1xyXG4gICAgICAgIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSB1bmxpdF9mcmFnXzEuZGVmYXVsdDtcclxuICAgICAgICAvLyA9PSBzZXQgbmVlZHNVcGRhdGUgZmxhZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZSTVVubGl0TWF0ZXJpYWw7XHJcbn0oVEhSRUUuU2hhZGVyTWF0ZXJpYWwpKTtcclxuZXhwb3J0cy5WUk1VbmxpdE1hdGVyaWFsID0gVlJNVW5saXRNYXRlcmlhbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZXRUZXhlbERlY29kaW5nRnVuY3Rpb24gPSBleHBvcnRzLmdldEVuY29kaW5nQ29tcG9uZW50cyA9IHZvaWQgMDtcclxudmFyIFRIUkVFID0gcmVxdWlyZShcInRocmVlXCIpO1xyXG5leHBvcnRzLmdldEVuY29kaW5nQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xyXG4gICAgc3dpdGNoIChlbmNvZGluZykge1xyXG4gICAgICAgIGNhc2UgVEhSRUUuTGluZWFyRW5jb2Rpbmc6XHJcbiAgICAgICAgICAgIHJldHVybiBbJ0xpbmVhcicsICcoIHZhbHVlICknXTtcclxuICAgICAgICBjYXNlIFRIUkVFLnNSR0JFbmNvZGluZzpcclxuICAgICAgICAgICAgcmV0dXJuIFsnc1JHQicsICcoIHZhbHVlICknXTtcclxuICAgICAgICBjYXNlIFRIUkVFLlJHQkVFbmNvZGluZzpcclxuICAgICAgICAgICAgcmV0dXJuIFsnUkdCRScsICcoIHZhbHVlICknXTtcclxuICAgICAgICBjYXNlIFRIUkVFLlJHQk03RW5jb2Rpbmc6XHJcbiAgICAgICAgICAgIHJldHVybiBbJ1JHQk0nLCAnKCB2YWx1ZSwgNy4wICknXTtcclxuICAgICAgICBjYXNlIFRIUkVFLlJHQk0xNkVuY29kaW5nOlxyXG4gICAgICAgICAgICByZXR1cm4gWydSR0JNJywgJyggdmFsdWUsIDE2LjAgKSddO1xyXG4gICAgICAgIGNhc2UgVEhSRUUuUkdCREVuY29kaW5nOlxyXG4gICAgICAgICAgICByZXR1cm4gWydSR0JEJywgJyggdmFsdWUsIDI1Ni4wICknXTtcclxuICAgICAgICBjYXNlIFRIUkVFLkdhbW1hRW5jb2Rpbmc6XHJcbiAgICAgICAgICAgIHJldHVybiBbJ0dhbW1hJywgJyggdmFsdWUsIGZsb2F0KCBHQU1NQV9GQUNUT1IgKSApJ107XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBlbmNvZGluZzogJyArIGVuY29kaW5nKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5nZXRUZXhlbERlY29kaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuY3Rpb25OYW1lLCBlbmNvZGluZykge1xyXG4gICAgdmFyIGNvbXBvbmVudHMgPSBleHBvcnRzLmdldEVuY29kaW5nQ29tcG9uZW50cyhlbmNvZGluZyk7XHJcbiAgICByZXR1cm4gJ3ZlYzQgJyArIGZ1bmN0aW9uTmFtZSArICcoIHZlYzQgdmFsdWUgKSB7IHJldHVybiAnICsgY29tcG9uZW50c1swXSArICdUb0xpbmVhcicgKyBjb21wb25lbnRzWzFdICsgJzsgfSc7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vTVRvb25NYXRlcmlhbFwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9WUk1NYXRlcmlhbEltcG9ydGVyXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL1ZSTVVubGl0TWF0ZXJpYWxcIiksIGV4cG9ydHMpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBcIi8vICNkZWZpbmUgUEhPTkdcXG5cXG4jaWZkZWYgQkxFTkRNT0RFX0NVVE9VVFxcbiAgdW5pZm9ybSBmbG9hdCBjdXRvZmY7XFxuI2VuZGlmXFxuXFxudW5pZm9ybSB2ZWMzIGNvbG9yO1xcbnVuaWZvcm0gZmxvYXQgY29sb3JBbHBoYTtcXG51bmlmb3JtIHZlYzMgc2hhZGVDb2xvcjtcXG4jaWZkZWYgVVNFX1NIQURFVEVYVFVSRVxcbiAgdW5pZm9ybSBzYW1wbGVyMkQgc2hhZGVUZXh0dXJlO1xcbiNlbmRpZlxcblxcbnVuaWZvcm0gZmxvYXQgcmVjZWl2ZVNoYWRvd1JhdGU7XFxuI2lmZGVmIFVTRV9SRUNFSVZFU0hBRE9XVEVYVFVSRVxcbiAgdW5pZm9ybSBzYW1wbGVyMkQgcmVjZWl2ZVNoYWRvd1RleHR1cmU7XFxuI2VuZGlmXFxuXFxudW5pZm9ybSBmbG9hdCBzaGFkaW5nR3JhZGVSYXRlO1xcbiNpZmRlZiBVU0VfU0hBRElOR0dSQURFVEVYVFVSRVxcbiAgdW5pZm9ybSBzYW1wbGVyMkQgc2hhZGluZ0dyYWRlVGV4dHVyZTtcXG4jZW5kaWZcXG5cXG51bmlmb3JtIGZsb2F0IHNoYWRlU2hpZnQ7XFxudW5pZm9ybSBmbG9hdCBzaGFkZVRvb255O1xcbnVuaWZvcm0gZmxvYXQgbGlnaHRDb2xvckF0dGVudWF0aW9uO1xcbnVuaWZvcm0gZmxvYXQgaW5kaXJlY3RMaWdodEludGVuc2l0eTtcXG5cXG4jaWZkZWYgVVNFX1JJTVRFWFRVUkVcXG4gIHVuaWZvcm0gc2FtcGxlcjJEIHJpbVRleHR1cmU7XFxuI2VuZGlmXFxudW5pZm9ybSB2ZWMzIHJpbUNvbG9yO1xcbnVuaWZvcm0gZmxvYXQgcmltTGlnaHRpbmdNaXg7XFxudW5pZm9ybSBmbG9hdCByaW1GcmVzbmVsUG93ZXI7XFxudW5pZm9ybSBmbG9hdCByaW1MaWZ0O1xcblxcbiNpZmRlZiBVU0VfU1BIRVJFQUREXFxuICB1bmlmb3JtIHNhbXBsZXIyRCBzcGhlcmVBZGQ7XFxuI2VuZGlmXFxuXFxudW5pZm9ybSB2ZWMzIGVtaXNzaW9uQ29sb3I7XFxuXFxudW5pZm9ybSB2ZWMzIG91dGxpbmVDb2xvcjtcXG51bmlmb3JtIGZsb2F0IG91dGxpbmVMaWdodGluZ01peDtcXG5cXG4jaWZkZWYgVVNFX1VWQU5JTU1BU0tURVhUVVJFXFxuICB1bmlmb3JtIHNhbXBsZXIyRCB1dkFuaW1NYXNrVGV4dHVyZTtcXG4jZW5kaWZcXG5cXG51bmlmb3JtIGZsb2F0IHV2QW5pbU9mZnNldFg7XFxudW5pZm9ybSBmbG9hdCB1dkFuaW1PZmZzZXRZO1xcbnVuaWZvcm0gZmxvYXQgdXZBbmltVGhldGE7XFxuXFxuI2luY2x1ZGUgPGNvbW1vbj5cXG4jaW5jbHVkZSA8cGFja2luZz5cXG4jaW5jbHVkZSA8ZGl0aGVyaW5nX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGNvbG9yX3BhcnNfZnJhZ21lbnQ+XFxuXFxuLy8gI2luY2x1ZGUgPHV2X3BhcnNfZnJhZ21lbnQ+XFxuI2lmIGRlZmluZWQoIFVTRV9NQVAgKSB8fCBkZWZpbmVkKCBVU0VfU0hBREVURVhUVVJFICkgfHwgZGVmaW5lZCggVVNFX05PUk1BTE1BUCApIHx8IGRlZmluZWQoIFVTRV9SRUNFSVZFU0hBRE9XVEVYVFVSRSApIHx8IGRlZmluZWQoIFVTRV9TSEFESU5HR1JBREVURVhUVVJFICkgfHwgZGVmaW5lZCggVVNFX1JJTVRFWFRVUkUgKSB8fCBkZWZpbmVkKCBVU0VfRU1JU1NJVkVNQVAgKSB8fCBkZWZpbmVkKCBVU0VfT1VUTElORVdJRFRIVEVYVFVSRSApIHx8IGRlZmluZWQoIFVTRV9VVkFOSU1NQVNLVEVYVFVSRSApXFxuICB2YXJ5aW5nIHZlYzIgdlV2O1xcbiNlbmRpZlxcblxcbiNpbmNsdWRlIDx1djJfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8bWFwX3BhcnNfZnJhZ21lbnQ+XFxuLy8gI2luY2x1ZGUgPGFscGhhbWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGFvbWFwX3BhcnNfZnJhZ21lbnQ+XFxuLy8gI2luY2x1ZGUgPGxpZ2h0bWFwX3BhcnNfZnJhZ21lbnQ+XFxuI2luY2x1ZGUgPGVtaXNzaXZlbWFwX3BhcnNfZnJhZ21lbnQ+XFxuLy8gI2luY2x1ZGUgPGVudm1hcF9wYXJzX2ZyYWdtZW50Plxcbi8vICNpbmNsdWRlIDxncmFkaWVudG1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxmb2dfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8YnNkZnM+XFxuI2luY2x1ZGUgPGxpZ2h0c19wYXJzX2JlZ2luPlxcblxcbi8vICNpbmNsdWRlIDxsaWdodHNfcGhvbmdfcGFyc19mcmFnbWVudD5cXG52YXJ5aW5nIHZlYzMgdlZpZXdQb3NpdGlvbjtcXG5cXG4jaWZuZGVmIEZMQVRfU0hBREVEXFxuICB2YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXG4jZW5kaWZcXG5cXG4jZGVmaW5lIE1hdGVyaWFsX0xpZ2h0UHJvYmVMT0QoIG1hdGVyaWFsICkgKDApXFxuXFxuI2luY2x1ZGUgPHNoYWRvd21hcF9wYXJzX2ZyYWdtZW50Plxcbi8vICNpbmNsdWRlIDxidW1wbWFwX3BhcnNfZnJhZ21lbnQ+XFxuXFxuLy8gI2luY2x1ZGUgPG5vcm1hbG1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpZmRlZiBVU0VfTk9STUFMTUFQXFxuXFxuICB1bmlmb3JtIHNhbXBsZXIyRCBub3JtYWxNYXA7XFxuICB1bmlmb3JtIHZlYzIgbm9ybWFsU2NhbGU7XFxuXFxuI2VuZGlmXFxuXFxuI2lmZGVmIE9CSkVDVFNQQUNFX05PUk1BTE1BUFxcblxcbiAgdW5pZm9ybSBtYXQzIG5vcm1hbE1hdHJpeDtcXG5cXG4jZW5kaWZcXG5cXG4jaWYgISBkZWZpbmVkICggVVNFX1RBTkdFTlQgKSAmJiBkZWZpbmVkICggVEFOR0VOVFNQQUNFX05PUk1BTE1BUCApXFxuXFxuICAvLyBQZXItUGl4ZWwgVGFuZ2VudCBTcGFjZSBOb3JtYWwgTWFwcGluZ1xcbiAgLy8gaHR0cDovL2hhY2tzb2ZsaWZlLmJsb2dzcG90LmNoLzIwMDkvMTEvcGVyLXBpeGVsLXRhbmdlbnQtc3BhY2Utbm9ybWFsLW1hcHBpbmcuaHRtbFxcblxcbiAgLy8gdGhyZWUtdnJtIHNwZWNpZmljIGNoYW5nZTogaXQgcmVxdWlyZXMgYHV2YCBhcyBhbiBpbnB1dCBpbiBvcmRlciB0byBzdXBwb3J0IHV2IHNjcm9sbHNcXG5cXG4gIHZlYzMgcGVydHVyYk5vcm1hbDJBcmIoIHZlYzIgdXYsIHZlYzMgZXllX3BvcywgdmVjMyBzdXJmX25vcm0sIHZlYzMgbWFwTiApIHtcXG5cXG4gICAgLy8gV29ya2Fyb3VuZCBmb3IgQWRyZW5vIDNYWCBkRmQqKCB2ZWMzICkgYnVnLiBTZWUgIzk5ODhcXG5cXG4gICAgdmVjMyBxMCA9IHZlYzMoIGRGZHgoIGV5ZV9wb3MueCApLCBkRmR4KCBleWVfcG9zLnkgKSwgZEZkeCggZXllX3Bvcy56ICkgKTtcXG4gICAgdmVjMyBxMSA9IHZlYzMoIGRGZHkoIGV5ZV9wb3MueCApLCBkRmR5KCBleWVfcG9zLnkgKSwgZEZkeSggZXllX3Bvcy56ICkgKTtcXG4gICAgdmVjMiBzdDAgPSBkRmR4KCB1di5zdCApO1xcbiAgICB2ZWMyIHN0MSA9IGRGZHkoIHV2LnN0ICk7XFxuXFxuICAgIGZsb2F0IHNjYWxlID0gc2lnbiggc3QxLnQgKiBzdDAucyAtIHN0MC50ICogc3QxLnMgKTsgLy8gd2UgZG8gbm90IGNhcmUgYWJvdXQgdGhlIG1hZ25pdHVkZVxcblxcbiAgICB2ZWMzIFMgPSAoIHEwICogc3QxLnQgLSBxMSAqIHN0MC50ICkgKiBzY2FsZTtcXG4gICAgdmVjMyBUID0gKCAtIHEwICogc3QxLnMgKyBxMSAqIHN0MC5zICkgKiBzY2FsZTtcXG5cXG4gICAgLy8gdGhyZWUtdnJtIHNwZWNpZmljIGNoYW5nZTogV29ya2Fyb3VuZCBmb3IgdGhlIGlzc3VlIHRoYXQgaGFwcGVucyB3aGVuIGRlbHRhIG9mIHV2ID0gMC4wXFxuICAgIC8vIFRPRE86IElzIHRoaXMgc3RpbGwgcmVxdWlyZWQ/IE9yIHNoYWxsIEkgbWFrZSBhIFBSIGFib3V0IGl0P1xcblxcbiAgICBpZiAoIGxlbmd0aCggUyApID09IDAuMCB8fCBsZW5ndGgoIFQgKSA9PSAwLjAgKSB7XFxuICAgICAgcmV0dXJuIHN1cmZfbm9ybTtcXG4gICAgfVxcblxcbiAgICBTID0gbm9ybWFsaXplKCBTICk7XFxuICAgIFQgPSBub3JtYWxpemUoIFQgKTtcXG4gICAgdmVjMyBOID0gbm9ybWFsaXplKCBzdXJmX25vcm0gKTtcXG5cXG4gICAgI2lmZGVmIERPVUJMRV9TSURFRFxcblxcbiAgICAgIC8vIFdvcmthcm91bmQgZm9yIEFkcmVubyBHUFVzIGdsX0Zyb250RmFjaW5nIGJ1Zy4gU2VlICMxNTg1MCBhbmQgIzEwMzMxXFxuXFxuICAgICAgYm9vbCBmcm9udEZhY2luZyA9IGRvdCggY3Jvc3MoIFMsIFQgKSwgTiApID4gMC4wO1xcblxcbiAgICAgIG1hcE4ueHkgKj0gKCBmbG9hdCggZnJvbnRGYWNpbmcgKSAqIDIuMCAtIDEuMCApO1xcblxcbiAgICAjZWxzZVxcblxcbiAgICAgIG1hcE4ueHkgKj0gKCBmbG9hdCggZ2xfRnJvbnRGYWNpbmcgKSAqIDIuMCAtIDEuMCApO1xcblxcbiAgICAjZW5kaWZcXG5cXG4gICAgbWF0MyB0c24gPSBtYXQzKCBTLCBULCBOICk7XFxuICAgIHJldHVybiBub3JtYWxpemUoIHRzbiAqIG1hcE4gKTtcXG5cXG4gIH1cXG5cXG4jZW5kaWZcXG5cXG4vLyAjaW5jbHVkZSA8c3BlY3VsYXJtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8bG9nZGVwdGhidWZfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX3BhcnNfZnJhZ21lbnQ+XFxuXFxuLy8gPT0gbGlnaHRpbmcgc3R1ZmYgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5mbG9hdCBnZXRMaWdodEludGVuc2l0eShcXG4gIGNvbnN0IGluIEluY2lkZW50TGlnaHQgZGlyZWN0TGlnaHQsXFxuICBjb25zdCBpbiBHZW9tZXRyaWNDb250ZXh0IGdlb21ldHJ5LFxcbiAgY29uc3QgaW4gZmxvYXQgc2hhZG93LFxcbiAgY29uc3QgaW4gZmxvYXQgc2hhZGluZ0dyYWRlXFxuKSB7XFxuICBmbG9hdCBsaWdodEludGVuc2l0eSA9IGRvdCggZ2VvbWV0cnkubm9ybWFsLCBkaXJlY3RMaWdodC5kaXJlY3Rpb24gKTtcXG4gIGxpZ2h0SW50ZW5zaXR5ID0gMC41ICsgMC41ICogbGlnaHRJbnRlbnNpdHk7XFxuICBsaWdodEludGVuc2l0eSA9IGxpZ2h0SW50ZW5zaXR5ICogc2hhZG93O1xcbiAgbGlnaHRJbnRlbnNpdHkgPSBsaWdodEludGVuc2l0eSAqIHNoYWRpbmdHcmFkZTtcXG4gIGxpZ2h0SW50ZW5zaXR5ID0gbGlnaHRJbnRlbnNpdHkgKiAyLjAgLSAxLjA7XFxuICByZXR1cm4gc2hhZGVUb29ueSA9PSAxLjBcXG4gICAgPyBzdGVwKCBzaGFkZVNoaWZ0LCBsaWdodEludGVuc2l0eSApXFxuICAgIDogc21vb3Roc3RlcCggc2hhZGVTaGlmdCwgc2hhZGVTaGlmdCArICggMS4wIC0gc2hhZGVUb29ueSApLCBsaWdodEludGVuc2l0eSApO1xcbn1cXG5cXG52ZWMzIGdldExpZ2h0aW5nKCBjb25zdCBpbiB2ZWMzIGxpZ2h0Q29sb3IgKSB7XFxuICB2ZWMzIGxpZ2h0aW5nID0gbGlnaHRDb2xvcjtcXG4gIGxpZ2h0aW5nID0gbWl4KFxcbiAgICBsaWdodGluZyxcXG4gICAgdmVjMyggbWF4KCAwLjAwMSwgbWF4KCBsaWdodGluZy54LCBtYXgoIGxpZ2h0aW5nLnksIGxpZ2h0aW5nLnogKSApICkgKSxcXG4gICAgbGlnaHRDb2xvckF0dGVudWF0aW9uXFxuICApO1xcblxcbiAgI2lmbmRlZiBQSFlTSUNBTExZX0NPUlJFQ1RfTElHSFRTXFxuICAgIGxpZ2h0aW5nICo9IFBJO1xcbiAgI2VuZGlmXFxuXFxuICByZXR1cm4gbGlnaHRpbmc7XFxufVxcblxcbnZlYzMgZ2V0RGlmZnVzZShcXG4gIGNvbnN0IGluIHZlYzMgbGl0LFxcbiAgY29uc3QgaW4gdmVjMyBzaGFkZSxcXG4gIGNvbnN0IGluIGZsb2F0IGxpZ2h0SW50ZW5zaXR5LFxcbiAgY29uc3QgaW4gdmVjMyBsaWdodGluZ1xcbikge1xcbiAgI2lmZGVmIERFQlVHX0xJVFNIQURFUkFURVxcbiAgICByZXR1cm4gdmVjMyggQlJERl9EaWZmdXNlX0xhbWJlcnQoIGxpZ2h0SW50ZW5zaXR5ICogbGlnaHRpbmcgKSApO1xcbiAgI2VuZGlmXFxuXFxuICByZXR1cm4gbGlnaHRpbmcgKiBCUkRGX0RpZmZ1c2VfTGFtYmVydCggbWl4KCBzaGFkZSwgbGl0LCBsaWdodEludGVuc2l0eSApICk7XFxufVxcblxcbnZlYzMgY2FsY0RpcmVjdERpZmZ1c2UoXFxuICBjb25zdCBpbiB2ZWMyIHV2LFxcbiAgY29uc3QgaW4gdmVjMyBsaXQsXFxuICBjb25zdCBpbiB2ZWMzIHNoYWRlLFxcbiAgaW4gR2VvbWV0cmljQ29udGV4dCBnZW9tZXRyeSxcXG4gIGlub3V0IFJlZmxlY3RlZExpZ2h0IHJlZmxlY3RlZExpZ2h0XFxuKSB7XFxuICBJbmNpZGVudExpZ2h0IGRpcmVjdExpZ2h0O1xcbiAgdmVjMyBsaWdodGluZ1N1bSA9IHZlYzMoIDAuMCApO1xcblxcbiAgZmxvYXQgc2hhZGluZ0dyYWRlID0gMS4wO1xcbiAgI2lmZGVmIFVTRV9TSEFESU5HR1JBREVURVhUVVJFXFxuICAgIHNoYWRpbmdHcmFkZSA9IDEuMCAtIHNoYWRpbmdHcmFkZVJhdGUgKiAoIDEuMCAtIHRleHR1cmUyRCggc2hhZGluZ0dyYWRlVGV4dHVyZSwgdXYgKS5yICk7XFxuICAjZW5kaWZcXG5cXG4gIGZsb2F0IHJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93UmF0ZTtcXG4gICNpZmRlZiBVU0VfUkVDRUlWRVNIQURPV1RFWFRVUkVcXG4gICAgcmVjZWl2ZVNoYWRvdyAqPSB0ZXh0dXJlMkQoIHJlY2VpdmVTaGFkb3dUZXh0dXJlLCB1diApLmE7XFxuICAjZW5kaWZcXG5cXG4gICNpZiAoIE5VTV9QT0lOVF9MSUdIVFMgPiAwIClcXG4gICAgUG9pbnRMaWdodCBwb2ludExpZ2h0O1xcblxcbiAgICAjcHJhZ21hIHVucm9sbF9sb29wX3N0YXJ0XFxuICAgIGZvciAoIGludCBpID0gMDsgaSA8IE5VTV9QT0lOVF9MSUdIVFM7IGkgKysgKSB7XFxuICAgICAgcG9pbnRMaWdodCA9IHBvaW50TGlnaHRzWyBpIF07XFxuICAgICAgZ2V0UG9pbnREaXJlY3RMaWdodElycmFkaWFuY2UoIHBvaW50TGlnaHQsIGdlb21ldHJ5LCBkaXJlY3RMaWdodCApO1xcblxcbiAgICAgIGZsb2F0IGF0dGVuID0gMS4wO1xcbiAgICAgICNpZmRlZiBVU0VfU0hBRE9XTUFQXFxuICAgICAgICBhdHRlbiA9IGFsbCggYnZlYzIoIHBvaW50TGlnaHQuc2hhZG93LCBkaXJlY3RMaWdodC52aXNpYmxlICkgKSA/IGdldFBvaW50U2hhZG93KCBwb2ludFNoYWRvd01hcFsgaSBdLCBwb2ludExpZ2h0LnNoYWRvd01hcFNpemUsIHBvaW50TGlnaHQuc2hhZG93QmlhcywgcG9pbnRMaWdodC5zaGFkb3dSYWRpdXMsIHZQb2ludFNoYWRvd0Nvb3JkWyBpIF0sIHBvaW50TGlnaHQuc2hhZG93Q2FtZXJhTmVhciwgcG9pbnRMaWdodC5zaGFkb3dDYW1lcmFGYXIgKSA6IDEuMDtcXG4gICAgICAjZW5kaWZcXG5cXG4gICAgICBmbG9hdCBzaGFkb3cgPSAxLjAgLSByZWNlaXZlU2hhZG93ICogKCAxLjAgLSAoIDAuNSArIDAuNSAqIGF0dGVuICkgKTtcXG4gICAgICBmbG9hdCBsaWdodEludGVuc2l0eSA9IGdldExpZ2h0SW50ZW5zaXR5KCBkaXJlY3RMaWdodCwgZ2VvbWV0cnksIHNoYWRvdywgc2hhZGluZ0dyYWRlICk7XFxuICAgICAgdmVjMyBsaWdodGluZyA9IGdldExpZ2h0aW5nKCBkaXJlY3RMaWdodC5jb2xvciApO1xcbiAgICAgIHJlZmxlY3RlZExpZ2h0LmRpcmVjdERpZmZ1c2UgKz0gZ2V0RGlmZnVzZSggbGl0LCBzaGFkZSwgbGlnaHRJbnRlbnNpdHksIGxpZ2h0aW5nICk7XFxuICAgICAgbGlnaHRpbmdTdW0gKz0gbGlnaHRpbmc7XFxuICAgIH1cXG4gICAgI3ByYWdtYSB1bnJvbGxfbG9vcF9lbmRcXG4gICNlbmRpZlxcblxcbiAgI2lmICggTlVNX1NQT1RfTElHSFRTID4gMCApXFxuICAgIFNwb3RMaWdodCBzcG90TGlnaHQ7XFxuXFxuICAgICNwcmFnbWEgdW5yb2xsX2xvb3Bfc3RhcnRcXG4gICAgZm9yICggaW50IGkgPSAwOyBpIDwgTlVNX1NQT1RfTElHSFRTOyBpICsrICkge1xcbiAgICAgIHNwb3RMaWdodCA9IHNwb3RMaWdodHNbIGkgXTtcXG4gICAgICBnZXRTcG90RGlyZWN0TGlnaHRJcnJhZGlhbmNlKCBzcG90TGlnaHQsIGdlb21ldHJ5LCBkaXJlY3RMaWdodCApO1xcblxcbiAgICAgIGZsb2F0IGF0dGVuID0gMS4wO1xcbiAgICAgICNpZmRlZiBVU0VfU0hBRE9XTUFQXFxuICAgICAgICBhdHRlbiA9IGFsbCggYnZlYzIoIHNwb3RMaWdodC5zaGFkb3csIGRpcmVjdExpZ2h0LnZpc2libGUgKSApID8gZ2V0U2hhZG93KCBzcG90U2hhZG93TWFwWyBpIF0sIHNwb3RMaWdodC5zaGFkb3dNYXBTaXplLCBzcG90TGlnaHQuc2hhZG93Qmlhcywgc3BvdExpZ2h0LnNoYWRvd1JhZGl1cywgdlNwb3RTaGFkb3dDb29yZFsgaSBdICkgOiAxLjA7XFxuICAgICAgI2VuZGlmXFxuXFxuICAgICAgZmxvYXQgc2hhZG93ID0gMS4wIC0gcmVjZWl2ZVNoYWRvdyAqICggMS4wIC0gKCAwLjUgKyAwLjUgKiBhdHRlbiApICk7XFxuICAgICAgZmxvYXQgbGlnaHRJbnRlbnNpdHkgPSBnZXRMaWdodEludGVuc2l0eSggZGlyZWN0TGlnaHQsIGdlb21ldHJ5LCBzaGFkb3csIHNoYWRpbmdHcmFkZSApO1xcbiAgICAgIHZlYzMgbGlnaHRpbmcgPSBnZXRMaWdodGluZyggZGlyZWN0TGlnaHQuY29sb3IgKTtcXG4gICAgICByZWZsZWN0ZWRMaWdodC5kaXJlY3REaWZmdXNlICs9IGdldERpZmZ1c2UoIGxpdCwgc2hhZGUsIGxpZ2h0SW50ZW5zaXR5LCBsaWdodGluZyApO1xcbiAgICAgIGxpZ2h0aW5nU3VtICs9IGxpZ2h0aW5nO1xcbiAgICB9XFxuICAgICNwcmFnbWEgdW5yb2xsX2xvb3BfZW5kXFxuICAjZW5kaWZcXG5cXG4gICNpZiAoIE5VTV9ESVJfTElHSFRTID4gMCApXFxuICAgIERpcmVjdGlvbmFsTGlnaHQgZGlyZWN0aW9uYWxMaWdodDtcXG5cXG4gICAgI3ByYWdtYSB1bnJvbGxfbG9vcF9zdGFydFxcbiAgICBmb3IgKCBpbnQgaSA9IDA7IGkgPCBOVU1fRElSX0xJR0hUUzsgaSArKyApIHtcXG4gICAgICBkaXJlY3Rpb25hbExpZ2h0ID0gZGlyZWN0aW9uYWxMaWdodHNbIGkgXTtcXG4gICAgICBnZXREaXJlY3Rpb25hbERpcmVjdExpZ2h0SXJyYWRpYW5jZSggZGlyZWN0aW9uYWxMaWdodCwgZ2VvbWV0cnksIGRpcmVjdExpZ2h0ICk7XFxuXFxuICAgICAgZmxvYXQgYXR0ZW4gPSAxLjA7XFxuICAgICAgI2lmZGVmIFVTRV9TSEFET1dNQVBcXG4gICAgICAgIGF0dGVuID0gYWxsKCBidmVjMiggZGlyZWN0aW9uYWxMaWdodC5zaGFkb3csIGRpcmVjdExpZ2h0LnZpc2libGUgKSApID8gZ2V0U2hhZG93KCBkaXJlY3Rpb25hbFNoYWRvd01hcFsgaSBdLCBkaXJlY3Rpb25hbExpZ2h0LnNoYWRvd01hcFNpemUsIGRpcmVjdGlvbmFsTGlnaHQuc2hhZG93QmlhcywgZGlyZWN0aW9uYWxMaWdodC5zaGFkb3dSYWRpdXMsIHZEaXJlY3Rpb25hbFNoYWRvd0Nvb3JkWyBpIF0gKSA6IDEuMDtcXG4gICAgICAjZW5kaWZcXG5cXG4gICAgICBmbG9hdCBzaGFkb3cgPSAxLjAgLSByZWNlaXZlU2hhZG93ICogKCAxLjAgLSAoIDAuNSArIDAuNSAqIGF0dGVuICkgKTtcXG4gICAgICBmbG9hdCBsaWdodEludGVuc2l0eSA9IGdldExpZ2h0SW50ZW5zaXR5KCBkaXJlY3RMaWdodCwgZ2VvbWV0cnksIHNoYWRvdywgc2hhZGluZ0dyYWRlICk7XFxuICAgICAgdmVjMyBsaWdodGluZyA9IGdldExpZ2h0aW5nKCBkaXJlY3RMaWdodC5jb2xvciApO1xcbiAgICAgIHJlZmxlY3RlZExpZ2h0LmRpcmVjdERpZmZ1c2UgKz0gZ2V0RGlmZnVzZSggbGl0LCBzaGFkZSwgbGlnaHRJbnRlbnNpdHksIGxpZ2h0aW5nICk7XFxuICAgICAgbGlnaHRpbmdTdW0gKz0gbGlnaHRpbmc7XFxuICAgIH1cXG4gICAgI3ByYWdtYSB1bnJvbGxfbG9vcF9lbmRcXG4gICNlbmRpZlxcblxcbiAgcmV0dXJuIGxpZ2h0aW5nU3VtO1xcbn1cXG5cXG4vLyA9PSBwb3N0IGNvcnJlY3Rpb24gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbnZvaWQgcG9zdENvcnJlY3Rpb24oKSB7XFxuICAjaW5jbHVkZSA8dG9uZW1hcHBpbmdfZnJhZ21lbnQ+XFxuICAjaW5jbHVkZSA8ZW5jb2RpbmdzX2ZyYWdtZW50PlxcbiAgI2luY2x1ZGUgPGZvZ19mcmFnbWVudD5cXG4gICNpbmNsdWRlIDxwcmVtdWx0aXBsaWVkX2FscGhhX2ZyYWdtZW50PlxcbiAgI2luY2x1ZGUgPGRpdGhlcmluZ19mcmFnbWVudD5cXG59XFxuXFxuLy8gPT0gbWFpbiBwcm9jZWR1cmUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG52b2lkIG1haW4oKSB7XFxuICAjaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX2ZyYWdtZW50PlxcblxcbiAgdmVjMiB1diA9IHZlYzIoMC41LCAwLjUpO1xcblxcbiAgI2lmIGRlZmluZWQoIFVTRV9NQVAgKSB8fCBkZWZpbmVkKCBVU0VfU0hBREVURVhUVVJFICkgfHwgZGVmaW5lZCggVVNFX05PUk1BTE1BUCApIHx8IGRlZmluZWQoIFVTRV9SRUNFSVZFU0hBRE9XVEVYVFVSRSApIHx8IGRlZmluZWQoIFVTRV9TSEFESU5HR1JBREVURVhUVVJFICkgfHwgZGVmaW5lZCggVVNFX1JJTVRFWFRVUkUgKSB8fCBkZWZpbmVkKCBVU0VfRU1JU1NJVkVNQVAgKSB8fCBkZWZpbmVkKCBVU0VfT1VUTElORVdJRFRIVEVYVFVSRSApIHx8IGRlZmluZWQoIFVTRV9VVkFOSU1NQVNLVEVYVFVSRSApXFxuICAgIHV2ID0gdlV2O1xcblxcbiAgICBmbG9hdCB1dkFuaW1NYXNrID0gMS4wO1xcbiAgICAjaWZkZWYgVVNFX1VWQU5JTU1BU0tURVhUVVJFXFxuICAgICAgdXZBbmltTWFzayA9IHRleHR1cmUyRCggdXZBbmltTWFza1RleHR1cmUsIHV2ICkueDtcXG4gICAgI2VuZGlmXFxuXFxuICAgIHV2ID0gdXYgKyB2ZWMyKCB1dkFuaW1PZmZzZXRYLCB1dkFuaW1PZmZzZXRZICkgKiB1dkFuaW1NYXNrO1xcbiAgICBmbG9hdCB1dlJvdENvcyA9IGNvcyggdXZBbmltVGhldGEgKiB1dkFuaW1NYXNrICk7XFxuICAgIGZsb2F0IHV2Um90U2luID0gc2luKCB1dkFuaW1UaGV0YSAqIHV2QW5pbU1hc2sgKTtcXG4gICAgdXYgPSBtYXQyKCB1dlJvdENvcywgdXZSb3RTaW4sIC11dlJvdFNpbiwgdXZSb3RDb3MgKSAqICggdXYgLSAwLjUgKSArIDAuNTtcXG4gICNlbmRpZlxcblxcbiAgI2lmZGVmIERFQlVHX1VWXFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoIDAuMCwgMC4wLCAwLjAsIDEuMCApO1xcbiAgICAjaWYgZGVmaW5lZCggVVNFX01BUCApIHx8IGRlZmluZWQoIFVTRV9TSEFERVRFWFRVUkUgKSB8fCBkZWZpbmVkKCBVU0VfTk9STUFMTUFQICkgfHwgZGVmaW5lZCggVVNFX1JFQ0VJVkVTSEFET1dURVhUVVJFICkgfHwgZGVmaW5lZCggVVNFX1NIQURJTkdHUkFERVRFWFRVUkUgKSB8fCBkZWZpbmVkKCBVU0VfUklNVEVYVFVSRSApIHx8IGRlZmluZWQoIFVTRV9FTUlTU0lWRU1BUCApIHx8IGRlZmluZWQoIFVTRV9PVVRMSU5FV0lEVEhURVhUVVJFICkgfHwgZGVmaW5lZCggVVNFX1VWQU5JTU1BU0tURVhUVVJFIClcXG4gICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCB1diwgMC4wLCAxLjAgKTtcXG4gICAgI2VuZGlmXFxuICAgIHJldHVybjtcXG4gICNlbmRpZlxcblxcbiAgdmVjNCBkaWZmdXNlQ29sb3IgPSB2ZWM0KCBjb2xvciwgY29sb3JBbHBoYSApO1xcbiAgUmVmbGVjdGVkTGlnaHQgcmVmbGVjdGVkTGlnaHQgPSBSZWZsZWN0ZWRMaWdodCggdmVjMyggMC4wICksIHZlYzMoIDAuMCApLCB2ZWMzKCAwLjAgKSwgdmVjMyggMC4wICkgKTtcXG4gIHZlYzMgdG90YWxFbWlzc2l2ZVJhZGlhbmNlID0gZW1pc3Npb25Db2xvcjtcXG5cXG4gICNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl9mcmFnbWVudD5cXG5cXG4gIC8vICNpbmNsdWRlIDxtYXBfZnJhZ21lbnQ+XFxuICAjaWZkZWYgVVNFX01BUFxcbiAgICBkaWZmdXNlQ29sb3IgKj0gbWFwVGV4ZWxUb0xpbmVhciggdGV4dHVyZTJEKCBtYXAsIHV2ICkgKTtcXG4gICNlbmRpZlxcblxcbiAgI2luY2x1ZGUgPGNvbG9yX2ZyYWdtZW50PlxcbiAgLy8gI2luY2x1ZGUgPGFscGhhbWFwX2ZyYWdtZW50PlxcblxcbiAgLy8gLS0gTVRvb246IGFscGhhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAvLyAjaW5jbHVkZSA8YWxwaGF0ZXN0X2ZyYWdtZW50PlxcbiAgI2lmZGVmIEJMRU5ETU9ERV9DVVRPVVRcXG4gICAgaWYgKCBkaWZmdXNlQ29sb3IuYSA8PSBjdXRvZmYgKSB7IGRpc2NhcmQ7IH1cXG4gICAgZGlmZnVzZUNvbG9yLmEgPSAxLjA7XFxuICAjZW5kaWZcXG5cXG4gICNpZmRlZiBCTEVORE1PREVfT1BBUVVFXFxuICAgIGRpZmZ1c2VDb2xvci5hID0gMS4wO1xcbiAgI2VuZGlmXFxuXFxuICAjaWYgZGVmaW5lZCggT1VUTElORSApICYmIGRlZmluZWQoIE9VVExJTkVfQ09MT1JfRklYRUQgKSAvLyBvbWl0dGluZyBEZWJ1Z01vZGVcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggb3V0bGluZUNvbG9yLCBkaWZmdXNlQ29sb3IuYSApO1xcbiAgICBwb3N0Q29ycmVjdGlvbigpO1xcbiAgICByZXR1cm47XFxuICAjZW5kaWZcXG5cXG4gIC8vICNpbmNsdWRlIDxzcGVjdWxhcm1hcF9mcmFnbWVudD5cXG4gICNpbmNsdWRlIDxub3JtYWxfZnJhZ21lbnRfYmVnaW4+XFxuXFxuICAjaWZkZWYgT1VUTElORVxcbiAgICBub3JtYWwgKj0gLTEuMDtcXG4gICNlbmRpZlxcblxcbiAgLy8gI2luY2x1ZGUgPG5vcm1hbF9mcmFnbWVudF9tYXBzPlxcblxcbiAgI2lmZGVmIE9CSkVDVFNQQUNFX05PUk1BTE1BUFxcblxcbiAgICBub3JtYWwgPSB0ZXh0dXJlMkQoIG5vcm1hbE1hcCwgdXYgKS54eXogKiAyLjAgLSAxLjA7IC8vIG92ZXJyaWRlcyBib3RoIGZsYXRTaGFkaW5nIGFuZCBhdHRyaWJ1dGUgbm9ybWFsc1xcblxcbiAgICAjaWZkZWYgRkxJUF9TSURFRFxcblxcbiAgICAgIG5vcm1hbCA9IC0gbm9ybWFsO1xcblxcbiAgICAjZW5kaWZcXG5cXG4gICAgI2lmZGVmIERPVUJMRV9TSURFRFxcblxcbiAgICAgIG5vcm1hbCA9IG5vcm1hbCAqICggZmxvYXQoIGdsX0Zyb250RmFjaW5nICkgKiAyLjAgLSAxLjAgKTtcXG5cXG4gICAgI2VuZGlmXFxuXFxuICAgIG5vcm1hbCA9IG5vcm1hbGl6ZSggbm9ybWFsTWF0cml4ICogbm9ybWFsICk7XFxuXFxuICAjZWxpZiBkZWZpbmVkKCBUQU5HRU5UU1BBQ0VfTk9STUFMTUFQIClcXG5cXG4gICAgdmVjMyBtYXBOID0gdGV4dHVyZTJEKCBub3JtYWxNYXAsIHV2ICkueHl6ICogMi4wIC0gMS4wO1xcbiAgICBtYXBOLnh5ICo9IG5vcm1hbFNjYWxlO1xcblxcbiAgICAjaWZkZWYgVVNFX1RBTkdFTlRcXG5cXG4gICAgICBub3JtYWwgPSBub3JtYWxpemUoIHZUQk4gKiBtYXBOICk7XFxuXFxuICAgICNlbHNlXFxuXFxuICAgICAgbm9ybWFsID0gcGVydHVyYk5vcm1hbDJBcmIoIHV2LCAtdlZpZXdQb3NpdGlvbiwgbm9ybWFsLCBtYXBOICk7XFxuXFxuICAgICNlbmRpZlxcblxcbiAgI2VuZGlmXFxuXFxuICAvLyAjaW5jbHVkZSA8ZW1pc3NpdmVtYXBfZnJhZ21lbnQ+XFxuICAjaWZkZWYgVVNFX0VNSVNTSVZFTUFQXFxuICAgIHRvdGFsRW1pc3NpdmVSYWRpYW5jZSAqPSBlbWlzc2l2ZU1hcFRleGVsVG9MaW5lYXIoIHRleHR1cmUyRCggZW1pc3NpdmVNYXAsIHV2ICkgKS5yZ2I7XFxuICAjZW5kaWZcXG5cXG4gICNpZmRlZiBERUJVR19OT1JNQUxcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggMC41ICsgMC41ICogbm9ybWFsLCAxLjAgKTtcXG4gICAgcmV0dXJuO1xcbiAgI2VuZGlmXFxuXFxuICAvLyAtLSBNVG9vbjogbGlnaHRpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gIC8vIGFjY3VtdWxhdGlvblxcbiAgLy8gI2luY2x1ZGUgPGxpZ2h0c19waG9uZ19mcmFnbWVudD5cXG4gIC8vICNpbmNsdWRlIDxsaWdodHNfZnJhZ21lbnRfYmVnaW4+XFxuICB2ZWMzIGxpdCA9IGRpZmZ1c2VDb2xvci5yZ2I7XFxuICB2ZWMzIHNoYWRlID0gc2hhZGVDb2xvcjtcXG4gICNpZmRlZiBVU0VfU0hBREVURVhUVVJFXFxuICAgIHNoYWRlICo9IHNoYWRlVGV4dHVyZVRleGVsVG9MaW5lYXIoIHRleHR1cmUyRCggc2hhZGVUZXh0dXJlLCB1diApICkucmdiO1xcbiAgI2VuZGlmXFxuXFxuICBHZW9tZXRyaWNDb250ZXh0IGdlb21ldHJ5O1xcblxcbiAgZ2VvbWV0cnkucG9zaXRpb24gPSAtIHZWaWV3UG9zaXRpb247XFxuICBnZW9tZXRyeS5ub3JtYWwgPSBub3JtYWw7XFxuICBnZW9tZXRyeS52aWV3RGlyID0gbm9ybWFsaXplKCB2Vmlld1Bvc2l0aW9uICk7XFxuXFxuICB2ZWMzIGxpZ2h0aW5nID0gY2FsY0RpcmVjdERpZmZ1c2UoIHV2LCBkaWZmdXNlQ29sb3IucmdiLCBzaGFkZSwgZ2VvbWV0cnksIHJlZmxlY3RlZExpZ2h0ICk7XFxuXFxuICB2ZWMzIGlycmFkaWFuY2UgPSBnZXRBbWJpZW50TGlnaHRJcnJhZGlhbmNlKCBhbWJpZW50TGlnaHRDb2xvciApO1xcbiAgI2lmICggTlVNX0hFTUlfTElHSFRTID4gMCApXFxuICAgICNwcmFnbWEgdW5yb2xsX2xvb3Bfc3RhcnRcXG4gICAgZm9yICggaW50IGkgPSAwOyBpIDwgTlVNX0hFTUlfTElHSFRTOyBpICsrICkge1xcbiAgICAgIGlycmFkaWFuY2UgKz0gZ2V0SGVtaXNwaGVyZUxpZ2h0SXJyYWRpYW5jZSggaGVtaXNwaGVyZUxpZ2h0c1sgaSBdLCBnZW9tZXRyeSApO1xcbiAgICB9XFxuICAgICNwcmFnbWEgdW5yb2xsX2xvb3BfZW5kXFxuICAjZW5kaWZcXG5cXG4gIC8vICNpbmNsdWRlIDxsaWdodHNfZnJhZ21lbnRfbWFwcz5cXG4gICNpZmRlZiBVU0VfTElHSFRNQVBcXG4gICAgdmVjMyBsaWdodE1hcElycmFkaWFuY2UgPSB0ZXh0dXJlMkQoIGxpZ2h0TWFwLCB2VXYyICkucmdiICogbGlnaHRNYXBJbnRlbnNpdHk7XFxuICAgICNpZm5kZWYgUEhZU0lDQUxMWV9DT1JSRUNUX0xJR0hUU1xcbiAgICAgIGxpZ2h0TWFwSXJyYWRpYW5jZSAqPSBQSTsgLy8gZmFjdG9yIG9mIFBJIHNob3VsZCBub3QgYmUgcHJlc2VudDsgaW5jbHVkZWQgaGVyZSB0byBwcmV2ZW50IGJyZWFrYWdlXFxuICAgICNlbmRpZlxcbiAgICBpcnJhZGlhbmNlICs9IGxpZ2h0TWFwSXJyYWRpYW5jZTtcXG4gICNlbmRpZlxcblxcbiAgLy8gI2luY2x1ZGUgPGxpZ2h0c19mcmFnbWVudF9lbmQ+XFxuICByZWZsZWN0ZWRMaWdodC5pbmRpcmVjdERpZmZ1c2UgKz0gaW5kaXJlY3RMaWdodEludGVuc2l0eSAqIGlycmFkaWFuY2UgKiBCUkRGX0RpZmZ1c2VfTGFtYmVydCggbGl0ICk7XFxuXFxuICAvLyBtb2R1bGF0aW9uXFxuICAjaW5jbHVkZSA8YW9tYXBfZnJhZ21lbnQ+XFxuXFxuICB2ZWMzIGNvbCA9IHJlZmxlY3RlZExpZ2h0LmRpcmVjdERpZmZ1c2UgKyByZWZsZWN0ZWRMaWdodC5pbmRpcmVjdERpZmZ1c2U7XFxuXFxuICAjaWYgZGVmaW5lZCggT1VUTElORSApICYmIGRlZmluZWQoIE9VVExJTkVfQ09MT1JfTUlYRUQgKVxcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KFxcbiAgICAgIG91dGxpbmVDb2xvci5yZ2IgKiBtaXgoIHZlYzMoIDEuMCApLCBjb2wsIG91dGxpbmVMaWdodGluZ01peCApLFxcbiAgICAgIGRpZmZ1c2VDb2xvci5hXFxuICAgICk7XFxuICAgIHBvc3RDb3JyZWN0aW9uKCk7XFxuICAgIHJldHVybjtcXG4gICNlbmRpZlxcblxcbiAgI2lmZGVmIERFQlVHX0xJVFNIQURFUkFURVxcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCBjb2wsIGRpZmZ1c2VDb2xvci5hICk7XFxuICAgIHBvc3RDb3JyZWN0aW9uKCk7XFxuICAgIHJldHVybjtcXG4gICNlbmRpZlxcblxcbiAgLy8gLS0gTVRvb246IHBhcmFtZXRyaWMgcmltIGxpZ2h0aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICB2ZWMzIHZpZXdEaXIgPSBub3JtYWxpemUoIHZWaWV3UG9zaXRpb24gKTtcXG4gIHZlYzMgcmltTWl4ID0gbWl4KHZlYzMoMS4wKSwgbGlnaHRpbmcgKyBpbmRpcmVjdExpZ2h0SW50ZW5zaXR5ICogaXJyYWRpYW5jZSwgcmltTGlnaHRpbmdNaXgpO1xcbiAgdmVjMyByaW0gPSByaW1Db2xvciAqIHBvdyggc2F0dXJhdGUoIDEuMCAtIGRvdCggdmlld0Rpciwgbm9ybWFsICkgKyByaW1MaWZ0ICksIHJpbUZyZXNuZWxQb3dlciApO1xcbiAgI2lmZGVmIFVTRV9SSU1URVhUVVJFXFxuICAgIHJpbSAqPSByaW1UZXh0dXJlVGV4ZWxUb0xpbmVhciggdGV4dHVyZTJEKCByaW1UZXh0dXJlLCB1diApICkucmdiO1xcbiAgI2VuZGlmXFxuICBjb2wgKz0gcmltO1xcblxcbiAgLy8gLS0gTVRvb246IGFkZGl0aXZlIG1hdGNhcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICAjaWZkZWYgVVNFX1NQSEVSRUFERFxcbiAgICB7XFxuICAgICAgdmVjMyB4ID0gbm9ybWFsaXplKCB2ZWMzKCB2aWV3RGlyLnosIDAuMCwgLXZpZXdEaXIueCApICk7XFxuICAgICAgdmVjMyB5ID0gY3Jvc3MoIHZpZXdEaXIsIHggKTsgLy8gZ3VhcmFudGVlZCB0byBiZSBub3JtYWxpemVkXFxuICAgICAgdmVjMiBzcGhlcmVVdiA9IDAuNSArIDAuNSAqIHZlYzIoIGRvdCggeCwgbm9ybWFsICksIC1kb3QoIHksIG5vcm1hbCApICk7XFxuICAgICAgdmVjMyBtYXRjYXAgPSBzcGhlcmVBZGRUZXhlbFRvTGluZWFyKCB0ZXh0dXJlMkQoIHNwaGVyZUFkZCwgc3BoZXJlVXYgKSApLnh5ejtcXG4gICAgICBjb2wgKz0gbWF0Y2FwO1xcbiAgICB9XFxuICAjZW5kaWZcXG5cXG4gIC8vIC0tIE1Ub29uOiBFbWlzc2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAgY29sICs9IHRvdGFsRW1pc3NpdmVSYWRpYW5jZTtcXG5cXG4gIC8vICNpbmNsdWRlIDxlbnZtYXBfZnJhZ21lbnQ+XFxuXFxuICAvLyAtLSBBbG1vc3QgZG9uZSEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gIGdsX0ZyYWdDb2xvciA9IHZlYzQoIGNvbCwgZGlmZnVzZUNvbG9yLmEgKTtcXG4gIHBvc3RDb3JyZWN0aW9uKCk7XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiLy8gI2RlZmluZSBQSE9OR1xcblxcbnZhcnlpbmcgdmVjMyB2Vmlld1Bvc2l0aW9uO1xcblxcbiNpZm5kZWYgRkxBVF9TSEFERURcXG4gIHZhcnlpbmcgdmVjMyB2Tm9ybWFsO1xcbiNlbmRpZlxcblxcbiNpbmNsdWRlIDxjb21tb24+XFxuXFxuLy8gI2luY2x1ZGUgPHV2X3BhcnNfdmVydGV4PlxcbiNpZiBkZWZpbmVkKCBVU0VfTUFQICkgfHwgZGVmaW5lZCggVVNFX1NIQURFVEVYVFVSRSApIHx8IGRlZmluZWQoIFVTRV9OT1JNQUxNQVAgKSB8fCBkZWZpbmVkKCBVU0VfUkVDRUlWRVNIQURPV1RFWFRVUkUgKSB8fCBkZWZpbmVkKCBVU0VfU0hBRElOR0dSQURFVEVYVFVSRSApIHx8IGRlZmluZWQoIFVTRV9SSU1URVhUVVJFICkgfHwgZGVmaW5lZCggVVNFX0VNSVNTSVZFTUFQICkgfHwgZGVmaW5lZCggVVNFX09VVExJTkVXSURUSFRFWFRVUkUgKSB8fCBkZWZpbmVkKCBVU0VfVVZBTklNTUFTS1RFWFRVUkUgKVxcbiAgdmFyeWluZyB2ZWMyIHZVdjtcXG4gIHVuaWZvcm0gdmVjNCBtYWluVGV4X1NUO1xcbiNlbmRpZlxcblxcbiNpbmNsdWRlIDx1djJfcGFyc192ZXJ0ZXg+XFxuLy8gI2luY2x1ZGUgPGRpc3BsYWNlbWVudG1hcF9wYXJzX3ZlcnRleD5cXG4vLyAjaW5jbHVkZSA8ZW52bWFwX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxjb2xvcl9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Zm9nX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxtb3JwaHRhcmdldF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8c2tpbm5pbmdfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPHNoYWRvd21hcF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8bG9nZGVwdGhidWZfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGNsaXBwaW5nX3BsYW5lc19wYXJzX3ZlcnRleD5cXG5cXG4jaWZkZWYgVVNFX09VVExJTkVXSURUSFRFWFRVUkVcXG4gIHVuaWZvcm0gc2FtcGxlcjJEIG91dGxpbmVXaWR0aFRleHR1cmU7XFxuI2VuZGlmXFxuXFxudW5pZm9ybSBmbG9hdCBvdXRsaW5lV2lkdGg7XFxudW5pZm9ybSBmbG9hdCBvdXRsaW5lU2NhbGVkTWF4RGlzdGFuY2U7XFxuXFxudm9pZCBtYWluKCkge1xcblxcbiAgLy8gI2luY2x1ZGUgPHV2X3ZlcnRleD5cXG4gICNpZiBkZWZpbmVkKCBVU0VfTUFQICkgfHwgZGVmaW5lZCggVVNFX1NIQURFVEVYVFVSRSApIHx8IGRlZmluZWQoIFVTRV9OT1JNQUxNQVAgKSB8fCBkZWZpbmVkKCBVU0VfUkVDRUlWRVNIQURPV1RFWFRVUkUgKSB8fCBkZWZpbmVkKCBVU0VfU0hBRElOR0dSQURFVEVYVFVSRSApIHx8IGRlZmluZWQoIFVTRV9SSU1URVhUVVJFICkgfHwgZGVmaW5lZCggVVNFX0VNSVNTSVZFTUFQICkgfHwgZGVmaW5lZCggVVNFX09VVExJTkVXSURUSFRFWFRVUkUgKSB8fCBkZWZpbmVkKCBVU0VfVVZBTklNTUFTS1RFWFRVUkUgKVxcbiAgICB2VXYgPSB2ZWMyKCBtYWluVGV4X1NULnAgKiB1di54ICsgbWFpblRleF9TVC5zLCBtYWluVGV4X1NULnEgKiB1di55ICsgbWFpblRleF9TVC50ICk7XFxuICAjZW5kaWZcXG5cXG4gICNpbmNsdWRlIDx1djJfdmVydGV4PlxcbiAgI2luY2x1ZGUgPGNvbG9yX3ZlcnRleD5cXG5cXG4gICNpbmNsdWRlIDxiZWdpbm5vcm1hbF92ZXJ0ZXg+XFxuICAjaW5jbHVkZSA8bW9ycGhub3JtYWxfdmVydGV4PlxcbiAgI2luY2x1ZGUgPHNraW5iYXNlX3ZlcnRleD5cXG4gICNpbmNsdWRlIDxza2lubm9ybWFsX3ZlcnRleD5cXG5cXG4gIC8vIHdlIG5lZWQgdGhpcyB0byBjb21wdXRlIHRoZSBvdXRsaW5lIHByb3Blcmx5XFxuICBvYmplY3ROb3JtYWwgPSBub3JtYWxpemUoIG9iamVjdE5vcm1hbCApO1xcblxcbiAgI2luY2x1ZGUgPGRlZmF1bHRub3JtYWxfdmVydGV4PlxcblxcbiAgI2lmbmRlZiBGTEFUX1NIQURFRCAvLyBOb3JtYWwgY29tcHV0ZWQgd2l0aCBkZXJpdmF0aXZlcyB3aGVuIEZMQVRfU0hBREVEXFxuICAgIHZOb3JtYWwgPSBub3JtYWxpemUoIHRyYW5zZm9ybWVkTm9ybWFsICk7XFxuICAjZW5kaWZcXG5cXG4gICNpbmNsdWRlIDxiZWdpbl92ZXJ0ZXg+XFxuXFxuICAjaW5jbHVkZSA8bW9ycGh0YXJnZXRfdmVydGV4PlxcbiAgI2luY2x1ZGUgPHNraW5uaW5nX3ZlcnRleD5cXG4gIC8vICNpbmNsdWRlIDxkaXNwbGFjZW1lbnRtYXBfdmVydGV4PlxcbiAgI2luY2x1ZGUgPHByb2plY3RfdmVydGV4PlxcbiAgI2luY2x1ZGUgPGxvZ2RlcHRoYnVmX3ZlcnRleD5cXG4gICNpbmNsdWRlIDxjbGlwcGluZ19wbGFuZXNfdmVydGV4PlxcblxcbiAgdlZpZXdQb3NpdGlvbiA9IC0gbXZQb3NpdGlvbi54eXo7XFxuXFxuICBmbG9hdCBvdXRsaW5lVGV4ID0gMS4wO1xcblxcbiAgI2lmZGVmIE9VVExJTkVcXG4gICAgI2lmZGVmIFVTRV9PVVRMSU5FV0lEVEhURVhUVVJFXFxuICAgICAgb3V0bGluZVRleCA9IHRleHR1cmUyRCggb3V0bGluZVdpZHRoVGV4dHVyZSwgdlV2ICkucjtcXG4gICAgI2VuZGlmXFxuXFxuICAgICNpZmRlZiBPVVRMSU5FX1dJRFRIX1dPUkxEXFxuICAgICAgZmxvYXQgd29ybGROb3JtYWxMZW5ndGggPSBsZW5ndGgoIHRyYW5zZm9ybWVkTm9ybWFsICk7XFxuICAgICAgdmVjMyBvdXRsaW5lT2Zmc2V0ID0gMC4wMSAqIG91dGxpbmVXaWR0aCAqIG91dGxpbmVUZXggKiB3b3JsZE5vcm1hbExlbmd0aCAqIG9iamVjdE5vcm1hbDtcXG4gICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBvdXRsaW5lT2Zmc2V0ICsgdHJhbnNmb3JtZWQsIDEuMCApO1xcbiAgICAjZW5kaWZcXG5cXG4gICAgI2lmZGVmIE9VVExJTkVfV0lEVEhfU0NSRUVOXFxuICAgICAgdmVjMyBjbGlwTm9ybWFsID0gKCBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggb2JqZWN0Tm9ybWFsLCAwLjAgKSApLnh5ejtcXG4gICAgICB2ZWMyIHByb2plY3RlZE5vcm1hbCA9IG5vcm1hbGl6ZSggY2xpcE5vcm1hbC54eSApO1xcbiAgICAgIHByb2plY3RlZE5vcm1hbCAqPSBtaW4oIGdsX1Bvc2l0aW9uLncsIG91dGxpbmVTY2FsZWRNYXhEaXN0YW5jZSApO1xcbiAgICAgIHByb2plY3RlZE5vcm1hbC54ICo9IHByb2plY3Rpb25NYXRyaXhbIDAgXS54IC8gcHJvamVjdGlvbk1hdHJpeFsgMSBdLnk7XFxuICAgICAgZ2xfUG9zaXRpb24ueHkgKz0gMC4wMSAqIG91dGxpbmVXaWR0aCAqIG91dGxpbmVUZXggKiBwcm9qZWN0ZWROb3JtYWwueHk7XFxuICAgICNlbmRpZlxcblxcbiAgICBnbF9Qb3NpdGlvbi56ICs9IDFFLTYgKiBnbF9Qb3NpdGlvbi53OyAvLyBhbnRpLWFydGlmYWN0IG1hZ2ljXFxuICAjZW5kaWZcXG5cXG4gICNpbmNsdWRlIDx3b3JsZHBvc192ZXJ0ZXg+XFxuICAvLyAjaW5jbHVkZSA8ZW52bWFwX3ZlcnRleD5cXG4gICNpbmNsdWRlIDxzaGFkb3dtYXBfdmVydGV4PlxcbiAgI2luY2x1ZGUgPGZvZ192ZXJ0ZXg+XFxuXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2lmZGVmIFJFTkRFUlRZUEVfQ1VUT1VUXFxuICB1bmlmb3JtIGZsb2F0IGN1dG9mZjtcXG4jZW5kaWZcXG5cXG4jaW5jbHVkZSA8Y29tbW9uPlxcbiNpbmNsdWRlIDxjb2xvcl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDx1dl9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDx1djJfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8bWFwX3BhcnNfZnJhZ21lbnQ+XFxuLy8gI2luY2x1ZGUgPGFscGhhbWFwX3BhcnNfZnJhZ21lbnQ+XFxuLy8gI2luY2x1ZGUgPGFvbWFwX3BhcnNfZnJhZ21lbnQ+XFxuLy8gI2luY2x1ZGUgPGxpZ2h0bWFwX3BhcnNfZnJhZ21lbnQ+XFxuLy8gI2luY2x1ZGUgPGVudm1hcF9wYXJzX2ZyYWdtZW50PlxcbiNpbmNsdWRlIDxmb2dfcGFyc19mcmFnbWVudD5cXG4vLyAjaW5jbHVkZSA8c3BlY3VsYXJtYXBfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8bG9nZGVwdGhidWZfcGFyc19mcmFnbWVudD5cXG4jaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX3BhcnNfZnJhZ21lbnQ+XFxuXFxuLy8gPT0gbWFpbiBwcm9jZWR1cmUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG52b2lkIG1haW4oKSB7XFxuICAjaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX2ZyYWdtZW50PlxcblxcbiAgdmVjNCBkaWZmdXNlQ29sb3IgPSB2ZWM0KCAxLjAgKTtcXG5cXG4gICNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl9mcmFnbWVudD5cXG5cXG4gIC8vICNpbmNsdWRlIDxtYXBfZnJhZ21lbnQ+XFxuICAjaWZkZWYgVVNFX01BUFxcbiAgICBkaWZmdXNlQ29sb3IgKj0gbWFwVGV4ZWxUb0xpbmVhciggdGV4dHVyZTJEKCBtYXAsIHZVdiApICk7XFxuICAjZW5kaWZcXG5cXG4gICNpbmNsdWRlIDxjb2xvcl9mcmFnbWVudD5cXG4gIC8vICNpbmNsdWRlIDxhbHBoYW1hcF9mcmFnbWVudD5cXG5cXG4gIC8vIE1Ub29uOiBhbHBoYVxcbiAgLy8gI2luY2x1ZGUgPGFscGhhdGVzdF9mcmFnbWVudD5cXG4gICNpZmRlZiBSRU5ERVJUWVBFX0NVVE9VVFxcbiAgICBpZiAoIGRpZmZ1c2VDb2xvci5hIDw9IGN1dG9mZiApIHsgZGlzY2FyZDsgfVxcbiAgICBkaWZmdXNlQ29sb3IuYSA9IDEuMDtcXG4gICNlbmRpZlxcblxcbiAgI2lmZGVmIFJFTkRFUlRZUEVfT1BBUVVFXFxuICAgIGRpZmZ1c2VDb2xvci5hID0gMS4wO1xcbiAgI2VuZGlmXFxuXFxuICAvLyAjaW5jbHVkZSA8c3BlY3VsYXJtYXBfZnJhZ21lbnQ+XFxuXFxuICBSZWZsZWN0ZWRMaWdodCByZWZsZWN0ZWRMaWdodCA9IFJlZmxlY3RlZExpZ2h0KCB2ZWMzKCAwLjAgKSwgdmVjMyggMC4wICksIHZlYzMoIDAuMCApLCB2ZWMzKCAwLjAgKSApO1xcblxcbiAgLy8gYWNjdW11bGF0aW9uIChiYWtlZCBpbmRpcmVjdCBsaWdodGluZyBvbmx5KVxcbiAgI2lmZGVmIFVTRV9MSUdIVE1BUFxcbiAgICByZWZsZWN0ZWRMaWdodC5pbmRpcmVjdERpZmZ1c2UgKz0gdGV4dHVyZTJEKCBsaWdodE1hcCwgdlV2MiApLnh5eiAqIGxpZ2h0TWFwSW50ZW5zaXR5O1xcbiAgI2Vsc2VcXG4gICAgcmVmbGVjdGVkTGlnaHQuaW5kaXJlY3REaWZmdXNlICs9IHZlYzMoIDEuMCApO1xcbiAgI2VuZGlmXFxuXFxuICAvLyBtb2R1bGF0aW9uXFxuICAvLyAjaW5jbHVkZSA8YW9tYXBfZnJhZ21lbnQ+XFxuXFxuICByZWZsZWN0ZWRMaWdodC5pbmRpcmVjdERpZmZ1c2UgKj0gZGlmZnVzZUNvbG9yLnJnYjtcXG4gIHZlYzMgb3V0Z29pbmdMaWdodCA9IHJlZmxlY3RlZExpZ2h0LmluZGlyZWN0RGlmZnVzZTtcXG5cXG4gIC8vICNpbmNsdWRlIDxlbnZtYXBfZnJhZ21lbnQ+XFxuXFxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCBvdXRnb2luZ0xpZ2h0LCBkaWZmdXNlQ29sb3IuYSApO1xcblxcbiAgI2luY2x1ZGUgPHByZW11bHRpcGxpZWRfYWxwaGFfZnJhZ21lbnQ+XFxuICAjaW5jbHVkZSA8dG9uZW1hcHBpbmdfZnJhZ21lbnQ+XFxuICAjaW5jbHVkZSA8ZW5jb2RpbmdzX2ZyYWdtZW50PlxcbiAgI2luY2x1ZGUgPGZvZ19mcmFnbWVudD5cXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjaW5jbHVkZSA8Y29tbW9uPlxcblxcbi8vICNpbmNsdWRlIDx1dl9wYXJzX3ZlcnRleD5cXG4jaWZkZWYgVVNFX01BUFxcbiAgdmFyeWluZyB2ZWMyIHZVdjtcXG4gIHVuaWZvcm0gdmVjNCBtYWluVGV4X1NUO1xcbiNlbmRpZlxcblxcbiNpbmNsdWRlIDx1djJfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGVudm1hcF9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Y29sb3JfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPGZvZ19wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8bW9ycGh0YXJnZXRfcGFyc192ZXJ0ZXg+XFxuI2luY2x1ZGUgPHNraW5uaW5nX3BhcnNfdmVydGV4PlxcbiNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl9wYXJzX3ZlcnRleD5cXG4jaW5jbHVkZSA8Y2xpcHBpbmdfcGxhbmVzX3BhcnNfdmVydGV4PlxcblxcbnZvaWQgbWFpbigpIHtcXG5cXG4gIC8vICNpbmNsdWRlIDx1dl92ZXJ0ZXg+XFxuICAjaWZkZWYgVVNFX01BUFxcbiAgICB2VXYgPSB2ZWMyKCBtYWluVGV4X1NULnAgKiB1di54ICsgbWFpblRleF9TVC5zLCBtYWluVGV4X1NULnEgKiB1di55ICsgbWFpblRleF9TVC50ICk7XFxuICAjZW5kaWZcXG5cXG4gICNpbmNsdWRlIDx1djJfdmVydGV4PlxcbiAgI2luY2x1ZGUgPGNvbG9yX3ZlcnRleD5cXG4gICNpbmNsdWRlIDxza2luYmFzZV92ZXJ0ZXg+XFxuXFxuICAjaWZkZWYgVVNFX0VOVk1BUFxcblxcbiAgI2luY2x1ZGUgPGJlZ2lubm9ybWFsX3ZlcnRleD5cXG4gICNpbmNsdWRlIDxtb3JwaG5vcm1hbF92ZXJ0ZXg+XFxuICAjaW5jbHVkZSA8c2tpbm5vcm1hbF92ZXJ0ZXg+XFxuICAjaW5jbHVkZSA8ZGVmYXVsdG5vcm1hbF92ZXJ0ZXg+XFxuXFxuICAjZW5kaWZcXG5cXG4gICNpbmNsdWRlIDxiZWdpbl92ZXJ0ZXg+XFxuICAjaW5jbHVkZSA8bW9ycGh0YXJnZXRfdmVydGV4PlxcbiAgI2luY2x1ZGUgPHNraW5uaW5nX3ZlcnRleD5cXG4gICNpbmNsdWRlIDxwcm9qZWN0X3ZlcnRleD5cXG4gICNpbmNsdWRlIDxsb2dkZXB0aGJ1Zl92ZXJ0ZXg+XFxuXFxuICAjaW5jbHVkZSA8d29ybGRwb3NfdmVydGV4PlxcbiAgI2luY2x1ZGUgPGNsaXBwaW5nX3BsYW5lc192ZXJ0ZXg+XFxuICAjaW5jbHVkZSA8ZW52bWFwX3ZlcnRleD5cXG4gICNpbmNsdWRlIDxmb2dfdmVydGV4Plxcblxcbn1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5WUk1NZXRhSW1wb3J0ZXIgPSB2b2lkIDA7XHJcbi8qKlxyXG4gKiBBbiBpbXBvcnRlciB0aGF0IGltcG9ydHMgYSB7QGxpbmsgVlJNTWV0YX0gZnJvbSBhIFZSTSBleHRlbnNpb24gb2YgYSBHTFRGLlxyXG4gKi9cclxudmFyIFZSTU1ldGFJbXBvcnRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZSTU1ldGFJbXBvcnRlcihvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHRoaXMuaWdub3JlVGV4dHVyZSA9IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pZ25vcmVUZXh0dXJlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIFZSTU1ldGFJbXBvcnRlci5wcm90b3R5cGUuaW1wb3J0ID0gZnVuY3Rpb24gKGdsdGYpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHZybUV4dCwgc2NoZW1hTWV0YSwgdGV4dHVyZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdnJtRXh0ID0gKF9hID0gZ2x0Zi5wYXJzZXIuanNvbi5leHRlbnNpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuVlJNO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZybUV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYU1ldGEgPSB2cm1FeHQubWV0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzY2hlbWFNZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbnVsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoIXRoaXMuaWdub3JlVGV4dHVyZSAmJiBzY2hlbWFNZXRhLnRleHR1cmUgIT0gbnVsbCAmJiBzY2hlbWFNZXRhLnRleHR1cmUgIT09IC0xKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdsdGYucGFyc2VyLmdldERlcGVuZGVuY3koJ3RleHR1cmUnLCBzY2hlbWFNZXRhLnRleHR1cmUpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2VkVXNlck5hbWU6IHNjaGVtYU1ldGEuYWxsb3dlZFVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBzY2hlbWFNZXRhLmF1dGhvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lcmNpYWxVc3NhZ2VOYW1lOiBzY2hlbWFNZXRhLmNvbW1lcmNpYWxVc3NhZ2VOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdEluZm9ybWF0aW9uOiBzY2hlbWFNZXRhLmNvbnRhY3RJbmZvcm1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpY2Vuc2VOYW1lOiBzY2hlbWFNZXRhLmxpY2Vuc2VOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJMaWNlbnNlVXJsOiBzY2hlbWFNZXRhLm90aGVyTGljZW5zZVVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyUGVybWlzc2lvblVybDogc2NoZW1hTWV0YS5vdGhlclBlcm1pc3Npb25VcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6IHNjaGVtYU1ldGEucmVmZXJlbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V4dWFsVXNzYWdlTmFtZTogc2NoZW1hTWV0YS5zZXh1YWxVc3NhZ2VOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZTogdGV4dHVyZSAhPT0gbnVsbCAmJiB0ZXh0dXJlICE9PSB2b2lkIDAgPyB0ZXh0dXJlIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNjaGVtYU1ldGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uOiBzY2hlbWFNZXRhLnZlcnNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aW9sZW50VXNzYWdlTmFtZTogc2NoZW1hTWV0YS52aW9sZW50VXNzYWdlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWUk1NZXRhSW1wb3J0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVlJNTWV0YUltcG9ydGVyID0gVlJNTWV0YUltcG9ydGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZSTU1ldGFJbXBvcnRlck9wdGlvbnMgPSBleHBvcnRzLlZSTU1ldGFJbXBvcnRlciA9IGV4cG9ydHMuVlJNTWV0YSA9IHZvaWQgMDtcclxudmFyIFZSTU1ldGFfMSA9IHJlcXVpcmUoXCIuL1ZSTU1ldGFcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlZSTU1ldGFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFZSTU1ldGFfMS5WUk1NZXRhOyB9IH0pO1xyXG52YXIgVlJNTWV0YUltcG9ydGVyXzEgPSByZXF1aXJlKFwiLi9WUk1NZXRhSW1wb3J0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlZSTU1ldGFJbXBvcnRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVlJNTWV0YUltcG9ydGVyXzEuVlJNTWV0YUltcG9ydGVyOyB9IH0pO1xyXG52YXIgVlJNTWV0YUltcG9ydGVyT3B0aW9uc18xID0gcmVxdWlyZShcIi4vVlJNTWV0YUltcG9ydGVyT3B0aW9uc1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVlJNTWV0YUltcG9ydGVyT3B0aW9uc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVlJNTWV0YUltcG9ydGVyT3B0aW9uc18xLlZSTU1ldGFJbXBvcnRlck9wdGlvbnM7IH0gfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVlJNU3ByaW5nQm9uZSA9IHZvaWQgMDtcclxudmFyIFRIUkVFID0gcmVxdWlyZShcInRocmVlXCIpO1xyXG52YXIgbWF0aF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL21hdGhcIik7XHJcbnZhciBNYXRyaXg0SW52ZXJzZUNhY2hlXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvTWF0cml4NEludmVyc2VDYWNoZVwiKTtcclxuLy8gYmFzZWQgb25cclxuLy8gaHR0cDovL3JvY2tldGp1bXAuc2tyLmpwL3VuaXR5M2QvMTA5L1xyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZHdhbmdvL1VuaVZSTS9ibG9iL21hc3Rlci9TY3JpcHRzL1NwcmluZ0JvbmUvVlJNU3ByaW5nQm9uZS5jc1xyXG52YXIgSURFTlRJVFlfTUFUUklYNCA9IE9iamVjdC5mcmVlemUobmV3IFRIUkVFLk1hdHJpeDQoKSk7XHJcbnZhciBJREVOVElUWV9RVUFURVJOSU9OID0gT2JqZWN0LmZyZWV6ZShuZXcgVEhSRUUuUXVhdGVybmlvbigpKTtcclxuLy8g6KiI566X5Lit44Gu5LiA5pmC5L+d5a2Y55So5aSJ5pWw77yI5LiA5bqm44Kk44Oz44K544K/44Oz44K544KS5L2c44Gj44Gf44KJ44GC44Go44Gv5L2/44GE5Zue44GZ77yJXHJcbnZhciBfdjNBID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxudmFyIF92M0IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG52YXIgX3YzQyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbnZhciBfcXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG52YXIgX21hdEEgPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xyXG52YXIgX21hdEIgPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xyXG4vKipcclxuICogQSBjbGFzcyByZXByZXNlbnRzIGEgc2luZ2xlIHNwcmluZyBib25lIG9mIGEgVlJNLlxyXG4gKiBJdCBzaG91bGQgYmUgbWFuYWdlZCBieSBhIFtbVlJNU3ByaW5nQm9uZU1hbmFnZXJdXS5cclxuICovXHJcbnZhciBWUk1TcHJpbmdCb25lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgVlJNU3ByaW5nQm9uZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYm9uZSBBbiBPYmplY3QzRCB0aGF0IHdpbGwgYmUgYXR0YWNoZWQgdG8gdGhpcyBib25lXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIFNldmVyYWwgcGFyYW1ldGVycyByZWxhdGVkIHRvIGJlaGF2aW9yIG9mIHRoZSBzcHJpbmcgYm9uZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBWUk1TcHJpbmdCb25lKGJvbmUsIHBhcmFtcykge1xyXG4gICAgICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgeyBwYXJhbXMgPSB7fTsgfVxyXG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1cnJlbnQgcG9zaXRpb24gb2YgY2hpbGQgdGFpbCwgaW4gd29ybGQgdW5pdC4gV2lsbCBiZSB1c2VkIGZvciB2ZXJsZXQgaW50ZWdyYXRpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fY3VycmVudFRhaWwgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByZXZpb3VzIHBvc2l0aW9uIG9mIGNoaWxkIHRhaWwsIGluIHdvcmxkIHVuaXQuIFdpbGwgYmUgdXNlZCBmb3IgdmVybGV0IGludGVncmF0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX3ByZXZUYWlsID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBOZXh0IHBvc2l0aW9uIG9mIGNoaWxkIHRhaWwsIGluIHdvcmxkIHVuaXQuIFdpbGwgYmUgdXNlZCBmb3IgdmVybGV0IGludGVncmF0aW9uLlxyXG4gICAgICAgICAqIEFjdHVhbGx5IHVzZWQgb25seSBpbiBbW3VwZGF0ZV1dIGFuZCBpdCdzIGtpbmQgb2YgdGVtcG9yYXJ5IHZhcmlhYmxlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX25leHRUYWlsID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbml0aWFsIGF4aXMgb2YgdGhlIGJvbmUsIGluIGxvY2FsIHVuaXQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fYm9uZUF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFBvc2l0aW9uIG9mIHRoaXMgYm9uZSBpbiByZWxhdGl2ZSBzcGFjZSwga2luZCBvZiBhIHRlbXBvcmFyeSB2YXJpYWJsZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9jZW50ZXJTcGFjZVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIHNwcmluZ2JvbmUgd2lsbCBiZSBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBzcGFjZSByZWxhdGl2ZSBmcm9tIHRoaXMgb2JqZWN0LlxyXG4gICAgICAgICAqIElmIHRoaXMgaXMgYG51bGxgLCBzcHJpbmdib25lIHdpbGwgYmUgY2FsY3VsYXRlZCBpbiB3b3JsZCBzcGFjZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9jZW50ZXIgPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJvdGF0aW9uIG9mIHBhcmVudCBib25lLCBpbiB3b3JsZCB1bml0LlxyXG4gICAgICAgICAqIFdlIHNob3VsZCB1cGRhdGUgdGhpcyBjb25zdGFudGx5IGluIFtbdXBkYXRlXV0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fcGFyZW50V29ybGRSb3RhdGlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5pdGlhbCBzdGF0ZSBvZiB0aGUgbG9jYWwgbWF0cml4IG9mIHRoZSBib25lLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWxMb2NhbE1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5pdGlhbCBzdGF0ZSBvZiB0aGUgcm90YXRpb24gb2YgdGhlIGJvbmUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5faW5pdGlhbExvY2FsUm90YXRpb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluaXRpYWwgc3RhdGUgb2YgdGhlIHBvc2l0aW9uIG9mIGl0cyBjaGlsZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9pbml0aWFsTG9jYWxDaGlsZFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICAgICAgICB0aGlzLmJvbmUgPSBib25lOyAvLyB1bmlWUk3jgafjga4gcGFyZW50XHJcbiAgICAgICAgdGhpcy5ib25lLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTsgLy8gdXBkYXRl44Gr44KI44KK6KiI566X44GV44KM44KL44Gu44GndGhyZWUuanPlhoXjgafjga7oh6rli5Xlh6bnkIbjga/kuI3opoFcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IChfYSA9IHBhcmFtcy5yYWRpdXMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDAuMDI7XHJcbiAgICAgICAgdGhpcy5zdGlmZm5lc3NGb3JjZSA9IChfYiA9IHBhcmFtcy5zdGlmZm5lc3NGb3JjZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMS4wO1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eURpciA9IHBhcmFtcy5ncmF2aXR5RGlyXHJcbiAgICAgICAgICAgID8gbmV3IFRIUkVFLlZlY3RvcjMoKS5jb3B5KHBhcmFtcy5ncmF2aXR5RGlyKVxyXG4gICAgICAgICAgICA6IG5ldyBUSFJFRS5WZWN0b3IzKCkuc2V0KDAuMCwgLTEuMCwgMC4wKTtcclxuICAgICAgICB0aGlzLmdyYXZpdHlQb3dlciA9IChfYyA9IHBhcmFtcy5ncmF2aXR5UG93ZXIpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IDAuMDtcclxuICAgICAgICB0aGlzLmRyYWdGb3JjZSA9IChfZCA9IHBhcmFtcy5kcmFnRm9yY2UpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IDAuNDtcclxuICAgICAgICB0aGlzLmNvbGxpZGVycyA9IChfZSA9IHBhcmFtcy5jb2xsaWRlcnMpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IFtdO1xyXG4gICAgICAgIHRoaXMuX2NlbnRlclNwYWNlUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKHRoaXMuYm9uZS5tYXRyaXhXb3JsZCk7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbExvY2FsTWF0cml4LmNvcHkodGhpcy5ib25lLm1hdHJpeCk7XHJcbiAgICAgICAgdGhpcy5faW5pdGlhbExvY2FsUm90YXRpb24uY29weSh0aGlzLmJvbmUucXVhdGVybmlvbik7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9uZS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8g5pyr56uv44Gu44Oc44O844Oz44CC5a2Q44Oc44O844Oz44GM44GE44Gq44GE44Gf44KB44CM6Ieq5YiG44Gu5bCR44GX5YWI44CN44GM5a2Q44Oc44O844Oz44Go44GE44GG44GT44Go44Gr44GZ44KLXHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kd2FuZ28vVW5pVlJNL2Jsb2IvbWFzdGVyL0Fzc2V0cy9WUk0vVW5pVlJNL1NjcmlwdHMvU3ByaW5nQm9uZS9WUk1TcHJpbmdCb25lLmNzI0wyNDZcclxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbExvY2FsQ2hpbGRQb3NpdGlvbi5jb3B5KHRoaXMuYm9uZS5wb3NpdGlvbikubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoMC4wNyk7IC8vIG1hZ2ljIG51bWJlciEgZGVyaXZlcyBmcm9tIG9yaWdpbmFsIHNvdXJjZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGZpcnN0Q2hpbGQgPSB0aGlzLmJvbmUuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxMb2NhbENoaWxkUG9zaXRpb24uY29weShmaXJzdENoaWxkLnBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ib25lLmxvY2FsVG9Xb3JsZCh0aGlzLl9jdXJyZW50VGFpbC5jb3B5KHRoaXMuX2luaXRpYWxMb2NhbENoaWxkUG9zaXRpb24pKTtcclxuICAgICAgICB0aGlzLl9wcmV2VGFpbC5jb3B5KHRoaXMuX2N1cnJlbnRUYWlsKTtcclxuICAgICAgICB0aGlzLl9uZXh0VGFpbC5jb3B5KHRoaXMuX2N1cnJlbnRUYWlsKTtcclxuICAgICAgICB0aGlzLl9ib25lQXhpcy5jb3B5KHRoaXMuX2luaXRpYWxMb2NhbENoaWxkUG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMuX2NlbnRlclNwYWNlQm9uZUxlbmd0aCA9IF92M0FcclxuICAgICAgICAgICAgLmNvcHkodGhpcy5faW5pdGlhbExvY2FsQ2hpbGRQb3NpdGlvbilcclxuICAgICAgICAgICAgLmFwcGx5TWF0cml4NCh0aGlzLmJvbmUubWF0cml4V29ybGQpXHJcbiAgICAgICAgICAgIC5zdWIodGhpcy5fY2VudGVyU3BhY2VQb3NpdGlvbilcclxuICAgICAgICAgICAgLmxlbmd0aCgpO1xyXG4gICAgICAgIHRoaXMuY2VudGVyID0gKF9mID0gcGFyYW1zLmNlbnRlcikgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogbnVsbDtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWUk1TcHJpbmdCb25lLnByb3RvdHlwZSwgXCJjZW50ZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2VudGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY2VudGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgLy8gY29udmVydCB0YWlscyB0byB3b3JsZCBzcGFjZVxyXG4gICAgICAgICAgICB0aGlzLl9nZXRNYXRyaXhDZW50ZXJUb1dvcmxkKF9tYXRBKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRhaWwuYXBwbHlNYXRyaXg0KF9tYXRBKTtcclxuICAgICAgICAgICAgdGhpcy5fcHJldlRhaWwuYXBwbHlNYXRyaXg0KF9tYXRBKTtcclxuICAgICAgICAgICAgdGhpcy5fbmV4dFRhaWwuYXBwbHlNYXRyaXg0KF9tYXRBKTtcclxuICAgICAgICAgICAgLy8gdW5pbnN0YWxsIGludmVyc2UgY2FjaGVcclxuICAgICAgICAgICAgaWYgKChfYSA9IHRoaXMuX2NlbnRlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnVzZXJEYXRhLmludmVyc2VDYWNoZVByb3h5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jZW50ZXIudXNlckRhdGEuaW52ZXJzZUNhY2hlUHJveHkucmV2ZXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2VudGVyLnVzZXJEYXRhLmludmVyc2VDYWNoZVByb3h5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNoYW5nZSB0aGUgY2VudGVyXHJcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlciA9IGNlbnRlcjtcclxuICAgICAgICAgICAgLy8gaW5zdGFsbCBpbnZlcnNlIGNhY2hlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY2VudGVyLnVzZXJEYXRhLmludmVyc2VDYWNoZVByb3h5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2VudGVyLnVzZXJEYXRhLmludmVyc2VDYWNoZVByb3h5ID0gbmV3IE1hdHJpeDRJbnZlcnNlQ2FjaGVfMS5NYXRyaXg0SW52ZXJzZUNhY2hlKHRoaXMuX2NlbnRlci5tYXRyaXhXb3JsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29udmVydCB0YWlscyB0byBjZW50ZXIgc3BhY2VcclxuICAgICAgICAgICAgdGhpcy5fZ2V0TWF0cml4V29ybGRUb0NlbnRlcihfbWF0QSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUYWlsLmFwcGx5TWF0cml4NChfbWF0QSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ByZXZUYWlsLmFwcGx5TWF0cml4NChfbWF0QSk7XHJcbiAgICAgICAgICAgIHRoaXMuX25leHRUYWlsLmFwcGx5TWF0cml4NChfbWF0QSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgY2VudGVyIHNwYWNlIGRlcGVuZGFudCBzdGF0ZVxyXG4gICAgICAgICAgICBfbWF0QS5tdWx0aXBseSh0aGlzLmJvbmUubWF0cml4V29ybGQpOyAvLyDwn5SlID8/XHJcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlclNwYWNlUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKF9tYXRBKTtcclxuICAgICAgICAgICAgdGhpcy5fY2VudGVyU3BhY2VCb25lTGVuZ3RoID0gX3YzQVxyXG4gICAgICAgICAgICAgICAgLmNvcHkodGhpcy5faW5pdGlhbExvY2FsQ2hpbGRQb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIC5hcHBseU1hdHJpeDQoX21hdEEpXHJcbiAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX2NlbnRlclNwYWNlUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAubGVuZ3RoKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgc3RhdGUgb2YgdGhpcyBib25lLlxyXG4gICAgICogWW91IG1pZ2h0IHdhbnQgdG8gY2FsbCBbW1ZSTVNwcmluZ0JvbmVNYW5hZ2VyLnJlc2V0XV0gaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgVlJNU3ByaW5nQm9uZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ib25lLnF1YXRlcm5pb24uY29weSh0aGlzLl9pbml0aWFsTG9jYWxSb3RhdGlvbik7XHJcbiAgICAgICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgaXRzIG1hdHJpeFdvcmxkIG1hbnVhbGx5LCBzaW5jZSB3ZSB0d2Vha2VkIHRoZSBib25lIGJ5IG91ciBoYW5kXHJcbiAgICAgICAgdGhpcy5ib25lLnVwZGF0ZU1hdHJpeCgpO1xyXG4gICAgICAgIHRoaXMuYm9uZS5tYXRyaXhXb3JsZC5tdWx0aXBseU1hdHJpY2VzKHRoaXMuX2dldFBhcmVudE1hdHJpeFdvcmxkKCksIHRoaXMuYm9uZS5tYXRyaXgpO1xyXG4gICAgICAgIHRoaXMuX2NlbnRlclNwYWNlUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKHRoaXMuYm9uZS5tYXRyaXhXb3JsZCk7XHJcbiAgICAgICAgLy8gQXBwbHkgdXBkYXRlZCBwb3NpdGlvbiB0byB0YWlsIHN0YXRlc1xyXG4gICAgICAgIHRoaXMuYm9uZS5sb2NhbFRvV29ybGQodGhpcy5fY3VycmVudFRhaWwuY29weSh0aGlzLl9pbml0aWFsTG9jYWxDaGlsZFBvc2l0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5fcHJldlRhaWwuY29weSh0aGlzLl9jdXJyZW50VGFpbCk7XHJcbiAgICAgICAgdGhpcy5fbmV4dFRhaWwuY29weSh0aGlzLl9jdXJyZW50VGFpbCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoaXMgYm9uZS5cclxuICAgICAqIFlvdSBtaWdodCB3YW50IHRvIGNhbGwgW1tWUk1TcHJpbmdCb25lTWFuYWdlci51cGRhdGVdXSBpbnN0ZWFkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBkZWx0YSBkZWx0YVRpbWVcclxuICAgICAqL1xyXG4gICAgVlJNU3ByaW5nQm9uZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKGRlbHRhIDw9IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyDopqrjgrnjg5fjg6rjg7PjgrDjg5zjg7zjg7Pjga7lp7/li6Ljga/luLjjgavlpInljJbjgZfjgabjgYTjgovjgIJcclxuICAgICAgICAvLyDjgZ3jgozjgavln7rjgaXjgYTjgablh6bnkIbnm7TliY3jgavoh6rliIbjga53b3JsZE1hdHJpeOOCkuabtOaWsOOBl+OBpuOBiuOBj1xyXG4gICAgICAgIHRoaXMuYm9uZS5tYXRyaXhXb3JsZC5tdWx0aXBseU1hdHJpY2VzKHRoaXMuX2dldFBhcmVudE1hdHJpeFdvcmxkKCksIHRoaXMuYm9uZS5tYXRyaXgpO1xyXG4gICAgICAgIGlmICh0aGlzLmJvbmUucGFyZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFNwcmluZ0JvbmXjga/opqrjgYvjgonpoIbjgavlh6bnkIbjgZXjgozjgabjgYTjgY/jgZ/jgoHjgIFcclxuICAgICAgICAgICAgLy8g6Kaq44GubWF0cml4V29ybGTjga/mnIDmlrDnirbmhYvjga7liY3mj5Djgad3b3JsZE1hdHJpeOOBi+OCiXF1YXRlcm5pb27jgpLlj5bjgorlh7rjgZnjgIJcclxuICAgICAgICAgICAgLy8g5Yi26ZmQ44Gv44GC44KL44GR44KM44Gp44CB6KiI566X44Gv5bCR44Gq44GE44Gu44GnZ2V0V29ybGRRdWF0ZXJuaW9u44Gn44Gv44Gq44GP44GT44Gu5pa55rOV44KS5Y+W44KL44CCXHJcbiAgICAgICAgICAgIG1hdGhfMS5nZXRXb3JsZFF1YXRlcm5pb25MaXRlKHRoaXMuYm9uZS5wYXJlbnQsIHRoaXMuX3BhcmVudFdvcmxkUm90YXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50V29ybGRSb3RhdGlvbi5jb3B5KElERU5USVRZX1FVQVRFUk5JT04pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBHZXQgYm9uZSBwb3NpdGlvbiBpbiBjZW50ZXIgc3BhY2VcclxuICAgICAgICB0aGlzLl9nZXRNYXRyaXhXb3JsZFRvQ2VudGVyKF9tYXRBKTtcclxuICAgICAgICBfbWF0QS5tdWx0aXBseSh0aGlzLmJvbmUubWF0cml4V29ybGQpOyAvLyDwn5SlID8/XHJcbiAgICAgICAgdGhpcy5fY2VudGVyU3BhY2VQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24oX21hdEEpO1xyXG4gICAgICAgIC8vIEdldCBwYXJlbnQgcG9zaXRpb24gaW4gY2VudGVyIHNwYWNlXHJcbiAgICAgICAgdGhpcy5fZ2V0TWF0cml4V29ybGRUb0NlbnRlcihfbWF0Qik7XHJcbiAgICAgICAgX21hdEIubXVsdGlwbHkodGhpcy5fZ2V0UGFyZW50TWF0cml4V29ybGQoKSk7XHJcbiAgICAgICAgLy8gc2V2ZXJhbCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdmFyIHN0aWZmbmVzcyA9IHRoaXMuc3RpZmZuZXNzRm9yY2UgKiBkZWx0YTtcclxuICAgICAgICB2YXIgZXh0ZXJuYWwgPSBfdjNCLmNvcHkodGhpcy5ncmF2aXR5RGlyKS5tdWx0aXBseVNjYWxhcih0aGlzLmdyYXZpdHlQb3dlciAqIGRlbHRhKTtcclxuICAgICAgICAvLyB2ZXJsZXTnqY3liIbjgafmrKHjga7kvY3nva7jgpLoqIjnrpdcclxuICAgICAgICB0aGlzLl9uZXh0VGFpbFxyXG4gICAgICAgICAgICAuY29weSh0aGlzLl9jdXJyZW50VGFpbClcclxuICAgICAgICAgICAgLmFkZChfdjNBXHJcbiAgICAgICAgICAgIC5jb3B5KHRoaXMuX2N1cnJlbnRUYWlsKVxyXG4gICAgICAgICAgICAuc3ViKHRoaXMuX3ByZXZUYWlsKVxyXG4gICAgICAgICAgICAubXVsdGlwbHlTY2FsYXIoMSAtIHRoaXMuZHJhZ0ZvcmNlKSkgLy8g5YmN44OV44Os44O844Og44Gu56e75YuV44KS57aZ57aa44GZ44KLKOa4m+ihsOOCguOBguOCi+OCiClcclxuICAgICAgICAgICAgLmFkZChfdjNBXHJcbiAgICAgICAgICAgIC5jb3B5KHRoaXMuX2JvbmVBeGlzKVxyXG4gICAgICAgICAgICAuYXBwbHlNYXRyaXg0KHRoaXMuX2luaXRpYWxMb2NhbE1hdHJpeClcclxuICAgICAgICAgICAgLmFwcGx5TWF0cml4NChfbWF0QilcclxuICAgICAgICAgICAgLnN1Yih0aGlzLl9jZW50ZXJTcGFjZVBvc2l0aW9uKVxyXG4gICAgICAgICAgICAubm9ybWFsaXplKClcclxuICAgICAgICAgICAgLm11bHRpcGx5U2NhbGFyKHN0aWZmbmVzcykpIC8vIOimquOBruWbnui7ouOBq+OCiOOCi+WtkOODnOODvOODs+OBruenu+WLleebruaomVxyXG4gICAgICAgICAgICAuYWRkKGV4dGVybmFsKTsgLy8g5aSW5Yqb44Gr44KI44KL56e75YuV6YePXHJcbiAgICAgICAgLy8gbm9ybWFsaXplIGJvbmUgbGVuZ3RoXHJcbiAgICAgICAgdGhpcy5fbmV4dFRhaWxcclxuICAgICAgICAgICAgLnN1Yih0aGlzLl9jZW50ZXJTcGFjZVBvc2l0aW9uKVxyXG4gICAgICAgICAgICAubm9ybWFsaXplKClcclxuICAgICAgICAgICAgLm11bHRpcGx5U2NhbGFyKHRoaXMuX2NlbnRlclNwYWNlQm9uZUxlbmd0aClcclxuICAgICAgICAgICAgLmFkZCh0aGlzLl9jZW50ZXJTcGFjZVBvc2l0aW9uKTtcclxuICAgICAgICAvLyBDb2xsaXNpb27jgafnp7vli5VcclxuICAgICAgICB0aGlzLl9jb2xsaXNpb24odGhpcy5fbmV4dFRhaWwpO1xyXG4gICAgICAgIHRoaXMuX3ByZXZUYWlsLmNvcHkodGhpcy5fY3VycmVudFRhaWwpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUYWlsLmNvcHkodGhpcy5fbmV4dFRhaWwpO1xyXG4gICAgICAgIC8vIEFwcGx5IHJvdGF0aW9uLCBjb252ZXJ0IHZlY3RvcjMgdGhpbmcgaW50byBhY3R1YWwgcXVhdGVybmlvblxyXG4gICAgICAgIC8vIE9yaWdpbmFsIFVuaVZSTSBpcyBkb2luZyB3b3JsZCB1bml0IGNhbGN1bHVzIGF0IGhlcmUgYnV0IHdlJ3JlIGdvbm5hIGRvIHRoaXMgb24gbG9jYWwgdW5pdFxyXG4gICAgICAgIC8vIHNpbmNlIFRocmVlLmpzIGlzIG5vdCBnb29kIGF0IHdvcmxkIGNvb3JkaW5hdGlvbiBzdHVmZlxyXG4gICAgICAgIHZhciBpbml0aWFsQ2VudGVyU3BhY2VNYXRyaXhJbnYgPSBfbWF0QS5nZXRJbnZlcnNlKF9tYXRCLm11bHRpcGx5KHRoaXMuX2luaXRpYWxMb2NhbE1hdHJpeCkpO1xyXG4gICAgICAgIHZhciBhcHBseVJvdGF0aW9uID0gX3F1YXRBLnNldEZyb21Vbml0VmVjdG9ycyh0aGlzLl9ib25lQXhpcywgX3YzQS5jb3B5KHRoaXMuX25leHRUYWlsKS5hcHBseU1hdHJpeDQoaW5pdGlhbENlbnRlclNwYWNlTWF0cml4SW52KS5ub3JtYWxpemUoKSk7XHJcbiAgICAgICAgdGhpcy5ib25lLnF1YXRlcm5pb24uY29weSh0aGlzLl9pbml0aWFsTG9jYWxSb3RhdGlvbikubXVsdGlwbHkoYXBwbHlSb3RhdGlvbik7XHJcbiAgICAgICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgaXRzIG1hdHJpeFdvcmxkIG1hbnVhbGx5LCBzaW5jZSB3ZSB0d2Vha2VkIHRoZSBib25lIGJ5IG91ciBoYW5kXHJcbiAgICAgICAgdGhpcy5ib25lLnVwZGF0ZU1hdHJpeCgpO1xyXG4gICAgICAgIHRoaXMuYm9uZS5tYXRyaXhXb3JsZC5tdWx0aXBseU1hdHJpY2VzKHRoaXMuX2dldFBhcmVudE1hdHJpeFdvcmxkKCksIHRoaXMuYm9uZS5tYXRyaXgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRG8gY29sbGlzaW9uIG1hdGggYWdhaW5zdCBldmVyeSBjb2xsaWRlcnMgYXR0YWNoZWQgdG8gdGhpcyBib25lLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0YWlsIFRoZSB0YWlsIHlvdSB3YW50IHRvIHByb2Nlc3NcclxuICAgICAqL1xyXG4gICAgVlJNU3ByaW5nQm9uZS5wcm90b3R5cGUuX2NvbGxpc2lvbiA9IGZ1bmN0aW9uICh0YWlsKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbGxpZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xsaWRlcikge1xyXG4gICAgICAgICAgICBfdGhpcy5fZ2V0TWF0cml4V29ybGRUb0NlbnRlcihfbWF0QSk7XHJcbiAgICAgICAgICAgIF9tYXRBLm11bHRpcGx5KGNvbGxpZGVyLm1hdHJpeFdvcmxkKTtcclxuICAgICAgICAgICAgdmFyIGNvbGxpZGVyQ2VudGVyU3BhY2VQb3NpdGlvbiA9IF92M0Euc2V0RnJvbU1hdHJpeFBvc2l0aW9uKF9tYXRBKTtcclxuICAgICAgICAgICAgdmFyIGNvbGxpZGVyUmFkaXVzID0gY29sbGlkZXIuZ2VvbWV0cnkuYm91bmRpbmdTcGhlcmUucmFkaXVzOyAvLyB0aGUgYm91bmRpbmcgc3BoZXJlIGlzIGd1YXJhbnRlZWQgdG8gYmUgZXhpc3QgYnkgVlJNU3ByaW5nQm9uZUltcG9ydGVyLl9jcmVhdGVDb2xsaWRlck1lc2hcclxuICAgICAgICAgICAgdmFyIHIgPSBfdGhpcy5yYWRpdXMgKyBjb2xsaWRlclJhZGl1cztcclxuICAgICAgICAgICAgaWYgKHRhaWwuZGlzdGFuY2VUb1NxdWFyZWQoY29sbGlkZXJDZW50ZXJTcGFjZVBvc2l0aW9uKSA8PSByICogcikge1xyXG4gICAgICAgICAgICAgICAgLy8g44OS44OD44OI44CCQ29sbGlkZXLjga7ljYrlvoTmlrnlkJHjgavmirzjgZflh7rjgZlcclxuICAgICAgICAgICAgICAgIHZhciBub3JtYWwgPSBfdjNCLnN1YlZlY3RvcnModGFpbCwgY29sbGlkZXJDZW50ZXJTcGFjZVBvc2l0aW9uKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NGcm9tQ29sbGlkZXIgPSBfdjNDLmFkZFZlY3RvcnMoY29sbGlkZXJDZW50ZXJTcGFjZVBvc2l0aW9uLCBub3JtYWwubXVsdGlwbHlTY2FsYXIocikpO1xyXG4gICAgICAgICAgICAgICAgLy8gbm9ybWFsaXplIGJvbmUgbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB0YWlsLmNvcHkocG9zRnJvbUNvbGxpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YihfdGhpcy5fY2VudGVyU3BhY2VQb3NpdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAubm9ybWFsaXplKClcclxuICAgICAgICAgICAgICAgICAgICAubXVsdGlwbHlTY2FsYXIoX3RoaXMuX2NlbnRlclNwYWNlQm9uZUxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAuYWRkKF90aGlzLl9jZW50ZXJTcGFjZVBvc2l0aW9uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG1hdHJpeCB0aGF0IGNvbnZlcnRzIGNlbnRlciBzcGFjZSBpbnRvIHdvcmxkIHNwYWNlLlxyXG4gICAgICogQHBhcmFtIHRhcmdldCBUYXJnZXQgbWF0cml4XHJcbiAgICAgKi9cclxuICAgIFZSTVNwcmluZ0JvbmUucHJvdG90eXBlLl9nZXRNYXRyaXhDZW50ZXJUb1dvcmxkID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jZW50ZXIpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LmNvcHkodGhpcy5fY2VudGVyLm1hdHJpeFdvcmxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5pZGVudGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbWF0cml4IHRoYXQgY29udmVydHMgd29ybGQgc3BhY2UgaW50byBjZW50ZXIgc3BhY2UuXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFRhcmdldCBtYXRyaXhcclxuICAgICAqL1xyXG4gICAgVlJNU3ByaW5nQm9uZS5wcm90b3R5cGUuX2dldE1hdHJpeFdvcmxkVG9DZW50ZXIgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NlbnRlcikge1xyXG4gICAgICAgICAgICB0YXJnZXQuY29weSh0aGlzLl9jZW50ZXIudXNlckRhdGEuaW52ZXJzZUNhY2hlUHJveHkuaW52ZXJzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXQuaWRlbnRpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHdvcmxkIG1hdHJpeCBvZiBpdHMgcGFyZW50IG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgVlJNU3ByaW5nQm9uZS5wcm90b3R5cGUuX2dldFBhcmVudE1hdHJpeFdvcmxkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvbmUucGFyZW50ID8gdGhpcy5ib25lLnBhcmVudC5tYXRyaXhXb3JsZCA6IElERU5USVRZX01BVFJJWDQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZSTVNwcmluZ0JvbmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVlJNU3ByaW5nQm9uZSA9IFZSTVNwcmluZ0JvbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZSTVNwcmluZ0JvbmVJbXBvcnRlciA9IHZvaWQgMDtcclxudmFyIFRIUkVFID0gcmVxdWlyZShcInRocmVlXCIpO1xyXG52YXIgVlJNU3ByaW5nQm9uZV8xID0gcmVxdWlyZShcIi4vVlJNU3ByaW5nQm9uZVwiKTtcclxudmFyIFZSTVNwcmluZ0JvbmVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9WUk1TcHJpbmdCb25lTWFuYWdlclwiKTtcclxudmFyIF92M0EgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG52YXIgX2NvbGxpZGVyTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyB2aXNpYmxlOiBmYWxzZSB9KTtcclxuLyoqXHJcbiAqIEFuIGltcG9ydGVyIHRoYXQgaW1wb3J0cyBhIFtbVlJNU3ByaW5nQm9uZU1hbmFnZXJdXSBmcm9tIGEgVlJNIGV4dGVuc2lvbiBvZiBhIEdMVEYuXHJcbiAqL1xyXG52YXIgVlJNU3ByaW5nQm9uZUltcG9ydGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVlJNU3ByaW5nQm9uZUltcG9ydGVyKCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnQgYSBbW1ZSTUxvb2tBdEhlYWRdXSBmcm9tIGEgVlJNLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBnbHRmIEEgcGFyc2VkIHJlc3VsdCBvZiBHTFRGIHRha2VuIGZyb20gR0xURkxvYWRlclxyXG4gICAgICovXHJcbiAgICBWUk1TcHJpbmdCb25lSW1wb3J0ZXIucHJvdG90eXBlLmltcG9ydCA9IGZ1bmN0aW9uIChnbHRmKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB2cm1FeHQsIHNjaGVtYVNlY29uZGFyeUFuaW1hdGlvbiwgY29sbGlkZXJHcm91cHMsIHNwcmluZ0JvbmVHcm91cExpc3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZybUV4dCA9IChfYSA9IGdsdGYucGFyc2VyLmpzb24uZXh0ZW5zaW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLlZSTTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2cm1FeHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbnVsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVNlY29uZGFyeUFuaW1hdGlvbiA9IHZybUV4dC5zZWNvbmRhcnlBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2NoZW1hU2Vjb25kYXJ5QW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9pbXBvcnRDb2xsaWRlck1lc2hHcm91cHMoZ2x0Ziwgc2NoZW1hU2Vjb25kYXJ5QW5pbWF0aW9uKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlckdyb3VwcyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5faW1wb3J0U3ByaW5nQm9uZUdyb3VwTGlzdChnbHRmLCBzY2hlbWFTZWNvbmRhcnlBbmltYXRpb24sIGNvbGxpZGVyR3JvdXBzKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpbmdCb25lR3JvdXBMaXN0ID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFZSTVNwcmluZ0JvbmVNYW5hZ2VyXzEuVlJNU3ByaW5nQm9uZU1hbmFnZXIoY29sbGlkZXJHcm91cHMsIHNwcmluZ0JvbmVHcm91cExpc3QpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVlJNU3ByaW5nQm9uZUltcG9ydGVyLnByb3RvdHlwZS5fY3JlYXRlU3ByaW5nQm9uZSA9IGZ1bmN0aW9uIChib25lLCBwYXJhbXMpIHtcclxuICAgICAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHsgcGFyYW1zID0ge307IH1cclxuICAgICAgICByZXR1cm4gbmV3IFZSTVNwcmluZ0JvbmVfMS5WUk1TcHJpbmdCb25lKGJvbmUsIHBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgVlJNU3ByaW5nQm9uZUltcG9ydGVyLnByb3RvdHlwZS5faW1wb3J0U3ByaW5nQm9uZUdyb3VwTGlzdCA9IGZ1bmN0aW9uIChnbHRmLCBzY2hlbWFTZWNvbmRhcnlBbmltYXRpb24sIGNvbGxpZGVyR3JvdXBzKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNwcmluZ0JvbmVHcm91cHMsIHNwcmluZ0JvbmVHcm91cExpc3Q7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcmluZ0JvbmVHcm91cHMgPSBzY2hlbWFTZWNvbmRhcnlBbmltYXRpb24uYm9uZUdyb3VwcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaW5nQm9uZUdyb3VwTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChzcHJpbmdCb25lR3JvdXBzLm1hcChmdW5jdGlvbiAodnJtQm9uZUdyb3VwKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0aWZmbmVzc0ZvcmNlLCBncmF2aXR5RGlyLCBncmF2aXR5UG93ZXIsIGRyYWdGb3JjZSwgcmFkaXVzLCBjb2xsaWRlcnMsIHNwcmluZ0JvbmVHcm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2cm1Cb25lR3JvdXAuc3RpZmZpbmVzcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZybUJvbmVHcm91cC5ncmF2aXR5RGlyID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnJtQm9uZUdyb3VwLmdyYXZpdHlEaXIueCA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZybUJvbmVHcm91cC5ncmF2aXR5RGlyLnkgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2cm1Cb25lR3JvdXAuZ3Jhdml0eURpci56ID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnJtQm9uZUdyb3VwLmdyYXZpdHlQb3dlciA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZybUJvbmVHcm91cC5kcmFnRm9yY2UgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2cm1Cb25lR3JvdXAuaGl0UmFkaXVzID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnJtQm9uZUdyb3VwLmNvbGxpZGVyR3JvdXBzID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnJtQm9uZUdyb3VwLmJvbmVzID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnJtQm9uZUdyb3VwLmNlbnRlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RpZmZuZXNzRm9yY2UgPSB2cm1Cb25lR3JvdXAuc3RpZmZpbmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmF2aXR5RGlyID0gbmV3IFRIUkVFLlZlY3RvcjModnJtQm9uZUdyb3VwLmdyYXZpdHlEaXIueCwgdnJtQm9uZUdyb3VwLmdyYXZpdHlEaXIueSwgLXZybUJvbmVHcm91cC5ncmF2aXR5RGlyLnopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHlQb3dlciA9IHZybUJvbmVHcm91cC5ncmF2aXR5UG93ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ0ZvcmNlID0gdnJtQm9uZUdyb3VwLmRyYWdGb3JjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSB2cm1Cb25lR3JvdXAuaGl0UmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZybUJvbmVHcm91cC5jb2xsaWRlckdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xsaWRlckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVycy5wdXNoLmFwcGx5KGNvbGxpZGVycywgY29sbGlkZXJHcm91cHNbY29sbGlkZXJJbmRleF0uY29sbGlkZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpbmdCb25lR3JvdXAgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbCh2cm1Cb25lR3JvdXAuYm9uZXMubWFwKGZ1bmN0aW9uIChub2RlSW5kZXgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcHJpbmdSb290Qm9uZSwgY2VudGVyLCBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGdsdGYucGFyc2VyLmdldERlcGVuZGVuY3koJ25vZGUnLCBub2RlSW5kZXgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaW5nUm9vdEJvbmUgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2cm1Cb25lR3JvdXAuY2VudGVyICE9PSAtMSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2x0Zi5wYXJzZXIuZ2V0RGVwZW5kZW5jeSgnbm9kZScsIHZybUJvbmVHcm91cC5jZW50ZXIpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXIgPSBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgd2VpcmQgYnV0IHRoZXJlIG1pZ2h0IGJlIGNhc2VzIHdlIGNhbid0IGZpbmQgdGhlIHJvb3QgYm9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzcHJpbmdSb290Qm9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcmluZ1Jvb3RCb25lLnRyYXZlcnNlKGZ1bmN0aW9uIChib25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcmluZ0JvbmUgPSBfdGhpcy5fY3JlYXRlU3ByaW5nQm9uZShib25lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGlmZm5lc3NGb3JjZTogc3RpZmZuZXNzRm9yY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHlEaXI6IGdyYXZpdHlEaXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYXZpdHlQb3dlcjogZ3Jhdml0eVBvd2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnRm9yY2U6IGRyYWdGb3JjZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXJzOiBjb2xsaWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjogY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcmluZ0JvbmVHcm91cC5wdXNoKHNwcmluZ0JvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpbmdCb25lR3JvdXBMaXN0LnB1c2goc3ByaW5nQm9uZUdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgc3ByaW5nQm9uZUdyb3VwTGlzdF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGFycmF5IG9mIFtbVlJNU3ByaW5nQm9uZUNvbGxpZGVyR3JvdXBdXS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZ2x0ZiBBIHBhcnNlZCByZXN1bHQgb2YgR0xURiB0YWtlbiBmcm9tIEdMVEZMb2FkZXJcclxuICAgICAqIEBwYXJhbSBzY2hlbWFTZWNvbmRhcnlBbmltYXRpb24gQSBgc2Vjb25kYXJ5QW5pbWF0aW9uYCBmaWVsZCBvZiBWUk1cclxuICAgICAqL1xyXG4gICAgVlJNU3ByaW5nQm9uZUltcG9ydGVyLnByb3RvdHlwZS5faW1wb3J0Q29sbGlkZXJNZXNoR3JvdXBzID0gZnVuY3Rpb24gKGdsdGYsIHNjaGVtYVNlY29uZGFyeUFuaW1hdGlvbikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB2cm1Db2xsaWRlckdyb3VwcywgY29sbGlkZXJHcm91cHM7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZybUNvbGxpZGVyR3JvdXBzID0gc2NoZW1hU2Vjb25kYXJ5QW5pbWF0aW9uLmNvbGxpZGVyR3JvdXBzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZybUNvbGxpZGVyR3JvdXBzID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFtdXTtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyR3JvdXBzID0gW107XHJcbiAgICAgICAgICAgICAgICB2cm1Db2xsaWRlckdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xsaWRlckdyb3VwKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvbmUsIGNvbGxpZGVycywgY29sbGlkZXJNZXNoR3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlkZXJHcm91cC5ub2RlID09PSB1bmRlZmluZWQgfHwgY29sbGlkZXJHcm91cC5jb2xsaWRlcnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdsdGYucGFyc2VyLmdldERlcGVuZGVuY3koJ25vZGUnLCBjb2xsaWRlckdyb3VwLm5vZGUpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib25lID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyR3JvdXAuY29sbGlkZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbGxpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlci5vZmZzZXQgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0LnggPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0LnkgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0LnogPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIucmFkaXVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gX3YzQS5zZXQoY29sbGlkZXIub2Zmc2V0LngsIGNvbGxpZGVyLm9mZnNldC55LCAtY29sbGlkZXIub2Zmc2V0LnopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlkZXJNZXNoID0gX3RoaXMuX2NyZWF0ZUNvbGxpZGVyTWVzaChjb2xsaWRlci5yYWRpdXMsIG9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmUuYWRkKGNvbGxpZGVyTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVycy5wdXNoKGNvbGxpZGVyTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXJNZXNoR3JvdXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IGNvbGxpZGVyR3JvdXAubm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXJzOiBjb2xsaWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlckdyb3Vwcy5wdXNoKGNvbGxpZGVyTWVzaEdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pOyB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBjb2xsaWRlckdyb3Vwc107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgY29sbGlkZXIgbWVzaC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcmFkaXVzIFJhZGl1cyBvZiB0aGUgbmV3IGNvbGxpZGVyIG1lc2hcclxuICAgICAqIEBwYXJhbSBvZmZzZXQgT2ZmZXN0IG9mIHRoZSBuZXcgY29sbGlkZXIgbWVzaFxyXG4gICAgICovXHJcbiAgICBWUk1TcHJpbmdCb25lSW1wb3J0ZXIucHJvdG90eXBlLl9jcmVhdGVDb2xsaWRlck1lc2ggPSBmdW5jdGlvbiAocmFkaXVzLCBvZmZzZXQpIHtcclxuICAgICAgICB2YXIgY29sbGlkZXJNZXNoID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KHJhZGl1cywgOCwgNCksIF9jb2xsaWRlck1hdGVyaWFsKTtcclxuICAgICAgICBjb2xsaWRlck1lc2gucG9zaXRpb24uY29weShvZmZzZXQpO1xyXG4gICAgICAgIC8vIHRoZSBuYW1lIGhhdmUgdG8gYmUgdGhpcyBpbiBvcmRlciB0byBleGNsdWRlIGNvbGxpZGVycyBmcm9tIGJvdW5kaW5nIGJveFxyXG4gICAgICAgIC8vIChTZWUgVmlld2VyLnRzLCBzZWFyY2ggZm9yIGNoaWxkLm5hbWUgPT09ICd2cm1Db2xsaWRlclNwaGVyZScpXHJcbiAgICAgICAgY29sbGlkZXJNZXNoLm5hbWUgPSAndnJtQ29sbGlkZXJTcGhlcmUnO1xyXG4gICAgICAgIC8vIFdlIHdpbGwgdXNlIHRoZSByYWRpdXMgb2YgdGhlIHNwaGVyZSBmb3IgY29sbGlzaW9uIHZzIGJvbmVzLlxyXG4gICAgICAgIC8vIGBib3VuZGluZ1NwaGVyZWAgbXVzdCBiZSBjcmVhdGVkIHRvIGNvbXB1dGUgdGhlIHJhZGl1cy5cclxuICAgICAgICBjb2xsaWRlck1lc2guZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbGxpZGVyTWVzaDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVlJNU3ByaW5nQm9uZUltcG9ydGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLlZSTVNwcmluZ0JvbmVJbXBvcnRlciA9IFZSTVNwcmluZ0JvbmVJbXBvcnRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5WUk1TcHJpbmdCb25lTWFuYWdlciA9IHZvaWQgMDtcclxuLyoqXHJcbiAqIEEgY2xhc3MgbWFuYWdlcyBldmVyeSBzcHJpbmcgYm9uZXMgb24gYSBWUk0uXHJcbiAqL1xyXG52YXIgVlJNU3ByaW5nQm9uZU1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBbW1ZSTVNwcmluZ0JvbmVNYW5hZ2VyXV1cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3ByaW5nQm9uZUdyb3VwTGlzdCBBbiBhcnJheSBvZiBbW1ZSTVNwcmluZ0JvbmVHcm91cF1dXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFZSTVNwcmluZ0JvbmVNYW5hZ2VyKGNvbGxpZGVyR3JvdXBzLCBzcHJpbmdCb25lR3JvdXBMaXN0KSB7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlckdyb3VwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3ByaW5nQm9uZUdyb3VwTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXJHcm91cHMgPSBjb2xsaWRlckdyb3VwcztcclxuICAgICAgICB0aGlzLnNwcmluZ0JvbmVHcm91cExpc3QgPSBzcHJpbmdCb25lR3JvdXBMaXN0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYWxsIGJvbmVzIGJlIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIHNwYWNlIHJlbGF0aXZlIGZyb20gdGhpcyBvYmplY3QuXHJcbiAgICAgKiBJZiBgbnVsbGAgaXMgZ2l2ZW4sIHNwcmluZ2JvbmUgd2lsbCBiZSBjYWxjdWxhdGVkIGluIHdvcmxkIHNwYWNlLlxyXG4gICAgICogQHBhcmFtIHJvb3QgUm9vdCBvYmplY3QsIG9yIGBudWxsYFxyXG4gICAgICovXHJcbiAgICBWUk1TcHJpbmdCb25lTWFuYWdlci5wcm90b3R5cGUuc2V0Q2VudGVyID0gZnVuY3Rpb24gKHJvb3QpIHtcclxuICAgICAgICB0aGlzLnNwcmluZ0JvbmVHcm91cExpc3QuZm9yRWFjaChmdW5jdGlvbiAoc3ByaW5nQm9uZUdyb3VwKSB7XHJcbiAgICAgICAgICAgIHNwcmluZ0JvbmVHcm91cC5mb3JFYWNoKGZ1bmN0aW9uIChzcHJpbmdCb25lKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpbmdCb25lLmNlbnRlciA9IHJvb3Q7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIGV2ZXJ5IHNwcmluZyBib25lIGF0dGFjaGVkIHRvIHRoaXMgbWFuYWdlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZGVsdGEgZGVsdGFUaW1lXHJcbiAgICAgKi9cclxuICAgIFZSTVNwcmluZ0JvbmVNYW5hZ2VyLnByb3RvdHlwZS5sYXRlVXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpbmdCb25lR3JvdXBMaXN0LmZvckVhY2goZnVuY3Rpb24gKHNwcmluZ0JvbmVHcm91cCkge1xyXG4gICAgICAgICAgICBzcHJpbmdCb25lR3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoc3ByaW5nQm9uZSkge1xyXG4gICAgICAgICAgICAgICAgc3ByaW5nQm9uZS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IGV2ZXJ5IHNwcmluZyBib25lIGF0dGFjaGVkIHRvIHRoaXMgbWFuYWdlci5cclxuICAgICAqL1xyXG4gICAgVlJNU3ByaW5nQm9uZU1hbmFnZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3ByaW5nQm9uZUdyb3VwTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChzcHJpbmdCb25lR3JvdXApIHtcclxuICAgICAgICAgICAgc3ByaW5nQm9uZUdyb3VwLmZvckVhY2goZnVuY3Rpb24gKHNwcmluZ0JvbmUpIHtcclxuICAgICAgICAgICAgICAgIHNwcmluZ0JvbmUucmVzZXQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZSTVNwcmluZ0JvbmVNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnRzLlZSTVNwcmluZ0JvbmVNYW5hZ2VyID0gVlJNU3ByaW5nQm9uZU1hbmFnZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vVlJNU3ByaW5nQm9uZVwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9WUk1TcHJpbmdCb25lQ29sbGlkZXJHcm91cFwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9WUk1TcHJpbmdCb25lSW1wb3J0ZXJcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vVlJNU3ByaW5nQm9uZU1hbmFnZXJcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vVlJNU3ByaW5nQm9uZVBhcmFtZXRlcnNcIiksIGV4cG9ydHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLy8gVHlwZWRvYyBkb2VzIG5vdCBzdXBwb3J0IGV4cG9ydCBkZWNsYXJhdGlvbnMgeWV0XHJcbi8vIHRoZW4gd2UgaGF2ZSB0byB1c2UgYG5hbWVzcGFjZWAgaW5zdGVhZCBvZiBleHBvcnQgZGVjbGFyYXRpb25zIGZvciBub3cuXHJcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL1R5cGVTdHJvbmcvdHlwZWRvYy9wdWxsLzgwMVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vLyBUeXBlZG9jIGRvZXMgbm90IHN1cHBvcnQgZXhwb3J0IGRlY2xhcmF0aW9ucyB5ZXRcclxuLy8gdGhlbiB3ZSBoYXZlIHRvIHVzZSBgbmFtZXNwYWNlYCBpbnN0ZWFkIG9mIGV4cG9ydCBkZWNsYXJhdGlvbnMgZm9yIG5vdy5cclxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vVHlwZVN0cm9uZy90eXBlZG9jL3B1bGwvODAxXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5WUk1TY2hlbWEgPSB2b2lkIDA7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXHJcbnZhciBWUk1TY2hlbWE7XHJcbihmdW5jdGlvbiAoVlJNU2NoZW1hKSB7XHJcbiAgICAvKipcclxuICAgICAqIFByZWRlZmluZWQgRXhwcmVzc2lvbiBuYW1lXHJcbiAgICAgKi9cclxuICAgIHZhciBCbGVuZFNoYXBlUHJlc2V0TmFtZTtcclxuICAgIChmdW5jdGlvbiAoQmxlbmRTaGFwZVByZXNldE5hbWUpIHtcclxuICAgICAgICBCbGVuZFNoYXBlUHJlc2V0TmFtZVtcIkFcIl0gPSBcImFcIjtcclxuICAgICAgICBCbGVuZFNoYXBlUHJlc2V0TmFtZVtcIkFuZ3J5XCJdID0gXCJhbmdyeVwiO1xyXG4gICAgICAgIEJsZW5kU2hhcGVQcmVzZXROYW1lW1wiQmxpbmtcIl0gPSBcImJsaW5rXCI7XHJcbiAgICAgICAgQmxlbmRTaGFwZVByZXNldE5hbWVbXCJCbGlua0xcIl0gPSBcImJsaW5rX2xcIjtcclxuICAgICAgICBCbGVuZFNoYXBlUHJlc2V0TmFtZVtcIkJsaW5rUlwiXSA9IFwiYmxpbmtfclwiO1xyXG4gICAgICAgIEJsZW5kU2hhcGVQcmVzZXROYW1lW1wiRVwiXSA9IFwiZVwiO1xyXG4gICAgICAgIEJsZW5kU2hhcGVQcmVzZXROYW1lW1wiRnVuXCJdID0gXCJmdW5cIjtcclxuICAgICAgICBCbGVuZFNoYXBlUHJlc2V0TmFtZVtcIklcIl0gPSBcImlcIjtcclxuICAgICAgICBCbGVuZFNoYXBlUHJlc2V0TmFtZVtcIkpveVwiXSA9IFwiam95XCI7XHJcbiAgICAgICAgQmxlbmRTaGFwZVByZXNldE5hbWVbXCJMb29rZG93blwiXSA9IFwibG9va2Rvd25cIjtcclxuICAgICAgICBCbGVuZFNoYXBlUHJlc2V0TmFtZVtcIkxvb2tsZWZ0XCJdID0gXCJsb29rbGVmdFwiO1xyXG4gICAgICAgIEJsZW5kU2hhcGVQcmVzZXROYW1lW1wiTG9va3JpZ2h0XCJdID0gXCJsb29rcmlnaHRcIjtcclxuICAgICAgICBCbGVuZFNoYXBlUHJlc2V0TmFtZVtcIkxvb2t1cFwiXSA9IFwibG9va3VwXCI7XHJcbiAgICAgICAgQmxlbmRTaGFwZVByZXNldE5hbWVbXCJOZXV0cmFsXCJdID0gXCJuZXV0cmFsXCI7XHJcbiAgICAgICAgQmxlbmRTaGFwZVByZXNldE5hbWVbXCJPXCJdID0gXCJvXCI7XHJcbiAgICAgICAgQmxlbmRTaGFwZVByZXNldE5hbWVbXCJTb3Jyb3dcIl0gPSBcInNvcnJvd1wiO1xyXG4gICAgICAgIEJsZW5kU2hhcGVQcmVzZXROYW1lW1wiVVwiXSA9IFwidVwiO1xyXG4gICAgICAgIEJsZW5kU2hhcGVQcmVzZXROYW1lW1wiVW5rbm93blwiXSA9IFwidW5rbm93blwiO1xyXG4gICAgfSkoQmxlbmRTaGFwZVByZXNldE5hbWUgPSBWUk1TY2hlbWEuQmxlbmRTaGFwZVByZXNldE5hbWUgfHwgKFZSTVNjaGVtYS5CbGVuZFNoYXBlUHJlc2V0TmFtZSA9IHt9KSk7XHJcbiAgICAvKipcclxuICAgICAqIEV5ZSBjb250cm9sbGVyIG1vZGUuXHJcbiAgICAgKi9cclxuICAgIHZhciBGaXJzdFBlcnNvbkxvb2tBdFR5cGVOYW1lO1xyXG4gICAgKGZ1bmN0aW9uIChGaXJzdFBlcnNvbkxvb2tBdFR5cGVOYW1lKSB7XHJcbiAgICAgICAgRmlyc3RQZXJzb25Mb29rQXRUeXBlTmFtZVtcIkJsZW5kU2hhcGVcIl0gPSBcIkJsZW5kU2hhcGVcIjtcclxuICAgICAgICBGaXJzdFBlcnNvbkxvb2tBdFR5cGVOYW1lW1wiQm9uZVwiXSA9IFwiQm9uZVwiO1xyXG4gICAgfSkoRmlyc3RQZXJzb25Mb29rQXRUeXBlTmFtZSA9IFZSTVNjaGVtYS5GaXJzdFBlcnNvbkxvb2tBdFR5cGVOYW1lIHx8IChWUk1TY2hlbWEuRmlyc3RQZXJzb25Mb29rQXRUeXBlTmFtZSA9IHt9KSk7XHJcbiAgICAvKipcclxuICAgICAqIEh1bWFuIGJvbmUgbmFtZS5cclxuICAgICAqL1xyXG4gICAgdmFyIEh1bWFub2lkQm9uZU5hbWU7XHJcbiAgICAoZnVuY3Rpb24gKEh1bWFub2lkQm9uZU5hbWUpIHtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiQ2hlc3RcIl0gPSBcImNoZXN0XCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIkhlYWRcIl0gPSBcImhlYWRcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiSGlwc1wiXSA9IFwiaGlwc1wiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJKYXdcIl0gPSBcImphd1wiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJMZWZ0RXllXCJdID0gXCJsZWZ0RXllXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIkxlZnRGb290XCJdID0gXCJsZWZ0Rm9vdFwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJMZWZ0SGFuZFwiXSA9IFwibGVmdEhhbmRcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiTGVmdEluZGV4RGlzdGFsXCJdID0gXCJsZWZ0SW5kZXhEaXN0YWxcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiTGVmdEluZGV4SW50ZXJtZWRpYXRlXCJdID0gXCJsZWZ0SW5kZXhJbnRlcm1lZGlhdGVcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiTGVmdEluZGV4UHJveGltYWxcIl0gPSBcImxlZnRJbmRleFByb3hpbWFsXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIkxlZnRMaXR0bGVEaXN0YWxcIl0gPSBcImxlZnRMaXR0bGVEaXN0YWxcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiTGVmdExpdHRsZUludGVybWVkaWF0ZVwiXSA9IFwibGVmdExpdHRsZUludGVybWVkaWF0ZVwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJMZWZ0TGl0dGxlUHJveGltYWxcIl0gPSBcImxlZnRMaXR0bGVQcm94aW1hbFwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJMZWZ0TG93ZXJBcm1cIl0gPSBcImxlZnRMb3dlckFybVwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJMZWZ0TG93ZXJMZWdcIl0gPSBcImxlZnRMb3dlckxlZ1wiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJMZWZ0TWlkZGxlRGlzdGFsXCJdID0gXCJsZWZ0TWlkZGxlRGlzdGFsXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIkxlZnRNaWRkbGVJbnRlcm1lZGlhdGVcIl0gPSBcImxlZnRNaWRkbGVJbnRlcm1lZGlhdGVcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiTGVmdE1pZGRsZVByb3hpbWFsXCJdID0gXCJsZWZ0TWlkZGxlUHJveGltYWxcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiTGVmdFJpbmdEaXN0YWxcIl0gPSBcImxlZnRSaW5nRGlzdGFsXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIkxlZnRSaW5nSW50ZXJtZWRpYXRlXCJdID0gXCJsZWZ0UmluZ0ludGVybWVkaWF0ZVwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJMZWZ0UmluZ1Byb3hpbWFsXCJdID0gXCJsZWZ0UmluZ1Byb3hpbWFsXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIkxlZnRTaG91bGRlclwiXSA9IFwibGVmdFNob3VsZGVyXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIkxlZnRUaHVtYkRpc3RhbFwiXSA9IFwibGVmdFRodW1iRGlzdGFsXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIkxlZnRUaHVtYkludGVybWVkaWF0ZVwiXSA9IFwibGVmdFRodW1iSW50ZXJtZWRpYXRlXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIkxlZnRUaHVtYlByb3hpbWFsXCJdID0gXCJsZWZ0VGh1bWJQcm94aW1hbFwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJMZWZ0VG9lc1wiXSA9IFwibGVmdFRvZXNcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiTGVmdFVwcGVyQXJtXCJdID0gXCJsZWZ0VXBwZXJBcm1cIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiTGVmdFVwcGVyTGVnXCJdID0gXCJsZWZ0VXBwZXJMZWdcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiTmVja1wiXSA9IFwibmVja1wiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJSaWdodEV5ZVwiXSA9IFwicmlnaHRFeWVcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiUmlnaHRGb290XCJdID0gXCJyaWdodEZvb3RcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiUmlnaHRIYW5kXCJdID0gXCJyaWdodEhhbmRcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiUmlnaHRJbmRleERpc3RhbFwiXSA9IFwicmlnaHRJbmRleERpc3RhbFwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJSaWdodEluZGV4SW50ZXJtZWRpYXRlXCJdID0gXCJyaWdodEluZGV4SW50ZXJtZWRpYXRlXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIlJpZ2h0SW5kZXhQcm94aW1hbFwiXSA9IFwicmlnaHRJbmRleFByb3hpbWFsXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIlJpZ2h0TGl0dGxlRGlzdGFsXCJdID0gXCJyaWdodExpdHRsZURpc3RhbFwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJSaWdodExpdHRsZUludGVybWVkaWF0ZVwiXSA9IFwicmlnaHRMaXR0bGVJbnRlcm1lZGlhdGVcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiUmlnaHRMaXR0bGVQcm94aW1hbFwiXSA9IFwicmlnaHRMaXR0bGVQcm94aW1hbFwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJSaWdodExvd2VyQXJtXCJdID0gXCJyaWdodExvd2VyQXJtXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIlJpZ2h0TG93ZXJMZWdcIl0gPSBcInJpZ2h0TG93ZXJMZWdcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiUmlnaHRNaWRkbGVEaXN0YWxcIl0gPSBcInJpZ2h0TWlkZGxlRGlzdGFsXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIlJpZ2h0TWlkZGxlSW50ZXJtZWRpYXRlXCJdID0gXCJyaWdodE1pZGRsZUludGVybWVkaWF0ZVwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJSaWdodE1pZGRsZVByb3hpbWFsXCJdID0gXCJyaWdodE1pZGRsZVByb3hpbWFsXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIlJpZ2h0UmluZ0Rpc3RhbFwiXSA9IFwicmlnaHRSaW5nRGlzdGFsXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIlJpZ2h0UmluZ0ludGVybWVkaWF0ZVwiXSA9IFwicmlnaHRSaW5nSW50ZXJtZWRpYXRlXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIlJpZ2h0UmluZ1Byb3hpbWFsXCJdID0gXCJyaWdodFJpbmdQcm94aW1hbFwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJSaWdodFNob3VsZGVyXCJdID0gXCJyaWdodFNob3VsZGVyXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIlJpZ2h0VGh1bWJEaXN0YWxcIl0gPSBcInJpZ2h0VGh1bWJEaXN0YWxcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiUmlnaHRUaHVtYkludGVybWVkaWF0ZVwiXSA9IFwicmlnaHRUaHVtYkludGVybWVkaWF0ZVwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJSaWdodFRodW1iUHJveGltYWxcIl0gPSBcInJpZ2h0VGh1bWJQcm94aW1hbFwiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJSaWdodFRvZXNcIl0gPSBcInJpZ2h0VG9lc1wiO1xyXG4gICAgICAgIEh1bWFub2lkQm9uZU5hbWVbXCJSaWdodFVwcGVyQXJtXCJdID0gXCJyaWdodFVwcGVyQXJtXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIlJpZ2h0VXBwZXJMZWdcIl0gPSBcInJpZ2h0VXBwZXJMZWdcIjtcclxuICAgICAgICBIdW1hbm9pZEJvbmVOYW1lW1wiU3BpbmVcIl0gPSBcInNwaW5lXCI7XHJcbiAgICAgICAgSHVtYW5vaWRCb25lTmFtZVtcIlVwcGVyQ2hlc3RcIl0gPSBcInVwcGVyQ2hlc3RcIjtcclxuICAgIH0pKEh1bWFub2lkQm9uZU5hbWUgPSBWUk1TY2hlbWEuSHVtYW5vaWRCb25lTmFtZSB8fCAoVlJNU2NoZW1hLkh1bWFub2lkQm9uZU5hbWUgPSB7fSkpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHBlcnNvbiB3aG8gY2FuIHBlcmZvcm0gd2l0aCB0aGlzIGF2YXRhclxyXG4gICAgICovXHJcbiAgICB2YXIgTWV0YUFsbG93ZWRVc2VyTmFtZTtcclxuICAgIChmdW5jdGlvbiAoTWV0YUFsbG93ZWRVc2VyTmFtZSkge1xyXG4gICAgICAgIE1ldGFBbGxvd2VkVXNlck5hbWVbXCJFdmVyeW9uZVwiXSA9IFwiRXZlcnlvbmVcIjtcclxuICAgICAgICBNZXRhQWxsb3dlZFVzZXJOYW1lW1wiRXhwbGljaXRseUxpY2Vuc2VkUGVyc29uXCJdID0gXCJFeHBsaWNpdGx5TGljZW5zZWRQZXJzb25cIjtcclxuICAgICAgICBNZXRhQWxsb3dlZFVzZXJOYW1lW1wiT25seUF1dGhvclwiXSA9IFwiT25seUF1dGhvclwiO1xyXG4gICAgfSkoTWV0YUFsbG93ZWRVc2VyTmFtZSA9IFZSTVNjaGVtYS5NZXRhQWxsb3dlZFVzZXJOYW1lIHx8IChWUk1TY2hlbWEuTWV0YUFsbG93ZWRVc2VyTmFtZSA9IHt9KSk7XHJcbiAgICAvKipcclxuICAgICAqIEZvciBjb21tZXJjaWFsIHVzZVxyXG4gICAgICpcclxuICAgICAqIFBlcm1pc3Npb24gdG8gcGVyZm9ybSBzZXh1YWwgYWN0cyB3aXRoIHRoaXMgYXZhdGFyXHJcbiAgICAgKlxyXG4gICAgICogUGVybWlzc2lvbiB0byBwZXJmb3JtIHZpb2xlbnQgYWN0cyB3aXRoIHRoaXMgYXZhdGFyXHJcbiAgICAgKi9cclxuICAgIHZhciBNZXRhVXNzYWdlTmFtZTtcclxuICAgIChmdW5jdGlvbiAoTWV0YVVzc2FnZU5hbWUpIHtcclxuICAgICAgICBNZXRhVXNzYWdlTmFtZVtcIkFsbG93XCJdID0gXCJBbGxvd1wiO1xyXG4gICAgICAgIE1ldGFVc3NhZ2VOYW1lW1wiRGlzYWxsb3dcIl0gPSBcIkRpc2FsbG93XCI7XHJcbiAgICB9KShNZXRhVXNzYWdlTmFtZSA9IFZSTVNjaGVtYS5NZXRhVXNzYWdlTmFtZSB8fCAoVlJNU2NoZW1hLk1ldGFVc3NhZ2VOYW1lID0ge30pKTtcclxuICAgIC8qKlxyXG4gICAgICogTGljZW5zZSB0eXBlXHJcbiAgICAgKi9cclxuICAgIHZhciBNZXRhTGljZW5zZU5hbWU7XHJcbiAgICAoZnVuY3Rpb24gKE1ldGFMaWNlbnNlTmFtZSkge1xyXG4gICAgICAgIE1ldGFMaWNlbnNlTmFtZVtcIkNjMFwiXSA9IFwiQ0MwXCI7XHJcbiAgICAgICAgTWV0YUxpY2Vuc2VOYW1lW1wiQ2NCeVwiXSA9IFwiQ0NfQllcIjtcclxuICAgICAgICBNZXRhTGljZW5zZU5hbWVbXCJDY0J5TmNcIl0gPSBcIkNDX0JZX05DXCI7XHJcbiAgICAgICAgTWV0YUxpY2Vuc2VOYW1lW1wiQ2NCeU5jTmRcIl0gPSBcIkNDX0JZX05DX05EXCI7XHJcbiAgICAgICAgTWV0YUxpY2Vuc2VOYW1lW1wiQ2NCeU5jU2FcIl0gPSBcIkNDX0JZX05DX1NBXCI7XHJcbiAgICAgICAgTWV0YUxpY2Vuc2VOYW1lW1wiQ2NCeU5kXCJdID0gXCJDQ19CWV9ORFwiO1xyXG4gICAgICAgIE1ldGFMaWNlbnNlTmFtZVtcIkNjQnlTYVwiXSA9IFwiQ0NfQllfU0FcIjtcclxuICAgICAgICBNZXRhTGljZW5zZU5hbWVbXCJPdGhlclwiXSA9IFwiT3RoZXJcIjtcclxuICAgICAgICBNZXRhTGljZW5zZU5hbWVbXCJSZWRpc3RyaWJ1dGlvblByb2hpYml0ZWRcIl0gPSBcIlJlZGlzdHJpYnV0aW9uX1Byb2hpYml0ZWRcIjtcclxuICAgIH0pKE1ldGFMaWNlbnNlTmFtZSA9IFZSTVNjaGVtYS5NZXRhTGljZW5zZU5hbWUgfHwgKFZSTVNjaGVtYS5NZXRhTGljZW5zZU5hbWUgPSB7fSkpO1xyXG59KShWUk1TY2hlbWEgPSBleHBvcnRzLlZSTVNjaGVtYSB8fCAoZXhwb3J0cy5WUk1TY2hlbWEgPSB7fSkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLy8gVHlwZWRvYyBkb2VzIG5vdCBzdXBwb3J0IGV4cG9ydCBkZWNsYXJhdGlvbnMgeWV0XHJcbi8vIHRoZW4gd2UgaGF2ZSB0byB1c2UgYG5hbWVzcGFjZWAgaW5zdGVhZCBvZiBleHBvcnQgZGVjbGFyYXRpb25zIGZvciBub3cuXHJcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL1R5cGVTdHJvbmcvdHlwZWRvYy9wdWxsLzgwMVxyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vLyBpbXBvcnQgKiBhcyBHTFRGU2NoZW1hIGZyb20gJy4vR0xURlNjaGVtYSc7XHJcbi8vIGltcG9ydCAqIGFzIFZSTVNjaGVtYSBmcm9tICcuL1ZSTVNjaGVtYSc7XHJcbi8vIGV4cG9ydCB7IEdMVEZTY2hlbWEsIFZSTVNjaGVtYSB9O1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vR0xURlNjaGVtYVwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9WUk1TY2hlbWFcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksIGV4cG9ydHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk1hdHJpeDRJbnZlcnNlQ2FjaGUgPSB2b2lkIDA7XHJcbnZhciBUSFJFRSA9IHJlcXVpcmUoXCJ0aHJlZVwiKTtcclxudmFyIE1hdHJpeDRJbnZlcnNlQ2FjaGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRyaXg0SW52ZXJzZUNhY2hlKG1hdHJpeCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBjYWNoZSBvZiBpbnZlcnNlIG9mIGN1cnJlbnQgbWF0cml4LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2ludmVyc2VDYWNoZSA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBmbGFnIHRoYXQgbWFrZXMgaXQgd2FudCB0byByZWNhbGN1bGF0ZSBpdHMge0BsaW5rIF9pbnZlcnNlQ2FjaGV9LlxyXG4gICAgICAgICAqIFdpbGwgYmUgc2V0IGB0cnVlYCB3aGVuIGBlbGVtZW50c2AgYXJlIG11dGF0ZWQgYW5kIGJlIHVzZWQgaW4gYGdldEludmVyc2VgLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX3Nob3VsZFVwZGF0ZUludmVyc2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xyXG4gICAgICAgIHZhciBoYW5kbGVyID0ge1xyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChvYmosIHByb3AsIG5ld1ZhbCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX3Nob3VsZFVwZGF0ZUludmVyc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gbmV3VmFsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9vcmlnaW5hbEVsZW1lbnRzID0gbWF0cml4LmVsZW1lbnRzO1xyXG4gICAgICAgIG1hdHJpeC5lbGVtZW50cyA9IG5ldyBQcm94eShtYXRyaXguZWxlbWVudHMsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDRJbnZlcnNlQ2FjaGUucHJvdG90eXBlLCBcImludmVyc2VcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludmVyc2Ugb2YgZ2l2ZW4gbWF0cml4LlxyXG4gICAgICAgICAqIE5vdGUgdGhhdCBpdCB3aWxsIHJldHVybiBpdHMgaW50ZXJuYWwgcHJpdmF0ZSBpbnN0YW5jZS5cclxuICAgICAgICAgKiBNYWtlIHN1cmUgY29weWluZyB0aGlzIGJlZm9yZSBtdXRhdGUgdGhpcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFVwZGF0ZUludmVyc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ludmVyc2VDYWNoZS5nZXRJbnZlcnNlKHRoaXMubWF0cml4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3VsZFVwZGF0ZUludmVyc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW52ZXJzZUNhY2hlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1hdHJpeDRJbnZlcnNlQ2FjaGUucHJvdG90eXBlLnJldmVydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1hdHJpeC5lbGVtZW50cyA9IHRoaXMuX29yaWdpbmFsRWxlbWVudHM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hdHJpeDRJbnZlcnNlQ2FjaGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTWF0cml4NEludmVyc2VDYWNoZSA9IE1hdHJpeDRJbnZlcnNlQ2FjaGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vLyBTZWU6IGh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy8jbWFudWFsL2VuL2ludHJvZHVjdGlvbi9Ib3ctdG8tZGlzcG9zZS1vZi1vYmplY3RzXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWVwRGlzcG9zZSA9IHZvaWQgMDtcclxuZnVuY3Rpb24gZGlzcG9zZU1hdGVyaWFsKG1hdGVyaWFsKSB7XHJcbiAgICBPYmplY3Qua2V5cyhtYXRlcmlhbCkuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gbWF0ZXJpYWxbcHJvcGVydHlOYW1lXTtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLmlzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICB2YXIgdGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIG1hdGVyaWFsLmRpc3Bvc2UoKTtcclxufVxyXG5mdW5jdGlvbiBkaXNwb3NlKG9iamVjdDNEKSB7XHJcbiAgICB2YXIgZ2VvbWV0cnkgPSBvYmplY3QzRC5nZW9tZXRyeTtcclxuICAgIGlmIChnZW9tZXRyeSkge1xyXG4gICAgICAgIGdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICAgIHZhciBtYXRlcmlhbCA9IG9iamVjdDNELm1hdGVyaWFsO1xyXG4gICAgaWYgKG1hdGVyaWFsKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLmZvckVhY2goZnVuY3Rpb24gKG1hdGVyaWFsKSB7IHJldHVybiBkaXNwb3NlTWF0ZXJpYWwobWF0ZXJpYWwpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgZGlzcG9zZU1hdGVyaWFsKG1hdGVyaWFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGVlcERpc3Bvc2Uob2JqZWN0M0QpIHtcclxuICAgIG9iamVjdDNELnRyYXZlcnNlKGRpc3Bvc2UpO1xyXG59XHJcbmV4cG9ydHMuZGVlcERpc3Bvc2UgPSBkZWVwRGlzcG9zZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZXRXb3JsZFF1YXRlcm5pb25MaXRlID0gZXhwb3J0cy5nZXRXb3JsZFNjYWxlTGl0ZSA9IGV4cG9ydHMuZ2V0V29ybGRQb3NpdGlvbkxpdGUgPSBleHBvcnRzLmxpbnN0ZXAgPSBleHBvcnRzLnNhdHVyYXRlID0gdm9pZCAwO1xyXG52YXIgVEhSRUUgPSByZXF1aXJlKFwidGhyZWVcIik7XHJcbi8qKlxyXG4gKiBDbGFtcCBhbiBpbnB1dCBudW1iZXIgd2l0aGluIFsgYDAuMGAgLSBgMS4wYCBdLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgVGhlIGlucHV0IHZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiBzYXR1cmF0ZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCAxLjApLCAwLjApO1xyXG59XHJcbmV4cG9ydHMuc2F0dXJhdGUgPSBzYXR1cmF0ZTtcclxuLyoqXHJcbiAqIE1hcCB0aGUgcmFuZ2Ugb2YgYW4gaW5wdXQgdmFsdWUgZnJvbSBbIGBtaW5gIC0gYG1heGAgXSB0byBbIGAwLjBgIC0gYDEuMGAgXS5cclxuICogSWYgaW5wdXQgdmFsdWUgaXMgbGVzcyB0aGFuIGBtaW5gICwgaXQgcmV0dXJucyBgMC4wYC5cclxuICogSWYgaW5wdXQgdmFsdWUgaXMgZ3JlYXRlciB0aGFuIGBtYXhgICwgaXQgcmV0dXJucyBgMS4wYC5cclxuICpcclxuICogU2VlIGFsc286IGh0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy8jYXBpL2VuL21hdGgvTWF0aC5zbW9vdGhzdGVwXHJcbiAqXHJcbiAqIEBwYXJhbSB4IFRoZSB2YWx1ZSB0aGF0IHdpbGwgYmUgbWFwcGVkIGludG8gdGhlIHNwZWNpZmllZCByYW5nZVxyXG4gKiBAcGFyYW0gbWluIE1pbmltdW0gdmFsdWUgb2YgdGhlIHJhbmdlXHJcbiAqIEBwYXJhbSBtYXggTWF4aW11bSB2YWx1ZSBvZiB0aGUgcmFuZ2VcclxuICovXHJcbmZ1bmN0aW9uIGxpbnN0ZXAoeCwgbWluLCBtYXgpIHtcclxuICAgIGlmICh4IDw9IG1pbilcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIGlmICh4ID49IG1heClcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIHJldHVybiAoeCAtIG1pbikgLyAobWF4IC0gbWluKTtcclxufVxyXG5leHBvcnRzLmxpbnN0ZXAgPSBsaW5zdGVwO1xyXG52YXIgX3Bvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxudmFyIF9zY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbnZhciBfcm90YXRpb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG4vKipcclxuICogRXh0cmFjdCB3b3JsZCBwb3NpdGlvbiBvZiBhbiBvYmplY3QgZnJvbSBpdHMgd29ybGQgc3BhY2UgbWF0cml4LCBpbiBjaGVhcGVyIHdheS5cclxuICpcclxuICogQHBhcmFtIG9iamVjdCBUaGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBvdXQgVGFyZ2V0IHZlY3RvclxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0V29ybGRQb3NpdGlvbkxpdGUob2JqZWN0LCBvdXQpIHtcclxuICAgIG9iamVjdC5tYXRyaXhXb3JsZC5kZWNvbXBvc2Uob3V0LCBfcm90YXRpb24sIF9zY2FsZSk7XHJcbiAgICByZXR1cm4gb3V0O1xyXG59XHJcbmV4cG9ydHMuZ2V0V29ybGRQb3NpdGlvbkxpdGUgPSBnZXRXb3JsZFBvc2l0aW9uTGl0ZTtcclxuLyoqXHJcbiAqIEV4dHJhY3Qgd29ybGQgc2NhbGUgb2YgYW4gb2JqZWN0IGZyb20gaXRzIHdvcmxkIHNwYWNlIG1hdHJpeCwgaW4gY2hlYXBlciB3YXkuXHJcbiAqXHJcbiAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdFxyXG4gKiBAcGFyYW0gb3V0IFRhcmdldCB2ZWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIGdldFdvcmxkU2NhbGVMaXRlKG9iamVjdCwgb3V0KSB7XHJcbiAgICBvYmplY3QubWF0cml4V29ybGQuZGVjb21wb3NlKF9wb3NpdGlvbiwgX3JvdGF0aW9uLCBvdXQpO1xyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5leHBvcnRzLmdldFdvcmxkU2NhbGVMaXRlID0gZ2V0V29ybGRTY2FsZUxpdGU7XHJcbi8qKlxyXG4gKiBFeHRyYWN0IHdvcmxkIHJvdGF0aW9uIG9mIGFuIG9iamVjdCBmcm9tIGl0cyB3b3JsZCBzcGFjZSBtYXRyaXgsIGluIGNoZWFwZXIgd2F5LlxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqZWN0IFRoZSBvYmplY3RcclxuICogQHBhcmFtIG91dCBUYXJnZXQgdmVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRXb3JsZFF1YXRlcm5pb25MaXRlKG9iamVjdCwgb3V0KSB7XHJcbiAgICBvYmplY3QubWF0cml4V29ybGQuZGVjb21wb3NlKF9wb3NpdGlvbiwgb3V0LCBfc2NhbGUpO1xyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5leHBvcnRzLmdldFdvcmxkUXVhdGVybmlvbkxpdGUgPSBnZXRXb3JsZFF1YXRlcm5pb25MaXRlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnJlbmFtZU1hdGVyaWFsUHJvcGVydHkgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIHJlbmFtZU1hdGVyaWFsUHJvcGVydHkobmFtZSkge1xyXG4gICAgaWYgKG5hbWVbMF0gIT09ICdfJykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcInJlbmFtZU1hdGVyaWFsUHJvcGVydHk6IEdpdmVuIHByb3BlcnR5IG5hbWUgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBtaWdodCBiZSBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG4gICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QobmFtZVswXSkpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJyZW5hbWVNYXRlcmlhbFByb3BlcnR5OiBHaXZlbiBwcm9wZXJ0eSBuYW1lIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgbWlnaHQgYmUgaW52YWxpZFwiKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBuYW1lWzBdLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnN1YnN0cmluZygxKTtcclxufVxyXG5leHBvcnRzLnJlbmFtZU1hdGVyaWFsUHJvcGVydHkgPSByZW5hbWVNYXRlcmlhbFByb3BlcnR5O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFRIUkVFOyJdLCJzb3VyY2VSb290IjoiIn0=