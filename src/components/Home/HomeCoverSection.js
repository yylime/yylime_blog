import React from "react";
import { sortBlogs } from "@/utils/index";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Elements/Tag"
import { slug } from "github-slugger";
const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            "
        />

        <Image
          src={blog.image.src}
          placeholder="blur"
          blurDataURL={blog.image.blurDataURL}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
          priority
        />
        <div className="w-full lg:w-3/4 px-6 sm:px-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
          <Link href={blog.url} className="mt-6">
            <h1 className="font-bold capitalize sm:text-lg text-xl md:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-t from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-all duration-500">
                {blog.title}
              </span>
            </h1>
          </Link>

          <p className="hidden mt-4 sm:inline-block md:text-lg lg:text-xl font-in">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
