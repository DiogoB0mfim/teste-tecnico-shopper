import { app } from "./app"
import { purchaseRouter } from './routes/purchaseRouter'
import { stockRouter } from "./routes/stockRouter"

app.use("/purchase", purchaseRouter)

app.use("/stock", stockRouter)