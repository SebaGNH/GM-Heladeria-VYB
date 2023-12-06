import React from 'react';
import { useQuery } from 'react-query';
import { getDocs, collection, getFirestore, query, where } from 'firebase/firestore';
import { Spinner, Card } from '../components';
import { useParams } from 'react-router-dom';

const getItems = async (categori) => {
  const db = getFirestore();
  const itemsRef = collection(db, 'items');
  const queryRef = query(itemsRef, where('categori', '==', categori));

  const querySnapshot = await getDocs(queryRef);

  if (querySnapshot.size === 0) {
    console.log('No results for categori:', categori);
    return [];
  }

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const CategoriasPage = () => {
  const { categori } = useParams();
  const { data, isLoading } = useQuery(['items', categori], () => getItems(categori));

  return (
    <>
      <div className="container">
        {isLoading ? (
          <Spinner />
        ) : (
          <Card data={data} />
        )}
      </div>
    </>
  );
};
