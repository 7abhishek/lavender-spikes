import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout';

export default argument => {
  return (
  <Layout>
  <Head>
        <title>First Post</title>
      </Head>
    <h1>First Post</h1>
    <Image src="/images/profile.jpeg" height={144} width={144} alt="Your Name" />     
  </Layout>
    )
}
