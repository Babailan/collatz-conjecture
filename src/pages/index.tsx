import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Chart from "../components/chart";
import { useState } from "react";
import collatzConjecture from "../libs/collatzConjecture";
import Image from "next/image";
import modularArithmetic from "../assets/modularArithmetic.svg";

const Home: NextPage = () => {
  const [data, setData] = useState<any>([5, 16, 8, 4, 2, 1]);
  const [count, setCount] = useState(6);
  return (
    <div className={styles.container}>
      <Head>
        <title>Collatz Conjecture</title>
        <meta
          name="description"
          content="Collatz-conjecture visualizations chart"
        />
      </Head>
      <Chart data={data} />
      <label className={styles.label}>
        <p>Negative number is not allowed</p>
        <input
          className={styles.input}
          type={"number"}
          placeholder={"Please put a number."}
          onChange={(e: any) => {
            if (e.target.value > 0) {
              setData(collatzConjecture(e.target.value));
              setCount(data.length);
            }
          }}
        />
        <p>Iteration : {count}</p>
      </label>
      <div className={styles.info}>
        <h1 className={styles.title}>The Collatz Conjecture</h1>
        <hr />
        <p>
          The Collatz conjecture is one of the most famous unsolved problems in
          <a
            href={"https://en.wikipedia.org/wiki/Mathematics"}
            target={"_blank"}
            rel="noreferrer"
          >
            mathematics
          </a>
          . The conjecture asks whether repeating two simple arithmetic
          operations will eventually transform every
          <a
            href={"https://en.wikipedia.org/wiki/Positive_integer"}
            target={"_blank"}
            rel="noreferrer"
          >
            positive integer
          </a>
          into 1. It concerns
          <a
            href={"https://en.wikipedia.org/wiki/Integer_sequence"}
            target={"_blank"}
            rel="noreferrer"
          >
            sequences of integers
          </a>
          in which each term is obtained from the previous term as follows: if
          the previous term is
          <a
            href={"https://en.wikipedia.org/wiki/Integer_sequence"}
            target={"_blank"}
            rel="noreferrer"
          >
            even
          </a>
          , the next term is one half of the previous term. If the previous term
          is odd, the next term is 3 times the previous term plus 1. The
          conjecture is that these sequences always reach 1, no matter which
          positive integer is chosen to start the sequence.
        </p>
        <h2 style={{ marginTop: "1em" }}>Statement of the problem</h2>
        <hr style={{ marginBottom: "1em" }} />
        <p>
          Consider the following operation on an arbitrary
          <a
            href="https://en.wikipedia.org/wiki/Positive_integer"
            title="Positive integer"
            rel="noreferrer"
          >
            positive integer
          </a>
          :
        </p>
        <ul>
          <li>If the number is even, divide it by two.</li>
          <li>If the number is odd, triple it and add one.</li>
        </ul>
        <div
          style={{
            position: "relative",
            height: "60px",
            width: "295px",
            margin: "1em",
            backgroundColor: "rgb(225, 225, 225)",
          }}
        >
          <Image
            alt={"modularArithmetic"}
            src={modularArithmetic}
            layout={"fill"}
          />
        </div>
      </div>
      <div style={{ fontSize: "0.8em", textAlign: "center" }}>
        &copy;Ronnel Dilao Babailan
      </div>
    </div>
  );
};

export default Home;
