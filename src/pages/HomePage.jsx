import React from 'react';
import { useQuery } from 'react-query';
import { getDocs, collection, getFirestore } from 'firebase/firestore';

const fetchItems = async () => {
  const db = getFirestore();
  const itemsRef = collection(db, 'items');

  const querySnapshot = await getDocs(itemsRef);

  if (querySnapshot.size === 0) {
    console.log('no results');
  }

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const HomePage = () => {
  const { data: items, isLoading } = useQuery('items', fetchItems);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(items);

  return <div>Home</div>;
};

