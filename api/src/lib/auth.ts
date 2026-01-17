import { verifyToken } from "./jwt";

export function requireRole(role: "GURU" | "SISWA") {
  return (req: Request) => {
    const auth = req.headers.get("authorization");
    if (!auth) throw new Error("Unauthorized");

    const token = auth.replace("Bearer ", "");
    const payload: any = verifyToken(token);

    if (payload.role !== role) {
      throw new Error("Forbidden");
    }

    return payload;
  };
}
