import React, {MouseEvent} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import {List, Avatar, Button, Spin, Alert} from 'antd';

import {
  DeleteListingDocument,
  DeleteListingMutation,
  DeleteListingMutationVariables,
  ListingsDocument,
  ListingsQuery,
} from '../../generated';

// TODO add import order to eslint
import './styles/index.css';

import {ListingsSkeleton} from './components/listing-skeleton';

interface ListingsProps {
  title: string;
}

export const Listings = (props: ListingsProps) => {
  const {title} = props;

  const {error, data, refetch, loading} = useQuery<ListingsQuery>(ListingsDocument);
  const [deleteListing, {
    loading: deleteListingLoading,
    error: deleteListingError,
  }] = useMutation<DeleteListingMutation, DeleteListingMutationVariables>(DeleteListingDocument);
  const handleDeleteListing = (evt: MouseEvent<HTMLButtonElement>) => {
    const fetchDelete = async () => {
      await deleteListing({variables: {id: evt.currentTarget.id}});
      refetch();
    };

    fetchDelete();
  };

  if (loading) {
    return (
      <div className="listings">
        <ListingsSkeleton title={title}/>
      </div>
    );
  }

  if (error) {
    return (
      <div className="listings">
        <ListingsSkeleton title={title} error/>
      </div>
    );
  }

  // TODO refactor to won component -> see listing-skeleton.tsx
  const deleteListingErrorAlert = deleteListingError ? (
    <Alert
      type="error"
      message="Uh oh! Something went wrong :(. Please try again later."
      className="listings__alert"
    />
  ) : null;

  return <div className="listings">
    {deleteListingErrorAlert}

    <Spin spinning={deleteListingLoading}>
      <h2>{title}</h2>
      {data?.listings && (
        <List itemLayout="horizontal" dataSource={data.listings} renderItem={listing => (
          <List.Item actions={[<Button type="primary" id={listing.id} onClick={handleDeleteListing}>Delete</Button>]}>
            <List.Item.Meta
              title={listing.title}
              description={listing.address}
              avatar={<Avatar src={listing.image} size={48} shape="square"/>}
            />
          </List.Item>
        )}>
        </List>)}
    </Spin>
  </div>;
};
