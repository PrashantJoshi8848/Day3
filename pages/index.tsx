import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navabar from "../components/Navbar/Navabar";
import Main from "next/head";
import React, { useState } from "react";
import Body from "../components/body/body";
import { GetServerSideProps } from "next";
import { products, datas } from "../Imodules/dataInterface";
export default function Home({ data }: { data: products }) {
  return (
    <>
      <Head>
        <Navabar />
      </Head>
      <Body />
      <div>
        {data.products.map((items) => (
          <>
            <div>{items.title}</div>
          </>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const jsondata: products = await data.json();
  return {
    props: {
      data: jsondata,
    },
  };
};
