module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/components/LanguageSwitcher.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__ = __turbopack_context__.i("[externals]/next-intl [external] (next-intl, esm_import, [project]/node_modules/next-intl)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const LanguageSwitcher = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const tA11y = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__["useTranslations"])('a11y');
    const currentLocale = router.locale || 'en';
    const changeLanguage = (locale)=>{
        setIsOpen(false);
        const { asPath } = router;
        const newPath = `/${locale}${asPath === '/' ? '' : asPath}`;
        window.location.href = newPath;
    };
    const languages = [
        {
            code: 'en',
            name: 'English',
            flag: '🇺🇸'
        },
        {
            code: 'pt',
            name: 'Português',
            flag: '🇧🇷'
        }
    ];
    const currentLanguage = languages.find((l)=>l.code === currentLocale) || languages[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                className: "flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-slate-200 text-sm font-semibold cursor-pointer hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-200",
                onClick: ()=>setIsOpen(!isOpen),
                "aria-label": tA11y('selectLanguage'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-lg leading-none",
                        children: currentLanguage.flag
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSwitcher.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "font-bold tracking-wide text-sm",
                        children: currentLanguage.code.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSwitcher.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `w-3.5 h-3.5 text-cyan-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSwitcher.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LanguageSwitcher.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -8
                    },
                    transition: {
                        duration: 0.15
                    },
                    className: "absolute top-[calc(100%+8px)] right-0 min-w-[180px] bg-[#1e212b] border border-white/10 rounded-xl shadow-2xl p-2 z-[1000]",
                    children: languages.map((language)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-left cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-cyan-400 hover:translate-x-1 ${currentLocale === language.code ? 'text-cyan-400 bg-cyan-500/10 font-semibold' : 'text-slate-300'}`,
                            onClick: ()=>changeLanguage(language.code),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-lg leading-none",
                                    children: language.flag
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LanguageSwitcher.tsx",
                                    lineNumber: 65,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "flex-1 font-medium",
                                    children: language.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LanguageSwitcher.tsx",
                                    lineNumber: 66,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                currentLocale === language.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-4 h-4 text-cyan-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LanguageSwitcher.tsx",
                                    lineNumber: 68,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, language.code, true, {
                            fileName: "[project]/src/components/LanguageSwitcher.tsx",
                            lineNumber: 56,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSwitcher.tsx",
                    lineNumber: 48,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/LanguageSwitcher.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LanguageSwitcher.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LanguageSwitcher;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/navbar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__ = __turbopack_context__.i("[externals]/next-intl [external] (next-intl, esm_import, [project]/node_modules/next-intl)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSwitcher.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const Navbar = ()=>{
    const t = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__["useTranslations"])('nav');
    const tA11y = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__["useTranslations"])('a11y');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].nav, {
        initial: {
            y: -20,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.5
        },
        className: "sticky top-6 z-50 mx-auto w-11/12 max-w-7xl rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md shadow-2xl flex justify-between items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logo.png",
                        width: 40,
                        height: 40,
                        alt: tA11y('logoAlt'),
                        priority: true,
                        style: {
                            width: 'auto',
                            height: 'auto'
                        },
                        className: "drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wide",
                        children: "AISVSwise"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "hidden md:flex items-center space-x-6 text-sm font-medium",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-slate-300 hover:text-cyan-400 transition-colors",
                        children: t('home')
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/about",
                        className: "text-slate-300 hover:text-cyan-400 transition-colors",
                        children: t('about')
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/assessment",
                        className: "text-slate-300 hover:text-cyan-400 transition-colors",
                        children: t('assessment')
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/results",
                        className: "text-slate-300 hover:text-cyan-400 transition-colors",
                        children: t('results')
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/ai",
                        className: "text-slate-300 hover:text-cyan-400 transition-colors",
                        children: t('ai')
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/navbar.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/navbar.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/footer.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__ = __turbopack_context__.i("[externals]/next-intl [external] (next-intl, esm_import, [project]/node_modules/next-intl)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const Footer = ()=>{
    const t = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__["useTranslations"])('footer');
    const tA11y = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__["useTranslations"])('a11y');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "relative z-10 border-t border-white/10 bg-[#0f111a]/80 backdrop-blur-md py-12 mt-20 text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    href: "https://owasp.org/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "opacity-80 hover:opacity-100 transition-opacity",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/Footer.png",
                        width: 200,
                        height: 66,
                        alt: tA11y('owaspLogoAlt'),
                        priority: true,
                        style: {
                            width: 'auto',
                            height: 'auto'
                        },
                        className: "invert brightness-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer.tsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/footer.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-slate-400 text-sm font-medium",
                            children: t('copyright')
                        }, void 0, false, {
                            fileName: "[project]/src/components/footer.tsx",
                            lineNumber: 15,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 text-xs",
                            children: t('madeWith')
                        }, void 0, false, {
                            fileName: "[project]/src/components/footer.tsx",
                            lineNumber: 18,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/footer.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/footer.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/footer.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/layout.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/footer.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const Layout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0f111a] text-slate-200 font-sans selection:bg-cyan-500/30 flex flex-col relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 overflow-hidden pointer-events-none z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "flex-grow w-full max-w-7xl mx-auto px-6 py-12 z-10 relative",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Layout;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/messages/en.json.[json].cjs [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"nav\":{\"home\":\"Home\",\"assessment\":\"Assessment\",\"results\":\"Results\",\"about\":\"About\",\"ai\":\"AI\"},\"home\":{\"title\":\"AISVS\",\"subtitle\":\"OWASP AI Security Verification Standard Tool\",\"description\":\"The AISVS tool provides a browser-based interface to assess your organization's AI security posture across 14 controls. With this tool, you can:\",\"features\":{\"feature1\":\"Assess your AI security practices across 14 controls\",\"feature2\":\"Visualize your AI security maturity with dynamic charts\",\"feature3\":\"Compare your results over time and get AI-powered analysis\",\"feature1Desc\":\"Evaluate AI security practices from training data to model governance.\",\"feature2Desc\":\"Generate radar and bar charts showing your posture across all 14 AISVS controls.\",\"feature3Desc\":\"Results are stored locally in JSON – private and never uploaded to any server.\"},\"startAssessment\":\"Start Assessment\",\"viewResults\":\"View Results\",\"privacy\":\"Assessment responses can be saved to the user's local computer, in a JSON-formatted text file. Responses are retained only on the local system and are not shared with any other system or persons.\",\"aboutSamm\":\"About AISVS\",\"sammDescription\":\"The OWASP Artificial Intelligence Security Verification Standard (AISVS) is an open framework for verifying the security of AI systems — including LLMs, agents, RAG pipelines, and model infrastructure.\",\"sammPurpose\":\"AISVS is designed to help organizations:\",\"purposes\":{\"purpose1\":\"Evaluate current AI security practices against industry standards;\",\"purpose2\":\"Build a structured AI security assurance program;\",\"purpose3\":\"Demonstrate measurable improvements over time; and\",\"purpose4\":\"Define and measure security activities across the AI lifecycle.\"},\"sammFlexibility\":\"AISVS is flexible enough to be used by organizations of all sizes, for a single AI product or across an entire AI portfolio.\",\"badge\":\"OWASP AI Security Verification Standard\"},\"assessment\":{\"title\":\"AISVS Assessment\",\"loadPrevious\":\"Would you like to use previous results to populate the questionnaire?\",\"loadDescription\":\"If you have a file of unfinished results that you wish to go back to you can upload them here and the questionnaire will autopopulate with your answers\",\"loadResults\":\"Load Results\",\"clear\":\"Clear\",\"saveResponses\":\"Save Responses\",\"nextPage\":\"Next Page\",\"nextPractice\":\"Next Practice\",\"previousPractice\":\"Previous Practice\",\"complete\":\"Complete\",\"clearConfirm\":\"This will clear all answers do you wish to continue?\",\"domains\":{\"governance\":\"Governance\",\"design\":\"Design\",\"implementation\":\"Implementation\",\"verification\":\"Verification\",\"operations\":\"Operations\",\"details\":\"Details\"},\"controls\":{\"c01\":\"C1 Training Data\",\"c02\":\"C2 Input Validation\",\"c03\":\"C3 Model Lifecycle\",\"c04\":\"C4 Infrastructure\",\"c05\":\"C5 Access Control\",\"c06\":\"C6 Supply Chain\",\"c07\":\"C7 Model Behavior\",\"c08\":\"C8 Memory & Vectors\",\"c09\":\"C9 Agentic Actions\",\"c10\":\"C10 MCP Security\",\"c11\":\"C11 Adversarial Robustness\",\"c12\":\"C12 Privacy\",\"c13\":\"C13 Monitoring\",\"c14\":\"C14 Human Oversight\",\"details\":\"Details\"}},\"results\":{\"title\":\"AISVS Assessment Results\",\"completionText\":\"Thank you for completing the questionnaire\",\"mustComplete\":\"You must first complete the questionnaire to see results\",\"overallScore\":\"Your overall score is:\",\"previousScore\":\"Your score last time was:\",\"refresh\":\"Refresh Graphs\",\"totals\":\"Totals\",\"responseCount\":\"Response count by value\",\"businessFunctions\":\"Business Functions\",\"maturityByBusiness\":\"Score by AISVS Control\",\"maturityByBusinessRadar\":\"Radar — AISVS Controls\",\"maturityByBusinessBar\":\"Bar — AISVS Controls\",\"practices\":\"Practices\",\"maturityByPractice\":\"Score by Sub-Control\",\"maturityByPracticeRadar\":\"Radar — Sub-Controls\",\"maturityByPracticeBar\":\"Bar — Sub-Controls\",\"totalsSection\":\"Totals\",\"saveJson\":\"Do you wish to save your results file in JSON?\",\"saveFile\":\"Save file\",\"loadPrevious\":\"Do you wish to load your previous results to compare?\",\"exportPdf\":\"Do you wish to print or save the graphs as a pdf?\",\"exportGraphs\":\"Export graphs\",\"exportGenerating\":\"Generating PDF…\",\"exportError\":\"Failed to generate PDF. Please try again.\",\"projectName\":\"Project Name\",\"projectDescription\":\"Project Description\",\"companyName\":\"Company Name\",\"scoreInitial\":\"Control rarely or never implemented.\",\"scoreManaged\":\"Ad-hoc implementation, no consistency.\",\"scoreDefined\":\"Defined processes, consistently applied.\",\"scoreOptimized\":\"Optimized, measured and continuously improving.\",\"practiceBreakdown\":\"Practice Breakdown\",\"businessFunction\":\"Business Function\",\"practice\":\"Practice\",\"score\":\"Score\",\"maturityLevel\":\"Maturity Level\",\"maturityBands\":{\"initial\":\"Initial\",\"managed\":\"Managed\",\"defined\":\"Defined\",\"optimized\":\"Optimized\"},\"levelCompliance\":\"Compliance by Verification Level\",\"levelDesc\":\"% of requirements answered ‘Yes, for most’ or ‘Yes, for all’\",\"l1Label\":\"L1 — Foundational\",\"l1Desc\":\"Essential controls for every AI application\",\"l2Label\":\"L2 — Standard\",\"l2Desc\":\"Target for production AI systems\",\"l3Label\":\"L3 — Advanced\",\"l3Desc\":\"Critical infrastructure and regulated systems\",\"controlHeatmap\":\"Control Coverage Heatmap\",\"heatmapDesc\":\"Compliance % per AISVS control per verification level\",\"controlCol\":\"Control\",\"overallPct\":\"Overall\",\"naLabel\":\"N/A\",\"controlCompliance\":\"Score by AISVS Control\",\"subControlBreakdown\":\"Sub-Control Breakdown\",\"compliancePct\":\"Compliance %\"},\"charts\":{\"currentAssessment\":\"Current Assessment\",\"previousAssessment\":\"Previous Assessment\",\"previousDataset\":\"Previous Dataset\",\"scoreForEach\":\"Score per AISVS Control\",\"practiceScore\":\"Score per Sub-Control\",\"responseLabels\":{\"no\":\"No\",\"yesForSome\":\"Yes, for some\",\"yesForMost\":\"Yes, for most\",\"yesForAll\":\"Yes, for all\"},\"maturityLabels\":{\"bad\":\"Bad\",\"lessThanIdeal\":\"Less than ideal\",\"okay\":\"Okay\",\"good\":\"Good\"},\"businessFunctions\":{\"Control 1\":\"C1 Training Data\",\"Control 2\":\"C2 Input Validation\",\"Control 3\":\"C3 Model Lifecycle\",\"Control 4\":\"C4 Infrastructure\",\"Control 5\":\"C5 Access Control\",\"Control 6\":\"C6 Supply Chain\",\"Control 7\":\"C7 Model Behavior\",\"Control 8\":\"C8 Memory & Vectors\",\"Control 9\":\"C9 Agentic Actions\",\"Control 10\":\"C10 MCP Security\",\"Control 11\":\"C11 Adversarial\",\"Control 12\":\"C12 Privacy\",\"Control 13\":\"C13 Monitoring\",\"Control 14\":\"C14 Human Oversight\"},\"practices\":{\"Strategy and Metrics\":\"Strategy & Metrics\",\"Policy and Compliance\":\"Policy & Compliance\",\"Education and Guidance\":\"Education & Guidance\",\"Threat Assessment\":\"Threat Assessment\",\"Security Requirements\":\"Security Requirements\",\"Security Architecture\":\"Security Architecture\",\"Secure Build\":\"Secure Build\",\"Secure Deployment\":\"Secure Deployment\",\"Defect Management\":\"Defect Management\",\"Architecture Assessment\":\"Architecture Assessment\",\"Requirements Testing\":\"Requirements-driven Testing\",\"Security Testing\":\"Security Testing\",\"Incident Management\":\"Incident Management\",\"Environment Management\":\"Environment Management\",\"Operations Management\":\"Operational Management\"}},\"upload\":{\"dropzone\":\"Drag 'n' Drop some files here, or click to select files\",\"errorFormat\":\"The file(s) you have uploaded aren't in JSON format. Please use only JSON collected from this tool\"},\"notFound\":{\"title\":\"404 - Oops!\",\"subtitle\":\"That page cannot be found\",\"redirect\":\"Going back to the\"},\"footer\":{\"copyright\":\"© 2026 AISVS - OWASP Foundation\",\"madeWith\":\"Made with ❤️ by the OWASP Community\"},\"buttons\":{\"next\":\"Next\",\"previous\":\"Previous\",\"save\":\"Save\",\"load\":\"Load\",\"export\":\"Export\",\"print\":\"Print\",\"cancel\":\"Cancel\",\"confirm\":\"Confirm\"},\"errors\":{\"loadError\":\"Error loading file\",\"saveError\":\"Error saving file\",\"genericError\":\"An error occurred\"},\"practices\":{\"governance\":{\"strategy\":\"Strategy & Metrics\",\"policy\":\"Policy & Compliance\",\"education\":\"Education & Guidance\"},\"design\":{\"threat\":\"Threat Assessment\",\"security\":\"Security Requirements\",\"architecture\":\"Security Architecture\"},\"implementation\":{\"build\":\"Secure Build\",\"deployment\":\"Secure Deployment\",\"defect\":\"Defect Management\"},\"verification\":{\"architecture\":\"Architecture Assessment\",\"requirements\":\"Requirements-driven Testing\",\"security\":\"Security Testing\"},\"operations\":{\"incident\":\"Incident Management\",\"environment\":\"Environment Management\",\"operational\":\"Operational Management\"}},\"llm\":{\"settingsTitle\":\"AI Analysis Settings\",\"provider\":\"Provider\",\"apiKey\":\"API Key\",\"apiKeyPlaceholder\":\"Enter your API key\",\"apiKeyNote\":\"Your key is encrypted with AES-GCM and stored only on this device.\",\"model\":\"Model\",\"ollamaUrl\":\"Ollama URL\",\"autoAnalysis\":\"Auto-Analysis\",\"autoAnalysisDesc\":\"Automatically generate AI analysis when viewing results.\",\"save\":\"Save Settings\",\"saving\":\"Saving…\",\"clear\":\"Clear\",\"settingsSaved\":\"Settings saved!\",\"settingsCleared\":\"Settings cleared.\",\"settingsError\":\"Error saving settings.\",\"analysisTitle\":\"AI-Powered Analysis\",\"analyzePrompt\":\"Click below to get a detailed AI analysis of your AISVS results with improvement suggestions.\",\"analyze\":\"Analyze Results\",\"reanalyze\":\"Re-analyze\",\"analyzing\":\"Analyzing your results…\",\"notConfigured\":\"Configure an LLM provider in settings to enable AI analysis.\",\"decryptError\":\"Could not decrypt API key. Please re-enter it in settings.\",\"genericError\":\"An error occurred during analysis.\",\"configureButton\":\"Configure AI\",\"comparisonNote\":\"Analysis includes comparison with your previous AISVS assessment.\",\"providerChanged\":\"new provider active — re-analyze to update\",\"pageTitle\":\"AI Analysis Settings\",\"pageSubtitle\":\"Connect an LLM provider to get detailed analysis and improvement suggestions for your AISVS assessment results.\",\"pageDescription\":\"Configure your LLM provider for AI-powered AISVS assessment analysis.\",\"fetchModels\":\"Fetch Models\",\"fetchingModels\":\"Loading…\",\"modelFetchFirst\":\"— enter key and fetch models —\",\"noModelsFound\":\"No models found for this provider.\",\"modelsLoaded\":\"models available\",\"apiKeySaved\":\"API key saved (click to replace)\",\"infoSecurityTitle\":\"Your keys stay local\",\"infoSecurityBody\":\"API keys are encrypted with AES-GCM and stored only on this device. They are never sent to AISVSwise servers.\",\"infoProvidersTitle\":\"4 providers supported\",\"infoProvidersBody\":\"Anthropic (Claude), OpenAI (GPT), Google Gemini, and Ollama for fully local inference.\",\"infoPersistTitle\":\"Analysis saved with report\",\"infoPersistBody\":\"Generated analysis is embedded in the JSON report file so it reappears when you import the report for comparison.\"},\"a11y\":{\"logoAlt\":\"AISVSwise Logo\",\"owaspLogoAlt\":\"OWASP Logo\",\"selectLanguage\":\"Select language\",\"toggleAutoAnalysis\":\"Toggle auto analysis\",\"collapse\":\"Collapse\",\"expand\":\"Expand\",\"uploadSuccess\":\"Upload successful\",\"dragAndDrop\":\"Drag and drop file\"},\"providers\":{\"anthropic\":\"Anthropic (Claude)\",\"openai\":\"OpenAI (GPT)\",\"gemini\":\"Google Gemini\",\"ollama\":\"Ollama (local)\"},\"meta\":{\"homeTitle\":\"AISVS | Home\",\"assessmentTitle\":\"AISVS | Assessment\",\"resultsTitle\":\"AISVS | Results\",\"aboutTitle\":\"AISVS | About\",\"aiTitle\":\"AISVS | AI Settings\",\"description\":\"OWASP AISVS Assessment Tool - Evaluate your organization's AI security posture across 14 controls\",\"keywords\":\"owasp, aisvs, ai security, llm security, assessment, verification standard, artificial intelligence\"}}");
}),
"[project]/src/messages/pt.json.[json].cjs [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"nav\":{\"home\":\"Início\",\"assessment\":\"Avaliação\",\"results\":\"Resultados\",\"about\":\"Sobre\",\"ai\":\"IA\"},\"home\":{\"title\":\"AISVS\",\"subtitle\":\"Ferramenta OWASP de Verificação de Segurança em IA\",\"description\":\"A ferramenta AISVS oferece uma interface no navegador para avaliar a postura de segurança de IA da sua organização em 14 controles. Com esta ferramenta, você pode:\",\"features\":{\"feature1\":\"Avaliar práticas de segurança de IA em 14 controles\",\"feature2\":\"Visualizar a maturidade de segurança com gráficos dinâmicos\",\"feature3\":\"Comparar resultados ao longo do tempo e obter análise por IA\",\"feature1Desc\":\"Avalie práticas de segurança de IA desde dados de treino até governança de modelos.\",\"feature2Desc\":\"Gere gráficos de radar e barras mostrando sua postura nos 14 controles do AISVS.\",\"feature3Desc\":\"Os resultados ficam armazenados localmente em JSON — privados e nunca enviados a servidores.\"},\"startAssessment\":\"Iniciar Avaliação\",\"viewResults\":\"Ver Resultados\",\"privacy\":\"As respostas da avaliação podem ser salvas no computador local do usuário, em um arquivo de texto formatado em JSON. As respostas são mantidas apenas no sistema local e não são compartilhadas com nenhum outro sistema ou pessoa.\",\"aboutSamm\":\"Sobre o AISVS\",\"sammDescription\":\"O OWASP Artificial Intelligence Security Verification Standard (AISVS) é um framework aberto para verificar a segurança de sistemas de IA — incluindo LLMs, agentes, pipelines RAG e infraestrutura de modelos.\",\"sammPurpose\":\"O AISVS foi criado para ajudar organizações a:\",\"purposes\":{\"purpose1\":\"Avaliar as práticas atuais de segurança de IA em relação a padrões do setor;\",\"purpose2\":\"Construir um programa estruturado de garantia de segurança de IA;\",\"purpose3\":\"Demonstrar melhorias mensuráveis ao longo do tempo; e\",\"purpose4\":\"Definir e medir atividades de segurança em todo o ciclo de vida da IA.\"},\"sammFlexibility\":\"O AISVS é flexível o suficiente para ser usado por organizações de todos os tamanhos, para um único produto de IA ou em todo um portfólio de IA.\",\"badge\":\"Padrão OWASP de Verificação de Segurança em IA\"},\"assessment\":{\"title\":\"Avaliação AISVS\",\"loadPrevious\":\"Deseja carregar resultados anteriores?\",\"loadDescription\":\"Se você tem um arquivo de resultados incompletos, faça o upload aqui e o questionário será preenchido automaticamente.\",\"loadResults\":\"Carregar Resultados\",\"clear\":\"Limpar\",\"saveResponses\":\"Salvar Respostas\",\"nextPage\":\"Próxima Página\",\"nextPractice\":\"Próximo Controle\",\"previousPractice\":\"Controle Anterior\",\"complete\":\"Concluir\",\"clearConfirm\":\"Isso irá apagar todas as respostas. Deseja continuar?\",\"domains\":{\"governance\":\"Governança\",\"design\":\"Design\",\"implementation\":\"Implementação\",\"verification\":\"Verificação\",\"operations\":\"Operações\",\"details\":\"Detalhes\"},\"controls\":{\"c01\":\"C1 Dados de Treino\",\"c02\":\"C2 Validação de Entrada\",\"c03\":\"C3 Ciclo de Vida do Modelo\",\"c04\":\"C4 Infraestrutura\",\"c05\":\"C5 Controle de Acesso\",\"c06\":\"C6 Cadeia de Fornecimento\",\"c07\":\"C7 Comportamento do Modelo\",\"c08\":\"C8 Memória e Vetores\",\"c09\":\"C9 Ações Autônomas\",\"c10\":\"C10 Segurança MCP\",\"c11\":\"C11 Robustez Adversarial\",\"c12\":\"C12 Privacidade\",\"c13\":\"C13 Monitoramento\",\"c14\":\"C14 Supervisão Humana\",\"details\":\"Detalhes\"}},\"results\":{\"title\":\"Resultados da Avaliação AISVS\",\"completionText\":\"Obrigado por completar o questionário\",\"mustComplete\":\"Você deve primeiro completar o questionário para ver os resultados\",\"overallScore\":\"Sua pontuação geral é:\",\"previousScore\":\"Sua pontuação anterior foi:\",\"refresh\":\"Atualizar Gráficos\",\"totals\":\"Totais\",\"responseCount\":\"Contagem de respostas por valor\",\"businessFunctions\":\"Funções de Negócio\",\"maturityByBusiness\":\"Pontuação por Controle AISVS\",\"maturityByBusinessRadar\":\"Radar — Controles AISVS\",\"maturityByBusinessBar\":\"Barras — Controles AISVS\",\"practices\":\"Práticas\",\"maturityByPractice\":\"Pontuação por Sub-Controle\",\"maturityByPracticeRadar\":\"Radar — Sub-Controles\",\"maturityByPracticeBar\":\"Barras — Sub-Controles\",\"totalsSection\":\"Totais\",\"saveJson\":\"Deseja salvar seus resultados em JSON?\",\"saveFile\":\"Salvar arquivo\",\"loadPrevious\":\"Deseja carregar seus resultados anteriores para comparar?\",\"exportPdf\":\"Deseja imprimir ou salvar os gráficos como PDF?\",\"exportGraphs\":\"Exportar gráficos\",\"exportGenerating\":\"Gerando PDF…\",\"exportError\":\"Falha ao gerar o PDF. Tente novamente.\",\"projectName\":\"Nome do Projeto\",\"projectDescription\":\"Descrição do Projeto\",\"companyName\":\"Nome da Empresa\",\"scoreInitial\":\"Controle raramente ou nunca implementado.\",\"scoreManaged\":\"Implementação ad-hoc, sem consistência.\",\"scoreDefined\":\"Processos definidos, aplicados de forma consistente.\",\"scoreOptimized\":\"Otimizado, medido e em melhoria contínua.\",\"practiceBreakdown\":\"Detalhamento por Controle\",\"businessFunction\":\"Controle\",\"practice\":\"Sub-Controle\",\"score\":\"Pontuação\",\"maturityLevel\":\"Nível de Maturidade\",\"maturityBands\":{\"initial\":\"Inicial\",\"managed\":\"Gerenciado\",\"defined\":\"Definido\",\"optimized\":\"Otimizado\"},\"levelCompliance\":\"Conformidade por Nível de Verificação\",\"levelDesc\":\"% de requisitos respondidos ‘Sim, para a maioria’ ou ‘Sim, para todos’\",\"l1Label\":\"N1 — Fundamental\",\"l1Desc\":\"Controles essenciais para qualquer aplicação de IA\",\"l2Label\":\"N2 — Padrão\",\"l2Desc\":\"Meta para sistemas de IA em produção\",\"l3Label\":\"N3 — Avançado\",\"l3Desc\":\"Infraestrutura crítica e sistemas regulados\",\"controlHeatmap\":\"Mapa de Cobertura por Controle\",\"heatmapDesc\":\"% de conformidade por controle AISVS por nível de verificação\",\"controlCol\":\"Controle\",\"overallPct\":\"Geral\",\"naLabel\":\"N/A\",\"controlCompliance\":\"Pontuação por Controle AISVS\",\"subControlBreakdown\":\"Detalhamento por Sub-Controle\",\"compliancePct\":\"Conformidade %\"},\"charts\":{\"currentAssessment\":\"Avaliação Atual\",\"previousAssessment\":\"Avaliação Anterior\",\"previousDataset\":\"Conjunto de Dados Anterior\",\"scoreForEach\":\"Pontuação por Controle AISVS\",\"practiceScore\":\"Pontuação por Sub-Controle\",\"responseLabels\":{\"no\":\"Não\",\"yesForSome\":\"Sim, para alguns\",\"yesForMost\":\"Sim, para a maioria\",\"yesForAll\":\"Sim, para todos\"},\"maturityLabels\":{\"bad\":\"Ruim\",\"lessThanIdeal\":\"Abaixo do ideal\",\"okay\":\"Razoável\",\"good\":\"Bom\"},\"businessFunctions\":{\"Control 1\":\"C1 Dados de Treino\",\"Control 2\":\"C2 Validação de Entrada\",\"Control 3\":\"C3 Ciclo de Vida\",\"Control 4\":\"C4 Infraestrutura\",\"Control 5\":\"C5 Controle de Acesso\",\"Control 6\":\"C6 Cadeia de Fornec.\",\"Control 7\":\"C7 Comportamento\",\"Control 8\":\"C8 Memória e Vetores\",\"Control 9\":\"C9 Ações Autônomas\",\"Control 10\":\"C10 MCP\",\"Control 11\":\"C11 Adversarial\",\"Control 12\":\"C12 Privacidade\",\"Control 13\":\"C13 Monitoramento\",\"Control 14\":\"C14 Supervisão Humana\"},\"practices\":{\"Strategy and Metrics\":\"Estratégia e Métricas\",\"Policy and Compliance\":\"Política e Conformidade\",\"Education and Guidance\":\"Educação e Orientação\",\"Threat Assessment\":\"Avaliação de Ameaças\",\"Security Requirements\":\"Requisitos de Segurança\",\"Security Architecture\":\"Arquitetura de Segurança\",\"Secure Build\":\"Construção Segura\",\"Secure Deployment\":\"Implantação Segura\",\"Defect Management\":\"Gerenciamento de Defeitos\",\"Architecture Assessment\":\"Avaliação de Arquitetura\",\"Requirements Testing\":\"Testes Orientados a Requisitos\",\"Security Testing\":\"Testes de Segurança\",\"Incident Management\":\"Gerenciamento de Incidentes\",\"Environment Management\":\"Gerenciamento de Ambiente\",\"Operations Management\":\"Gerenciamento Operacional\"}},\"upload\":{\"dropzone\":\"Arraste e solte arquivos aqui, ou clique para selecionar\",\"errorFormat\":\"O(s) arquivo(s) enviado(s) não estão no formato JSON. Use apenas arquivos JSON gerados por esta ferramenta\"},\"notFound\":{\"title\":\"404 - Ops!\",\"subtitle\":\"Esta página não foi encontrada\",\"redirect\":\"Voltando para a\"},\"footer\":{\"copyright\":\"© 2026 AISVS - OWASP Foundation\",\"madeWith\":\"Feito com ❤️ pela Comunidade OWASP\"},\"buttons\":{\"next\":\"Próximo\",\"previous\":\"Anterior\",\"save\":\"Salvar\",\"load\":\"Carregar\",\"export\":\"Exportar\",\"print\":\"Imprimir\",\"cancel\":\"Cancelar\",\"confirm\":\"Confirmar\"},\"errors\":{\"loadError\":\"Erro ao carregar arquivo\",\"saveError\":\"Erro ao salvar arquivo\",\"genericError\":\"Ocorreu um erro\"},\"practices\":{\"governance\":{\"strategy\":\"Estratégia e Métricas\",\"policy\":\"Política e Conformidade\",\"education\":\"Educação e Orientação\"},\"design\":{\"threat\":\"Avaliação de Ameaças\",\"security\":\"Requisitos de Segurança\",\"architecture\":\"Arquitetura de Segurança\"},\"implementation\":{\"build\":\"Construção Segura\",\"deployment\":\"Implantação Segura\",\"defect\":\"Gerenciamento de Defeitos\"},\"verification\":{\"architecture\":\"Avaliação de Arquitetura\",\"requirements\":\"Testes Orientados a Requisitos\",\"security\":\"Testes de Segurança\"},\"operations\":{\"incident\":\"Gerenciamento de Incidentes\",\"environment\":\"Gerenciamento de Ambiente\",\"operational\":\"Gerenciamento Operacional\"}},\"llm\":{\"settingsTitle\":\"Configurações de Análise por IA\",\"provider\":\"Provedor\",\"apiKey\":\"Chave de API\",\"apiKeyPlaceholder\":\"Digite sua chave de API\",\"apiKeyNote\":\"Sua chave é criptografada com AES-GCM e armazenada apenas neste dispositivo.\",\"model\":\"Modelo\",\"ollamaUrl\":\"URL do Ollama\",\"autoAnalysis\":\"Análise Automática\",\"autoAnalysisDesc\":\"Gerar análise de IA automaticamente ao visualizar resultados.\",\"save\":\"Salvar Configurações\",\"saving\":\"Salvando…\",\"clear\":\"Limpar\",\"settingsSaved\":\"Configurações salvas!\",\"settingsCleared\":\"Configurações removidas.\",\"settingsError\":\"Erro ao salvar configurações.\",\"analysisTitle\":\"Análise por IA\",\"analyzePrompt\":\"Clique abaixo para obter uma análise detalhada por IA dos seus resultados AISVS com sugestões de melhoria.\",\"analyze\":\"Analisar Resultados\",\"reanalyze\":\"Re-analisar\",\"analyzing\":\"Analisando seus resultados...\",\"notConfigured\":\"Configure um provedor de IA nas configurações para habilitar a análise.\",\"decryptError\":\"Não foi possível descriptografar a chave. Por favor, insira-a novamente nas configurações.\",\"genericError\":\"Ocorreu um erro durante a análise.\",\"configureButton\":\"Configurar IA\",\"comparisonNote\":\"A análise inclui comparação com sua avaliação AISVS anterior.\",\"providerChanged\":\"novo provider ativo — re-analise para atualizar\",\"pageTitle\":\"Configurações de Análise por IA\",\"pageSubtitle\":\"Conecte um provedor de LLM para obter análise detalhada e sugestões de melhoria para seus resultados AISVS.\",\"pageDescription\":\"Configure seu provedor de LLM para análise por IA da avaliação AISVS.\",\"fetchModels\":\"Buscar Modelos\",\"fetchingModels\":\"Carregando…\",\"modelFetchFirst\":\"— insira a chave e busque os modelos —\",\"noModelsFound\":\"Nenhum modelo encontrado para este provedor.\",\"modelsLoaded\":\"modelos disponíveis\",\"apiKeySaved\":\"Chave de API salva (clique para substituir)\",\"infoSecurityTitle\":\"Suas chaves ficam locais\",\"infoSecurityBody\":\"As chaves de API são criptografadas com AES-GCM e armazenadas apenas neste dispositivo. Nunca são enviadas para os servidores do AISVSwise.\",\"infoProvidersTitle\":\"4 provedores suportados\",\"infoProvidersBody\":\"Anthropic (Claude), OpenAI (GPT), Google Gemini e Ollama para inferência totalmente local.\",\"infoPersistTitle\":\"Análise salva com o relatório\",\"infoPersistBody\":\"A análise gerada é embutida no arquivo JSON do relatório e reaparece ao importar o relatório para comparação.\"},\"a11y\":{\"logoAlt\":\"Logo AISVSwise\",\"owaspLogoAlt\":\"Logo OWASP\",\"selectLanguage\":\"Selecionar idioma\",\"toggleAutoAnalysis\":\"Alternar análise automática\",\"collapse\":\"Recolher\",\"expand\":\"Expandir\",\"uploadSuccess\":\"Upload realizado com sucesso\",\"dragAndDrop\":\"Arraste e solte o arquivo\"},\"providers\":{\"anthropic\":\"Anthropic (Claude)\",\"openai\":\"OpenAI (GPT)\",\"gemini\":\"Google Gemini\",\"ollama\":\"Ollama (local)\"},\"meta\":{\"homeTitle\":\"AISVS | Início\",\"assessmentTitle\":\"AISVS | Avaliação\",\"resultsTitle\":\"AISVS | Resultados\",\"aboutTitle\":\"AISVS | Sobre\",\"aiTitle\":\"AISVS | Configurações de IA\",\"description\":\"Ferramenta OWASP AISVS - Avalie a postura de segurança de IA da sua organização em 14 controles\",\"keywords\":\"owasp, aisvs, segurança de ia, llm, avaliação, padrão de verificação, inteligência artificial\"}}");
}),
"[project]/src/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__ = __turbopack_context__.i("[externals]/next-intl [external] (next-intl, esm_import, [project]/node_modules/next-intl)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function MyApp({ Component, pageProps }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const locale = router.locale || 'en';
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const scrollToTop = ()=>window.scrollTo(0, 0);
        router.events.on('routeChangeComplete', scrollToTop);
        return ()=>router.events.off('routeChangeComplete', scrollToTop);
    }, [
        router.events
    ]);
    let messages = pageProps.messages;
    if (!messages || Object.keys(messages).length === 0) {
        try {
            messages = __turbopack_context__.f({
                "../messages/en.json": {
                    id: ()=>"[project]/src/messages/en.json.[json].cjs [ssr] (ecmascript)",
                    module: ()=>__turbopack_context__.r("[project]/src/messages/en.json.[json].cjs [ssr] (ecmascript)")
                },
                "../messages/pt.json": {
                    id: ()=>"[project]/src/messages/pt.json.[json].cjs [ssr] (ecmascript)",
                    module: ()=>__turbopack_context__.r("[project]/src/messages/pt.json.[json].cjs [ssr] (ecmascript)")
                }
            })(`../messages/${locale}.json`);
        } catch (error) {
            console.error(`Failed to load messages for locale: ${locale}`, error);
            try {
                messages = __turbopack_context__.r("[project]/src/messages/en.json.[json].cjs [ssr] (ecmascript)");
            } catch (e) {
                messages = {};
            }
        }
    }
    const providerProps = {
        messages,
        locale,
        timeZone: 'UTC',
        defaultTranslationValues: {
            br: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/pages/_app.tsx",
                    lineNumber: 37,
                    columnNumber: 47
                }, this)
        },
        onError: (error)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn('Translation error:', error);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$intl__$5b$external$5d$__$28$next$2d$intl$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$intl$29$__["NextIntlClientProvider"], {
        ...providerProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.tsx",
                lineNumber: 48,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/_app.tsx",
            lineNumber: 47,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/_app.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = MyApp;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0s3gmuv._.js.map