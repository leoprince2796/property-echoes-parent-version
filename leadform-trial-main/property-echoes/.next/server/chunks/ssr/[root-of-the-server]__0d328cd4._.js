module.exports = [
"[project]/leadform-trial-main/property-echoes/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/leadform-trial-main/property-echoes/src/app/icon.png.mjs { IMAGE => \"[project]/leadform-trial-main/property-echoes/src/app/icon.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/leadform-trial-main/property-echoes/src/app/icon.png.mjs { IMAGE => \"[project]/leadform-trial-main/property-echoes/src/app/icon.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/leadform-trial-main/property-echoes/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/leadform-trial-main/property-echoes/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/leadform-trial-main/property-echoes/src/lib/jsonPosts.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPosts",
    ()=>getAllPosts,
    "getPostBySlug",
    ()=>getPostBySlug
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/marked/lib/marked.esm.js [app-rsc] (ecmascript)");
;
;
;
const POSTS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'content/posts.json');
/**
 * Normalizes a post from JSON to the shape expected by the GraphQL-based frontend.
 */ function normalizePost(post) {
    let contentHtml = "";
    if (typeof post.content === 'object' && post.content !== null) {
        contentHtml = post.content.html || "";
    } else if (typeof post.content === 'string') {
        // If it's markdown (starts with # or contains [link](url)), parse it
        if (post.content.includes('#') || post.content.includes('](')) {
            contentHtml = __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["marked"].parse(post.content);
        } else {
            contentHtml = post.content;
        }
    }
    return {
        node: {
            author: {
                bio: "",
                name: "Admin",
                id: "placeholder-id",
                photo: {
                    url: "/placeholder-author.png"
                }
            },
            createdAt: post.createdAt || new Date().toISOString(),
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt || "",
            featuredImage: post.featuredImage || {
                url: "/placeholder-image.png"
            },
            category: post.category || [],
            content: {
                html: contentHtml
            }
        }
    };
}
function getAllPosts() {
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(POSTS_FILE)) {
        return [];
    }
    try {
        const fileContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(POSTS_FILE, 'utf8');
        const postsData = JSON.parse(fileContent);
        const allPosts = postsData.map((postData)=>normalizePost(postData));
        // Sort by createdAt (newest first)
        return allPosts.sort((a, b)=>{
            return new Date(b.node.createdAt) - new Date(a.node.createdAt);
        });
    } catch (error) {
        console.error("Error reading posts.json:", error);
        return [];
    }
}
function getPostBySlug(slug) {
    const posts = getAllPosts();
    const post = posts.find((p)=>p.node.slug === slug);
    return post || null;
}
}),
"[project]/leadform-trial-main/property-echoes/components/Categories/Categories.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Categories",
    ()=>Categories,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$src$2f$lib$2f$jsonPosts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/src/lib/jsonPosts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
