import { RequestHandler } from "express";
import { ApartmentModel, DistrictModel, KhorooModel } from "../models";
import jwt from "jsonwebtoken";

// GET DISTRICTS
export const getDistricts: RequestHandler = async (req, res) => {
  console.log("GET ALL DISTRICTS");

  const districts = await DistrictModel.find({});

  res.json(districts);
};

// GET KHOROO
export const getKhoroos: RequestHandler = async (req, res) => {
  console.log("GET ALL KHOROO");

  const khoroos = await KhorooModel.find({});

  res.json(khoroos);
};

// GET APARTMENT
export const getApartments: RequestHandler = async (req, res) => {
  console.log("GET ALL APARTMENTS");

  const apartments = await ApartmentModel.find({});

  res.json(apartments);
};
