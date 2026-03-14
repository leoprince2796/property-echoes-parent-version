export function autoInternalLinks(content, currentSlug, allBlogs) {
  let updatedContent = content;
  let linkCount = 0;
  const linkedSlugs = new Set();

  allBlogs.forEach((blog) => {
    const blogNode = blog.node || blog;
    const slug = blogNode.slug;
    const title = blogNode.title;
    const category = blogNode.category;

    if (!slug || !title || slug === currentSlug) return;
    if (linkCount >= 8) return;
    if (linkedSlugs.has(slug)) return;

    const stopWords = /\b(for|the|and|to|in|a|of|is|are|on|with|at|by|from|how|what|why|when|where|do|does|your|you|uk|its|it|this|that|our|all|as|an)\b/gi;
    const keyword = title
      .toLowerCase()
      .replace(stopWords, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (!keyword || keyword.length < 4) return;

    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(?<![>"\\/])\\b(${escapedKeyword})\\b(?![^<]*>)`, "i");

    if (regex.test(updatedContent)) {
      const categorySlug =
        Array.isArray(category) && category.length > 0
          ? category[0].slug
          : "uncategorised";

      updatedContent = updatedContent.replace(
        regex,
        `<a href="/category/${categorySlug}/${slug}" class="internal-link">$1</a>`
      );

      linkedSlugs.add(slug);
      linkCount++;
    }
  });

  return updatedContent;
}
