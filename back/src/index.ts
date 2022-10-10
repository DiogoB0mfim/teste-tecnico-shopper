import { registerOrder } from './controller/registerOrder'
import { showStock } from './controller/showStock'
import { showUserOrder } from './controller/showUserOrder'
import { deleteOrderProduct } from './controller/deleteOrderProduct'
import { updateOrderProduct } from './controller/updateOrderProduct'
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
app.put("/update-order-product", updateOrderProduct)