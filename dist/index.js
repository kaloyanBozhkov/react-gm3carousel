"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  GM3Carousel: () => GM3Carousel
});
module.exports = __toCommonJS(src_exports);

// src/components/molecules/GM3Carousel.molecule.tsx
var import_react2 = require("react");
var import_tailwind_merge = require("tailwind-merge");

// src/hooks/useLoopData.ts
var import_react = require("react");
var useLoopData = (d, perPage, everyS = 1, isPaused = false) => {
  const [item, setItem] = (0, import_react.useState)(0), [data, setData] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    if (isPaused)
      return;
    const intervalId = setInterval(() => {
      setItem((prev) => prev >= d.length ? 0 : prev + 1);
    }, everyS * 1e3);
    return () => clearInterval(intervalId);
  }, [everyS, d.length, isPaused]);
  (0, import_react.useEffect)(() => {
    const arr = [...d];
    while (arr.length - item < perPage)
      arr.push(...d);
    const newD = arr.slice(item, perPage + item);
    setData(newD);
  }, [item, d, perPage]);
  return data;
};
var useLoopData_default = useLoopData;

// src/components/molecules/GM3Carousel.molecule.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var GM3Carousel = ({
  className = "",
  slides,
  perPage,
  speedS = 2,
  withDualSmallItems = false,
  smallItemClassName = "",
  bigItemClassName = "",
  isPaused = false,
  pauseOnMouseEnter = true,
  isVertical = false,
  withSmallItemsMaxSize = true,
  slideWrapperClassName = "duration-500"
}) => {
  const [t, setT] = (0, import_react2.useState)(false), slidesSlice = useLoopData_default(
    slides,
    perPage + 2 + (withDualSmallItems ? 2 : 0),
    speedS + 0.5,
    isPaused || pauseOnMouseEnter && t
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    __spreadProps(__spreadValues({
      className: (0, import_tailwind_merge.twMerge)(
        "flex h-full w-full gap-4",
        className,
        isVertical ? "flex-col" : "flex-row"
      )
    }, pauseOnMouseEnter && {
      onMouseEnter: () => setT(true),
      onMouseLeave: () => setT(false)
    }), {
      children: slidesSlice.map((slide, idx) => {
        const variant = (() => {
          const maxSize = withSmallItemsMaxSize ? "grow-[40px]" : "";
          if (idx === 0)
            return "flex-[0]";
          if (idx === slidesSlice.length - 1)
            return "flex-[0]";
          if (idx === 1)
            return (0, import_tailwind_merge.twMerge)("flex-[0.33]", maxSize, smallItemClassName);
          if (idx === slidesSlice.length - 2)
            return (0, import_tailwind_merge.twMerge)("flex-[0.33]", maxSize, smallItemClassName);
          if (withDualSmallItems) {
            if (idx === 2)
              return (0, import_tailwind_merge.twMerge)("flex-[0.33]", maxSize, smallItemClassName);
            if (idx === slidesSlice.length - 3)
              return (0, import_tailwind_merge.twMerge)("flex-[0.33]", maxSize, smallItemClassName);
          }
          return (0, import_tailwind_merge.twMerge)("flex-1", bigItemClassName);
        })();
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: (0, import_tailwind_merge.twMerge)(
              "relative overflow-hidden rounded-[30px] transition-all duration-500 ease-linear",
              variant,
              slideWrapperClassName
            ),
            children: slide.content
          },
          slide.key
        );
      })
    })
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GM3Carousel
});
//# sourceMappingURL=index.js.map