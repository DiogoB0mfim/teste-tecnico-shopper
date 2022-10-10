import { Request, Response } from "express";
import connection from "../data/connection";

export const updateOrderProduct = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const idPurchase = req.body.id;
    const qtyProduct = req.body.qty_product;

    await connection("shopper_purchases")
      .where("id_purchase", idPurchase)
      .update({ qty_product: qtyProduct });

    res.status(200).send("Quantia modificada!");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
