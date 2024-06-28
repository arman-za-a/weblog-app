import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../graphql/comment";
const useAddComment = ({ showAlert, resetForm } ) => {
    const [mutateAddComment, addCommentState] = useMutation(ADD_COMMENT, { 
        onCompleted: data => {
            console.log(data);
            showAlert("success", "کامنت ارسال شد و منتظر تایید می باشد");
            resetForm();
        }, 
        onError: error => {
            console.log(error);
            showAlert("error", "مشکلی در ارسال کامنت پیش امده است");
        } 
    });
    return { ...addCommentState, mutateAddComment };
};
export { useAddComment };