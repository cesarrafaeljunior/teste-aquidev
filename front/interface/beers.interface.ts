import { Dispatch, SetStateAction } from "react";

export interface iBeer {
  id:number
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  attenuation_level: number;
  ingredients: {
    malt: [
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
      },
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
      },
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
      }
    ];
  };
  food_pairing: string[];
  brewers_tips: string;
}

export interface iBeerContext{
    beers:iBeer[];
    setBeers: Dispatch<SetStateAction<iBeer[]>>;
    page: number
    setPage: Dispatch<SetStateAction<number>>;
}