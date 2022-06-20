import {useState} from 'react';

import {server} from './server';

interface State<TData> {
  data: TData | null;
  isLoading: boolean;
  error: boolean;
}

type MutationTuple<TData, TVariables> = [
  State<TData>,
  (variables?: TVariables) => Promise<void>,
];
export const useMutation = <TData = unknown, TVariables = unknown>(query: string): MutationTuple<TData, TVariables> => {
  const [state, setState] = useState<State<TData>>({
    data: null,
    isLoading: false,
    error: false,
  });

  const fetch = async (variables?: TVariables) => {
    try {
      setState({data: null, isLoading: true, error: false});

      const {data, errors} = await server.fetch<TData, TVariables>({query, variables});

      if (errors && errors.length) {
        throw new Error(errors[0].message);
      }
      setState({data, isLoading: false, error: false});
    } catch (error) {
      setState({data: null, isLoading: false, error: true});
      throw console.error(error);
    }
  };

  return [state, fetch];
};
