import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FaAngleDown, FaPlus } from "react-icons/fa6";
import axios from '../../../axiosBase';
import SideBar from '../SideBar/SideBar';
import RightSideBar from '../Right Side Bar/RightSideBar';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  const [departments, setDepartments] = useState([]);
  const [openDepartmentId, setOpenDepartmentId] = useState(null);
  const [departmentCourses, setDepartmentCourses] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCalendar, setSelectedCalendar] = useState(null);
  const [calander,setcalander]=useState(false)
  const [formData,setformData]=useState({
      "username":"",
      "email":"",
      "password":""
    })

  const academicTimes = [
    { name: "Quiz" },
    { name: "Assignment" },
    { name: "Mid Exam" },
    { name: "Final Exam" },
  ];

  useEffect(() => {
    const getDepartments = async () => {
      try {
        const { data } = await axios.get('/course/finddepartment');
        setDepartments(data.department);
      } catch (error) {
        console.log(error);
      }
    };
    getDepartments();
  }, []);

  const handleDepartmentClick = async (deptId) => {
    const isOpen = openDepartmentId === deptId;
    setOpenDepartmentId(isOpen ? null : deptId);

    if (!departmentCourses[deptId]) {
      try {
        const { data } = await axios.get(`/course/findcourse/${deptId}`);
        console.log(data)
        setDepartmentCourses((prev) => ({ ...prev, [deptId]: data.courses }));
      } catch (error) {
        console.log(error);
      }
    }
  };
  // console.log("1",selectedCalendar)
  console.log("2",selectedCourse)

  return (
    <>
      <Header />
      <div className='flex '>

        <div className="flex bg-gray-200">
          {/* Sidebar */}
          <div className="w-[300px] h-[100vh] bg-[#221f1fe3] overflow-y-auto p-4 text-white">
            <div className="flex flex-col gap-6">
              <div className="text-center bg-gray-300 text-black py-2 rounded-2xl font-bold">
                Course Names
              </div>

              {departments.map((department,index) => (
                <div key={index}>
                  {/* Department Header */}
                  <div
                    onClick={() => handleDepartmentClick(department._id)}
                    className="flex justify-between items-center bg-gray-500 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-600"
                  >
                    <span className="font-semibold font-serif">{department.name}</span>
                    <FaAngleDown />
                  </div>

                  {/* Courses under the department */}
                  {openDepartmentId === department._id && (
                    <div className="ml-4 mt-2 space-y-2">
                      {departmentCourses[department._id]?.length > 0 ? (
                        departmentCourses[department._id].map((course) => (
                          <div
                            key={course._id}
                            className="bg-white text-black px-3 py-1 rounded cursor-pointer hover:bg-gray-100"
                            onClick={() =>{} }
                          >
                            <div className="flex justify-between items-center">
                              <span>{course.coursename}</span>
                              <FaPlus
                                onClick={() => {setSelectedCourse(course.coursename)
                                }}
                                className="text-gray-700"
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm italic text-gray-300">No courses found.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className='md:w-[58.5vw] md:mt-[10vh]'>
            {selectedCourse && (
              <div className="flex-1 flex justify-center items-center">
                <div className="space-y-4 flex-col">
                  <div className='md:w-[40vw] md:h-[10vh] bg-[#ffffff] rounded-[10px] flex items-center '>
                    <h3 className=" md:ml-3 text-center text-black font-bold text-3xl font-serif">
                      {selectedCourse}
                    </h3>
                  </div>
                  <div className='md:w-[40vw] md:h-[65vh] md:py-4 flex flex-col gap-3 bg-[#ffffff] rounded-[10px]'>
                    <div className='flex flex-col'>
                      <span className='text-black md:ml-5 font-normal  text-[24px]'>Create Reminder</span>
                    </div>
                      <span className="text-black text-[20px] md:ml-6 ">
                        Topic
                      </span>
                    
                  <form className="flex flex-col md:gap-3 items-center justify-center">
                    <div>
                      <input
                        type="text"
                        placeholder="Enter topic or tittle"
                        className="md:w-[35vw] md:-ml-5 py-2 rounded-[5px] border border-gray-300 bg-transparent text-black placeholder-[#b3adad] placeholder:pl-2.5 placeholder:font-bold"
                        />
                    </div>
                    <div className='flex  gap-4'>

                      <div className=''>
                        <span>Time</span>
                        <input
                          type="time"
                          className='w-[10vw] h-10 border flex gap-[15vw] placeholder:bg-gray-300 justify-between border-black rounded   px-3 bg-white text-black'
                          />  
                      </div>
                      <div className=''>
                      
                        <span>Date</span>
                        <input
                          type="date"
                          className='w-[15vw] h-10 border flex justify-between border-black rounded px-3 bg-white  text-black'
                          />  
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-1 text-black font-medium text-center">Calendar Type</label>
                      <select
                        className="w-[18vw] h-10 px-3 border border-black rounded bg-gray-200 text-black"
                        defaultValue=""
                      >
                        <option value="" disabled>Select type</option>
                        <option value="Quiz">Quiz</option>
                        <option value="Assignment">Assignment</option>
                        <option value="Mid Exam">Mid Exam</option>
                        <option value="Final Exam">Final Exam</option>
                      </select>
                    </div>
                    <button  className=' hover:ease-out hover:scale-110 transition-all delay-75  hover:border-2 flex justify-center items-center  md:w-[15vw] md:h-[50px] md:mt-[2vh] bg-[#1F2937] rounded-[6px]'>
                        <span className='text-white font-bold text-sm'>Set Reminder</span>
                    </button>

                  </form>
                  
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      <div>
        <RightSideBar/>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
