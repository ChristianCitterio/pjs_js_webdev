import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

const key = process.env.SECRET_KEY || "secretkey";

export function verifyToken(req: Request, res: Response , next: any) {
    const bearerHeader: string = req.headers["authorization"] || " ";
    if (typeof bearerHeader != "undefined") {
        const bearer = bearerHeader.split(" ");
        const tokenBearer: string = bearer[1];
        req.body.token = tokenBearer;
        next();

    } else {
        res.sendStatus(403);
    }
}

export function verifyData(req: Request, res: Response, next: any) {
    const token = req.body.token

    jwt.verify(token, key, (err: any, authData: any) => {
        if (err) {
            res.sendStatus(401);
        } else {
            req.body.authData = authData;
            next();
        }
    });
}