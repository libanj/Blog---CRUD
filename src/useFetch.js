import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
		const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Data is not available right now!!");
        }
        return response.json();
      })
      .then((Jsondata) => {
        setData(Jsondata);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.error(err);
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });

    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
