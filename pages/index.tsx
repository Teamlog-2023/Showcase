import Introduce from "@/components/Introduce";
import Main from "@/components/Main";
import Showcase from "@/components/Showcase";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.querySelector(".fp-watermark")?.remove();
  });

  return (
    <>
      <Head>
        <title>TeamLog</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <ReactFullpage
        scrollingSpeed={800}
        normalScrollElements=".popup"
        scrollOverflow={true}
        credits={{
          enabled: false,
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <Main />
              <Introduce />
              <Showcase />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Index;
