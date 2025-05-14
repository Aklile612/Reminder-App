import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FaAngleDown, FaPlus } from "react-icons/fa6";
import axios from '../../../axiosBase';
import SideBar from '../SideBar/SideBar';
import RightSideBar from '../Right Side Bar/RightSideBar';

const CoursesPage = () => {
  const [departments, setDepartments] = useState([]);
  const [openDepartmentId, setOpenDepartmentId] = useState(null);
  const [departmentCourses, setDepartmentCourses] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCalendar, setSelectedCalendar] = useState(null);
  const [calander,setcalander]=useState(false)

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
          {selectedCourse && (
            <div className="flex-1 flex justify-center items-center">
              <div className="space-y-4 flex-col">
                <div className='md:w-[300px] md:h-[8vh] bg-[#ffffff]'>
                  <h3 className="text-center text-black font-bold text-3xl font-serif">
                    {selectedCourse}
                  </h3>
                </div>
                <div className='md:w-[400px] md:h-[20px] bg-red-400'>

                <p className="text-black text-center">
                  What is the topic and the title of the portion?
                </p>
                <form className="flex justify-center">
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="w-full px-4 py-2 rounded border border-black bg-transparent text-black placeholder-black"
                    />
                </form>
                <div className="text-black text-center">
                  Due Date?
                </div>
                </div>
              </div>
            </div>
          )}
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
