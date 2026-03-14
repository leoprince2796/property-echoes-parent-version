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

    const cleanedTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(stopWords, " ")
      .replace(/\s+/g, " ")
      .trim();

    const words = cleanedTitle.split(" ").filter(Boolean);

    if (words.length < 2) return;

    const variations = [];

    if (words.length >= 2) variations.push(words.slice(0, 2).join(" "));
    if (words.length >= 3) variations.push(words.slice(1, 3).join(" "));
    if (words.length >= 3) variations.push(words.slice(0, 3).join(" "));
    if (words.length >= 2) variations.push(words.slice(-2).join(" "));

    const seen = new Set();
    const uniqueVariations = variations.filter((v) => {
      if (!v || v.length < 4 || seen.has(v)) return false;
      seen.add(v);
      return true;
    });

    const categorySlug =
      Array.isArray(category) && category.length > 0
        ? category[0].slug
        : "uncategorised";

    for (const keyword of uniqueVariations) {
      if (linkCount >= 8) break;
      if (linkedSlugs.has(slug)) break;

      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`\\b(${escapedKeyword})\\b`, "i");

      if (regex.test(updatedContent)) {
        updatedContent = updatedContent.replace(
          regex,
          `<a href="/category/${categorySlug}/${slug}" class="internal-link">$1</a>`
        );

        linkedSlugs.add(slug);
        linkCount++;
        break;
      }
    }
  });

  return updatedContent;
}
