import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store'; 
import MovieComponent from '@/components/Movie';
import PostsList from '@/features/posts/PostsList';
import AddEntryForm from '@/features/posts/AddEntry';

const Movie = () => {
  return (
    <Provider store={store}>
      <div className="">
        <MovieComponent apiKey={process.env.NEXT_PUBLIC_TMDB_API_KEY} />
        <AddEntryForm />
        <PostsList />
      </div>
    </Provider>
  );
};

export default Movie;