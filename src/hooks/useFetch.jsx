import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function CallApi() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const ApiData = await response.json();
      console.log(ApiData)
      setData(ApiData);
      setLoading(false);
    } catch (error) {
      setError("Error calling Api", error);
      setLoading(false)
    }
  }

  useEffect(() => {
    CallApi();
  }, []);

  return {
    data,
    error,
    loading,
  };
};


export default  useFetch