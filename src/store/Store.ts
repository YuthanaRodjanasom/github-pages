import { configureStore } from "@reduxjs/toolkit";
import PokemonApiService from "../service/PokemonApiService";

export const store = configureStore({
  reducer: {
    [PokemonApiService.reducerPath]: PokemonApiService.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(PokemonApiService.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
