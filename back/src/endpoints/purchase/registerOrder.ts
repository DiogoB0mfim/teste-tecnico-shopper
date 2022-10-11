import { Request, Response } from "express";
import connection from "../../data/connection";
import { Purchase } from "../../models/purchase";

export const registerOrder = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const products: Purchase[] = req.body.products;

    for (let i = 0; i < products.length; i++) {
      // Adicionar compra a tabela de compras
      await connection("shopper_purchases").insert({
        id_purchase: Date.now(),
        id_product: products[i].id_product,
        name_product: products[i].name_product,
        qty_product: products[i].qty_product,
        date: products[i].date,
        customer_name: products[i].customer_name,
      });

      // Subtrair item da compra do estoque
      await connection.raw(`UPDATE shopper_products 
        SET qty_stock = qty_stock - ${products[i].qty_product} 
        WHERE id = ${products[i].id_product}`);
    }

    res.status(200).send({ message: "Compra feita!" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
