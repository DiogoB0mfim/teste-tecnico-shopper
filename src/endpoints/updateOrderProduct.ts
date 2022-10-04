import { Request, Response } from "express";
import connection from "../database/connection";

export const updateOrderProduct = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id_purchase = req.body.id
    const qty_product = req.body.qty_product

    await connection.raw(`
        UPDATE shopper_purchases SET qty_product = ${qty_product}
        WHERE id_purchase = ${id_purchase};
    `)
    
    res.status(200).send("Quantia modificada!");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};