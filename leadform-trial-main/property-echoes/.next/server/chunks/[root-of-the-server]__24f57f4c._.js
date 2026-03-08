module.exports = [
"[project]/.next-internal/server/app/sitemap.xml/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/lib/jsonPosts.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPosts",
    ()=>getAllPosts,
    "getPostBySlug",
    ()=>getPostBySlug
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/marked/lib/marked.esm.js [app-route] (ecmascript)");
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
            contentHtml = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["marked"].parse(post.content);
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
"[project]/src/app/sitemap.xml/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonPosts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jsonPosts.js [app-route] (ecmascript)");
;
async function GET() {
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonPosts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllPosts"])();
    const baseUrl = "https://propertyechoes.com";
    const today = new Date().toISOString();
    const urls = posts.map((post)=>{
        const categorySlug = post.node.category[0]?.slug;
        const postUrl = categorySlug ? `${baseUrl}/category/${categorySlug}/${post.node.slug}` : `${baseUrl}/category/${post.node.category[0]?.slug}/${post.node.slug}`;
        return `
    <url>
      <loc>${postUrl}</loc>
      <lastmod>${post.node.date || post.node.createdAt || today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
    });
    const staticUrls = [
        "about",
        "contact",
        "privacy-policy",
        "terms-of-use"
    ].map((path)=>`
      <url>
        <loc>${baseUrl}/${path}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>`);
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
        ...staticUrls,
        ...urls
    ].join("\n")}
</urlset>`;
    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__24f57f4c._.js.map