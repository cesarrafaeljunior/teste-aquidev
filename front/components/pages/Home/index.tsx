"use client";
import { PaginationHome } from "@/components/pages/Home/PaginationHome";
import { useContext, useEffect, useState } from "react";
import { Content } from "./content";
import { beerContext } from "@/contexts/beer.context";
import { Header } from "@/components/Header";
import Bg_Home from "../../../public/assets/bg/bg_home.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import nookies from "nookies";

export const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const verifyToken = () =>() {
      const token = nookies.get(null).token;
      if (!token) {
        router.push("/");
      }
    }
    verifyToken();
  });

  const { beers, page, setPage } = useContext(beerContext);

  return (
    <>
      <Header />
      <figure className="w-full h-[800px]">
        <Image
          src={Bg_Home}
          alt="Background Beers"
          width={1600}
          height={900}
          className="w-full h-[650px]"
        />
      </figure>
      <main className="container">
        <Content data={beers} />
        <PaginationHome page={page} setPage={setPage} />
      </main>
    </>
  );
};
