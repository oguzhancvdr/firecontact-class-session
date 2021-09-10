import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const succesToastify = (msg) => {
  toast.success(msg, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
