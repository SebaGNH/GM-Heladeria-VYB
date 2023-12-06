import React from 'react';
import { useQuery } from 'react-query';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import { Spinner, Card } from '../components';

const getItems = async () => {
  const db = getFirestore();
  const itemsRef = collection(db, 'items');

  const queryData = await getDocs(itemsRef);

  if (queryData.size === 0) {
    console.log('no results');
  }

  return queryData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const HomePage = () => {
  const { data, isLoading } = useQuery('items', getItems);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <Spinner/>
        ) : (
          <Card data={data}/>
        )}
      </div>
    </>
  );
};
