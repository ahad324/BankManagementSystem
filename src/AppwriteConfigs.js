import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID_USERS = import.meta.env.VITE_APPWRITE_COLLECTION_ID_USERS;

export { client, databases, DATABASE_ID, COLLECTION_ID_USERS };