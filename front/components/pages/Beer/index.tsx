"use client";
import { Header } from "@/components/Header";
import { beerContext } from "@/contexts/beer.context";
import { iBeer } from "@/interface/beers.interface";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import nookies from "nookies";

export const BeerEspecific = ({ id }: any) => {
  const router = useRouter();
  useEffect(() => {
    function verifyToken() {
      const token = nookies.get(null).token;
      if (!token) {
        router.push("/");
      }
    }
    verifyToken();
  }, []);

  const { beers } = useContext(beerContext);

  const beer = beers.find((beer: iBeer) => beer.id === Number(id));

  return (
    <>
      <Header />
      <section className="container w-full h-full">
        <div className="w-full h-full flex mt-[2rem]">
          <figure className="w-full h-full flex items-center justify-center">
            <img
              src={beer?.image_url}
              alt={beer?.image_url}
              className="w-[200px] h-[700px] self-center  "
            />
          </figure>
          <h2 className="mt-[3rem]">{beer?.abv}%</h2>
          <div className="flex flex-col mt-[5rem] ml-[4rem]">
            <h2 className="text-[3rem]">{beer?.name}</h2>
            <h3 className="font-bold  mt-[1rem] text-[1rem]">
              {beer?.tagline}
            </h3>
            <p className="font-regular mt-[2rem]">{beer?.description}</p>
            <div>
              <p className="font-bold py-[1rem] text-[1.5rem]">
                Ingredients:{" "}
                {beer?.ingredients.malt.map((malt) => (
                  <ul key={malt.name} className="flex flex-col mt-[1rem]">
                    <li className="w-full h-full flex gap-[2rem] border border-[var(--colorPrimary)] p-[1rem]">
                      <p className="font-medium ">
                        Name:{" "}
                        <span className="text-amber-600">{malt.name}</span>
                      </p>
                      <p className="font-medium">
                        Value:{" "}
                        <span className="text-amber-600">
                          {malt.amount.value}
                        </span>
                      </p>
                      <p className="font-medium">
                        Unit:{" "}
                        <span className="text-amber-600">
                          {malt.amount.unit}
                        </span>
                      </p>
                    </li>
                  </ul>
                ))}
              </p>
            </div>

            <p className="font-bold py-[1rem] text-[1rem]">
              <span className="text-amber-600 text-[1.3rem]">
                {beer?.attenuation_level}
              </span>{" "}
              Attenuation Level
            </p>
            <div>
              <p className="font-bold text-[1.5rem]">Brewers Tips:</p>
              <p className="ml-[2rem] mt-[1rem]">{beer?.brewers_tips}</p>
            </div>
            <div>
              <p className="font-bold text-[1.5rem] mt-[2rem] ">
                Food Pairing:
              </p>
              {beer?.food_pairing.map((food) => (
                <ul key={food} className="flex flex-col mt-[1rem] mb-[2rem] ">
                  <li className="w-full h-full flex gap-[2rem] border  border-[var(--colorPrimary)] p-[1rem] ">
                    {food}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
