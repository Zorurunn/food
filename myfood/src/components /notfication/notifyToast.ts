import { toast } from "react-toastify";
import { Notify } from "./ Notify";

type ToastProps = {
  message: string;
  color: string;
};
export const notifyToast = (props: ToastProps) => {
  const { message, color } = props;

  // toast(Notify);

  toast(message);
};
