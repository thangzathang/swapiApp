import Head from "next/head";

import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>SWAPI | About</title>
        <meta name="keywords" content="swapi" />
      </Head>
      <h1 className="title primary">Who am I? I am Thang, fullstack web developer</h1>
      <div className="textContent">
        <div className="imageContainerProfile">
          <Image src="/headshot.png" width={550} height={660} alt="Headshot of Thang Za Thang" />
        </div>
        <p>A recent graduate of Australia&apos;s Coding Bootcamp - Coder Academy (Melbourne).</p>
        <p>My passion is to create fun and exciting apps on the web for my own amusement,</p>
        <p>using the skills I have learnt over the last two years of web development.</p>
        <br />
        <p>I am a fullstack web developer. My biggest strength and confidence are in the </p>
        <p>traditional languages such as HTML, CSS, Javascript, React, Firebase, MongoDB, NodeJS.</p>
        <br />
        <p> I have worked with other technologies such as Ruby, Ruby on Rails, AWS and Python.</p>
        <p> Proudly made projects based upon the M.E.R.N stack and React with Firebase.</p>
        <p>You can see more of my projects at the provided links below.</p>
        <br />
        <p>
          See more projects at my portfolio{" "}
          <a href="https://thangzathang.com" className="gitLink" target="_blank" rel="noreferrer">
            Thang Za Thang
          </a>
          .
        </p>
        <p>
          and my github{" "}
          <a href="https://github.com/thangzathang/" className="gitLink" target="_blank" rel="noreferrer">
            Thang Za Thang
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default About;
