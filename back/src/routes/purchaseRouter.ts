import express from "express";
import { PurchaseController } from "../controller/PurchaseController";

export const purchaseRouter = express.Router();

const purchaseController = new PurchaseController();

// rota para pegar compra pelo nome do usuário
purchaseRouter.get("/user-purchases/:userName", purchaseController.getUserPurchase);

// rota para criar uma compra
purchaseRouter.post("/create-purchase", purchaseController.registerPurchase);

// rota para alterar a quantidade de um produto na compra
purchaseRouter.put("/update-purchase-product", purchaseController.updatePurchaseProduct);

// rota para deletar uma compra
purchaseRouter.delete("/delete-purchase-product/:id", purchaseController.deletePurchaseProduct);
