import Head from "next/head";
import useKeyboardEffect from "../hooks/useKeyboardEffect";

const Home = () => {
  const title = useKeyboardEffect(`Upstairs
  Coffee ☕️
  Roasters`, 150);



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
            margin: auto;
          }

          .title {
            /* nice */
            color: rgba(69, 69, 69, 1);
            margin: auto;
            font-size: 3rem;
          }

          .cursor {
            font-weight: 100;
            animation: 1s blink step-end infinite;
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
