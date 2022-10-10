import { Request, Response } from "express";
import connection from "../data/connection";

export const deleteOrderProduct = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const idPurchase = req.params.id;

    await connection("shopper_purchases")
    .where("id_purchase", idPurchase)
    .del()

    res.status(200).send("Produto deletado!");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
