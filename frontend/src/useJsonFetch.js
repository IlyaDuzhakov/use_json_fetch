import { useState, useEffect } from "react";

const useJsonFetch = (url, opts) => {
  const [fetchData, setFetchData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true)
    fetch(url, opts)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
      return response.json();
    })
    .then((data) => {
       setFetchData(data)
    })
    .catch((err) => {
      setError(err)
    }).finally(()=> {
        setLoading(false)
    });
  }, []) 
  return [ fetchData, loading, error ]
}

export default useJsonFetch;
