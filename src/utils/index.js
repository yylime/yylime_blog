import { compareDesc, parseISO } from "date-fns";
export const cx = (...className) => className.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs.slice().sort((a, b) => {
    return compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt));
  });
};