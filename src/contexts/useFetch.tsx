import { useEffect, useState } from "react";

function useFetch(url: string) {
  let [result, setResult] = useState({ results: [] });
  useEffect(() => {
    fetch(url)
      .then((e) => e.json())
      .then((e) => setResult(e));
  }, []);
  return { result };
}

export default useFetch;
