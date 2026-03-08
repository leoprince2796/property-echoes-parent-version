module.exports = [
"[project]/.next-internal/server/app/category/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/icon.png.mjs { IMAGE => \"[project]/src/app/icon.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/icon.png.mjs { IMAGE => \"[project]/src/app/icon.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/src/lib/jsonPosts.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPosts",
    ()=>getAllPosts,
    "getPostBySlug",
    ()=>getPostBySlug
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/marked/lib/marked.esm.js [app-rsc] (ecmascript)");
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
            contentHtml = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["marked"].parse(post.content);
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
"[project]/components/Categories/Categories.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Categories",
    ()=>Categories,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonPosts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jsonPosts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
const Categories = async ()=>{
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonPosts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPosts"])();
    const categoryDetails = Array.from(new Map(posts.flatMap((p)=>p.node.category).map((c)=>[
            c.slug,
            c
        ])).values());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "category-div",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "category-content-div",
            children: categoryDetails.map((element)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/category/${element.slug}/`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "category-elements",
                        children: element.name
                    }, void 0, false, {
                        fileName: "[project]/components/Categories/Categories.jsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, element.slug, false, {
                    fileName: "[project]/components/Categories/Categories.jsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/components/Categories/Categories.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Categories/Categories.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Categories;
}),
"[project]/components/SearchBar/SearchBar.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/SearchBar/SearchBar.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/SearchBar/SearchBar.jsx <module evaluation>", "default");
}),
"[project]/components/SearchBar/SearchBar.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/SearchBar/SearchBar.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/SearchBar/SearchBar.jsx", "default");
}),
"[project]/components/SearchBar/SearchBar.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2f$SearchBar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/SearchBar/SearchBar.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2f$SearchBar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/SearchBar/SearchBar.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2f$SearchBar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/SearchResults/SearchResults.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/SearchResults/SearchResults.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/SearchResults/SearchResults.jsx <module evaluation>", "default");
}),
"[project]/components/SearchResults/SearchResults.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/SearchResults/SearchResults.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/SearchResults/SearchResults.jsx", "default");
}),
"[project]/components/SearchResults/SearchResults.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchResults$2f$SearchResults$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/SearchResults/SearchResults.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchResults$2f$SearchResults$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/SearchResults/SearchResults.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchResults$2f$SearchResults$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/content/categoryContent.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryContent",
    ()=>categoryContent,
    "getAllCategorySlugs",
    ()=>getAllCategorySlugs,
    "getCategoryContent",
    ()=>getCategoryContent
]);
const categoryContent = {
    "buying-and-selling": {
        name: "Buying & Selling",
        seo: {
            title: "Buying & Selling Property UK | Expert Guides 2025",
            description: "Complete guides on buying and selling property in the UK. Learn about valuations, conveyancing, market timing, and how to navigate the home sale process."
        },
        intro: `
      <p>The UK property market presents both opportunities and challenges for buyers and sellers alike. Whether you are taking your first steps onto the property ladder, upgrading to a family home, or selling a property you have owned for years, understanding the process is essential for making informed decisions.</p>
      
      <p>This section covers every stage of the property transaction journey. For sellers, you will find practical guidance on <a href="/category/buying-and-selling/average-time-to-sell-a-house-uk">how long it takes to sell a house in the UK</a>, including regional variations and factors that influence your timeline. Buyers can explore topics ranging from mortgage options and property valuations to the legal aspects of purchasing a home.</p>
      
      <p>Understanding the conveyancing process, managing property chains, and knowing when to negotiate are skills that can save you thousands of pounds and weeks of stress. Our articles break down complex topics into clear, actionable steps that anyone can follow.</p>
      
      <p>The content here is designed for homeowners at every stage of their property journey. First-time buyers will find explanations of unfamiliar terminology and step-by-step guides. Experienced property owners can access detailed analysis of market conditions and strategic advice for maximising sale prices or finding the right purchase.</p>
      
      <p>From preparing your home for viewings to understanding the difference between exchange and completion, this resource hub provides the information you need to approach buying and selling with confidence. Each article draws on current market data and established property practices to offer balanced, practical guidance.</p>
    `,
        featuredPosts: [
            "average-time-to-sell-a-house-uk"
        ]
    },
    "guides-and-advice": {
        name: "Guides & Advice",
        seo: {
            title: "Property Guides & Advice UK | Home Ownership Tips",
            description: "Expert property guides covering home ownership, maintenance, legal matters, and practical advice for UK homeowners, landlords, and property investors."
        },
        intro: `
      <p>Owning and managing property in the UK involves far more than simply paying a mortgage or collecting rent. From understanding your legal obligations to maintaining your home's value over time, there are countless decisions that property owners face throughout their journey.</p>
      
      <p>This comprehensive resource hub brings together practical guidance on the topics that matter most to UK property owners. Whether you need to understand <a href="/category/guides-and-advice">planning permission requirements</a>, navigate landlord responsibilities, or learn about energy efficiency improvements, you will find clear explanations written for everyday property owners.</p>
      
      <p>Our guides cover essential aspects of property ownership including legal compliance, maintenance schedules, insurance considerations, and financial planning. We address questions that arise at different stages of ownership, from the immediate concerns of new buyers to the long-term considerations of established homeowners looking to add value to their properties.</p>
      
      <p>The advice provided here is intended for a broad audience including first-time buyers, growing families, downsizers, landlords, and anyone considering property investment. Each piece is written to be accessible regardless of your previous experience with property matters.</p>
      
      <p>You will find information on topics such as home surveys and their implications, the process of remortgaging, dealing with boundary disputes, and understanding leasehold versus freehold ownership. Our aim is to provide balanced information that helps you make well-informed decisions about your property, whether you are addressing an immediate problem or planning for the future.</p>
    `,
        featuredPosts: []
    },
    "investment": {
        name: "Investment",
        seo: {
            title: "UK Property Investment Guides | Buy-to-Let & Returns",
            description: "Property investment insights for the UK market. Covering buy-to-let strategies, rental yields, capital growth, and investment property analysis."
        },
        intro: `
      <p>Property investment remains one of the most popular wealth-building strategies in the United Kingdom, offering potential returns through both rental income and capital appreciation. However, successful property investment requires careful research, financial planning, and an understanding of the regulatory environment.</p>
      
      <p>This section provides analysis and information for anyone considering <a href="/category/investment">property as an investment vehicle</a>. Whether you are evaluating your first buy-to-let purchase or building a portfolio of rental properties, the content here addresses the practical realities of being a property investor in today's market.</p>
      
      <p>Key topics covered include calculating rental yields, understanding mortgage options for investment properties, tax implications of property income, and the responsibilities that come with being a landlord. We also examine different investment strategies, from traditional long-term lets to the considerations around holiday rentals and house in multiple occupation properties.</p>
      
      <p>The UK property investment landscape has evolved significantly in recent years, with changes to tax relief, increased regulation, and shifting tenant expectations. Our articles reflect these changes and provide context for making investment decisions in the current environment.</p>
      
      <p>This resource is designed for prospective investors researching the market, existing landlords looking to optimise their portfolios, and anyone interested in understanding how property investment works in practice. The information provided is intended to complement professional financial advice rather than replace it.</p>
    `,
        featuredPosts: []
    },
    "lifestyle": {
        name: "Lifestyle",
        seo: {
            title: "Property Lifestyle UK | Home & Living Inspiration",
            description: "Explore property lifestyle content covering home design, neighbourhood guides, living trends, and inspiration for UK homeowners and renters."
        },
        intro: `
      <p>A home is more than bricks and mortar; it is where life happens. The lifestyle section of Property Echoes explores the human side of property, looking at how the places we live shape our daily experiences and quality of life.</p>
      
      <p>Here you will find content that goes beyond transactions and technicalities to consider the broader aspects of <a href="/category/lifestyle">choosing and living in a home</a>. From neighbourhood comparisons and location guides to home design trends and practical living tips, this section addresses the questions that influence where and how we choose to live.</p>
      
      <p>Topics covered include the factors that make neighbourhoods desirable, how to assess an area before moving, interior design considerations that add value, and the changing preferences of UK homeowners. We examine how remote working has influenced location choices, what amenities matter most to different demographics, and how homes can be adapted to suit changing life circumstances.</p>
      
      <p>This content is relevant to anyone thinking about their living situation, whether you are choosing between potential locations, looking to improve your current home, or simply curious about property lifestyle trends across the UK.</p>
      
      <p>The aim is to provide thoughtful perspectives on the relationship between property and lifestyle, helping readers think beyond price per square foot to consider what truly makes a house feel like home. Each article offers observations and information to inform your thinking about property in the context of everyday life.</p>
    `,
        featuredPosts: []
    },
    "market-news": {
        name: "Market News",
        seo: {
            title: "UK Property Market News | Housing Trends & Updates",
            description: "Latest UK property market news, housing statistics, price trends, and economic factors affecting the British housing market in 2025."
        },
        intro: `
      <p>The UK property market is influenced by a complex mix of economic conditions, government policy, interest rates, and regional factors. Staying informed about market developments helps homeowners, buyers, sellers, and investors make timely and well-considered decisions.</p>
      
      <p>This section brings together <a href="/category/market-news">analysis of current market conditions</a> and significant developments affecting UK property. We cover house price movements, transaction volumes, mortgage rate changes, and policy announcements that have implications for property owners and those looking to enter the market.</p>
      
      <p>Our market coverage examines trends at both national and regional levels, recognising that property markets in London, the South East, the North, Scotland, and Wales often behave quite differently. Understanding these regional variations is essential for anyone making property decisions in a specific location.</p>
      
      <p>Topics regularly addressed include quarterly market reports, analysis of official housing statistics, the impact of Bank of England interest rate decisions, and government initiatives affecting housing. We also look at longer-term trends such as demographic shifts, housing supply challenges, and changing buyer preferences.</p>
      
      <p>This resource is designed for anyone who wants to understand what is happening in the UK property market and how broader trends might affect their personal property situation. The analysis provided aims to put market movements in context, helping readers distinguish between significant shifts and short-term fluctuations.</p>
    `,
        featuredPosts: []
    },
    "renting": {
        name: "Renting",
        seo: {
            title: "Renting in the UK | Tenant Guides & Rental Advice",
            description: "Essential guides for UK renters covering tenant rights, rental agreements, deposit protection, and practical advice for finding and keeping a rental home."
        },
        intro: `
      <p>Renting is the reality for millions of people across the United Kingdom, from young professionals starting their careers to families and retirees who prefer the flexibility that renting provides. Understanding your rights and responsibilities as a tenant is essential for a positive rental experience.</p>
      
      <p>This section provides comprehensive guidance for anyone <a href="/category/renting">navigating the UK rental market</a>. Whether you are searching for your first rental property, dealing with a tenancy issue, or simply want to understand how renting works in practice, you will find relevant information here.</p>
      
      <p>Topics covered include how to find and secure a rental property, understanding different types of tenancy agreements, your rights regarding deposits and their protection, dealing with repairs and maintenance requests, and knowing when and how to escalate disputes. We also address practical matters such as what to check before signing a lease, how referencing works, and the process of ending a tenancy correctly.</p>
      
      <p>The UK rental sector has seen significant regulatory changes in recent years, with evolving tenant protections and landlord requirements. Our content reflects the current legal framework while highlighting upcoming changes that may affect renters.</p>
      
      <p>This resource is aimed at tenants at all stages of their rental journey, from first-time renters unfamiliar with the process to experienced tenants seeking specific information about their rights. The guidance provided is intended to help renters make informed decisions and navigate the rental market with confidence.</p>
    `,
        featuredPosts: []
    }
};
function getCategoryContent(slug) {
    return categoryContent[slug] || null;
}
function getAllCategorySlugs() {
    return Object.keys(categoryContent);
}
}),
"[project]/src/app/category/[slug]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Categories$2f$Categories$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Categories/Categories.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2f$SearchBar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchBar/SearchBar.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchResults$2f$SearchResults$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchResults/SearchResults.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonPosts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jsonPosts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$categoryContent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/categoryContent.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function fetchCategoryNameBySlug(slug) {
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonPosts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPosts"])();
    const category = posts.flatMap((p)=>p.node.category).find((c)=>c.slug === slug);
    return category?.name || "Property Echoes";
}
function getFeaturedPostsForCategory(slug, allPosts, limit = 5) {
    const categoryPosts = allPosts.filter((post)=>post.node.category.some((c)=>c.slug === slug));
    return categoryPosts.slice(0, limit);
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const categoryContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$categoryContent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategoryContent"])(slug);
    const categoryName = await fetchCategoryNameBySlug(slug);
    if (categoryContent?.seo) {
        return {
            title: categoryContent.seo.title,
            description: categoryContent.seo.description,
            alternates: {
                canonical: `https://propertyechoes.com/category/${slug}`
            },
            robots: {
                index: true,
                follow: true
            }
        };
    }
    return {
        title: categoryName || "Property Echoes",
        description: `Explore the latest ${categoryName} tips, trends, and insights on Property Echoes. Whether you're a buyer, seller, or investor, find expert advice to guide your real estate journey.`,
        alternates: {
            canonical: `https://propertyechoes.com/category/${slug}`
        },
        robots: {
            index: true,
            follow: true
        }
    };
}
async function CategoryPage({ params, searchParams }) {
    const { slug } = await params;
    const { name } = await searchParams;
    const page = parseInt((await searchParams)?.page) || 1;
    const postsPerPage = 10;
    if (slug === "author" && !name) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    }
    const categoryName = await fetchCategoryNameBySlug(slug);
    const categoryContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$categoryContent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategoryContent"])(slug);
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonPosts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPosts"])();
    const filteredPosts = posts.filter((post)=>{
        if (slug === "author") {
            return post.node.author.name === name;
        }
        return post.node.category.some((c)=>c.slug === slug);
    });
    const featuredPosts = getFeaturedPostsForCategory(slug, posts, 5);
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage) || 1;
    if (page > totalPages && totalPages > 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/category/${slug}${name ? `?name=${name}` : ""}`);
    }
    const startIndex = (page - 1) * postsPerPage;
    const visiblePosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
    const authorName = (await searchParams)?.name;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#002147] text-white py-12 lg:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#c5a059] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block",
                                children: "The Property Echoes Editorial"
                            }, void 0, false, {
                                fileName: "[project]/src/app/category/[slug]/page.jsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] serif",
                                children: categoryName
                            }, void 0, false, {
                                fileName: "[project]/src/app/category/[slug]/page.jsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-medium",
                                children: "Professional analysis, expert guidance, and essential updates for homeowners, investors, and industry professionals."
                            }, void 0, false, {
                                fileName: "[project]/src/app/category/[slug]/page.jsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/category/[slug]/page.jsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/category/[slug]/page.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/category/[slug]/page.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            categoryContent?.intro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gray-50 border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom py-12 lg:py-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prose prose-lg prose-gray max-w-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "category-intro text-gray-700 leading-relaxed space-y-4",
                                    dangerouslySetInnerHTML: {
                                        __html: categoryContent.intro
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/category/[slug]/page.jsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/category/[slug]/page.jsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this),
                            featuredPosts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 pt-8 border-t border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-gray-900 mb-4",
                                        children: [
                                            "Popular Articles in ",
                                            categoryName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/category/[slug]/page.jsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "grid gap-3 sm:grid-cols-2",
                                        children: featuredPosts.slice(0, 4).map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/category/${slug}/${post.node.slug}`,
                                                    className: "flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#c5a059] mt-1",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/category/[slug]/page.jsx",
                                                            lineNumber: 128,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700 group-hover:text-[#002147] transition-colors font-medium",
                                                            children: post.node.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/category/[slug]/page.jsx",
                                                            lineNumber: 129,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/category/[slug]/page.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 25
                                                }, this)
                                            }, post.node.slug, false, {
                                                fileName: "[project]/src/app/category/[slug]/page.jsx",
                                                lineNumber: 123,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/category/[slug]/page.jsx",
                                        lineNumber: 121,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/category/[slug]/page.jsx",
                                lineNumber: 119,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/category/[slug]/page.jsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/category/[slug]/page.jsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/category/[slug]/page.jsx",
                lineNumber: 108,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchResults$2f$SearchResults$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            visiblePosts: visiblePosts,
                            categoryName: categoryName,
                            authorName: authorName,
                            page: page,
                            totalPages: totalPages,
                            baseUrl: `/category/${slug}${name ? `?name=${name}` : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/app/category/[slug]/page.jsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/category/[slug]/page.jsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/category/[slug]/page.jsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/category/[slug]/page.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/category/[slug]/page.jsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/category/[slug]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/category/[slug]/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e9dbfce5._.js.map