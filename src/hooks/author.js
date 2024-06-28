import { useQuery } from "@apollo/client";
import { GET_AUTHORS, GET_AUTHOR } from "../graphql/author";
const useAuthors = () => {
    const { data, ...authorsState } = useQuery(GET_AUTHORS);
    return { ...authorsState, authors: data?.authors };
};
const useAuthor = name => {
    const { data, ...authorState } = useQuery(GET_AUTHOR, { variables: { authorName: name } });
    return { ...authorState, author: data?.author };
};
export { useAuthors, useAuthor };