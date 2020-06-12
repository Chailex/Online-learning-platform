import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ course }) => {
    const imageurl = course
      ? `${API}/course/photo/${course._id}`
      : `https://study.com/cimages/course-image/statistics-course_121408_large.jpg`;
    return (
      <div className="rounded border border-success p-2">
          <img 
          alt="Course Photo" 
          className="object-cover object-center w-full h-full block" 
          src={imageurl} />

      </div>
    );
  };
  
  export default ImageHelper;
