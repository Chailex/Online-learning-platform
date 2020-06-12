import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";

const Card = ({course}) =>{

    const [count, setCount] = useState(course.count);

    const cartTitle = course ? course.name : "A photo from pexels";
    const cartDescrption = course ? course.description : "Default description";
    const cartPrice = course ? course.price : "DEFAULT";

    return(
        <div>
            <a class="block relative h-48 rounded overflow-hidden">
            <ImageHelper course={course} />
            </a>
            <div class="">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{cartTitle}</h3>
                <h2 class="text-white title-font text-lg font-medium">{cartDescrption}</h2>
                <p class="mt-1">$ {cartPrice}</p>
            </div>
        </div>
    )
}

export default Card;

            