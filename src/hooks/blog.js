import { useQuery } from "@apollo/client";
import { GET_BLOGS, GET_BLOG } from "../graphql/blog";
const useBlogs = () => {
    const { data, ...blogsState } = useQuery(GET_BLOGS);
    return { ...blogsState, blogs: data?.posts };
};
const useBlog = title => {
    const { data, ...blogState } = useQuery(GET_BLOG, { variables: { blogTitle: title } });
    return { ...blogState, blog: data?.post };
};
export { useBlogs, useBlog };