import UserService from "@/services/user.service";
import { Request, Response, NextFunction } from "express";

class UsersController {

    private readonly userService;

    constructor() {
        this.userService = new UserService();
    }

    createUser = async (req: Request, res: Response, next: NextFunction) => {
       
    }
}