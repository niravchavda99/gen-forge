import { nanoid } from "nanoid";
import md5 from "md5";
import sha1 from "sha1";
import { AlgorithmType } from "./gen-forge.model";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";

export type TransformInput = string | Uint8Array;

type TransformerFunction = (text: TransformInput) => Promise<string>;

const algorithmFunctionMap: Record<AlgorithmType, TransformerFunction> = {
  [AlgorithmType.MD5]: withPromise((text) => md5(text as string)),
  [AlgorithmType.SHA1]: withPromise((text) => sha1(text as string)),
  [AlgorithmType.EPOCH]: withPromise(Date.now),
  [AlgorithmType.NANOID]: withPromise(() => nanoid()),
  [AlgorithmType.UUID]: withPromise(() => uuidv4()),
  [AlgorithmType.COLOR]: withPromise(() => randomColor().toUpperCase()),
};

function withPromise(
  transformer: (text?: TransformInput) => string | number,
): TransformerFunction {
  return (text: TransformInput) =>
    new Promise<string>((resolve, reject) => {
      try {
        const result = transformer(text) as string;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
}

export function generateData(
  algorithm: AlgorithmType,
  text: TransformInput,
): Promise<string> {
  return algorithmFunctionMap[algorithm](text);
}
