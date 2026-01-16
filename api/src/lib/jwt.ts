import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: number;
  email: string;
}

export function signJwt(payload: JwtPayload) {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
}
