import React, { useEffect, useState } from 'react';
import { getDocs, collection, getFirestore } from 'firebase/firestore';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsRef = collection(db, 'items');

    getDocs(itemsRef)
      .then((res) => {
        if (res.size === 0) {
          console.log('no results');
        }
        setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(items);

  return <div>Home</div>;
};