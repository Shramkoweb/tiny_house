import React from 'react';

import {ListingsData, DeleteListingData, DeleteListingVariables} from './types';
import {useMutation, useQuery} from '../../lib/api';

const LISTINGS = `
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

const DELETE_LISTING = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

interface ListingsProps {
  title: string;
}

export const Listings = (props: ListingsProps) => {
  const {title} = props;

  const {data, refetch, isLoading, error} = useQuery<ListingsData>(LISTINGS);
  const [
    {isLoading: deleteListingLoading},
    deleteListing,
  ] = useMutation<DeleteListingData, DeleteListingVariables>(DELETE_LISTING);


  const handleDeleteListing = async (id: string) => {
    await deleteListing({id});
    refetch();
  };

  const listings = data?.listings ?? null;
  const deleteListingLoadingMessage = deleteListingLoading ? (
    <h4>Deletion in progress...</h4>
  ) : null;

  const listingsList = listings ? (
    <ul>
      {listings.map(listing => {
        return (
          <li key={listing.id}>
            {listing.title}{' '}
            <button onClick={() => handleDeleteListing(listing.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  ) : null;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Uh oh! Something went wrong - please try again later :(</h2>;
  }

  return <>
    <h2>{title}</h2>
    {listingsList}
    {deleteListingLoadingMessage}
  </>;
};
