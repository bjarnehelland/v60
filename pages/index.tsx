import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Input } from "../components/input";

const Home: NextPage = () => {
  const [water, setWater] = useState<number>(350);
  const [ratio, setRatio] = useState<number>(15);
  const [beans, setBeans] = useState<number>(23);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Input
          label="Ratio"
          value={ratio}
          onChange={(ratio) => {
            setRatio(ratio);
            setBeans(Math.round(water / ratio));
          }}
        >
          <span>1:{ratio}</span>
        </Input>
        <Input
          label="Beans"
          value={beans}
          onChange={(beans) => {
            setBeans(beans);
            setWater(Math.round(beans * ratio));
          }}
        />
        <Input
          label="Water"
          value={water}
          step={50}
          onChange={(water) => {
            setWater(water);
            setBeans(Math.round(water / ratio));
          }}
        />
      </main>
    </div>
  );
};

export default Home;
