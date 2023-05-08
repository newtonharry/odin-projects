import React, { useState } from "react";
import { BookType } from "../types";
import { Book } from "./Book";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Library.css";

export const Library: React.FC = () => {
  let [books, setBooks] = useState<BookType[]>([]);
  let [addBook, setAddBook] = useState(false);
  const { register, handleSubmit, reset } = useForm<BookType>();

  const toggleAddBook = () => {
    setAddBook(!addBook);
  };

  const resetBookInput = () => {
    reset({
      author: "",
      pages: 0,
      read: false,
      title: "",
    });
  };

  const removeBook = (index: number) => {
    setBooks((oldBooks) => [
      ...oldBooks.slice(0, index),
      ...oldBooks.slice(index + 1),
    ]);
  };

  const onSubmit: SubmitHandler<BookType> = (data) => {
    setBooks((oldBooks) => [...oldBooks, data]);
    resetBookInput();
    toggleAddBook();
  };

  return (
    <>
      {!addBook ? (
        <button className="add-book-button" onClick={toggleAddBook}>
          Add Book
        </button>
      ) : (
        <div className="add-book-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Add Book</h2>
            <label>Title</label>
            <input {...register("title", { required: true })} />
            <label>Author</label>
            <input {...register("author", { required: true })} />
            <label>Read</label>
            <input type="checkbox" {...register("read")} />
            <label>Pages</label>
            <input type="number" {...register("pages", { required: true })} />
            <div className="inputs">
              <button
                onClick={() => {
                  resetBookInput();
                  toggleAddBook();
                }}
              >
                Cancel
              </button>
              <input type="submit" value="Add Book" />
            </div>
          </form>
        </div>
      )}
      {books.length > 0 && (
        <div className="books">
          {books.map((book, index) => (
            <div className="book">
              <Book book={book} />
              <button onClick={() => removeBook(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
