import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useClass = () => {
  const [gymClass, setGymClass] = useState();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/classes/${id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setGymClass(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [id]);

  return { gymClass, error, isPending };
};

export default useClass;
