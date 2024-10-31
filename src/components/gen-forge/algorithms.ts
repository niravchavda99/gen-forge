import { Algorithm } from "@/components/gen-forge/gen-forge.model";

export const algorithms: Algorithm[] = [
  Object.freeze({
    title: "Epoch",
    displayName: "Unix Epoch time",
    type: "epoch",
    isInputDisabled: true,
    generateRandomActionName: "Generate",
  }),
  Object.freeze({
    title: "Nano Id",
    displayName: "Nano Id",
    type: "nanoid",
    isInputDisabled: true,
  }),
  Object.freeze({
    title: "MD5",
    displayName: "MD5 Hash",
    type: "md5",
  }),
  Object.freeze({
    title: "SHA1",
    displayName: "SHA1 Hash",
    type: "sha1",
  }),
];
