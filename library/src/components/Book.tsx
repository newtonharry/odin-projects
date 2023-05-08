import React from "react";
import { BookType } from "../types";

type Props = {
  book: BookType;
};

export const Book: React.FC<Props> = ({ book }) => {
  return (
    <>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.pages} pages</p>
      <p>{book.read ? "Read" : "Not Read"}</p>
    </>
  );
};
