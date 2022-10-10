import { Request, Response } from "express";
import connection from "../data/connection";

export const showStock = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const stock = await connection("shopper_products").select();

    res.status(200).send({ message: stock });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
