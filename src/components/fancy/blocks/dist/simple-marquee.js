'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var utils_1 = require("@/lib/utils");
function wrap(min, max, v) {
    var range = max - min;
    return ((((v - min) % range) + range) % range) + min;
}
function SimpleMarquee(_a) {
    var children = _a.children, className = _a.className, _b = _a.baseVelocity, baseVelocity = _b === void 0 ? 5 : _b, _c = _a.repeat, repeat = _c === void 0 ? 4 : _c, _d = _a.direction, direction = _d === void 0 ? 'left' : _d, _e = _a.slowdownOnHover, slowdownOnHover = _e === void 0 ? false : _e, _f = _a.slowDownFactor, slowDownFactor = _f === void 0 ? 0.5 : _f, _g = _a.scrollAwareDirection, scrollAwareDirection = _g === void 0 ? false : _g, _h = _a.useScrollVelocity, useScrollVelocity = _h === void 0 ? false : _h, scrollContainer = _a.scrollContainer, _j = _a.scrollSpringConfig, scrollSpringConfig = _j === void 0 ? { damping: 50, stiffness: 400 } : _j, _k = _a.slowDownSpringConfig, slowDownSpringConfig = _k === void 0 ? { damping: 80, stiffness: 200 } : _k;
    var baseX = framer_motion_1.useMotionValue(0);
    var _l = react_1.useState(false), isHovered = _l[0], setIsHovered = _l[1];
    var directionFactor = react_1.useRef(direction === 'left' ? -1 : 1);
    var scrollVelocity = framer_motion_1.useMotionValue(0);
    var lastScrollTop = react_1.useRef(0);
    var smoothVelocity = framer_motion_1.useSpring(scrollVelocity, scrollSpringConfig);
    var hoverFactor = framer_motion_1.useSpring(1, slowDownSpringConfig);
    react_1.useEffect(function () {
        if (slowdownOnHover) {
            hoverFactor.set(isHovered ? slowDownFactor : 1);
        }
    }, [isHovered, slowdownOnHover, slowDownFactor, hoverFactor]);
    // Track scroll velocity
    react_1.useEffect(function () {
        if (!useScrollVelocity)
            return;
        var el = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.current) || window;
        var rafId;
        var trackScroll = function () {
            var currentScroll = (scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.current) ? scrollContainer.current.scrollTop
                : window.scrollY;
            var velocity = currentScroll - lastScrollTop.current;
            scrollVelocity.set(velocity);
            lastScrollTop.current = currentScroll;
            rafId = requestAnimationFrame(trackScroll);
        };
        rafId = requestAnimationFrame(trackScroll);
        return function () { return cancelAnimationFrame(rafId); };
    }, [useScrollVelocity, scrollContainer, scrollVelocity]);
    framer_motion_1.useAnimationFrame(function (_, delta) {
        var moveBy = directionFactor.current * baseVelocity * (delta / 1000) * 50;
        // Apply hover slowdown
        moveBy *= hoverFactor.get();
        // Apply scroll velocity influence
        if (useScrollVelocity && scrollAwareDirection) {
            var sv = smoothVelocity.get();
            if (sv > 0.5) {
                directionFactor.current = direction === 'left' ? -1 : 1;
            }
            else if (sv < -0.5) {
                directionFactor.current = direction === 'left' ? 1 : -1;
            }
            moveBy += sv * 0.05;
        }
        baseX.set(baseX.get() + moveBy);
    });
    var x = framer_motion_1.useTransform(baseX, function (v) { return wrap(-25, 0, v) + "%"; });
    return (react_1["default"].createElement("div", { className: utils_1.cn('overflow-hidden whitespace-nowrap', className), onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } },
        react_1["default"].createElement(framer_motion_1.motion.div, { className: "inline-flex", style: { x: x } }, Array.from({ length: repeat }).map(function (_, i) { return (react_1["default"].createElement("div", { key: i, className: "inline-flex" }, children)); }))));
}
exports["default"] = SimpleMarquee;
