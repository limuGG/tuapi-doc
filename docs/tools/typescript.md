---
sidebar_position: 2
---

# TypeScript 加密解密示例

```typescript
import CryptoJS from "crypto-js";

// 商户后台密钥 secret
const cryptoKey = "secret";

export const aesCBCEncrypt = (text: string): string => {
  const ivWordArray: CryptoJS.lib.WordArray = CryptoJS.lib.WordArray.random(16);
  ivWordArray.sigBytes = 16;
  ivWordArray.clamp();
  const keyHex = CryptoJS.enc.Utf8.parse(cryptoKey);
  const encrypted = CryptoJS.AES.encrypt(text, keyHex, {
    iv: ivWordArray,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    format: CryptoJS.format.Hex,
  });
  const ivHex = CryptoJS.enc.Hex.stringify(ivWordArray);
  const encryptedHex = encrypted.toString();
  return (ivHex + encryptedHex).toUpperCase();
};

export const aesCBCDecrypt = (text: string): string => {
  text = text.toLowerCase();
  const textBytes = CryptoJS.enc.Hex.parse(text);
  const ivWordArray = textBytes.clone();
  ivWordArray.sigBytes = 16;
  ivWordArray.words = ivWordArray.words.slice(0, 4);
  ivWordArray.clamp();
  const textWordArray = textBytes.clone();
  textWordArray.words = textWordArray.words.slice(4);
  textWordArray.sigBytes -= 16;
  textWordArray.clamp();
  const textStr = CryptoJS.enc.Hex.stringify(textWordArray);
  const keyHex = CryptoJS.enc.Utf8.parse(cryptoKey);
  const decrypted = CryptoJS.AES.decrypt(textStr, keyHex, {
    iv: ivWordArray,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    format: CryptoJS.format.Hex,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};
```
