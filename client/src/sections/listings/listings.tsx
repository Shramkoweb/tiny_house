import React, {MouseEvent} from 'react';
import {useQuery, useMutation} from '@apollo/client';

import {
  ListingsDocument,
  DeleteListingDocument,
  DeleteListingMutationVariables,
  DeleteListingMutation,
  ListingsQuery,
} from '../../../graphql/generated';

interface ListingsProps {
  title: string;
}

export const Listings = (props: ListingsProps) => {
  const {title} = props;


  const {error, data, refetch, loading} = useQuery<ListingsQuery>(ListingsDocument);
  const [deleteListing] = useMutation<DeleteListingMutation, DeleteListingMutationVariables>(DeleteListingDocument);

  const handleDeleteListing = (evt: MouseEvent<HTMLButtonElement>) => {
    const fetchDelete = async () => {
      await deleteListing({variables: {id: evt.currentTarget.id}});
      refetch();
    };

    fetchDelete();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <>
    <h2>{title}</h2>
    {data?.listings && (
      <ul>
        {data?.listings.map(listing => {
          return (
            <li key={listing.id}>
              {listing.title}{' '}
              <button id={listing.id} onClick={handleDeleteListing}>Delete</button>
            </li>
          );
        })}
      </ul>)}
  </>;
};
