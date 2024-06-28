import { useRef } from "react";
import { useImmerReducer } from "use-immer";
import { alertReducer, initialAlert } from "../reducers/alert";
const useAlert = () => {
    const [alert, dispatch] = useImmerReducer(alertReducer, initialAlert);
    const timeoutRef = useRef(0);
    const showAlert = (severity, message, timeout = 2000) => {
        dispatch({ type: "alertShown", payload: { severity, message } });
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(hideAlert, timeout);
    };
    const hideAlert = () => dispatch({ type: "alertHidden" });
    const endAlert = () => dispatch({ type: "alertEnded" });
    return { alert, showAlert, hideAlert, endAlert };
};
export default useAlert;