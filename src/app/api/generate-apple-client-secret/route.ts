import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";
import {
  AUTH_APPLE_ID,
  AUTH_APPLE_KEY_ID,
  AUTH_APPLE_TEAM_ID,
} from "@/lib/constants";
import { NextResponse } from "next/server";

const PRIVATE_KEY_PATH = path.join(
  process.cwd(),
  "keys",
  `AuthKey_${AUTH_APPLE_KEY_ID}.p8`
);

// Max allowed expiration: 6 months = 15777000 seconds
const EXPIRATION_SECONDS = 15777000;

export function GET() {
  if (!AUTH_APPLE_ID || !AUTH_APPLE_KEY_ID || !AUTH_APPLE_TEAM_ID) {
    return NextResponse.json(
      {
        status: false,
        message: "Missing one or more required Apple auth constants.",
      },
      { status: 400 }
    );
  }

  let privateKey: string;
  try {
    privateKey = fs.readFileSync(PRIVATE_KEY_PATH, "utf8");
  } catch (err) {
    return NextResponse.json(
      {
        status: false,
        message:
          err instanceof Error
            ? err.message
            : `Failed to read private key file: ${PRIVATE_KEY_PATH}`,
      },
      { status: 400 }
    );
  }

  const now = Math.floor(Date.now() / 1000);

  try {
    const token = jwt.sign(
      {
        iss: AUTH_APPLE_TEAM_ID,
        iat: now,
        exp: now + EXPIRATION_SECONDS,
        aud: "https://appleid.apple.com",
        sub: AUTH_APPLE_ID,
      },
      privateKey,
      {
        algorithm: "ES256",
        keyid: AUTH_APPLE_KEY_ID,
        header: {
          alg: "ES256",
          kid: AUTH_APPLE_KEY_ID,
        },
      }
    );

    return NextResponse.json(
      {
        status: true,
        message: "✅ Apple client secret generated successfully",
        apple_client_secret: token,
        apple_client_secret_expires_in: EXPIRATION_SECONDS,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: false,
        message:
          err instanceof Error
            ? err.message
            : "❌ Failed to generate Apple client secret",
      },
      { status: 400 }
    );
  }
}
