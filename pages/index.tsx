import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Soap Health</title>
        <meta name="description" content="Soap Health form exercise to register an user." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mx-auto flex flex-1 justify-center items-center h-screen
      bg-black'      
      >
        <Link 
          href="/register" 
          className='bg-green-700 border border-green-800 rounded-xl w-full max-w-[10rem] 
            text-center text-base text-gray-200 font-sans py-2 px-4 hover:bg-green-800 
            transition-colors'
          >
            Register
        </Link>
      </div>
    </>
  )
}
