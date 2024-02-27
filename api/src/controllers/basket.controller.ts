import { RequestHandler } from "express";
import { UserModel, CategoryModel, BasketModel } from "../models";
import jwt from "jsonwebtoken";

type Payload = {
  id: string;
};

// ADD BASKET
export const addBasket: RequestHandler = async (req, res) => {
  const {
    name,
    ingredients,
    imgPath,
    price,
    discount,
    category,
    countity,
    _id,
  } = req.body;

  const isAdded = await BasketModel.findOne({ foodId: _id });

  if (isAdded) {
    const newCountity = isAdded.countity + countity;
    try {
      const updatedBasket = await BasketModel.updateOne(
        { foodId: _id },
        { countity: newCountity }
      );

      console.log(updatedBasket);

      return res.json("basket is successfully updated");
    } catch (error) {
      return res
        .status(401)
        .json({ error: error, message: "could not update user information" });
    }
  } else {
    try {
      await BasketModel.create({
        name,
        ingredients,
        imgPath,
        price,
        discount,
        category,
        countity,
        foodId: _id,
      });
      return res.json({ message: `new basket "${name} ${countity}" created` });
    } catch (error) {
      return res
        .status(401)
        .json({ error: error, message: "could not add basket" });
    }
  }
};

// GET  BASKETS
export const getBaskets: RequestHandler = async (req, res) => {
  console.log("GET BASKETS");

  const baskets = await BasketModel.find({});

  res.json(baskets);
};
// UPDATE FOOD
// export const updateFood: RequestHandler = async (req, res) => {
//   const { name, ingredients, imgPath, price, discount, category, _id } =
//     req.body;
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({
//       message: "Invalid credentials Auth nashi",
//     });
//   }
//   const { id } = jwt.verify(authorization, "secret") as Payload;

//   const user = await UserModel.findOne({ _id: id });

//   if (!user) {
//     return res.status(401).json({
//       message: "Invalid credentials user nashi",
//     });
//   }

//   const thisFood = await FoodModel.findOne({ _id });

//   if (!thisFood) {
//     return res.status(401).json({
//       message: "Invalid credentials food nashi",
//     });
//   }
//   try {
//     const updatedFood = await FoodModel.updateOne(
//       { _id: _id },
//       { name, ingredients, imgPath, price, discount, category }
//     );

//     console.log(updatedFood);

//     return res.json("food is successfully updated");
//   } catch (error) {
//     return res
//       .status(401)
//       .json({ error: error, message: "could not update user information" });
//   }
// };
