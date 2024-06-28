import { gql } from "@apollo/client";
const GET_AUTHORS = gql`
    query {
        authors {
            id
            name
            slug
            avatar {
                url
            }
        }
}
`;
const GET_AUTHOR = gql`
query getAuthor($authorName: String!) {
    author(where: {slug: $authorName}) {
        id
        avatar {
            url
        }
        name
        field
        description {
            text
        }
        posts {
            id
            cover_photo {
                url
            }
            title
            slug
        }
    }
}
`;
export { GET_AUTHORS, GET_AUTHOR };