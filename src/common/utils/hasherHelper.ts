import CryptoJS from "crypto-js";
import AppConsts from "../../library/Appconsts";

export const encryptData = (value: string) => {
  const data = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    `${AppConsts.reactAppSecureLsSecret}`
  ).toString();

  return data;
};

export const decryptData = (value: string) => {
  const bytes = CryptoJS.AES.decrypt(
    value,
    `${AppConsts.reactAppSecureLsSecret}`
  );
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

