export class Purchase {
    constructor(
      public id_product: number,
      public name_product: string,
      public qty_product: number,
      public tot_price: number,
      public date: string,
      public customer_name: string
    ) {
      this.id_product = id_product;
      this.name_product = name_product;
      this.qty_product = qty_product;
      this.tot_price = tot_price;
      this.date = date;
      this.customer_name = customer_name;
    }
}
  