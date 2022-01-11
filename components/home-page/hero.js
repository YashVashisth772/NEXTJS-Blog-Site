import Image from "next/image";
import classes from './hero.module.css'

function Hero() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.hero}>
          <Image src="/images/site/max.png" alt='An Image' width={300} height={300} />
        </div>
        <h1>Hi I am Yash</h1>
        <p>This is a blog site</p>
      </section>
    </>
  );
}

export default Hero;
