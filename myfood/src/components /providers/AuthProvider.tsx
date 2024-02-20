"use client";

import {
  SignInProps,
  SignUpProps,
  UserType,
  api,
  userUpdateProps,
} from "@/common";
import { AxiosError } from "axios";
import { log } from "console";
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

type AuthContextType = {
  isLoggedIn: boolean;
  signUp: (props: SignUpProps) => Promise<void>;
  signIn: (props: SignInProps) => Promise<void>;
  userUpdate: (props: userUpdateProps) => Promise<void>;
  signOut: () => void;
  user: UserType | undefined;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserType>();
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // GET USER IN USeEFFECT
  const getUser = async (token: string) => {
    try {
      const res = await api.get("/getUser", {
        headers: {
          Authorization: token,
        },
      });
      setUser({
        address: res.data.address,
        email: res.data.email,
        name: res.data.name,
        phoneNumber: res.data.phoneNumber,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsReady(false);
    const token = localStorage.getItem("token");
    if (!token) return;

    if (token) {
      setIsLoggedIn(true);
      getUser(token);
    }

    setIsReady(true);
  }, [isLoggedIn, user]);

  const router = useRouter();

  // SIGN UP
  const signUp = async (props: SignUpProps) => {
    console.log("Props", props);

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
      console.log("data:", data);

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

  // USER UPDATE
  const userUpdate = async (props: userUpdateProps) => {
    const { email, name, phoneNumber } = props;
    const token = localStorage.getItem("token");

    try {
      const res = await api.post(
        "/userUpdate",
        {
          email,
          name,
          phoneNumber,
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
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, signIn, signUp, signOut, user, userUpdate }}
    >
      {/* {isReady && children} */}
      {children}
      {/* <div>Loading</div> */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
