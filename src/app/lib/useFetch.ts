"use client";

import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState([]);

  const fetchApi = async (url: string) => {
    const response = await fetch(url);
    const json = await response.json();

    setData(json);
    return data;
  };

  useEffect(() => {
    fetchApi(url);
  }, [url]);

  return { data };
}
