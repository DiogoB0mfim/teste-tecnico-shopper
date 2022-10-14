import { PurchaseDatabase } from "../data/PurchaseDatabase";
import { Purchase } from "../models/Purchase";

export class PurchaseBusiness {
  async getUserPurchase(userName: string) {
    if (!userName) {
      throw new Error("Insira um nome de usuário");
    } else {
      const purchaseDatabase = new PurchaseDatabase();
      const result = await purchaseDatabase.getUserPurchase(userName);

      return result;
    }
  }

  async registerPurchase(products: Purchase[]) {
    if (!products) {
      throw new Error("Insira as informações de compra");
    } else {
      const purchaseDatabase = new PurchaseDatabase();
      await purchaseDatabase.registerPurchase(products);
    }
  }

  async updatePurchaseProduct(idPurchase: number, qtyProduct: number) {
    if (!idPurchase || !qtyProduct) {
      throw new Error("Insira as informações corretamente");
    } else {
      const purchaseDatabase = new PurchaseDatabase();
      await purchaseDatabase.updatePurchaseProduct(idPurchase, qtyProduct);
    }
  }

  async deleteOrderProduct(idPurchase: number) {
    if (!idPurchase) {
      throw new Error("Insira as informações corretamente");
    } else {
      const purchaseDatabase = new PurchaseDatabase();
      await purchaseDatabase.deletePurchaseProduct(idPurchase);
    }
  }
}
