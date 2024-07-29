---
sidebar_position: 4
---

# PHP 加密解密示例

```php
<?php
/**
 * AES加密解密
 * @link https://www.php.net/manual/zh/function.openssl-encrypt.php
 * @link https://www.php.net/manual/zh/function.openssl-decrypt.php
 */
const AES_BLOCK_SIZE = 16;
const AES_KEY_LENGTH = 32;
const AES_ALGORITHM = 'aes-256-cbc';
const AES_OPTIONS = OPENSSL_RAW_DATA;
class AesOpenssl
{
    private $key;
    public function __construct($key = '')
    {
        if (empty($key)) {
            throw new Exception('Key is empty');
        }
        if (strlen($key) !== AES_KEY_LENGTH) {
            throw new Exception('Key length must be ' . AES_KEY_LENGTH);
        }
        $this->key = $key;
    }

    public function encrypt($data)
    {
        $iv = openssl_random_pseudo_bytes(AES_BLOCK_SIZE);
        $result = openssl_encrypt($data, AES_ALGORITHM, $this->key, AES_OPTIONS, $iv);
        $result = $iv . $result;
        return strtoupper(bin2hex($result));
    }

    public function decrypt($data)
    {
        $data = hex2bin(strtolower($data));
        $iv = substr($data, 0, AES_BLOCK_SIZE);
        $data = substr($data, AES_BLOCK_SIZE);
        return openssl_decrypt($data, AES_ALGORITHM, $this->key, AES_OPTIONS, $iv);
    }
}

$aes = new AesOpenssl('rEbFIynZ5dTlxzgUcIcCzk7gtXNwSiil');
$encrypted = $aes->encrypt('123aaa');
echo '加密: '.$encrypted . PHP_EOL;
echo '解密: '.$aes->decrypt($encrypted) . PHP_EOL;
```
