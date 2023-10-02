"use client";
import { PaginationHome } from "@/components/pages/Home/PaginationHome";
import { useEffect, useState } from "react";
import { Content } from "./content";
import { instance } from "@/services/axios";

export const Home = () => {
  const [beers, setBeers] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function retrieveBeers() {
      await instance
        .get(`beers?page=${page}&per_page=12`)
        .then((res) => setBeers(res.data))
        .catch((err) => console.log(err));
    }
    retrieveBeers();
  }, [page]);

  return (
    <>
      <header className="w-full h-[80px] bg-gray-300 flex items-center justify-between">
        <div className="container flex items-center justify-between">
          <div className="w-full">
            <p>Logo</p>
          </div>
          <div className="w-[50px] h-[50px] rounded-[50%] bg-black"></div>
        </div>
      </header>
      <main className="container py-[5rem]">
        <Content data={beers} />
        <PaginationHome page={page} setPage={setPage} />
      </main>
    </>
  );
};
