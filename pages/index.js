import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default () => {
  return (
   <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{' '} Software Engineer, Drone enthusiast and Food lover! </p>       
      </section>
    </Layout>
    )
}
