import Link from "next/link";
import Avatar from "../components/avatar";
import DateComponent from "../components/date";
import CoverImage from "../components/cover-image";

export default function HeroPost({
  title,
  coverImage,

  date,
  excerpt,
  author,
  slug,
  tags,
}) {
  return (
    <div className="p-10 grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="grid-cols-4 rounded overflow-hidden shadow-lg">
        <CoverImage
          title={title}
          slug={slug}
          url={coverImage.url}
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </div>
          <p className="text-gray-700 text-base">{excerpt}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tags}
          </span>
        </div>
      </div>
    </div>
  );
}
