"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCourses = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(url);

        if (!cancelled) {
          setData(response.data);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Something went wrong!", error);
          setError(error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchCourses;