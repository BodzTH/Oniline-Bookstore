import { ButtonHTMLAttributes } from "react";

export type RowProps = {
  title: string;
  books: string;
};

export type BookProbs = {
  title: string;
  books: string;
  book_name: string;
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