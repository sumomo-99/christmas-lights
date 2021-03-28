import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Christmas Lights</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {children}
      </div>
    </div>
  )
}