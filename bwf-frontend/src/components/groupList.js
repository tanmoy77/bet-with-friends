import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function GroupList() {
  const [groups, setGroups] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const getData = async () => {
        const { data } = await axios.get("http://127.0.0.1:8000/api/groups/");
        setGroups(data);
      };
      getData();
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  }, []);

  if (error) return <h1>Error!</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      {groups &&
        groups.map((group) => {
          return (
            <Link to={`/details/${group.id}`}>
              <p>{group.name}</p>
            </Link>
          );
        })}
    </div>
  );
}

export default GroupList;
