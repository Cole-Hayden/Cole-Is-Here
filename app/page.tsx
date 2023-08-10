import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
        <div>
    <h1 className={styles.alignCenter}>
        Hello!  My name is Cole Hayden.  I'm an avid <a href="/books">bookworm</a>,&nbsp;  
        <a href="/music">musician</a>, and&nbsp;
         <a href="/code">software developer</a>. 
       </h1>
       
       <br></br>
       <br></br>
       <br></br>
       <h5 className={styles.alignCenter}>The point of this site is for me to put stuff on it and for you to look at it.</h5>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <h3 className={styles.alignCenter}>Quote of the day</h3>
       <h3 className={styles.alignCenter}>“You will become way less concerned with what other people think of you when you realize how seldom they do.” 
― David Foster Wallace, Infinite Jest</h3>
</div>
    </main>
  )
}
