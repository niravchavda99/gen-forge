export type AlgorithmType = "nanoid" | "md5" | "sha1" | "epoch";

export interface Algorithm {
  title: string;
  displayName: string;
  type: AlgorithmType;
  isInputDisabled?: boolean;
  generateRandomActionName?: string;
}