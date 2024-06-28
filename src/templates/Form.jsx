import React from "react";
import { Alert } from "@mui/material";
import InputField from "../components/InputField";
import useForm from "../hooks/form";
import useAlert from "../hooks/alert";
import { useParams } from "react-router-dom";
import { inputFields } from "../data/form";
import { useAddComment } from "../hooks/comment";
const Form = () => {
    const { blogTitle } = useParams();
    const { form, isFormFilled, changeInput, resetForm } = useForm({ username: "", email: "", comment: "" });
    const { alert, showAlert, hideAlert, endAlert } = useAlert();
    const { loading, mutateAddComment } = useAddComment({ showAlert, resetForm });
    return (
        <section>
            <form className="pt-7 px-4 pb-5 rounded-2xl mt-7 shadow-2xl" onSubmit={event => {
                event.preventDefault();
                isFormFilled 
                    ? mutateAddComment({ variables: { ...form, blogTitle } }) 
                    : showAlert("warning", "لطفا تمام فیلد ها رو پر کن");
            }}>
                <p className="mb-7 text-primary text-xl font-semibold">فرم ارسال کامنت</p>
                {inputFields.map(field => 
                    <InputField key={field.id} value={form[field.name]} onChange={changeInput} {...field} />
                )}
                <button 
                    className="py-1 px-4 border-none rounded bg-primary text-white font-medium cursor-pointer transit shadow-2xl hover:bg-primary-dark disabled:bg-primary-dark disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    {loading ? "در حال ارسال..." : "ارسال"}
                </button>
            </form>
            {alert.isVisible !== null && 
                <Alert 
                    className={`
                        fixed top-0 right-0 left-0 z-20 w-fit mx-auto animate 
                        ${alert.isVisible ? alert.isAnimating ? "drop" : "dropped" : alert.isAnimating && "hide"}
                    `} 
                    severity={alert.severity}
                    onClick={hideAlert}
                    onAnimationEnd={endAlert}
                >
                    {alert.message}
                </Alert>
            }
        </section>
    );
};
export default Form;