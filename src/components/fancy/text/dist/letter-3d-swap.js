'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var utils_1 = require("@/lib/utils");
// Split text into characters respecting emojis
var splitIntoCharacters = function (text) {
    if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
        var segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
        return Array.from(segmenter.segment(text), function (_a) {
            var segment = _a.segment;
            return segment;
        });
    }
    return Array.from(text);
};
function Letter3DSwap(_a) {
    var _this = this;
    var children = _a.children, _b = _a.as, Component = _b === void 0 ? 'p' : _b, mainClassName = _a.mainClassName, frontFaceClassName = _a.frontFaceClassName, secondFaceClassName = _a.secondFaceClassName, _c = _a.staggerDuration, staggerDuration = _c === void 0 ? 0.05 : _c, _d = _a.staggerFrom, staggerFrom = _d === void 0 ? 'first' : _d, _e = _a.transition, transition = _e === void 0 ? { type: 'spring', damping: 25, stiffness: 300 } : _e, _f = _a.rotateDirection, rotateDirection = _f === void 0 ? 'top' : _f;
    var text = typeof children === 'string' ? children : String(children);
    var _g = framer_motion_1.useAnimate(), scope = _g[0], animate = _g[1];
    var characters = react_1.useMemo(function () {
        var t = text.split(' ');
        return t.map(function (word, i) { return ({
            characters: splitIntoCharacters(word),
            needsSpace: i !== t.length - 1
        }); });
    }, [text]);
    var totalChars = react_1.useMemo(function () {
        return characters.reduce(function (acc, word) { return acc + word.characters.length; }, 0);
    }, [characters]);
    var getStaggerDelay = react_1.useCallback(function (index, total) {
        if (staggerFrom === 'first')
            return index * staggerDuration;
        if (staggerFrom === 'last')
            return (total - 1 - index) * staggerDuration;
        if (staggerFrom === 'center') {
            var center = Math.floor(total / 2);
            return Math.abs(center - index) * staggerDuration;
        }
        if (staggerFrom === 'random') {
            var randomIndex = Math.floor(Math.random() * total);
            return Math.abs(randomIndex - index) * staggerDuration;
        }
        return Math.abs(staggerFrom - index) * staggerDuration;
    }, [staggerFrom, staggerDuration]);
    var rotationTransform = react_1.useMemo(function () {
        switch (rotateDirection) {
            case 'top':
                return 'rotateX(-90deg)';
            case 'bottom':
                return 'rotateX(90deg)';
            case 'left':
                return 'rotateY(90deg)';
            case 'right':
                return 'rotateY(-90deg)';
            default:
                return 'rotateX(-90deg)';
        }
    }, [rotateDirection]);
    react_1.useEffect(function () {
        var runAnimation = function () { return __awaiter(_this, void 0, void 0, function () {
            var delays, charIndex, _i, characters_1, word, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delays = [];
                        charIndex = 0;
                        for (_i = 0, characters_1 = characters; _i < characters_1.length; _i++) {
                            word = characters_1[_i];
                            for (i = 0; i < word.characters.length; i++) {
                                delays.push(getStaggerDelay(charIndex, totalChars));
                                charIndex++;
                            }
                        }
                        return [4 /*yield*/, animate('.letter-3d-swap-char-box-item', { transform: rotationTransform }, __assign(__assign({}, transition), { delay: function (i) { return delays[i]; } }))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, animate('.letter-3d-swap-char-box-item', { transform: 'rotateX(0deg) rotateY(0deg)' }, { duration: 0 })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        // Initial delay before first animation
        var timeout = setTimeout(runAnimation, 600);
        // Set up interval to repeat
        var interval = setInterval(runAnimation, 4000);
        return function () {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [animate, characters, totalChars, getStaggerDelay, rotationTransform, transition]);
    // Get CSS transforms for front/second faces based on direction
    var getFrontFaceTransform = function () {
        if (rotateDirection === 'top' || rotateDirection === 'bottom') {
            return 'translateZ(0.5em)';
        }
        return 'rotateY(90deg) translateX(50%) rotateY(-90deg)';
    };
    var getSecondFaceTransform = function () {
        if (rotateDirection === 'top') {
            return 'rotateX(90deg) translateZ(0.5em)';
        }
        if (rotateDirection === 'bottom') {
            return 'rotateX(-90deg) translateZ(0.5em)';
        }
        if (rotateDirection === 'left') {
            return 'rotateY(90deg) translateX(50%) rotateY(-90deg) translateX(-50%) rotateY(-90deg) translateX(50%) rotateY(90deg)';
        }
        // right
        return 'rotateY(-90deg) translateX(-50%) rotateY(90deg) translateX(50%) rotateY(90deg) translateX(-50%) rotateY(-90deg)';
    };
    var getContainerTransform = function () {
        if (rotateDirection === 'top' || rotateDirection === 'bottom') {
            return 'translateZ(-0.5em)';
        }
        return '';
    };
    return (react_1["default"].createElement(Component, { ref: scope, className: utils_1.cn('flex flex-wrap items-center justify-center', mainClassName), style: { perspective: '800px' } }, characters.map(function (word, wordIndex) { return (react_1["default"].createElement("span", { key: wordIndex, className: "inline-flex" },
        word.characters.map(function (char, charIndex) { return (react_1["default"].createElement("span", { key: wordIndex + "-" + charIndex, className: "letter-3d-swap-char-box-item inline-block", style: {
                transformStyle: 'preserve-3d',
                transform: getContainerTransform()
            } },
            react_1["default"].createElement("span", { className: utils_1.cn('inline-block', frontFaceClassName), style: {
                    transform: getFrontFaceTransform(),
                    backfaceVisibility: 'hidden'
                } }, char),
            react_1["default"].createElement("span", { className: utils_1.cn('absolute inset-0 inline-block', secondFaceClassName), style: {
                    transform: getSecondFaceTransform(),
                    backfaceVisibility: 'hidden'
                } }, char))); }),
        word.needsSpace && react_1["default"].createElement("span", null, "\u00A0"))); })));
}
exports["default"] = Letter3DSwap;
