import Head from 'next/head'
import Landing from '../components/Landing'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kapes Planet | 원숭이행성</title>
      </Head>
      <Landing />
      <About />
    </>
  )
}
