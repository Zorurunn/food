import { RequestHandler } from "express";
import {
  ApartmentModel,
  CategoryModel,
  DistrictModel,
  FoodModel,
  KhorooModel,
} from "../models";

// GET ALL FOODS
export const getAllFoods: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};

// GET ALL CATEGORIES
export const getAllCategories: RequestHandler = async (req, res) => {
  const categories = await CategoryModel.find({});

  res.json(categories);
};

// GET DISTRICTS
export const getDistricts: RequestHandler = async (req, res) => {
  const districts = await DistrictModel.find({});

  res.json(districts);
};

// GET KHOROO
export const getKhoroos: RequestHandler = async (req, res) => {
  const khoroos = await KhorooModel.find({});

  res.json(khoroos);
};

// GET APARTMENT
export const getApartments: RequestHandler = async (req, res) => {
  const apartments = await ApartmentModel.find({});

  res.json(apartments);
};
