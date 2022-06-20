import {useCallback, useEffect, useReducer, Reducer} from 'react';

import {server} from './server';
import {fetchReducer} from './fetchReducer';
import {
  fetchError,
  fetchSuccess,
  startFetch,
} from './actions';

export const useQuery = <TData = unknown>(query: string) => {
  const [state, dispatch] = useReducer(fetchReducer<TData>(), {
    data: null,
    isLoading: false,
    error: false,
  });

  const fetchApi = useCallback(async () => {
    try {
      dispatch(startFetch());
      const {data, errors} = await server.fetch<TData>({query});
      if (errors && errors.length) {
        throw new Error(errors[0].message);
      }
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchError());
      throw console.error(error);
    }
  }, [query]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return {...state, refetch: fetchApi};
};
