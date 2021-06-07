import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default ({allPostsData}) => {
  return (
   <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{' '} Software Engineer | Drone enthusiast | Food lover | Traveller  </p>       
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        <li> 
          <Link href="https://abhishekuc.medium.com/testing-in-go-part-1-9fd9963f6600">
               <a>Unit Testing in Go</a>
          </Link>
        </li>         
        </ul>
      </section>
    </Layout>
    )
}
