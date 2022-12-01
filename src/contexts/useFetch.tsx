import { useEffect, useState } from "react";

function useFetch(url: string) {
  let [result, setResult] = useState({ results: [] });
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((e) => e.json())
      .then((e) => {
        setResult(e);
        setIsLoading(false);
      });
  }, []);
  return { result, isLoading };
}

export default useFetch;
