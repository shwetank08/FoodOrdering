import React, { useEffect, useState } from "react";
import { MENULIST } from "./constants";

const useRestrauntMenu = (id) => {
  const [apiData, setapiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResData = async () => {
      try {
        const data = await fetch(MENULIST + id);
        const res = await data.json();
        setapiData(res);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchResData();
  }, [id]);

  return { apiData, loading, error };
};

export default useRestrauntMenu;
