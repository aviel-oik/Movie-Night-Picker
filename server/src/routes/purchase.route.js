import { Router } from "express";
import fs from "fs/promises";

const router = Router();

router.post("/", async (req, res) => {
    const {movieId, seatNumber} = req.body
    const result = await fs.readFile("../server/data/purchases.json", "utf-8");
    const purchases = JSON.parse(result);
    const existPurchase = purchases.findIndex(purchase => purchase.movieId === movieId);
    if (existPurchase !== -1) 
        purchases[existPurchase].seatNumber = seatNumber;
    else 
        purchases.push({ movieId, seatNumber });
    await fs.writeFile("../server/data/purchases.json", JSON.stringify(purchases, null, 2));
    res.json({ message: "Purchased/Changed successfully" });
})

router.get("/", async (req, res) => {
    const { movieId } = req.query;
    const result = await fs.readFile("../server/data/purchases.json", "utf-8");
    const purchases = JSON.parse(result);
    const purchaseInfo = purchases.filter(purchase => purchase.movieId === movieId);
    res.json(purchaseInfo);
})

export default router;