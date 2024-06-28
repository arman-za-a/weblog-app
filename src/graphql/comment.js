import { gql } from "@apollo/client";
const ADD_COMMENT = gql`
    mutation createComment(
        $username: String!
        $email: String!
        $comment: String!
        $blogTitle: String!
    ) {
        createComment(
            data: {
                name: $username
                email: $email 
                text: $comment 
                post: {connect: {slug: $blogTitle}}
            }
        ) {
            id
            name
            email
            text
        }
    }
`;
export { ADD_COMMENT };