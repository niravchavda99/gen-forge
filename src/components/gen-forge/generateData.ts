import { nanoid } from "nanoid";
import md5 from "md5";
import sha1 from "sha1";
import { AlgorithmType } from "./gen-forge.model";

export type TransformInput = string | Uint8Array;
type TransformerFunction = (text: TransformInput) => Promise<string>;
type AlgorithmFunctionMap = {
  [key in AlgorithmType]: TransformerFunction;
};

const algorithmFunctionMap: AlgorithmFunctionMap = {
  md5: withPromise((text) => md5(text as string)),
  sha1: withPromise((text) => sha1(text as string)),
  epoch: withPromise(Date.now),
  nanoid: withPromise(() => nanoid()),
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
