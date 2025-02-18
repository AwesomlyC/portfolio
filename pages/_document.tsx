import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel='icon' href='/images/favicon.ico' />
      <body className="font-primary">
          <Head>
          <meta 
            name= "description" 
            content = {`Victor Chhun is a full-stack developer with experience in building modern web applications.
            Check out his work in software development by viewing his portfolio.`}
          />
        </Head>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
