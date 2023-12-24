import { ButtonHTMLAttributes } from "react";

export type RowProps = {
  title: string;
};

export type BookProbs = {
  title: string;
  books: string;
  book_name: string;
  image: string;
  alt_image: string;
  price: number;
  id: number;
  stylcat: string;
  stylcard: string;
  width: number;
  height: number;
};

export type SearchProbs = {
  book_name: string;
  book_description: string;
  image: string;
  alt_image: string;
  price: number;
  book_type: string;
};

export type FooterProbs = {
  text: string;
  num: number;
};

export type BookItemProbs = {
  book_name: string;
  book_description: string;
  image: string;
  alt_image: string;
  price: number;
  book_type: string;
  author: string;
  publisher: string;
  sku: string;
};