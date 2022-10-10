import { registerOrder } from './endpoints/registerOrder'
import { showStock } from './endpoints/showStock'
import { showUserOrder } from './endpoints/showUserOrder'
import { deleteOrderProduct } from './endpoints/deleteOrderProduct'
import { updateOrderProduct } from './endpoints/updateOrderProduct'
import { app } from "./app"

// Endpoint para puxar todo estoque
app.get("/stock", showStock)

// Endpoint para puxar todos pedidos de um usuário
app.get("/user-purchases/:userName", showUserOrder)

// Endpoint para criar uma lista de pedidos
app.post("/create-order", registerOrder)

// Endpoint para deletar produto de um pedido
app.delete("/delete-order-product/:id", deleteOrderProduct)

// Endpoint para mudar a quantidade de um produto em um pedido
app.put("/update-order-product/", updateOrderProduct)