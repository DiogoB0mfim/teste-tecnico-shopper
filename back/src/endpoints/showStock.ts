import { Request, Response } from "express";
import connection from "../database/connection";

export const showStock = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    
    const stock = await connection.raw(`
        SELECT * FROM shopper_products
    `)

    res.send(stock[0])

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};