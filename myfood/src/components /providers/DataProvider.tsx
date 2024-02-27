"use client";

import {
  addCartType,
  api,
  basketType,
  categoryType,
  foodType,
  nameIdType,
  userUpdateProps,
} from "@/common";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { setOpenType } from "..";
import { setIn } from "formik";
import { log } from "console";
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
  inCart: foodType[] | undefined;
  setInCart: Dispatch<SetStateAction<foodType[] | undefined>>;
  updateFood: (props: foodType) => Promise<void>;
  createFood: (props: foodType) => Promise<void>;
  deleteCategory: (props: categoryType) => Promise<void>;
  updateCategory: (props: categoryType) => Promise<void>;
  addCart: (props: addCartType) => void;
  createCategory: ({ name }: { name: string }) => Promise<void>;
  setRefresh: Dispatch<SetStateAction<number>>;
  addBasket: (props: foodType & countityType) => Promise<void>;
  baskets: basketType[] | undefined;
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
  const [inCart, setInCart] = useState<foodType[]>();
  const [baskets, setBaskets] = useState<basketType[]>();

  // CREATE FOOD
  const createFood = async (props: foodType) => {
    const { imgPath, name, price, discount, ingredients, category } = props;

    console.log("add new food", props);

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
      console.log("added food res", res);

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
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
      console.log("added category res", res);

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE FOOD
  const updateFood = async (props: foodType) => {
    const { imgPath, name, price, discount, ingredients, category, _id } =
      props;

    console.log("Update food", props);

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
      console.log("update food res", res);

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
    }
  };

  // GET ALL FOODS
  const getAllFoods = async () => {
    try {
      const res = await api.get("/getAllFoods");
      console.log("get All foods");

      setFoods(res.data);
    } catch (error) {
      console.log("in getAllFoods() function error:", error);
    }
  };

  // GET ALL CATEGORIES
  const getAllCategories = async () => {
    try {
      const res = await api.get("/getAllCategories");
      console.log("get All categories ddd");
      console.log("all cat", res);

      setCategories(res.data);
    } catch (error) {
      console.log("in getAllCategories() function error:", error);
    }
  };

  // GET  DISTRICTS
  const getDistricts = async () => {
    console.log("KITAA");
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("/getDistricts", {
        headers: {
          Authorization: token,
        },
      });
      console.log("get All districts");

      setDistricts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("in get all districts() function error:", error);
    }
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
    } catch (error) {
      console.log("in get all districts() function error:", error);
    }
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
    } catch (error) {
      console.log("in get all apartments() function error:", error);
    }
  };

  // GET BASKETS
  const getBaskets = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("/getBaskets", {
        headers: {
          Authorization: token,
        },
      });
      console.log("get baskets");

      setBaskets(res.data);
    } catch (error) {
      console.log("in getBaskets() function error:", error);
    }
  };
  // UPDATE CATEGORY
  const updateCategory = async (props: categoryType) => {
    const { name, _id } = props;

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
      console.log("updated category  res", res);

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
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
      console.log("delete category  res", res);

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
    }
  };

  // ADD BASKET
  const addBasket = async (props: foodType & countityType) => {
    const {
      name,
      ingredients,
      imgPath,
      price,
      discount,
      category,
      _id,
      countity,
    } = props;
    console.log("add basket", props);

    const token = localStorage.getItem("token");

    try {
      const res = await api.post(
        "/addBasket",
        {
          name,
          ingredients,
          imgPath,
          price,
          discount,
          category,
          _id,
          countity,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("add basket result", res);

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
    }
  };

  // ADD CART
  console.log("FOOODS; ", inCart);

  const addCart = (props: addCartType) => {
    const { food, countity } = props;
    if (!inCart) {
      food.countity = countity;
      setInCart([food]);
    } else {
      const isAdded = inCart.find((item) => item._id === food._id);
      if (isAdded) {
        if (isAdded.countity) {
          isAdded.countity += countity;
        }
        return;
      } else {
        food.countity = countity;
        setInCart([...inCart, food]);
      }
    }
  };

  useEffect(() => {
    getAllFoods();
    getAllCategories();
    getDistricts();
    getKhoroos();
    getApartments();
    getBaskets();
  }, [refresh]);

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
        addBasket,
        baskets,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
