import CarrerReportCard from "./components/CarrerReportCard"
import CarrerReport from "./components/CarrerReportCard"
import Nav from "./components/Nav"
import PopularplanCard from "./components/PopularplanCard"
import RecomendedPlanCard from "./components/RecomendedPlanCard"
import { FaWhatsapp } from "react-icons/fa";

import { FaRocketchat } from "react-icons/fa6";

function App() {

  return (


    <div className=" min-h-screen flex flex-col  justify-center items-center " >

      <Nav />

      <div className=" flex justify-center  m-5">
        <div className="flex flex-col  gap-3 text-center justify-center  ">
          <h1 className="text-3xl font-bold">SCIENTIFICALLY PLAN YOUR CAREER</h1>
          <h2>FOR SCHOOL/COLLEGE STUDENTS & WORKING PROFESSIONALS</h2>
        </div>
        <div className="flex align-center justify-center">
          <img src="/src/assets/image.png" alt="Description of image" />
        </div>
      </div>

      <div>

      </div>

      <div className="grid lg:grid sm:flex sm:flex-wrap m-10 lg:grid-cols-3 gap-3 justify-evenly">
        <CarrerReportCard />
        <RecomendedPlanCard />
        <PopularplanCard />
        <div className="fixed bottom-20  right-10 text-3xl">
          <FaWhatsapp />
          <FaRocketchat />
        </div>


      </div>


    </div>

  )
}

export default App
