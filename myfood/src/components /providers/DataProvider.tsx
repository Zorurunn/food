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
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
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
  addBasket: (props: foodType & countityType) => Promise<void>;
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

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
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

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
    }
  };

  // GET ALL FOODS
  const getAllFoods = async () => {
    try {
      const res = await api.get("/getAllFoods");
      setFoods(res.data);
    } catch (error) {
      console.log("in getAllFoods() function error:", error);
    }
  };

  // GET ALL CATEGORIES
  const getAllCategories = async () => {
    try {
      const res = await api.get("/getAllCategories");
      setCategories(res.data);
    } catch (error) {
      console.log("in getAllCategories() function error:", error);
    }
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

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
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
    getAllFoods();
    getAllCategories();
    getDistricts();
    getKhoroos();
    getApartments();
    getBaskets();
  }, [refresh]);

  useEffect(() => {
    if (isFirstRender) return;
    const data = JSON.stringify(inCart);
    localStorage.setItem("cart", data);
  }, [inCart]);

  useEffect(() => {
    const rawData = localStorage.getItem("cart");
    if (!rawData) return;
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
        addBasket,
        baskets,
        minusQuantity,
        addQuantity,
        selectedFood,
        setSelectedFood,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
