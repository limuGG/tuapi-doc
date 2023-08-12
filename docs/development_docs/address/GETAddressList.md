---
sidebar_position: 1
---

# 获取收款地址列表

:::tip
商户可调用该接口,查询已配置的收款地址信息.
:::

## 接口地址

```text
GET https://api.tusdtapi.com/v1/AddressList
```

> curl 示例

```bash
curl 'https://api.tusdtapi.com/v1/AddressList' -H 'T-API-KEY:gGsZe8TiALbpRdUwXqbbXh'
```

> 返回 示例

```json
{
  "code": 200,
  "data": "4e9f045a342429cdb0f38f38113d10087780b39af7e3e9e718cd91b836de2aa2d1157436a258e12be24b8b54ff6e9c5bc4ad0f46ee60272f535b1f0bf6bae9c0b9eda0069456abd6005bc782788cea36707b44511b292b8cfe25c41be54748cd3edca8e39a95986da50a938ef87ad417f31eee332ff8fa0f9a946e1b779cf3a5c3a9924c13b245c15ea23f8a7f5717cc0d775ab9523224e0b61004e01eefc1aff74bec1999eef495bd9367a14a0db369acb63a61768de1f2f3efe38c149db7dfa26a45adae577af95e0e7947544ea7431ee13e2fb5d5c5a4cdf32b7e36345f34496f877eababebb4399d63a53e51dcdde5451155d70f9021661cbef4b47c680a2a34987e4a0ef88cf864188347169dd4451569ded1f1ae93c4a59bbbfce94ca2e51f8481b6ecc61da07101e0c7377d510261dde31626e4fdac5d5453d26e922059d0a112ac980862549d027fab39d063976d7377e334b52229b825083415ec3073d20cd3b04b462bbb0d65a93ff077872f5cd28e5a8298eaa55dc299fc535fdefcf48a5adf33ef8e184186e6da1d1d88f9012f8d8561457d06489fa56b46d035a0d603006c71d32dbef19fd4d51ae071c9478cd35d1caca7c04dfd365f211182f54f16bb7f59531eeeb56580aa36f8a5e6c88581be391aea175d56dd85b81f7ddc88e202030862ede5cc3332e0238a7b7bc1f9e35fab54d429a441e571faa31b9cb69c0767e444dda7bb2db95b3e26e04cc1292af059a3090668418b125d58db5df001150ed9e79717dc8b377eaef488fc19e20f7690b7875cf7810c50a3cc372008ba56368f776cf01eabac2be51a5210df5f1f377e993da06816faa92a354c485adf3941a295063e24a1e70be33290942e909b4f0f17fdf2b38491afd84791f99fbf60581c78ab8c211ce99e9693c5b0a98ec09998fdf86bf03e62d5d50c1cc3f897622331c9d3a1eb2d48dd46181a6f952afb85dc4c1f78b108fb18d7cf31"
}
```

## 接口参数

无

## 接口返回

地址列表

> 示例

```json
[
  {
    "address": "TVShVcCdEF8MQnc8Pmn9PgUxokr2QC4hxi",
    "charge_cycle": 3,
    "charge_timestamp": 1686550497,
    "charge_type": 2,
    "expire_timestamp": 1718172897,
    "is_enable": true,
    "status": 1
  },
  {
    "address": "TRghNXrEXW7rbAgcGmq9VR6WtLVYeij123",
    "charge_cycle": 3,
    "charge_timestamp": 1685897577,
    "charge_type": 2,
    "expire_timestamp": 1717519977,
    "is_enable": true,
    "status": 1
  }
]
```

### 字段说明

| 字段名           | 含义       | 类型   | 说明                                                                        |
| :--------------- | :--------- | :----- | :-------------------------------------------------------------------------- |
| address          | 地址       | string | tron 收款地址                                                               |
| charge_type      | 计费类型   | int    | 定义收款地址的计费类型: 1. 按量付费,2. 包年包月                             |
| charge_cycle     | 计费周期   | int    | 如果计费类型为包年包月,定义计费的周期:1. 按月付费,2. 按半年付费,3. 按年付费 |
| charge_timestamp | 配置时间戳 | int    | 地址配置的时间                                                              |
| is_enable        | 是否启用   | bool   | 当前地址是否可用:只有当 status 为 1 时,该地址才可用                         |
| status           | 地址状态   | int    | 1. 正常可用,2. 停止,3. 未启用,4. 已过期                                     |
| expire_timestamp | 到期时间戳 | int    | 配置包年包月时,地址的到期时间                                               |
