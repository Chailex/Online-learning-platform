import { API } from "../../backend";

export const getAllCourse = () => {
    return fetch(`${API}/courses`, {method: "GET"})
    .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
}

export const getCourse = courseId => {
    return fetch(`${API}/course/${courseId}`, {
        method: "GET",
    })
}