"use client";

import { foodType } from "@/app/menu/page";
import { api, categoryType, userUpdateProps } from "@/common";
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

type DataContextType = {
  isDisplay: boolean;
  setIsDisplay: Dispatch<SetStateAction<boolean>>;
  foods: foodType[] | undefined;
  categories: categoryType[] | undefined;
  updateFood: (props: foodType) => Promise<void>;
  createFood: (props: foodType) => Promise<void>;
  deleteCategory: (props: categoryType) => Promise<void>;
  updateCategory: (props: categoryType) => Promise<void>;
  createCategory: ({ name }: { name: string }) => Promise<void>;
  setRefresh: Dispatch<SetStateAction<number>>;
  a: (title: string) => void;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [refresh, setRefresh] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  const [foods, setFoods] = useState<foodType[]>();
  const [categories, setCategories] = useState<categoryType[]>();

  // TEST
  const a = (title: string) => {
    console.log("hi from provider Title: ", title);
  };

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

  useEffect(() => {
    getAllFoods();
    getAllCategories();
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
        a,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
