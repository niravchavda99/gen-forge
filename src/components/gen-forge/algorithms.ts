import {
  Algorithm,
  AlgorithmType,
} from "@/components/gen-forge/gen-forge.model";

export const algorithms: Algorithm[] = [
  Object.freeze({
    title: "Epoch",
    displayName: "Unix Epoch time",
    type: AlgorithmType.EPOCH,
    isInputDisabled: true,
    generateRandomActionName: "Generate",
  }),
  Object.freeze({
    title: "Nano Id",
    displayName: "Nano Id",
    type: AlgorithmType.NANOID,
    isInputDisabled: true,
  }),
  Object.freeze({
    title: "MD5",
    displayName: "MD5 Hash",
    type: AlgorithmType.MD5,
  }),
  Object.freeze({
    title: "SHA1",
    displayName: "SHA1 Hash",
    type: AlgorithmType.SHA1,
  }),
  Object.freeze({
    title: "UUID",
    displayName: "Random UUID",
    type: AlgorithmType.UUID,
  }),
];
