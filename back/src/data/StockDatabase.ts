import BaseDatabase from "./BaseDatabase";

export class StockDatabase extends BaseDatabase {
  public async getStock() {
    const result = await BaseDatabase.connection("shopper_products")
    .select();

    return result;
  }
}
