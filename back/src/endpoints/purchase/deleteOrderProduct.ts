import { Request, Response } from "express";
import connection from "../../data/connection";

export const deleteOrderProduct = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const idPurchase = req.params.id;

    // Query pra pegar id e quantidade do produto na tabela de compras
    const idAndQtyProd = await connection("shopper_purchases")
      .select("qty_product", "id_product")
      .where("id_purchase", idPurchase);

    // Query pra pegar quantidade do produto no estoque
    const qtyProdStock = await connection("shopper_products")
      .select("qty_stock")
      .where("id", idAndQtyProd[0].id_product);

    // Query pra deletar a compra
    await connection("shopper_purchases")
      .where("id_purchase", idPurchase)
      .del();

    // Query pra colocar a quantidade deletada no estoque
    await connection("shopper_products")
      .where("id", idAndQtyProd[0].id_product)
      .update({ qty_stock: idAndQtyProd[0].qty_product + qtyProdStock[0].qty_stock});

    res.status(200).send("Produto deletado!");

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
