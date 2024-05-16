"use client";

import {
  api,
  basketFoodType,
  basketType,
  categoryType,
  foodType,
  nameIdType,
  userUpdateProps,
} from "@/common";
import { AxiosError } from "axios";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthProvider";
import { LoaderPage } from "../LoaderPage";
type countityType = {
  countity: number;
};

type DataContextType = {
  isDisplay: boolean;
  setIsDisplay: Dispatch<SetStateAction<boolean>>;
  foods: foodType[] | undefined;
  categories: categoryType[] | undefined;
  districts: nameIdType[] | undefined;
  khoroos: nameIdType[] | undefined;
  apartments: nameIdType[] | undefined;
  inCart: basketFoodType[];
  setInCart: Dispatch<SetStateAction<basketFoodType[]>>;
  updateFood: (props: foodType) => Promise<void>;
  createFood: (props: foodType) => Promise<void>;
  deleteCategory: (props: categoryType) => Promise<void>;
  updateCategory: (props: categoryType) => Promise<void>;
  addCart: (props: basketFoodType) => void;
  createCategory: ({ name }: { name: string }) => Promise<void>;
  setRefresh: Dispatch<SetStateAction<number>>;
  // addBasket: (props: foodType & countityType) => Promise<void>;
  baskets: basketType[] | undefined;
  minusQuantity: (id: string) => void;
  addQuantity: (id: string) => void;
  setSelectedFood: Dispatch<SetStateAction<foodType | undefined>>;
  selectedFood: foodType | undefined;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [refresh, setRefresh] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  const [foods, setFoods] = useState<foodType[]>();
  const [districts, setDistricts] = useState<nameIdType[]>();
  const [khoroos, setKhoroos] = useState<nameIdType[]>();
  const [apartments, setApartments] = useState<nameIdType[]>();
  const [categories, setCategories] = useState<categoryType[]>();
  const [inCart, setInCart] = useState<basketFoodType[]>([]);
  const [baskets, setBaskets] = useState<basketType[]>();
  const [selectedFood, setSelectedFood] = useState<foodType>();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const { isLoading, setIsLoading } = useAuth();

  // CREATE FOOD
  const createFood = async (props: foodType) => {
    const { imgPath, name, price, discount, ingredients, category } = props;
    const token = localStorage.getItem("token");

    try {
      const res = await api.post(
        "/createFood",
        {
          name,
          imgPath,
          price,
          discount,
          ingredients,
          category,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setRefresh((prev) => 1 - prev);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  // CREATE CATEGORY
  const createCategory = async ({ name }: { name: string }) => {
    const token = localStorage.getItem("token");

    try {
      const res = await api.post(
        "/createCategory",
        {
          name,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  // UPDATE FOOD
  const updateFood = async (props: foodType) => {
    const { imgPath, name, price, discount, ingredients, category, _id } =
      props;

    const token = localStorage.getItem("token");

    try {
      const res = await api.post(
        "/updateFood",
        {
          imgPath,
          name,
          price,
          discount,
          ingredients,
          category,
          _id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  // GET ALL FOODS
  const getAllFoods = async () => {
    try {
      const res = await api.get("/getAllFoods");
      setFoods(res.data);
    } catch (error) {}
  };

  // GET ALL CATEGORIES
  const getAllCategories = async () => {
    try {
      const res = await api.get("/getAllCategories");
      setCategories(res.data);
    } catch (error) {}
  };

  // GET  DISTRICTS
  const getDistricts = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("/getDistricts", {
        headers: {
          Authorization: token,
        },
      });

      setDistricts(res.data);
    } catch (error) {}
  };

  // GET  KHOROOS
  const getKhoroos = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("/getKhoroos", {
        headers: {
          Authorization: token,
        },
      });

      setKhoroos(res.data);
    } catch (error) {}
  };

  // GET  APARTMENTS
  const getApartments = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("/getApartments", {
        headers: {
          Authorization: token,
        },
      });

      setApartments(res.data);
    } catch (error) {}
  };

  // UPDATE CATEGORY
  const updateCategory = async (props: categoryType) => {
    const { name, _id } = props;
    console.log(name);

    const token = localStorage.getItem("token");

    try {
      const res = await api.post(
        "/updateCategory",
        {
          name,
          _id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res);

      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setRefresh((prev) => 1 - prev);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  // DELETE CATEGORY
  const deleteCategory = async (props: categoryType) => {
    const { name, _id } = props;

    const token = localStorage.getItem("token");

    try {
      const res = await api.post(
        "/deleteCategory",
        {
          name,
          _id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  // ADD CART
  const addCart = (props: basketFoodType) => {
    const { imgPath, name, price, discount, _id, ingredients, quantity } =
      props;
    const isAdded = inCart.find((item) => item._id === _id);

    if (isAdded) {
      const newInCart = inCart.map((item) => {
        if (item._id === _id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return { ...item };
      });
      setInCart(newInCart);
    } else {
      setInCart([...inCart, props]);
    }
  };

  // ADD QUANTITY
  const addQuantity = (id: string) => {
    const newInCart = inCart.map((item) => {
      if (item._id === id) {
        if (item.quantity <= 20) {
          item.quantity += 1;
        }
      }
      return item;
    });
    setInCart(newInCart);
  };

  // MINUS QUANTITY
  const minusQuantity = (id: string) => {
    const thisFood = inCart.filter((item) => {
      return item._id === id;
    });

    if (thisFood[0].quantity === 1) {
      const newInCart = inCart.filter((item) => {
        return !(item._id === id);
      });

      setInCart(newInCart);
    } else {
      const newInCart = inCart.map((item) => {
        if (item._id === id) {
          item.quantity -= 1;
        }
        return item;
      });
      setInCart(newInCart);
    }
  };

  useEffect(() => {
    const getDatas = async () => {
      setIsLoading(true);
      await getAllFoods();
      await getAllCategories();
      await getDistricts();
      await getKhoroos();
      await getApartments();
      setIsLoading(false);
    };
    getDatas();
  }, [refresh]);

  useEffect(() => {
    if (isFirstRender) return;
    const data = JSON.stringify(inCart);
    localStorage.setItem("cart", data);
  }, [inCart]);

  useEffect(() => {
    const rawData = localStorage.getItem("cart");
    if (!rawData) {
      setIsFirstRender(false);
      return;
    }
    const data = JSON.parse(rawData);
    setInCart(data);
    setIsFirstRender(false);
  }, []);

  return (
    <DataContext.Provider
      value={{
        isDisplay,
        setIsDisplay,
        foods,
        categories,
        updateFood,
        createFood,
        createCategory,
        deleteCategory,
        updateCategory,
        setRefresh,
        districts,
        khoroos,
        apartments,
        inCart,
        setInCart,
        addCart,
        baskets,
        minusQuantity,
        addQuantity,
        selectedFood,
        setSelectedFood,
        searchValue,
        setSearchValue,
      }}
    >
      {isLoading ? <LoaderPage /> : children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
