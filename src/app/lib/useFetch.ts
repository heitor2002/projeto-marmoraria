"use client";

import { useEffect, useState } from "react";

interface ImagesProps {
  id: string;
  url_image: string;
}

export default function useFetch(url: string) {
  const [data, setData] = useState<ImagesProps[]>([]);

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
