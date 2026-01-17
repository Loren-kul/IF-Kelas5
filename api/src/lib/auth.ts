import { verifyToken } from "./jwt";

export function auth(req: Request) {
  const header = req.headers.get("authorization");
  if (!header) throw new Error("Unauthorized");

  const token = header.replace("Bearer ", "");
  return verifyToken(token);
}

export function requireRole(role: "GURU" | "SISWA") {
  return (req: Request) => {
    const user = auth(req);
    if (user.role !== role) throw new Error("Forbidden");
    return user;
  };
}
