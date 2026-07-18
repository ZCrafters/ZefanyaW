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
exports.__esModule = true;
exports.ImageTrailItem = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var utils_1 = require("@/lib/utils");
/* ─── Math Utilities ─── */
var MathUtils = {
    lerp: function (a, b, n) { return (1 - n) * a + n * b; },
    distance: function (x1, y1, x2, y2) {
        return Math.hypot(x2 - x1, y2 - y1);
    }
};
/* ─── ImageTrailItem ─── */
function ImageTrailItem(_a) {
    var children = _a.children, className = _a.className, _b = _a.as, Component = _b === void 0 ? 'div' : _b;
    return (react_1["default"].createElement(Component, { className: utils_1.cn(className) }, children));
}
exports.ImageTrailItem = ImageTrailItem;
/* ─── ImageTrail ─── */
function ImageTrail(_a) {
    var children = _a.children, _b = _a.threshold, threshold = _b === void 0 ? 100 : _b, _c = _a.intensity, intensity = _c === void 0 ? 0.3 : _c, _d = _a.keyframes, keyframes = _d === void 0 ? { scale: [0, 1, 1, 0] } : _d, _e = _a.keyframesOptions, keyframesOptions = _e === void 0 ? { scale: { duration: 1, times: [0, 0.1, 0.9, 1] } } : _e, _f = _a.positionOptions, positionOptions = _f === void 0 ? {
        x: { duration: 1, type: 'tween', ease: 'easeOut' },
        y: { duration: 1, type: 'tween', ease: 'easeOut' }
    } : _f, _g = _a.repeatChildren, repeatChildren = _g === void 0 ? 3 : _g, _h = _a.zIndexOrder, zIndexOrder = _h === void 0 ? 'new-on-top' : _h, className = _a.className, _j = _a.as, Component = _j === void 0 ? 'div' : _j;
    var containerRef = react_1.useRef(null);
    var mousePos = react_1.useRef({ x: 0, y: 0 });
    var cachedMousePos = react_1.useRef({ x: 0, y: 0 });
    var lastTriggerPos = react_1.useRef({ x: 0, y: 0 });
    var currentIndex = react_1.useRef(0);
    var zCounter = react_1.useRef(0);
    var itemRefs = react_1.useRef([]);
    var rafId = react_1.useRef(0);
    var _k = react_1.useState(false), isActive = _k[0], setIsActive = _k[1];
    // Expand children by repeatChildren
    var childArray = react_1["default"].Children.toArray(children);
    var expandedChildren = [];
    for (var r = 0; r < repeatChildren; r++) {
        childArray.forEach(function (child) { return expandedChildren.push(child); });
    }
    var clampedIntensity = Math.max(0, Math.min(1, intensity));
    var handlePointerMove = react_1.useCallback(function (e) {
        if (!containerRef.current)
            return;
        var rect = containerRef.current.getBoundingClientRect();
        mousePos.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        if (!isActive)
            setIsActive(true);
    }, [isActive]);
    var handlePointerLeave = react_1.useCallback(function () {
        setIsActive(false);
    }, []);
    var triggerNextItem = react_1.useCallback(function () {
        var items = itemRefs.current.filter(Boolean);
        if (items.length === 0)
            return;
        var idx = currentIndex.current % items.length;
        var el = items[idx];
        // Show item
        el.style.display = 'block';
        // Z-index
        zCounter.current++;
        el.style.zIndex =
            zIndexOrder === 'new-on-top'
                ? String(zCounter.current)
                : String(1000 - zCounter.current);
        // Position animation
        framer_motion_1.animate(el, {
            x: cachedMousePos.current.x - el.offsetWidth / 2,
            y: cachedMousePos.current.y - el.offsetHeight / 2
        }, positionOptions.x || { duration: 1, type: 'tween', ease: 'easeOut' });
        // Visual keyframes animation
        var animPromise = framer_motion_1.animate(el, keyframes, keyframesOptions.scale || keyframesOptions);
        animPromise.then(function () {
            el.style.display = 'none';
        });
        currentIndex.current++;
    }, [keyframes, keyframesOptions, positionOptions, zIndexOrder]);
    // Animation loop
    react_1.useEffect(function () {
        var loop = function () {
            // Lerp cached position
            cachedMousePos.current.x = MathUtils.lerp(cachedMousePos.current.x || mousePos.current.x, mousePos.current.x, clampedIntensity);
            cachedMousePos.current.y = MathUtils.lerp(cachedMousePos.current.y || mousePos.current.y, mousePos.current.y, clampedIntensity);
            // Check distance threshold
            if (isActive) {
                var dist = MathUtils.distance(lastTriggerPos.current.x, lastTriggerPos.current.y, cachedMousePos.current.x, cachedMousePos.current.y);
                if (dist >= threshold) {
                    triggerNextItem();
                    lastTriggerPos.current = __assign({}, cachedMousePos.current);
                }
            }
            rafId.current = requestAnimationFrame(loop);
        };
        rafId.current = requestAnimationFrame(loop);
        return function () { return cancelAnimationFrame(rafId.current); };
    }, [isActive, threshold, clampedIntensity, triggerNextItem]);
    // Pointer listeners
    react_1.useEffect(function () {
        var el = containerRef.current;
        if (!el)
            return;
        el.addEventListener('pointermove', handlePointerMove);
        el.addEventListener('pointerleave', handlePointerLeave);
        return function () {
            el.removeEventListener('pointermove', handlePointerMove);
            el.removeEventListener('pointerleave', handlePointerLeave);
        };
    }, [handlePointerMove, handlePointerLeave]);
    return (react_1["default"].createElement(Component, { ref: containerRef, className: utils_1.cn('relative overflow-hidden', className) }, expandedChildren.map(function (child, i) { return (react_1["default"].createElement("div", { key: i, ref: function (el) {
            itemRefs.current[i] = el;
        }, className: "absolute top-0 left-0 hidden", style: { willChange: 'transform' } }, child)); })));
}
exports["default"] = ImageTrail;
