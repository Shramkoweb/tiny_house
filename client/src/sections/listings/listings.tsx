import React from 'react';

import {server} from '../../lib/api';
import {ListingsData, DeleteListingData, DeleteListingVariables} from './types';

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

  const fetchListings = async () => {
    const {data} = await server.fetch<ListingsData>({query: LISTINGS});
    console.log(data);
  };

  const deleteListing = async () => {
    const {data} = await server.fetch<DeleteListingData,
      DeleteListingVariables>({
      query: DELETE_LISTING,
      variables: {
        id: '62a639af90c8da5f7d22c1ed',
      },
    });
    console.log(data); // check the console to see the result of the mutation!
  };
  return <>
    <h2>{title}</h2>
    <button onClick={fetchListings}>Query Listings!</button>
    <button onClick={deleteListing}>Delete a listing!</button>
  </>;
};
