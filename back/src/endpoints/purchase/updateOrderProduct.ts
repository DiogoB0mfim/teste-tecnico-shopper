import { Request, Response } from "express";
import connection from "../../data/connection";

export const updateOrderProduct = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const idPurchase = req.body.id;
    const qtyProduct = req.body.qty_product;

    // Query pra pegar id e quantidade do produto na tabela de compras
    const idAndQtyProd = await connection("shopper_purchases")
      .select("qty_product", "id_product")
      .where("id_purchase", idPurchase);

    // Query pra pegar quantidade do produto no estoque
    const qtyProdStock = await connection("shopper_products")
      .select("qty_stock")
      .where("id", idAndQtyProd[0].id_product);

    if (qtyProduct > idAndQtyProd[0].qty_product) {
      await connection("shopper_products")
        .where("id", idAndQtyProd[0].id_product)
        .update({ qty_stock: qtyProdStock[0].qty_stock - (qtyProduct - idAndQtyProd[0].qty_product) });
    }

    else {
      await connection("shopper_products")
        .where("id", idAndQtyProd[0].id_product)
        .update({ qty_stock: qtyProdStock[0].qty_stock + (idAndQtyProd[0].qty_product - qtyProduct) });
    }

    await connection("shopper_purchases")
      .where("id_purchase", idPurchase)
      .update({ qty_product: qtyProduct });

    res.status(200).send("Quantia modificada!");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