const Categories = async ()=>{
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$src$2f$lib$2f$jsonPosts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPosts"])();
    const categoryDetails = Array.from(new Map(posts.flatMap((p)=>p.node.category).map((c)=>[
            c.slug,
            c
        ])).values());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "category-div",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "category-content-div",
            children: categoryDetails.map((element)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/category/${element.slug}/`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "category-elements",
                        children: element.name
                    }, void 0, false, {
                        fileName: "[project]/leadform-trial-main/property-echoes/components/Categories/Categories.jsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, element.slug, false, {
                    fileName: "[project]/leadform-trial-main/property-echoes/components/Categories/Categories.jsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/leadform-trial-main/property-echoes/components/Categories/Categories.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/leadform-trial-main/property-echoes/components/Categories/Categories.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Categories;
}),
"[project]/leadform-trial-main/property-echoes/components/PostCard/PostCard.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/leadform-trial-main/property-echoes/components/PostCard/PostCard.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/leadform-trial-main/property-echoes/components/PostCard/PostCard.jsx <module evaluation>", "default");
}),
"[project]/leadform-trial-main/property-echoes/components/PostCard/PostCard.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/leadform-trial-main/property-echoes/components/PostCard/PostCard.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/leadform-trial-main/property-echoes/components/PostCard/PostCard.jsx", "default");
}),
"[project]/leadform-trial-main/property-echoes/components/PostCard/PostCard.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$components$2f$PostCard$2f$PostCard$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/components/PostCard/PostCard.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$components$2f$PostCard$2f$PostCard$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/components/PostCard/PostCard.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$components$2f$PostCard$2f$PostCard$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/leadform-trial-main/property-echoes/components/SearchBar/SearchBar.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/leadform-trial-main/property-echoes/components/SearchBar/SearchBar.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/leadform-trial-main/property-echoes/components/SearchBar/SearchBar.jsx <module evaluation>", "default");
}),
"[project]/leadform-trial-main/property-echoes/components/SearchBar/SearchBar.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/leadform-trial-main/property-echoes/components/SearchBar/SearchBar.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/leadform-trial-main/property-echoes/components/SearchBar/SearchBar.jsx", "default");
}),
"[project]/leadform-trial-main/property-echoes/components/SearchBar/SearchBar.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$components$2f$SearchBar$2f$SearchBar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/components/SearchBar/SearchBar.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$components$2f$SearchBar$2f$SearchBar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/components/SearchBar/SearchBar.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$components$2f$SearchBar$2f$SearchBar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/leadform-trial-main/property-echoes/src/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$components$2f$Categories$2f$Categories$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/components/Categories/Categories.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$components$2f$PostCard$2f$PostCard$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/components/PostCard/PostCard.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$components$2f$SearchBar$2f$SearchBar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/components/SearchBar/SearchBar.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$src$2f$lib$2f$jsonPosts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/src/lib/jsonPosts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leadform-trial-main/property-echoes/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const metadata = {
    alternates: {
        canonical: "https://propertyechoes.com/"
    }
};
async function Home({ searchParams }) {
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$src$2f$lib$2f$jsonPosts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPosts"])();
    const query = (await searchParams)?.query || "";
    const page = parseInt((await searchParams)?.page) || 1;
    const postsPerPage = 10;
    // Filter posts based on the query
    const filteredPosts = query ? posts.filter((post)=>{
        const titleMatch = post.node.title.toLowerCase().includes(query.toLowerCase());
        const excerptMatch = post.node.excerpt.toLowerCase().includes(query.toLowerCase());
        const contentMatch = post.node.content.html.toLowerCase().includes(query.toLowerCase());
        return titleMatch || excerptMatch || contentMatch;
    }) : null;
    // Determine which posts to display
    const postsToDisplay = query ? filteredPosts : posts;
    const totalPosts = postsToDisplay?.length || 0;
    const totalPages = Math.ceil(totalPosts / postsPerPage) || 1;
    if (page > totalPages || page < 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    }
    // Calculate the posts for the current page
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const visiblePosts = postsToDisplay?.slice(startIndex, endIndex) || [];
    // Calculate the range of page numbers to display
    let startPage = Math.max(1, page - 1);
    let endPage = Math.min(totalPages, page + 1);
    if (page === 1) {
        endPage = Math.min(3, totalPages);
    } else if (page === totalPages) {
        startPage = Math.max(1, totalPages - 2);
    }
    const pageNumbers = [];
    for(let i = startPage; i <= endPage; i++){
        pageNumbers.push(i);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#002147] text-white py-12 lg:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#c5a059] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block",
                                children: "The Property Echoes Editorial"
                            }, void 0, false, {
                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] serif",
                                children: [
                                    "Intelligence for the modern ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                        lineNumber: 74,
                                        columnNumber: 43
                                    }, this),
                                    " UK property market."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-medium",
                                children: "Professional analysis, expert guidance, and essential updates for homeowners, investors, and industry professionals."
                            }, void 0, false, {
                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-6 pt-4 border-t border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-[#c5a059]"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold tracking-widest uppercase text-gray-400",
                                                children: "Market Trends"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-[#c5a059]"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold tracking-widest uppercase text-gray-400",
                                                children: "Legal Updates"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-[#c5a059]"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold tracking-widest uppercase text-gray-400",
                                                children: "Expert Advice"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: [
                            query && filteredPosts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-12 border-b border-gray-200 pb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#c5a059] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block",
                                                children: "Search Results"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-[#002147] text-4xl font-bold mb-3 serif",
                                                children: "Refining your search"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm",
                                                children: [
                                                    "Articles matching: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#002147] font-semibold",
                                                        children: [
                                                            '"',
                                                            query,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                        lineNumber: 105,
                                                        columnNumber: 75
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16",
                                        children: visiblePosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$components$2f$PostCard$2f$PostCard$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                post: post.node
                                            }, index, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mt-20 justify-center items-center pt-10 border-t border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/?query=${query}&page=${page - 1}`,
                                                className: `w-10 h-10 flex items-center justify-center transition-all border ${page === 1 ? "border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none" : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"} text-[10px] font-bold`,
                                                "aria-disabled": page === 1,
                                                children: "<"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this),
                                            pageNumbers.map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/?query=${query}&page=${num}`,
                                                    className: `w-10 h-10 flex items-center justify-center transition-all border ${page === num ? "bg-[#002147] text-white border-[#002147]" : "border-gray-200 text-[#002147] hover:border-[#002147]"} text-[10px] font-bold`,
                                                    children: num
                                                }, num, false, {
                                                    fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/?query=${query}&page=${page + 1}`,
                                                className: `w-10 h-10 flex items-center justify-center transition-all border ${page === totalPages ? "border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none" : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"} text-[10px] font-bold`,
                                                "aria-disabled": page === totalPages,
                                                children: ">"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this),
                            !query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-12 border-b border-gray-200 pb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#c5a059] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block",
                                                children: "Latest Intelligence"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-[#002147] text-4xl font-bold serif",
                                                children: "Market Briefings & Advice"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16",
                                        children: visiblePosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$components$2f$PostCard$2f$PostCard$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                post: post.node
                                            }, index, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mt-20 justify-center items-center pt-10 border-t border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/?page=${page - 1}`,
                                                className: `w-10 h-10 flex items-center justify-center transition-all border ${page === 1 ? "border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none" : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"} text-[10px] font-bold`,
                                                "aria-disabled": page === 1,
                                                children: "<"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            pageNumbers.map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/?page=${num}`,
                                                    className: `w-10 h-10 flex items-center justify-center transition-all border ${page === num ? "bg-[#002147] text-white border-[#002147]" : "border-gray-200 text-[#002147] hover:border-[#002147]"} text-[10px] font-bold`,
                                                    children: num
                                                }, num, false, {
                                                    fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leadform$2d$trial$2d$main$2f$property$2d$echoes$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/?page=${page + 1}`,
                                                className: `w-10 h-10 flex items-center justify-center transition-all border ${page === totalPages ? "border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none" : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"} text-[10px] font-bold`,
                                                "aria-disabled": page === totalPages,
                                                children: ">"
                                            }, void 0, false, {
                                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/leadform-trial-main/property-echoes/src/app/page.js",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/leadform-trial-main/property-echoes/src/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/leadform-trial-main/property-echoes/src/app/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0d328cd4._.js.map