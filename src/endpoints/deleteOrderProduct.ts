import { Request, Response } from "express";
import connection from "../database/connection";

export const deleteOrderProduct = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id_purchase = req.params.id;

    await connection.raw(` 
        DELETE FROM shopper_purchases
        WHERE id_purchase = ${id_purchase}
    `);

    res.status(200).send("Produto deletado!");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
