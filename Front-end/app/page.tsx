import Image from 'next/image'
import styles from './page.module.css'

function Header() {
return (
<header className={styles.main}>
  <h2>Bye World</h2>
</header>
);


}

function Home() {
  return (
    <main className={styles.main}>
     <h1>Hello World</h1>
     <Header/>
    </main>
  );
}

export default Home;