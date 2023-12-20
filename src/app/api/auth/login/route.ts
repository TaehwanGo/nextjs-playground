import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

type StorageType = {
  token: string | undefined;
};

const tempStorage: StorageType = {
  token: undefined,
};

/**
 * 로그인 API
 */
export async function POST(req: NextRequest) {
  const { id, password } = await req.json();
  if (!tempStorage.token) {
    tempStorage.token = jwt.sign({ id: "test" }, "secret", { expiresIn: "1h" });
  }
  const token = tempStorage.token;

  // 로그인 성공
  if (id === "test" && password === "1234") {
    return NextResponse.json(
      { token },
      {
        status: 200,
      }
    );
  }

  // 로그인 실패
  return NextResponse.json("로그인 실패", { status: 401 });
}
