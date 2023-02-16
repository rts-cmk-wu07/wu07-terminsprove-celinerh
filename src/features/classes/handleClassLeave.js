const handleClassLeave = (userId, userToken, classId) => {
  fetch(`http://localhost:4000/api/v1/users/${userId}/classes/${classId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
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

export default handleClassLeave;
