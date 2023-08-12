import Link from "@docusaurus/Link";
import React from "react";

const Divider = () => {
  return (
    <div
      className="w-full"
      style={{
        borderWidth: "1px",
        borderColor: "#eaecef",
        borderStyle: "solid",
      }}
    ></div>
  );
};

interface CardProps {
  title?: string;
  description?: string;
}
const Card = ({ title, description }: CardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl text-zinc-800">{title}</div>
      <div className="text-base text-zinc-500">{description}</div>
    </div>
  );
};

const cardItems: CardProps[] = [
  { title: "安全", description: "付款直接进入商户钱包,不经平台中转,无需提现" },
  { title: "体验", description: "钱包扫码,一键付款,媲美支付宝 & 微信支付体验" },
  { title: "极速", description: "用户付款后秒级检测,极速回调" },
  { title: "稳定", description: "独家链上交易检测技术,绝不在关键时刻掉链子" },
  {
    title: "低价",
    description: "业内最低手续费,包年包月更省",
  },
  { title: "匿名", description: "一次对接,全球收款,天然匿名,拒绝追踪" },
];

export const HomepageMain = () => {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        marginTop: "2rem",
        padding: "0 2rem",
      }}
    >
      <Divider />
      <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {cardItems.map((item, index) => (
          <Card title={item.title} description={item.description} key={index} />
        ))}
      </div>
      <Divider />
      <div className="flex items-center gap-2 py-5">
        <span>Telegram:</span>
        <Link to="https://t.me/brucejo">brucejo</Link>
      </div>
    </div>
  );
};
