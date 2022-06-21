import React, {MouseEvent} from 'react';

import {DeleteListingData, DeleteListingVariables, ListingsData} from './types';
import {gql, useQuery, useMutation} from '@apollo/client';

const LISTINGS = gql`
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

const DELETE_LISTING = gql`
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


  const {error, data, refetch, loading} = useQuery<ListingsData>(LISTINGS);
  const [deleteListing] = useMutation<DeleteListingData, DeleteListingVariables>(DELETE_LISTING);

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
