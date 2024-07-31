import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import session from "redux-persist/lib/storage/session";

import LoginReducer from "./slice/loginSlice";
import CounterReducer from "./slice/counterSlice";
import PostsSlice from "./slice/postsSlice";
import LanguageSlice from "./slice/languageSlice";

const VERSION = "v1";

const localStorage = (key: string): PersistConfig<any> => ({
  key: `${VERSION}-${key}`,
  storage: storage,
});

const sessionStorage = (key: string): PersistConfig<any> => ({
  key: `${VERSION}-${key}`,
  storage: session,
});

export const rootReducer = combineReducers({
  login: persistReducer(localStorage("login"), LoginReducer),
  lang: persistReducer(localStorage("language"), LanguageSlice),
  counter: persistReducer(sessionStorage("counter"), CounterReducer),
  posts: PostsSlice,
});
