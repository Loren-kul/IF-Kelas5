import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export function signJwt(payload: object) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}
