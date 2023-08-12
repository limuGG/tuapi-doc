---
sidebar_position: 3
---

# 回调通知

:::tip
用户支付完成后,系统会自动向订单关联的回调地址`notify_url`发送通知消息,告知该笔订单已支付完成.
:::

## 通知请求

`POST` 方式

### body

```json
{
  "s": "加密后的数据"
}
```

### 入参(解密后)

```json
{
  "address": "TTP1VEx1y8zeUqz9JGyash4LsVxJxojdS5",
  "app_name": "收银台",
  "currency_rate": 1,
  "currency_type": "USDT",
  "from_address": "T3HY8YcucGbrXgor35nQFLpds79yAB7MBx",
  "hash": "f6966f1f59e753d25c8aa0ff2b60d856cb28c13c325eddb931478cf948f462c0",
  "legal_tender_money": 1000,
  "order_money": 1000,
  "order_no": "1687788883ODB1CEF8AE8700B8F6",
  "order_timestamp": 1593178495,
  "out_order_no": "1687788883RCA8C67E67933B8913",
  "pay_money": 1000.004,
  "pay_status": 2,
  "pay_timestamp": 1593178495,
  "pay_type": "USDT"
}
```

## 通知参数

| 参数名             | 含义           | 类型   | 说明                                                                     |
| :----------------- | :------------- | :----- | :----------------------------------------------------------------------- |
| address            | 收款地址       | string | 原样返回                                                                 |
| app_name           | 商户端产品名称 | string | 原样返回                                                                 |
| currency_rate      | 汇率           | float  | USDT-法币(CNY\USD)汇率                                                   |
| currency_type      | 订单币种       | string | 原样返回                                                                 |
| from_address       | 订单付款地址   | string | 用户付款的 tron 地址                                                     |
| hash               | tron 哈希      | string | 波场链上 hash,可以通过[`区块链浏览器`](https://tronscan.org)查询交易详情 |
| legal_tender_money | 订单金额(法币) | float  | 原样返回                                                                 |
| order_money        | 订单 USDT 金额 | float  | 原样返回                                                                 |
| order_no           | 系统编号       | string | 原样返回                                                                 |
| order_timestamp    | 订单创建时间戳 | int    | 原样返回                                                                 |
| out_order_no       | 商户订单编号   | string | 原样返回                                                                 |
| pay_money          | 支付金额 USDT  | float  | 实际的支付金额                                                           |
| pay_status         | 支付状态       | int    | 2 为支付成功,通知时必定为 2                                              |
| pay_timestamp      | 支付时间戳     | int    | 订单支付时间                                                             |
| pay_type           | 付款币种       | string | 仅`USDT`                                                                 |
| attach             | 附加参数       | string | 原样返回,空值则无该字段                                                  |

## 通知返回

商户在收到通知信息后,可返回以下内容,告知已收到回调通知:

```json
{
  "code": 200,
  "data": "ok"
}
```

## 通知重试

系统向商户创建订单时指定的 `notify_url` 发送 `回调通知` 后,如该 `notify_url` 返回的 `http` 状态码不为 `200`,则系统会自动触发 `重试机制`.

### 重试间隔

`(10*2^(重试次数))`秒

### 重试次数

`3`
