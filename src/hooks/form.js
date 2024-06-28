import { useImmer as useImmerState } from "use-immer";
import { checkIsFormFilled } from "../helpers/form";
const useForm = initialForm => {
    const [form, setForm] = useImmerState(initialForm);
    const changeInput = (name, value) => setForm(form => {
        form[name] = value;
    });
    const resetForm = () => setForm(initialForm);
    const isFormFilled = checkIsFormFilled(form);
    return { form, isFormFilled, changeInput, resetForm };
};
export default useForm;