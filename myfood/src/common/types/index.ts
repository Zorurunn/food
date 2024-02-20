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
