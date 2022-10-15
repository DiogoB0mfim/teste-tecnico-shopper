import { Request, Response } from "express";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { Purchase } from "../models/purchase";

const purchaseBusiness = new PurchaseBusiness();

export class PurchaseController {
  async getUserPurchase(req: Request, res: Response) {
    try {
      const userName = req.params.userName;

      const result = await purchaseBusiness.getUserPurchase(userName);

      res.status(200).send({ message: result });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async registerPurchase(req: Request, res: Response) {
    try {
      const products: Purchase[] = req.body.products;

      await purchaseBusiness.registerPurchase(products);

      res.status(200).send({ message: "Compra feita!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async updatePurchaseProduct(req: Request, res: Response) {
    try {
      const idPurchase = req.body.id;
      const qtyProduct = req.body.qty_product;

      await purchaseBusiness.updatePurchaseProduct(idPurchase, qtyProduct);

      res.status(200).send("Quantia modificada!");
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async deletePurchaseProduct(req: Request, res: Response) {
    try {
      const idPurchase = req.params.id;

      await purchaseBusiness.deleteOrderProduct(Number(idPurchase));

      res.status(200).send("Produto deletado!");
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}
