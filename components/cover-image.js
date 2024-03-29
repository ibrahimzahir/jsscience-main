import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, url, slug }) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "rounded-lg object-fill h-64 w-full hover:shadow-medium transition-shadow duration-200":
          slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
