import Link from "next/link";
import Avatar from "../components/avatar";
import DateComponent from "../components/date";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="relative flex flex-col m-2 bg-white z-30 transform hover:-translate-y-1 transition duration-500 hover:scale-105">
      <div className="mb-3">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="text-xl hover:text-purple-700 mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <div>
        <p className="line-clamp-3 p-1 text-sm leading-relaxed mb-4">
          {excerpt}
        </p>
        <div className="flex items-center space-x-24 md:space-x-32">
          {author && <Avatar name={author.name} picture={author.picture} />}
          <div className="flex text-sm">
            <DateComponent dateString={date} />
          </div>
        </div>
      </div>
    </div>
  );
}
