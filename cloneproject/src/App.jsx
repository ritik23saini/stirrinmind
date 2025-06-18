import CarrerReportCard from "./components/CarrerReportCard"
import CarrerReport from "./components/CarrerReportCard"
import Nav from "./components/Nav"
import PopularplanCard from "./components/PopularplanCard"
import RecomendedPlanCard from "./components/RecomendedPlanCard"


function App() {

  return (


    <div className=" min-h-screen flex flex-col  " >
      <Nav />
      <div className=" flex justify-center  m-5">
        <div className="flex flex-col text-center justify-center  ">
          <h1>SCIENTIFICALLY PLAN YOUR CAREER</h1>
          <h2>FOR SCHOOL/COLLEGE STUDENTS & WORKING PROFESSIONALS</h2>
        </div>
        <div className="flex align-center justify-center">
          <img src="/src/assets/image.jpg" alt="Description of image" />
        </div>
      </div>


      <div className="grid lg:grid sm:flex sm:flex-wrap lg:grid-cols-3 gap-3 justify-evenly">
        <CarrerReportCard />
        <RecomendedPlanCard />
        <PopularplanCard />
      </div>


    </div>

  )
}

export default App
