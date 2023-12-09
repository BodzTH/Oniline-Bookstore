import { ButtonHTMLAttributes } from "react";

export type BookProbs = {
  book_name: string;
  book_description: string;
  image: string;
  alt_image: string;
  price: number;
  cart: ButtonHTMLAttributes<HTMLButtonElement>;
  author: string;
  publisher: string;
};
 
export type CatProps = {
  title: string;
};

export type BookCardProbs = {
  book_name: string;
  alt_image: string;
  image: string;
  price: number;
  cart: ButtonHTMLAttributes<HTMLButtonElement>;
};


export type SearchProbs = {
  book_name: string;
  book_description: string;
  image: string;
  price: number;
  books: string[];
  book_type: string;
};

export type FooterProbs = {
  text: string;
  num: number;
};
