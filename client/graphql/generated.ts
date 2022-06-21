import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Listing = {
  __typename?: 'Listing';
  address: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  numOfBaths: Scalars['Int'];
  numOfBeds: Scalars['Int'];
  numOfGuests: Scalars['Int'];
  price: Scalars['Int'];
  rating: Scalars['Int'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteListing: Listing;
};


export type MutationDeleteListingArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  listings: Array<Listing>;
};

export type ListingsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingsQuery = { __typename?: 'Query', listings: Array<{ __typename?: 'Listing', id: string, title: string, image: string, address: string, price: number, numOfGuests: number, numOfBeds: number, numOfBaths: number, rating: number }> };

export type DeleteListingMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteListingMutation = { __typename?: 'Mutation', deleteListing: { __typename?: 'Listing', id: string } };


export const ListingsDocument = gql`
    query Listings {
  listings {
    id
    title
    image
    address
    price
    numOfGuests
    numOfBeds
    numOfBaths
    rating
  }
}
    `;

/**
 * __useListingsQuery__
 *
 * To run a query within a React component, call `useListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListingsQuery(baseOptions?: Apollo.QueryHookOptions<ListingsQuery, ListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListingsQuery, ListingsQueryVariables>(ListingsDocument, options);
      }
export function useListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListingsQuery, ListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListingsQuery, ListingsQueryVariables>(ListingsDocument, options);
        }
export type ListingsQueryHookResult = ReturnType<typeof useListingsQuery>;
export type ListingsLazyQueryHookResult = ReturnType<typeof useListingsLazyQuery>;
export type ListingsQueryResult = Apollo.QueryResult<ListingsQuery, ListingsQueryVariables>;
export const DeleteListingDocument = gql`
    mutation DeleteListing($id: ID!) {
  deleteListing(id: $id) {
    id
  }
}
    `;
export type DeleteListingMutationFn = Apollo.MutationFunction<DeleteListingMutation, DeleteListingMutationVariables>;

/**
 * __useDeleteListingMutation__
 *
 * To run a mutation, you first call `useDeleteListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteListingMutation, { data, loading, error }] = useDeleteListingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteListingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteListingMutation, DeleteListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteListingMutation, DeleteListingMutationVariables>(DeleteListingDocument, options);
      }
export type DeleteListingMutationHookResult = ReturnType<typeof useDeleteListingMutation>;
export type DeleteListingMutationResult = Apollo.MutationResult<DeleteListingMutation>;
export type DeleteListingMutationOptions = Apollo.BaseMutationOptions<DeleteListingMutation, DeleteListingMutationVariables>;