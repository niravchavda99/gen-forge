export enum AlgorithmType {
  NANOID = "NANOID",
  MD5 = "MD5",
  SHA1 = "SHA1",
  EPOCH = "EPOCH",
  UUID = "UUID",
  COLOR = "COLOR",
}

export interface Algorithm {
  title: string;
  displayName: string;
  type: AlgorithmType;
  isInputDisabled?: boolean;
  generateRandomActionName?: string;
}
