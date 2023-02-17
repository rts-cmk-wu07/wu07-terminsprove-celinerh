const handleRate = (userId, userToken, classId, rating) => {
  return fetch(`http://localhost:4000/api/v1/classes/${classId}/ratings`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${userToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      rating: rating,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("Could not fetch the data for that resource");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default handleRate;
