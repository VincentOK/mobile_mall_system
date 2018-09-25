const CryptoJS = require('crypto-js');
import {
  key,
  iv
} from './url'
/**
 * 加密方法
 * @param word
 * @returns {string}
 * @constructor
 */
export const Encrypt = (word) =>{
  try {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs,  CryptoJS.enc.Utf8.parse(key), { iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString().toUpperCase();
  }catch (e) {
    console.log(e);
    return '加密错误：'+e+'';
  }
};
/**
 * 解密方法
 * @param word
 * @returns {string}
 * @constructor
 */
export const Decrypt = (word) =>{
  try {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs,  CryptoJS.enc.Utf8.parse(key), { iv:  CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  }catch (e) {
    console.log(e);
    return '解密错误：'+e+'';
  }
};
