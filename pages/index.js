import Head from "next/head";
import Image from "next/image";

// Utils
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SWAPI | Home</title>
        <meta name="keywords" content="swapi" />
      </Head>
      <h1 className="title primary">SWAPI, React and NextJS code test Challenge</h1>
      <div className="textContent">
        <p>
          This is an attempt at a front end challenge I received. See the code here at Github:{" "}
          <a href="https://github.com/thangzathang/swapiApp" className="gitLink" target="_blank" rel="noreferrer">
            Thang Za Thang.
          </a>
        </p>
        <p>Consume the Star Wars API (SWAPI) using React, NextJS and other JS technologies you deem fit. </p> <br />
        <p className="primary textTitle">Acceptance criteria: </p> <br />
        <p>• Home screen contains a list of films pulled from the SWAPI • List should be searchable</p>
        <p>• Films can be favourited, this state should be persisted using local storage</p>
        <p>• Favourited films should appear at the top of the list • Favourited films can be unfavourited </p>
        <br />
        <p>• Film list items can be clicked to show individual film page • Film page should exist on it’s own URL</p>
        <p>• Film page should show all the information pulled from the SWAPI endpoint for an individual film</p>
        <p> • The list of characters should display a tooltip when a list item is hovered, </p>
        <p>containing their name, birth year, eye colour, gender, hair colour and any other information you deem necessary </p>
        <br />
        <p>• Film page should contain a back to home link • Provide public GitHub repo to source code</p>
        <p>• Use SCSS for styling • Use Flexbox or CSS grid for layouts - avoid Bootstrap etc</p>
        <p>• Host the finished project on Vercel</p>
        <Link href="/films">
          <a className="btn">Star Wars Movies</a>
        </Link>
      </div>
    </>
  );
}
