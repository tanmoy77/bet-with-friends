import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchGroup = (id) => {
  const [groupDetail, setGroupDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const getGroupDetails = async () => {
        setLoading(true);
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/groups/${id}/`
        );
        setGroupDetail(data);
      };
      getGroupDetails();
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  });

  return [groupDetail, loading, error];
};
