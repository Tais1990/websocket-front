import Head from 'next/head'
import ListMessages from '@/components/ListMessages/ListMessages'

export default function Home() {
  return (
    <>
      <Head>
        <title>Сообщения</title>
        <meta name="description" content="Test Request. Websocket with react query" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1>Сообщения</h1>
          <ListMessages />
        </div>
      </main>
    </>
  )
}
