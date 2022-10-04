import { Request, Response } from "express";
import connection from "../database/connection";
import { Purchase } from "../models/purchase";

export const registerOrder = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const products: Purchase[] = req.body.products;

    for (let i = 0; i < products.length; i++) {
      await connection.raw(`INSERT INTO shopper_purchases
      VALUES(${Date.now()}, ${products[i].id_product}, ${products[i].qty_product}, "${products[i].date}", "${products[i].customer_name}")`);
    
      await connection.raw(`UPDATE shopper_products SET qty_stock = qty_stock - ${products[i].qty_product}
      WHERE id = ${products[i].id_product}
      `)
    }

    res.status(200).send("Compra feita!");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
