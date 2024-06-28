const initialAlert = { isVisible: null, isAnimating: false, severity: "", message: "" };
const alertReducer = (alert, action) => {
    switch (action.type) {
        case "alertShown": {
            const { severity, message } = action.payload;
            alert.isVisible = true;
            alert.isAnimating = true;
            alert.severity = severity;
            alert.message = message;
            break;
        };
        case "alertHidden": {
            alert.isAnimating = true;
            alert.isVisible = false;
            break;
        };
        case "alertEnded": {
            if (alert.isVisible) {
                alert.isAnimating = false;
            } else {
                alert.isAnimating = false;
                alert.isVisible = null;  
            };
            break;
        };
    };
};
export { initialAlert, alertReducer };