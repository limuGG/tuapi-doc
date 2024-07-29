---
sidebar_position: 1
---

# 创建订单

:::tip
用于生成 USDT-TRC20 支付数据.
商户可选择直接跳转至 官方收银台 供用户支付,也可以使用数据 自定义收银台.在用户支付成功后,系统将即时进行 回调通知.
:::

## 接口地址

```text
POST https://api.tusdtapi.com/v1/CreateOrder
```

> 入参示例

```json
{
  "legal_tender_money": 100,
  "currency_type": "CNY",
  "out_order_no": "201710192541",
  "address": "TVShVcCdEF8MQnc8Pmn9PgUxokr2QC4hxi",
  "notify_url": "http://www.xxx.com/notify",
  "redirect": "https://www.xxx.com/return",
  "attach": "附加参数",
  "app_name": "商户端产品名称"
}
```

> 接口请求示例-(加密后)

```bash
curl -X POST 'https://api.tusdtapi.com/v1/CreateOrder' \
-H 'T-API-KEY:gGsZe8TiALbpRdUwXqbbXh' \
-H 'Content-Type:application/json' \
-d '{"s":"F454385581A150229AFFA530180BEB9E523FF107CBC22FB8CBB2D02C7F506AFBE2CBA03607B9D50FE6AC0B294D428C5B6C3F3325958C6C5D23ACE4DC70865DA69BF9B68D1719E1E08E9E45FB5B9BFADFA0AFE0CB79CC7AC4441BA3C8B3DC8D3076E6A65E07C083F7DA47FDB8EEC45D9E2AC64D9BFDE6F2A0D7FC4CA85005BC1CD78BF53D39B74C07AECB3558720E9774CBE48C1C09CC4C00B34D8E15B1BFD2E12F79F308D7E63BF50ED95CD3FFC1A959972FA8966108FB0A8632301653ACB0D5A5E681A369546378C2F74408283FCD77F34FBB88C4041455B6BB8915EBA3BF4C1243CCA78E6A1C8188F63A092EB799AF8F1ABD61414841DE8D0E092B934319BD36990EAEA3AF39E7CE42B4DBD0EAB3E59B6F855A5A9AFA25333CE44F8B1EB99237D12FF37EE6A3C8BD3264A4F5DF235B3BDDB7B84A1C7C264A0FD1F95E887459"}'
```

> 接口返回示例

```json
{
  "code": 200,
  "data": "7061702e349527bd440cc0ff239389dd30734985effe8be7b12c2fe00f4f4ced34be6ff35b34ea663c82cd73c9633ff5408f9fb2a1429999016b2a125e38e16e39cd2bd6576e5e405d071ff43f26e355f9733ccf345cc91f55dcac84cddd27e9237d2002cc12157fd190e2e8ba30588b325eb33072afe1e8c1ec0deeebe81da9182395dd2df50ae5f54fa2b71ec8e7cb85f315403bec4d3be39b78f7a3ecce573a0eac0d9e6f45a7957cbc74446718d48749700773cafb114ca3b42cbf6b42e2570ba31deada3678dca6024d13e8775077cc432b2bf09b56676df3fb5947abb5dc4c6ced5d4ea6ba4976242099849e8f174b74e1fef7eaac20348b7a88397b130f058d0e883de2e4259088fad518db3880c6da667bd3b73b3a6a9caca178fd325c72b9d331da2112f2ebcabd12008a7b9f62dd2540aebca14254db220c72c45bfb2961844eaebdc04e70a32146b1a382dcb654f064b289717cb0c679c7e3fd52c6d5254901a97e05f846191c6798f3af5b19f2e459e13e924dd2b3bdf16f9825e042b15365b95df8bc151cc336f2339ca970fb0106a42bf4a1ee20290ac729904e352f23b284f37c602da9e67971bd72ae86a6e692a0269ca9ec961b0cb2920ad7fb6cf535b15d07ec12657951225e10d7e614fc09d8bf75d48d970985114787064c161f4a58e5a76422dd5c6fde2947b4b433e54ecb8c6697bd1ed69018b130c8a5e00533acdf741b64b67e7ccdeca56b8809706ca268117b12f572dc37251afd98636ed2356277029bd3e89a502b5dbe9a4a025139499fc4b918ef930b402c54b73eaa782ca29fdd6c70239ce568579a141da90d19b897e1b96b7df5cc8827"
}
```

