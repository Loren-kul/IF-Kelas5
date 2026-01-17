export type Role = "GURU" | "SISWA";

export interface UserPayload {
  id: number;
  role: Role;
}
