---
sidebar_position: 1
---

# 查询账户余额

:::tip
商户可调用该接口,查询账户余额信息.
:::

## 接口地址

```text
GET https://api.tusdtapi.com/v1/Balance
```

> curl 示例

```shell
curl -X GET https://api.tusdtapi.com/v1/Balance -H 'T-API-KEY:gGsZe8TiALbpRdUwXqbbXh'
```

> 返回示例

```json
{
  "code": 200,
  "data": "c8bcbdc98846a9382589a5095d53fc5523f00921421a99e68a1b03af7938894a0341fa91ffa2db176546e7d81883a6d7bb7187da3ed7343d087022336deca378"
}
```

## 接口参数

无

## 返回示例

> 解密接口地址返回的 `data` 字段

```json
{
  "amount": 100, //余额
  "amount_deduction": 8 //抵扣额度
}
```
