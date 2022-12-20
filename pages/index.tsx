import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Shova's Portfolio</title>
    </Head>
    {/* Header */}
    <Header/>

    {/* Hero  */}
    {/* About  */}
    {/* Experience */}
    {/* Skills */}
    {/* Projects  */}
    {/* Contact Me */}
    </>
  )
}
