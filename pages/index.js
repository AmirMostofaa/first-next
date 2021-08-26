import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Mostafa | Home</title>
      <meta name="keywords" content="amir" />
    </Head>

    <div>
      

      <h1 className={styles.title}>Welcome to Basic Next JS Site.</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, amet.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, amet.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, amet adipisicing elit. Rem, amet..</p>
      <br/>
    <Link href="/projects">
      <a className={styles.btn}>See Projects</a>
    </Link>
      
    </div>
    </>
  )
}
