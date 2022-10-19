import { PurchaseDatabase } from "../data/PurchaseDatabase";
import { Purchase } from "../types/purchase";
import { InvalidRequest } from "../error/InvalidRequests";
export class PurchaseBusiness {
  async getUserPurchase(userName: string) {
    if (!userName) {
      throw new InvalidRequest();
    } else {
      const purchaseDatabase = new PurchaseDatabase();
      const result = await purchaseDatabase.getUserPurchase(userName);

      return result;
    }
  }

  async registerPurchase(products: Purchase[]) {
    if (products.length === 0) {
      throw new InvalidRequest();
    } else {
      const purchaseDatabase = new PurchaseDatabase();
      await purchaseDatabase.registerPurchase(products);
    }
  }

  async updatePurchaseProduct(idPurchase: number, qtyProduct: number) {
    if (!idPurchase || !qtyProduct || qtyProduct === 0) {
      throw new InvalidRequest();
    } else {
      const purchaseDatabase = new PurchaseDatabase();
      await purchaseDatabase.updatePurchaseProduct(idPurchase, qtyProduct);
    }
  }

  async deleteOrderProduct(idPurchase: number) {
    if (!idPurchase) {
      throw new InvalidRequest();
    } else {
      const purchaseDatabase = new PurchaseDatabase();
      await purchaseDatabase.deletePurchaseProduct(idPurchase);
    }
  }
}
