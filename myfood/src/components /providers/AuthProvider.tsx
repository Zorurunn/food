"use client";

import { SignInProps, SignUpProps, api } from "@/common";
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
import { boolean } from "yup";
// import { toast } from "react-toastify";

type User = {
  email: string;
  password: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  signUp: (props: SignUpProps) => Promise<void>;
  signIn: (props: SignInProps) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // SIGN UP
  const signUp = async (props: SignUpProps) => {
    const { name, address, email, password } = props;
    setIsLoading(true);

    try {
      const { data } = await api.post("/signUp", {
        name,
        address,
        email,
        password,
      });
      if (data.error) {
        console.log("error", data.error);
      }
      console.log(data);
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

  // useEffect(() => {
  //   setIsReady(false);

  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     setIsLoggedIn(true);
  //   }

  //   setIsReady(true);
  // }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signUp, signOut }}>
      {/* {isReady && children} */}
      {children}

      {/* <div>Loading</div> */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
