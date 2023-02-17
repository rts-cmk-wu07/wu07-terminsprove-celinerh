import { useEffect, useState } from "react";

const useRatings = (classId) => {
  const [ratings, setRatings] = useState();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const mutateRatings = () => {
    fetch(`http://localhost:4000/api/v1/classes/${classId}/ratings`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setRatings(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  };

  useEffect(() => {
    mutateRatings();
  }, [classId]);

  return { ratings, error, isPending, mutateRatings };
};

export default useRatings;
