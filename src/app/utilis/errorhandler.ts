import { Request, Response } from "express";


//  notFound Route
const notFoundRouter = (req: Request, res: Response) => {

    res.status(400).json({
        "success": false,
        "message": "Route not found"
    })
}

export const errorhandler = {
    notFoundRouter,
}

