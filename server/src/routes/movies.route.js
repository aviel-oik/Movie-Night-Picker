import { Router } from "express";
import fs from "fs/promises";

const router = Router();

router.get("/", async (req, res) => {
    const result = await fs.readFile("../server/data/data.json", "utf-8");
    const movies = JSON.parse(result);
    res.json(movies);
})

export default router;