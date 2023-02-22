import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "6%tDtmFEdfruCk6hppVYCnfqwaYwnmNShfuDJ!bDHK"
    ) as IPayload;

    const userRepository = new UsersRepository();
    const user = userRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists");
    }

    next();
  } catch {
    throw new Error("Invalid token");
  }
}
