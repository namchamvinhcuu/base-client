import { toast } from 'react-toastify';
// toast.configure();

const SuccessAlert = (message) => {
    toast.success(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "colored"
    });
};

const WarnAlert = (message) => {
    toast.warn(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "colored"
    });
};

const ErrorAlert = (message) => {
    toast.error(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "colored"
    });
};

export {
    SuccessAlert,
    WarnAlert,
    ErrorAlert
}