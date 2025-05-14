import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FaAngleDown, FaPlus } from "react-icons/fa6";
import axios from '../../../axiosBase';

const CoursesPage = () => {
  const [departments, setDepartments] = useState([]);
  const [openDepartmentId, setOpenDepartmentId] = useState(null);
  const [departmentCourses, setDepartmentCourses] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCalendar, setSelectedCalendar] = useState(null);

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

  return (
    <>
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[300px] h-[100vh] bg-[#221f1fe3] overflow-y-auto p-4 text-white">
          <div className="flex flex-col gap-6">
            <div className="text-center bg-gray-300 text-black py-2 rounded-2xl font-bold">
              Course Names
            </div>

            {departments.map((department) => (
              <div key={department._id}>
                {/* Department Header */}
                <div
                  onClick={() => handleDepartmentClick(department._id)}
                  className="flex justify-between items-center bg-gray-500 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-600"
                >
                  <span className="font-semibold">{department.name}</span>
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
                          onClick={() => setSelectedCourse(course.name)}
                        >
                          <div className="flex justify-between items-center">
                            <span>{course.coursename}</span>
                            <FaPlus
                              onClick={() => {
                                setSelectedCalendar({ course: course.coursename });
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
        {selectedCourse && selectedCalendar && (
          <div className="flex-1 flex justify-center items-center">
            <div className="w-[400px] bg-[#a06767] rounded-lg p-6 shadow-lg space-y-4">
              <h3 className="text-center text-white font-bold text-xl">
                {selectedCourse}
              </h3>
              <p className="text-white text-center">
                What is the topic and the title of the portion?
              </p>
              <form className="flex justify-center">
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full px-4 py-2 rounded border border-white bg-transparent text-white placeholder-white"
                />
              </form>
              <div className="text-white text-center">
                Due Date?
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
