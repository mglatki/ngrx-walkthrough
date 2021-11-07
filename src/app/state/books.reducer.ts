import { createReducer, on } from "@ngrx/store";

import { retrieveBookList } from "./books.actions";
import { Book } from "../book-list/books.model";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(retrieveBookList, (state, {books}) => books)
)