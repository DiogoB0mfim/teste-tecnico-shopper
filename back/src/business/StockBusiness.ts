import { StockDatabase } from "../data/StockDatabase";

export class StockBusiness {
    async getStock() {
        const stockDatabase = new StockDatabase();
        const result = await stockDatabase.getStock();
        
        return result
    }
}