> 返回示例-(解密后)

```json
{
  "address": "TVShVcCdEF8MQnc8Pmn9PgUxokr2QC4hxi",
  "app_name": "商户端产品名称",
  "attach": "附加参数",
  "cashier_qrcode": "https://panel.tusdtapi.com/api/qrcode?order_no=1687782852OD0B74A502FBB36525",
  "cashier_url": "https://panel.tusdtapi.com/api/cashier?order_no=1687782852OD0B74A502FBB36525",
  "currency_rate": 7.232,
  "currency_type": "CNY",
  "expire_time": 111111111,
  "legal_tender_money": 100,
  "locale": "zh",
  "order_money": 13.827,
  "order_no": "1687782852OD0B74A502FBB36525",
  "order_timestamp": 11111111,
  "out_order_no": "201710192541",
  "pay_money": 13.827,
  "pay_status": 1,
  "pay_type": "USDT"
}
```

## 接口参数

| 参数名             | 含义               | 是否必填                                  | 类型   | 说明                                                                                                                                 |
| ------------------ | ------------------ | ----------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| legal_tender_money | 订单金额(法币)     | <div style={{ width: 100 }}>必填 ✅</div> | float  | 根据币种汇率转换为`USDT`金额                                                                                                         |
| currency_type      | 订单币种           | 必填 ✅                                   | string | 订单币种单位.支持:`CNY`、`USD`、`USDT`.                                                                                              |
| out_order_no       | 商户端订单号       | 必填 ✅                                   | string | 回调时原样返回.例:201710192541.                                                                                                      |
| address            | 订单收款地址       | 选填 🔵                                   | string | 当前订单使用的收款地址(必须已配置且可用,否则返回失败),如果不填则从已配置的地址选择最新配置的可用地址.                                |
| notify_url         | 完成后回调通知地址 | 选填 🔵                                   | string | 用户支付完成后,系统会发送一个 `post` 消息到这个地址.该参数不要转码.例如:`http://www.xxx.com/notify` . 商户可以在后台设置全局通知地址 |
| redirect           | 完成后同步跳转地址 | 选填 🔵                                   | string | 使用默认收银台:用户支付完成,系统会自动跳转到这个地址.该参数不要转码.例如:`https://www.xxx.com/return`.                               |
| attach             | 附加参数           | 选填 🔵                                   | string | 可以为用户名,也可以为数据库中的用户编号,可以为一个 json 数据,回调时原样返回.                                                         |
| app_name           | 商户端产品名称     | 选填 🔵                                   | string | 该参数会显示在官方收银台页面顶部,留空则显示默认值。                                                                                  |

## 接口返回

| 参数名             | 含义                | 类型   | 说明                                                                                    |
| ------------------ | ------------------- | ------ | --------------------------------------------------------------------------------------- |
| order_no           | 订单号              | string | 系统内部订单编号                                                                        |
| out_order_no       | 商户端订单号        | string | 原数据返回                                                                              |
| legal_tender_money | 订单金额            | float  | 原数据返回                                                                              |
| currency_type      | 订单币种            | string | 原数据返回                                                                              |
| currency_rate      | 汇率                | float  | USDT-法币(CNY\USD)汇率                                                                  |
| order_money        | 订单 USDT 金额      | float  | 经过汇率转换后的 USDT 订单金额,由 `订单金额` + `订单币种` 按照 `USDT` 汇率转换而来      |
| pay_money          | 订单 支付 USDT 金额 | float  | 该订单用户需要支付的 USDT 金额,可能与`order_money`,付款金额必须与该金额一致才会完成订单 |
| address            | 订单收款地址        | string | 商户配置的接收用户支付的钱包地址                                                        |
| cashier_url        | 收银台地址          | string | 默认收银台 `url` 地址,商户可直接跳转到该地址供用户支付.                                 |
| cashier_qrcode     | 收款码地址          | string | 供钱包扫码支付的二维码地址.                                                             |
| order_timestamp    | 订单创建时间戳      | int    | `30分钟`后订单过期                                                                      |
| expire_time        | 订单过期时间戳      | int    | 订单过期时间,单位 `秒`.                                                                 |

:::caution 汇率
`USDT-法币(CNY\USD)`汇率默认根据市场行情调整,商户可在后台设置固定汇率.
:::
