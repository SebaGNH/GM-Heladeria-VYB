import React from 'react';
import { useQuery } from 'react-query';
import { getDocs, collection, getFirestore, doc, getDoc } from 'firebase/firestore';
import { Spinner, Card } from '../components';
import { useParams } from 'react-router-dom';

const getItems = async (idHelado) => {
  const db = getFirestore();
  const itemDocRef = doc(db, 'items', idHelado);

  const queryData = await getDoc(itemDocRef);

  if (!queryData.exists()) {
    console.log('No results for ID:', idHelado);
    return [];
  }

  return [{ id: queryData.id, ...queryData.data() }];
};

export const DetailProduct = () => {
  const { id: idHelado } = useParams();
  const { data, isLoading } = useQuery(['items', idHelado], () => getItems(idHelado));

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
