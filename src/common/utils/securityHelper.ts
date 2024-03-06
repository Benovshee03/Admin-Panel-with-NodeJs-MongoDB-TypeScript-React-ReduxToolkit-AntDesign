import SecureLS from "secure-ls";

const ls = new SecureLS({
  encodingType: "aes",
  encryptionSecret: process.env.REACT_APP_SECURE_LS_SECRET,
});

export const encription = (value: string) => {};
export const decription = (value: string) => {};