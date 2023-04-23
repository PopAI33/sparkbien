// lib/types.ts
import { NextApiRequest } from "next";

export interface ExtendedNextApiRequest extends NextApiRequest {
  rawBody: string;
}
