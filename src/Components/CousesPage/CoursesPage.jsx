import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FaAngleDown, FaPlus } from "react-icons/fa6";
import axios from '../../../axiosBase';
import SideBar from '../SideBar/SideBar';
import RightSideBar from '../Right Side Bar/RightSideBar';
import SingleEvent from '../Single Event/SingleEvent';
import RightSideBarCourse from '../RightCourse/RightSideBarCourse.jsx';
import { useNavigate } from 'react-router-dom';
import { IoAddSharp } from 'react-icons/io5';


const CoursesPage = () => {
  const [departments, setDepartments] = useState([]);
  const [openDepartmentId, setOpenDepartmentId] = useState(null);
  const [departmentCourses, setDepartmentCourses] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCalendar, setSelectedCalendar] = useState(null);
  const [calander,setcalander]=useState(false)
  const [errmsg,seterrmsg]=useState("")
  const navigate=useNavigate()
  const [courseId,setcourseId]=useState("")
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [departmentName, setdepartmentName] = useState('');
  const [courseName,setcourseName]=useState('')
  const [formData,setformData]=useState({
      "title":"",
      "date":"",
      "remindertime":"",
      "calander":""
    })
  const handeleChange=(event)=>{
      setformData({
        ...formData,
        [event.target.name]:event.target.value
      })
    }
  const handleSubmit =async (event)=>{
    event.preventDefault();
    const titleValue=formData.title;
    const dateValue=formData.date;
    const remindertimeValue=formData.remindertime;
    const calanderValue=formData.calander;

    if (!titleValue || !dateValue || !remindertimeValue || !calanderValue){
      alert("please enter all fileds")
      return
    }
    const examDateISO = new Date(dateValue).toISOString();
    const reminderDateISO = new Date(remindertimeValue).toISOString();
    try {
      const {data}=await axios.post(`/calander/addcalander/${courseId}`,{
        topic:titleValue,
        date:examDateISO,
        remindertime:reminderDateISO,
        [calanderValue.toLowerCase().replace(" ", "")]: calanderValue
      })
      alert("Reminder set successfully!");
      setformData({
        title: "",
        date: "",
        remindertime: "",
        calendar: ""
      });
      setSelectedCourse(null)
      navigate('/home')
    } catch (error) {
      if(error.response){
        seterrmsg(error.response.data.message)
        console.log(error.response.data)
        // alert(error.response.data.msg)
      }
    }
  }
  
  // console.log(courseId)
  const handleSubmit1 = async(e) => {
    e.preventDefault();
    try {
      const {data}= await axios.post('course/adddepartment',{
        department_name:departmentName
      })
    } catch (error) {
      console.log(error)
    }
    navigate('/home')
    setdepartmentName('');
    setShowForm(false);
  };
  const handleSubmit2 = async(e) => {
    e.preventDefault();
    try {
      const {data}= await axios.post(`course/addcourse${openDepartmentId}`,{
        coursename:courseName
      })
    } catch (error) {
      console.log(error)
    }
    navigate('/home')
    setcourseName('');
    setShowForm(false);
  };


















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
        // console.log(data)
        setDepartmentCourses((prev) => ({ ...prev, [deptId]: data.courses }));
      } catch (error) {
        console.log(error);
      }
    }
  };
  // console.log("1",selectedCalendar)
  // console.log("2",selectedCourse)

  return (
    <>
      <Header />
      <div className='flex '>

        <div className="flex bg-gray-200">
          {/* Sidebar */}
          <div className="w-[300px] h-[100vh] bg-[#1F2937] md:mt-1.5 rounded-[5px] overflow-y-auto p-4 text-white">
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
                    <FaAngleDown onClick={()=>setSelectedCourse(null)} />
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
                            <div onClick={() => {setSelectedCourse(course.coursename);
                                  setcourseId(course._id)
                                }} className="group flex justify-between items-center">
                              <span>{course.coursename}</span>
                              <FaPlus
                                className="text-gray-700"
                              />
                            </div>
                            
                          </div>

                        ))
                      ) : (
                        <p className="text-sm italic text-gray-300">No courses found.</p>
                        
                      )}
                      {showForm1 && (
                        <form
                          onSubmit={handleSubmit2}
                          className="mt-4 w-full max-w-sm bg-white p-4 rounded shadow-md"
                        >
                          <input
                            type="text"
                            value={courseName}
                            onChange={(e) => setcourseName(e.target.value)}
                            placeholder="Enter course Name"
                            className="w-full rounded-[5px] border border-gray-300 bg-transparent text-black py-3 mb-3 placeholder-[#b3adad] placeholder:pl-2.5 placeholder:font-bold"
                            required
                          />
                          <button 
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                          >
                            Submit
                          </button>
                        </form>
                      )}
                      <div onClick={() => setShowForm1(!showForm1)} className=' cursor-pointer hover:bg-gray-400  flex justify-center items-center   md:w-[15vw] md:h-[50px] md:mt-[4vh] bg-gray-500 rounded-[6px]'>
                        <div><IoAddSharp className='text-2xl font-bold text-white' /></div>
                        <span>Add Course</span>
                      </div>
                    </div>
                  )}
                  
                </div>
                
              ))}
            </div>
              {showForm && (
          <form
            onSubmit={handleSubmit1}
            className="mt-4 w-full max-w-sm bg-white p-4 rounded shadow-md"
          >
            <input
              type="text"
              value={departmentName}
              onChange={(e) => setdepartmentName(e.target.value)}
              placeholder="Enter Department Name"
              className="w-full rounded-[5px] border border-gray-300 bg-transparent text-black py-3 mb-3 placeholder-[#b3adad] placeholder:pl-2.5 placeholder:font-bold"
              required
            />
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        )}
          <div onClick={() => setShowForm(!showForm)} className=' cursor-pointer  md:ml-5  flex justify-center hover:bg-gray-400 items-center   md:w-[15vw] md:h-[50px] md:mt-[4vh] bg-gray-500 rounded-[6px]'>
              <div><IoAddSharp className='text-2xl font-bold text-white' /></div>
              <span>Add Department</span></div>
          </div>

          {/* Main Content */}
          <div className='md:w-[58.5vw] md:mt-[10vh]'>
          {!selectedCourse && <SingleEvent/>}
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
                    
                  <form onSubmit={handleSubmit} className="flex flex-col md:gap-3 items-center justify-center">
                    <div>
                      <input
                        type="text"
                        name='title'
                        value={formData.title}
                        onChange={handeleChange}
                        placeholder="Enter the topic or tittle in very detail ..... "
                        className="md:w-[35vw] md:-ml-5 py-2 rounded-[5px] border border-gray-300 bg-transparent text-black placeholder-[#b3adad] placeholder:pl-2.5 placeholder:font-bold"
                        />
                    </div>
                    <div className='flex  gap-4'>

                      <div className=''>
                        <span>Date</span>
                        <input
                          type="date"
                          name='date'
                          value={formData.date}
                          onChange={handeleChange}
                          className='w-[15vw] h-10 border flex gap-[15vw] placeholder:bg-gray-300 justify-between border-black rounded   px-3 bg-white text-black'
                          />  
                      </div>
                      <div className=''>
                      
                        <span>Reminder Date</span>
                        <input
                          type="date"
                          name="remindertime"
                          value={formData.remindertime}
                          onChange={handeleChange}
                          className='w-[15vw] h-10 border flex justify-between border-black rounded px-3 bg-white  text-black'
                          />  
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-1 text-black font-medium text-center">Calendar Type</label>
                      <select
                         name="calander"
                        className="w-[18vw] h-10 px-3 border border-black rounded bg-gray-200 text-black"
                        value={formData.calander}
                        onChange={handeleChange}
                        defaultValue=""
                      >
                        <option value="" disabled>Select type</option>
                        <option value="Quiz">Quiz</option>
                        <option value="Assignment">Assignment</option>
                        <option value="Mid">Mid Exam</option>
                        <option value="Final">Final Exam</option>
                      </select>
                    </div>
                    <button type='submit'  className=' hover:ease-out hover:scale-110 transition-all delay-75  hover:border-2 flex justify-center items-center  md:w-[15vw] md:h-[50px] md:mt-[2vh] bg-[#1F2937] rounded-[6px]'>
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
        <RightSideBarCourse/>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
