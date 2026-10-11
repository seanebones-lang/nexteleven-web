import Image from "next/image";

// IDs verified against each launch's official Product Hunt embed page.
const launches = {
  personalragvault: { name: "PersonalRAGVault", slug: "personalragvault", postId: 1276319 },
  harness: { name: "Harness by NextEleven", slug: "harness-by-nexteleven", postId: 1276324 },
  deadbolt: { name: "DeadBolt", slug: "deadbolt-4", postId: 1276313 },
  reposalvage: { name: "Repo Salvage", slug: "repo-salvage", postId: 1276322 },
} as const;

export function ProductHuntBadge({ product }: { product: keyof typeof launches }) {
  const launch = launches[product];
  return <div className="product-hunt-badge">
    <a
      href={`https://www.producthunt.com/products/${launch.slug}?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-${launch.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${launch.name} on Product Hunt`}
    >
      <Image
        src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${launch.postId}&theme=dark`}
        alt={`${launch.name} — Find us on Product Hunt`}
        width={250}
        height={54}
        unoptimized
      />
      <span>View launch ↗</span>
    </a>
  </div>;
}
