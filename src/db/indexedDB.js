// src/db/indexedDB.js
import { openDB } from 'idb';

const DB_NAME = 'QuizDB';
const DB_VERSION = 1;
const STORE_NAME = 'quizHistory';

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    }
  },
});

export const saveQuizResult = async (result) => {
  const db = await dbPromise;
  await db.add(STORE_NAME, result);
};

export const getQuizHistory = async () => {
  const db = await dbPromise;
  return db.getAll(STORE_NAME);
};