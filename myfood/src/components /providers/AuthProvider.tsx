"use client";

import {
  SignInProps,
  SignUpProps,
  UserType,
  api,
  changePasswordType,
  userUpdatePasswordType,
  userUpdateProps,
} from "@/common";
import { AxiosError } from "axios";
// import { Backdrop, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Notify } from "..";
import { ToastContainer, toast } from "react-toastify";

type AuthContextType = {
  isLoggedIn: boolean;
  signUp: (props: SignUpProps) => Promise<void>;
  signIn: (props: SignInProps) => Promise<void>;
  userUpdate: (props: userUpdateProps) => Promise<void>;
  otpGenerate: (
    props: userUpdatePasswordType
  ) => Promise<{ message: string; err: boolean }>;
  changePassword: (
    props: changePasswordType
  ) => Promise<{ message: string; err: boolean }>;
  // getAllFoods: () => Promise<foodType[] | string>;
  getUser: () => Promise<void>;
  signOut: () => void;
  user: UserType | undefined;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserType>();
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // GET USER
  const getUser = async () => {
    try {
      const res = await api.get("/getUser", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setUser({
        address: res.data.address,
        email: res.data.email,
        name: res.data.name,
        phoneNumber: res.data.phoneNumber,
        _id: res.data._id,
        avatar_url: res.data.avatar_url,
        isAdmin: res.data.isAdmin,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // SIGN UP
  const signUp = async (props: SignUpProps) => {
    const { name, address, email, password, phoneNumber } = props;
    setIsLoading(true);

    try {
      const { data } = await api.post("/signUp", {
        name,
        address,
        email,
        password,
        phoneNumber,
      });
      toast(<Notify message={data.message} />);

      if (data.error) {
        console.log("error", data.error);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data?.error);
      }
    }
  };

  // SIGN IN
  const signIn = async (props: SignInProps) => {
    const { email, password } = props;
    setIsLoading(true);

    try {
      const { data } = await api.post("/signIn", {
        email,
        password,
      });
      if (data.error) {
        console.log("error", data.error);
      }

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/menu");
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data?.error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // SIGN OUT
  const signOut = () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("token");

    setIsLoggedIn(false);

    router.push("/signIn");
  };

  // RENEWPASSWORD
  const reNewPassword = async ({ email }: { email: string }) => {
    try {
      const { data } = await api.post("/reNewPassword", {
        email,
      });
      if (data.error) {
        console.log("error", data.error);
      }

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/menu");
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data?.error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // USER UPDATE
  const userUpdate = async (props: userUpdateProps) => {
    const { email, name, phoneNumber, avatar_url } = props;
    const token = localStorage.getItem("token");

    try {
      const res = await api.post(
        "/userUpdate",
        {
          email,
          name,
          phoneNumber,
          avatar_url,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setUser({
        address: res.data.address,
        email: res.data.email,
        name: res.data.name,
        phoneNumber: res.data.phoneNumber,
        avatar_url: res.data.avatar_url,
      });
      toast(<Notify message="Мэдээлэл амжилттай хадгалагдлаа" />);
      router.push("/userProfile");
    } catch (error) {
      console.log(error);
    }
  };

  // OTP GENERATE
  const otpGenerate = async (props: userUpdatePasswordType) => {
    let message = "";
    let err: boolean = false;
    const { email } = props;

    try {
      const { data } = await api.post("/otpGenerate", {
        email,
      });
      localStorage.setItem("email", email);
      // toast(<Notify message={data.message} />);
      // router.push("/forgotPassword?step=2");
      message = data.message;
    } catch (error) {
      if (error instanceof AxiosError) {
        message = error.response?.data.message ?? error.message;
        err = true;
        return { message, err };
      }
    } finally {
      return { message, err };
    }
  };
  // CHANGE PASSWORD
  const changePassword = async (props: changePasswordType) => {
    const { otp, email, newPassword } = props;
    let message = "";
    let err: boolean = false;
    try {
      const { data } = await api.post("/changePassword", {
        otp,
        email,
        newPassword,
      });
      localStorage.removeItem("otp");
      localStorage.removeItem("email");

      message = data.message;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data.message) {
          // <Notify
          //   message={error.response?.data.message}
          //   color="primary.light"
          // />;
        } else {
          // toast();
          // <Notify
          //   error={true}
          //   message={error.message}
          //   color="primary.light"
          // />
        }
        message = error.response?.data.message ?? error.message;
        err = true;
      }
      return { message, err };
    } finally {
      return { message, err };
    }
  };

  // USE EFFECT
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    setIsLoggedIn(true);
    getUser();
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) return;
    getUser();
    // getAllFoods();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        signIn,
        signUp,
        signOut,
        user,
        userUpdate,
        getUser,
        otpGenerate,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
