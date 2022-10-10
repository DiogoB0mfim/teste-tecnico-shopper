import { Request, Response } from "express";
import connection from "../data/connection";

export const showUserOrder = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const userName = req.params.userName;

    const result = await connection("shopper_purchases")
      .select()
      .where({ customer_name : userName });

    res.status(200).send({ message : result });
  } catch (error: any) {
    res.status(errorCode).send({ message : error.message });
  }
};
