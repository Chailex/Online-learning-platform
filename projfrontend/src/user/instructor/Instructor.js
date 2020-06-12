import React from 'react'

const Instructor = () =>{
    return(
        <div>
            <h2>Courses</h2>
            <div>
                <button className="float-left btn btn-warning">See all your courses</button>
                <button className="float-right btn btn-danger">New course</button>
            </div>
        </div>
    )
}

export default Instructor;