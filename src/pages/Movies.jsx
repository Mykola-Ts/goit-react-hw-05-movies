import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import { fetchMovieByQuery } from 'components/services/api';
import { toastWarningOptions } from 'components/helpers/helpers';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesSearchForm } from 'components/MoviesSearchForm/MoviesSearchForm';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [randomID, setRandomID] = useState('');
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const controllerRef = useRef();

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    async function getSearchMovie() {
      try {
        const data = await fetchMovieByQuery(query, controllerRef.current);

        if (!data.results.length) {
          toast.remove();
          toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );

          return;
        }

        setMovies(data.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          toast.remove();
          toast.error('Oops, something went wrong. Try reloading the page.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    getSearchMovie();

    return () => {
      controllerRef.current.abort();
      toast.remove();
    };
  }, [query, randomID]);

  const onSearch = async evt => {
    evt.preventDefault();

    const searchQuery = evt.target.query.value.trim();

    if (!searchQuery) {
      toast.remove();
      toast('Input field is empty. Enter search query!', toastWarningOptions);

      return;
    }

    setQuery(searchQuery);
    setRandomID(nanoid());
    
    searchParams.set('query', searchQuery);
    setSearchParams(searchParams);

    evt.target.reset();

    return () => {
      toast.remove();
    };
  };

  const onReset = evt => {
    const form = evt.target.closest('form');

    form.reset();
  };

  return (
    <main>
      <div>
        <MoviesSearchForm onSearch={onSearch} onReset={onReset} />

        {movies.length > 0 && (
          <MoviesList movies={movies} state={{ from: location }} />
        )}
        {isLoading && <Loader text="Loading data, please wait..." />}
      </div>
    </main>
  );
};

export default Movies;
