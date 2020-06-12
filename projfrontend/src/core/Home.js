import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Menu from "./Menu";
import Footer from "./Footer"
import { getAllCourses } from "../admin/helper/adminapicall";
import Card from "./Card";
import { Link } from "react-router-dom";

export const CourseContext = React.createContext()


export default function Home() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(false);

  const loadAllCourse = () => {
    getAllCourses().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setCourses(data);
      }
    });
  };

  useEffect(() => {
    loadAllCourse();
  }, []);

  return (
    <div>
     <Menu />

      {/* product section */}
      <div class="container row my-5 mx-auto pt-5">
        <div class="col-7 mt-5 text-white">
            <h1>Best instructors in our platform <br class="hidden lg:inline-block" />who can make you future ready</h1>
            <p className="mt-3">Join the online learning community. We provide technolgy, food, career, job, copywriting, english and a whole bunch of other Courses.
                Join today to start learning!</p>
            <button class="btn btn-info mt-3 rounded px-4">Join</button>
            <button class="btn btn-outline-info mt-3 ml-4 rounded">Learn More</button>
        </div>
        <div class="col-5 text-center">
            <img src="https://www.studytrainingcourses.com/blog/wp-content/uploads/2019/07/Using-laptop-online-study.jpg" width="100%"  alt="" />
        </div>
    </div>
    {/* actual products are rendered here */}
      <section class="text-gray-500 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">

            {courses.map((course, index) => {
              return(
                
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link to="/coursedesc">
                    <CourseContext.Provider value={course}>
                      <Card course={course} />
                    </CourseContext.Provider>
                    
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits of students */}
      <section class="text-gray-500 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Your benefits as a student</h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Online learning is a blue ocean. You can find ton of courses online but the quality is what matters the most. With over <b>30000+</b> courses 
              in our platform, we maintain the quality check so that you can gain best knowledge from your instructors. Do join us to learn more in the contact us section.
          </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">Certificate</h2>
                <p class="leading-relaxed text-base">At the end of your chosen course you will be issued certificate from Vigo only after successful completion of your end exam.</p>
                <a class="mt-3 text-teal-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">Discussion</h2>
                <p class="leading-relaxed text-base">You will access to disscussion forum where you will be able to ask query to your instructor related to the course.</p>
                <a class="mt-3 text-teal-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">Study Content</h2>
                <p class="leading-relaxed text-base">All study content will be made available by the instructor with each video content, you can refer to those contents to appear for the end exam.</p>
                <a class="mt-3 text-teal-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">Show More</button>
        </div>
      </section>


      {/* contact section */}
      <section className="container text-white my-5">
        <h3 className="text-center">Contact Vigo anytime, we always welcome you !</h3>
        <p className="text-center mt-4">If you have any query then you can reach us through providing your email id and name.<br/> We will try to get back to you as soon as possible.</p>
        <div className="justify-content-center">
        <form>
          <div class="d-flex justify-content-center">
            <div class=" my-4 ">
              <label class="sr-only " for="inlineFormInputName">Username</label>
              <input type="text" class="form-control bg-dark" id="inlineFormInputName" placeholder="Jane Doe"/>
            </div>
            <div class=" my-4 ml-2">
              <label class="sr-only" for="inlineFormInputGroupUsername">Email</label>
                <input type="text" class="form-control bg-dark" id="inlineFormInputGroupUsername" placeholder="Username"/>
            </div>
            <div class=" my-4 ml-2">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
        </div>
      </section>

      {/* <section class="text-gray-500 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Vigo anytime, we always welcome you !</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">If you have any query then you can reach us through providing your email id and name. We will try to get back to you as soon as possible.</p>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
            <input class="flex-grow w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-teal-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0" placeholder="Full Name" type="text" />
            <input class="flex-grow w-full bg-gray-800 rounded border border-gray-700 text-white focus:outline-none focus:border-teal-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0" placeholder="Email" type="email" />
            <button class="btn btn-block btn-info">Submit</button> <br />
          <button class="flex mx-auto mt-16 text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">Show More</button>

          </div>
        </div>
      </section> */}
     <Footer />
    </div>
  );
}

{/* <div className="row text-center">
        <h1 className="text-white">All of tshirts</h1>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} />
              </div>
            );
          })}
          <h1>Bitches</h1>
        </div>
      </div> */}