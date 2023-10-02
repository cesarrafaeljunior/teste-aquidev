"use client"
import { iBeer, iBeerContext } from "@/interface/beers.interface";
import { instance } from "@/services/axios";
import React, { createContext, useEffect, useState } from "react";

export const beerContext = createContext<iBeerContext>({} as iBeerContext);

export interface iChildren {
  children: React.ReactNode;
}

export const BeerProvider = ({ children }: iChildren) => {
  const [beers, setBeers] = useState<iBeer[]>([]);
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
    <beerContext.Provider
      value={{ beers, setBeers, page, setPage }}
    >
      {children}
    </beerContext.Provider>
  );
};
