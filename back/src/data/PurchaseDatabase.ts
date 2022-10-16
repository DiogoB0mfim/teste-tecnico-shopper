import BaseDatabase from "./BaseDatabase";
import { Purchase } from "../models/purchase";

export class PurchaseDatabase extends BaseDatabase {
  public async getUserPurchase(userName: string) {
    const result = await BaseDatabase.connection("shopper_purchases")
    .select()
    .where({ customer_name: userName });
    return result;
  }

  public async registerPurchase(products: Purchase[]) {
    for (let i = 0; i < products.length; i++) {
      // Adicionar compra a tabela de compras
      await BaseDatabase.connection("shopper_purchases").insert({
        id_purchase: Date.now(),
        id_product: products[i].id_product,
        name_product: products[i].name_product,
        qty_product: products[i].qty_product,
        tot_price: products[i].tot_price,
        date: products[i].date,
        customer_name: products[i].customer_name,
      });

      // Subtrair item da compra do estoque
      await BaseDatabase.connection.raw(`UPDATE shopper_products 
      SET qty_stock = qty_stock - ${products[i].qty_product} 
      WHERE id = ${products[i].id_product}`);
    }
  }

  public async updatePurchaseProduct(idPurchase: number, qtyProduct: number) {
    // Query pra pegar id e quantidade do produto na tabela de compras
    const idAndQtyProd = await BaseDatabase.connection("shopper_purchases")
      .select("qty_product", "id_product")
      .where("id_purchase", idPurchase);

    // Query pra pegar quantidade do produto no estoque
    const qtyProdStock = await BaseDatabase.connection("shopper_products")
      .select("qty_stock")
      .where("id", idAndQtyProd[0].id_product);

    // Se o valor de produtos atualizado for maior que o valor já armazenado
    if (qtyProduct > idAndQtyProd[0].qty_product) {
      await BaseDatabase.connection("shopper_products")
        .where("id", idAndQtyProd[0].id_product)
        .update({qty_stock: qtyProdStock[0].qty_stock - (qtyProduct - idAndQtyProd[0].qty_product)});
    } else {
      await BaseDatabase.connection("shopper_products")
        .where("id", idAndQtyProd[0].id_product)
        .update({qty_stock: qtyProdStock[0].qty_stock + (idAndQtyProd[0].qty_product - qtyProduct)});
    }

    await BaseDatabase.connection("shopper_purchases")
      .where("id_purchase", idPurchase)
      .update({ qty_product: qtyProduct });
  }
  
  public async deletePurchaseProduct(idPurchase: number) {
    // Query pra pegar id e quantidade do produto na tabela de compras
    const idAndQtyProd = await BaseDatabase.connection("shopper_purchases")
      .select("qty_product", "id_product")
      .where("id_purchase", idPurchase);

    // Query pra pegar quantidade do produto no estoque
    const qtyProdStock = await BaseDatabase.connection("shopper_products")
      .select("qty_stock")
      .where("id", idAndQtyProd[0].id_product);

    // Query pra deletar a compra
    await BaseDatabase.connection("shopper_purchases")
      .where("id_purchase", idPurchase)
      .del();

    // Query pra colocar a quantidade deletada no estoque
    await BaseDatabase.connection("shopper_products")
      .where("id", idAndQtyProd[0].id_product)
      .update({qty_stock: idAndQtyProd[0].qty_product + qtyProdStock[0].qty_stock});
  }
}
