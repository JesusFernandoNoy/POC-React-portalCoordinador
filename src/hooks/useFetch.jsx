import { useEffect, useState } from "react";

export default function useFetch(url, options) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setResult(data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err.message);
            setError(err);
            setLoading(false);
        });
    }, [options, url]);

  return { loading, result, error };
}
