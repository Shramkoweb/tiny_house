import { connectDatabase } from '../src/database';
import { USERS, LISTINGS } from './mock.data';

const seed = async () => {
  try {
    console.log(`[seed] : running...`);

    const db = await connectDatabase();

    for (const listing of LISTINGS) {
      await db.listings.insertOne(listing);
    }

    for (const user of USERS) {
      await db.users.insertOne(user);
    }
  } catch (error) {
    console.error(error);
    throw new Error('failed to seed database');
  }

  process.exit(0);
};

seed();
