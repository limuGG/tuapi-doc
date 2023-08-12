import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { HomepageMain } from "../components/HomepageMain";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const logo: any = (siteConfig.themeConfig.navbar as any).logo;

  return (
    <header className="flex flex-col items-center gap-5 pt-8 px-5">
      <div className="flex items-center">
        <img src={logo.src} alt={logo.alt} width={130} height={130} />
      </div>
      <div className="text-3xl md:text-6xl font-bold">
        <span>{siteConfig.title}</span>
      </div>
      <div className="text-lg md:text-2xl font-bold text-gray-600">
        <span>{siteConfig.tagline}</span>
      </div>
      <div className="flex items-center gap-5 pt-2">
        <Link
          className="px-7 py-5 text-lg md:text-xl font-semibold rounded-lg border-2 text-white hover:text-white hover:no-underline bg-purple-600 border-transparent"
          to="https://panel.tusdtapi.com"
          target="_blank"
        >
          <span className="decoration-0">开始使用</span>
        </Link>
        <Link
          className="px-7 py-5 text-lg md:text-xl text-purple-600 font-semibold border-solid rounded-lg border-2 border-purple-200 hover:text-white hover:no-underline hover:bg-purple-600 hover:border-transparent"
          to="https://panel.tusdtapi.com/demo/payment1"
        >
          <span>收款演示</span>
        </Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig: _site } = useDocusaurusContext();
  // target="_blank" rel="noopener noreferrer"
  return (
    <Layout
      title="USDT收款接口|USDT支付接口-Tuapi"
      description="安全,稳定,快速的USDT-TRC20收款接口服务 🚀,USDT收款接口,USDT支付接口,USDT收款,USDT支付,USDT api"
    >
      <Head>
        <meta
          name="keywords"
          content="USDT收款接口,USDT支付接口,tuapi,波场api,波场接口,波场支付,波场回调,tron api,tron接口,tron支付,tron回调,usdt api,usdt接口,usdt支付,usdt回调,USDT接口,USDT支付,USDT回调"
        />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageMain />
      </main>
    </Layout>
  );
}
