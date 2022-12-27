import { useState, useEffect } from 'react';

function useProducts(pathName) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:5000${pathName}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [pathName]);

  return { products,setProducts, loading, error };
}

export default useProducts;
