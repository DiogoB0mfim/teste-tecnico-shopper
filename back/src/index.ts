import { registerOrder } from './endpoints/registerOrder'
import { showStock } from './endpoints/showStock'
import { app } from "./app"

// Endpoint para puxar todo estoque
app.get("/stock", showStock)

// Endpoint para criar uma lista de pedidos
app.post("/create-order", registerOrder)
