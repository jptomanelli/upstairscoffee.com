import Head from "next/head";
import useKeyboardEffect from "../hooks/useKeyboardEffect";
import SubscribeForm from "../components/SubscribeForm";
import { useState } from "react";

const Home = () => {
  const title = useKeyboardEffect(`Upstairs
  Coffee ☕️
  Roasters`, { 
    duration: 150,
    onComplete: () => setTimeout(() => setSignupVisible(true), 500)
  });

  const [signupVisible, setSignupVisible] = useState(false);

  return (
    <div className="container">
      <Head>
        <title>Upstairs Coffee Roasters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h1 className="title">
          {title}
          <span className="cursor">|</span>
        </h1>
        <div className={`subscribe-container ${signupVisible ? 'visible' : 'hidden'}`}>
          <SubscribeForm hidden={!signupVisible}/>
        </div>
      </main>
      <style jsx>
        {`
          .container {
            background-image: url("/notes-bg.png");
            background-repeat: repeat;
          }

          .main {
            height: 100vh;
            display: flex;
            justify-content: space-evenly;
            margin: auto;
            align-items: center;
            flex-direction: column;
          }

          .title {
            /* nice */
            color: rgba(69, 69, 69, 1);
            font-size: 3rem;
          }

          .cursor {
            font-weight: 100;
            animation: 1s blink step-end infinite;
          }

          .subscribe-container {
            transition: opacity 500ms ease;
            max-width: 300px;
            padding: 0 22px;
          }
          .subscribe-container.hidden{
            opacity: 0;
          }
          .subscribe-container.visible{
            opacity: 1;
          }

          @media(min-width: 900px) {
            .main {
              flex-direction: row;
            }
          }

          @keyframes blink {
            from,
            to {
              color: transparent;
            }
            50% {
              color: rgba(221, 176, 61, 1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
