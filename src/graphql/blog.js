import { gql } from "@apollo/client";
const GET_BLOGS = gql`
    query {
        posts {
            id
            title
            slug
            cover_photo {
                url
            }
            author {
                id
                name
                field
                avatar {
                    url
                }
            }
        }
        }
`;
const GET_BLOG = gql`
    query getBlog($blogTitle: String!) {
        post(where: {slug: $blogTitle}) {
            id
            title
            cover_photo {
                url
            }
            content {
                text
            }
            author {
                avatar {
                    url
                }
                name
                field
            }
            comments {
                id
                name
                text
            }
        }
}
`;
export { GET_BLOGS, GET_BLOG };