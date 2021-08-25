import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Layout from "../../components/layout";

import picture from "../../public/images/profile.jpg";

export default function FirstPost() {
  const YourComponent = () => (
    <Image
      src={picture} // Route of the image file
      // height={144} // Desired size with correct aspect ratio
      // width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );

  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <YourComponent></YourComponent>
      </Layout>
    </>
  );
}
