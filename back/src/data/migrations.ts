import BaseDatabase from "./BaseDatabase";
import products from "./json/products.json";
export class Migrations extends BaseDatabase {
  public async createTables() {
    await BaseDatabase.connection.raw(`
    CREATE TABLE IF NOT EXISTS shopper_products (
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL (8,2) NOT NULL,
      qty_stock BIGINT NOT NULL
   );
   
   CREATE TABLE IF NOT EXISTS shopper_purchases(
      id_purchase BIGINT PRIMARY KEY,
      id_product INT NOT NULL,
      name_product VARCHAR(255) NOT NULL,
      qty_product INT NOT NULL,
      date DATETIME NOT NULL,
      tot_price DECIMAL (8,2) NOT NULL,
      customer_name VARCHAR(255) NOT NULL,
      FOREIGN KEY (id_product) REFERENCES shopper_products(id)
   );
`)

  .then(() => {
    console.log(`Tabelas criadas com sucesso!`);
    this.insertData();
  })
  .catch((error: any) => printError(error));
  }

  public async insertData() {
    try {
      await BaseDatabase.connection("shopper_products")
        .insert(products)
        .then(() => console.log("shopper_products populado!"))
        .catch((error: any) => printError(error));
    } catch (error: any) {
      console.log(error.sqlMessage || error.message);
    } finally {
      console.log("Fechando conexão!");

      return BaseDatabase.connection.destroy();
    }
  }
}

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

const setMigrations = new Migrations();

setMigrations.createTables();
