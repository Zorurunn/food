import { foodType } from "@/app/menu/page";

export type SignInProps = {
  email: string;
  password: string;
};
export type SignUpProps = {
  name: string;
  address: string;
  email: string;
  password: string;
  phoneNumber: string;
};

export type UserType = {
  address: string;
  email: string;
  name: string;
  password?: string;
  phoneNumber: string;
  _id?: string;
};
export type userUpdateProps = {
  // address: string;
  email: string;
  name: string;
  phoneNumber: string;
};
export type userUpdatePasswordType = {
  email: string;
};
export type changePasswordType = {
  otp: string;
  email: string;
  newPassword: string;
};

export type categoryType = {
  _id?: string;
  name: string;
};

export type inMyCartType = {
  food:foodType;
  countity:number;
};
