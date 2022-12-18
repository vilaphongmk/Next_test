import { toast } from "react-toastify";

const showError = (message) => {
    if (message)
        for (const key of Object.keys(message)) {
            return toast.error(message[key].toString());
        }
};

export default showError;