import express, { Router, Request, Response } from "express";

export const router: Router = express.Router()

router.post("/new", (req: Request, res: Response) => {
    res.json({ message: "New User" });
});

router
    .route("/:id")
    .get((req: Request, res: Response) => {
        res.json({ message: "Get id " + req.params.id })
    })
    .put((req: Request, res: Response) => {
        res.json({ message: "Put id " + req.params.id })
    })
    .delete((req: Request, res: Response) => {
        res.json({ message: "Delete id " + req.params.id })
    });