import {API} from "../../backend"

export const getAllCourses = () => {
    return fetch(`${API}/courses`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };