import styles from "@/styles/Home.module.css";
import { Uncategorized } from "@/components/uncategorized";
import { Windows95 } from "@/components/windows95";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          // https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Windows95.Desktop />
      <Uncategorized.GitHub url="https://github.com/shenlong616/windows95-raw" />
    </>
  );
}
