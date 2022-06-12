import {MongoClient} from 'mongodb';

import {Database} from '../lib/types';

const CONNECT_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.spuif.mongodb.net/?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(CONNECT_URL);
  const db = client.db('main');

  return {
    listings: db.collection('test_listings'),
  };
};

