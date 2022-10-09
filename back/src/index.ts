import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { registerOrder } from './endpoints/registerOrder'
import { showStock } from './endpoints/showStock'
import { deleteOrderProduct } from './endpoints/deleteOrderProduct'
import { updateOrderProduct } from './endpoints/updateOrderProduct'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

// Endpoint para puxar todo estoque
app.get("/stock", showStock)

// Endpoint para criar uma lista de pedidos
app.post("/create-order", registerOrder)

// Endpoint para atualizar a quantidade de um produto na sua lista de pedidos
app.put("/update-order", updateOrderProduct)

// Endpoint para deletar um produto da sua lista de pedidos
app.delete("/delete-order-product/:id", deleteOrderProduct)
