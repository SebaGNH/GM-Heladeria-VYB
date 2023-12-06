import React from 'react';
import { useQuery } from 'react-query';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import { Spinner } from '../components/Spinner';

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
  const { data, isLoading } = useQuery('items', fetchItems);

  console.log(data);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <Spinner/>
        ) : (
          <ul>
            {data.map((helado) => (
              <li key={helado.id}>
                <p>{helado.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};