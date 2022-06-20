import {useReducer} from 'react';

import {server} from './server';
import {fetchReducer} from './fetchReducer';
import {
  fetchError,
  fetchSuccess,
  startFetch,
} from './actions';

export const useMutation = <TData = unknown, TVariables = unknown>(query: string) => {
  const [state, dispatch] = useReducer(fetchReducer<TData>(), {
    data: null,
    isLoading: false,
    error: false,
  });

  const fetch = async (variables?: TVariables) => {
    try {
      dispatch(startFetch());
      const {data, errors} = await server.fetch<TData, TVariables>({query, variables});

      if (errors && errors.length) {
        throw new Error(errors[0].message);
      }
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchError());
      throw console.error(error);
    }
  };

  return [state, fetch] as const;
};
