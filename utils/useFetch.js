
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, path = "", query = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      console.log(url, path);
      try {
        let fullUrl = url;
        if (path) {
          fullUrl += `/${path}`;
        }

      const response = await axios.get(fullUrl);

      setData(response?.data?.data);
      } catch (err) {
        console.error("Something went wrong!", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, path, JSON.stringify(query)]);

  return { data, loading, error };
};

export default useFetch;