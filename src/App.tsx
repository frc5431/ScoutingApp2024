// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import './App.css'
import Mainpage from './pages/Mainpage';
import Auton from './pages/Auton';
import Match from './pages/Match';
import End from './pages/End';
function App() {
  
  const [currentPage, setPage] = useState("Mainpage");
  const [mainpageData, setMainpageData] = useState<{[key:string]: any}>({});
  const [autonData, setAutonData] = useState<{[key:string]: any}>({});
  const [matchData, setMatchData] = useState<{[key:string]: any}>({});
  const [endData, setEndData] = useState<{[key:string]: any}>({});
  const [mainColorButton, setMainColorButton] = useState("#242424");
  const [autonColorButton, setAutonColorButton] = useState("#242424");
  const [matchColorButton, setMatchColorButton] = useState("#242424");
  const [endColorButton, setEndColorButton] = useState("#242424");
  const [filtersettings] = useState("brightness(1.2) contrast(120%) saturate(150%)");
  

  useEffect(() => {
    // Change the CSS variable based on the current page
    switch (currentPage) {
      case "Mainpage":
        document.documentElement.style.setProperty('--background-color', '#464362');
        setMainColorButton("#464362");
        setAutonColorButton("#242424");
        setMatchColorButton("#242424");
        setEndColorButton("#242424");
        break;
      case "Auton":
        document.documentElement.style.setProperty('--background-color', '#518071');
        setMainColorButton("#242424");
        setAutonColorButton("#518071");
        setMatchColorButton("#242424");
        setEndColorButton("#242424");
        break;
      case "Match":
        document.documentElement.style.setProperty('--background-color', '#158487');
        setMainColorButton("#242424");
        setAutonColorButton("#242424");
        setMatchColorButton("#158487");
        setEndColorButton("#242424");
        break;
      case "End":
        document.documentElement.style.setProperty('--background-color', '#3f6d89');
        setMainColorButton("#242424");
        setAutonColorButton("#242424");
        setMatchColorButton("#242424");
        setEndColorButton("#3f6d89");
        break;
      default:
        document.documentElement.style.setProperty('--background-color', '#242424');
    }
  }, [currentPage]);

  return (
    <div className='grid'>
      
      <h1 id='title' className="title">NTX Scouting App 2024</h1>

      <button className='tabs' style={{backgroundColor:mainColorButton, filter:filtersettings}}
       onClick={() => {setPage("Mainpage"); }}>Main Page</button>

      <button className='tabs' style={{backgroundColor:autonColorButton, filter:filtersettings}}
       onClick={() => {setPage("Auton")}}>Auton</button>

      <button className='tabs' style={{backgroundColor:matchColorButton, filter:filtersettings}}
       onClick={() => {setPage("Match")}}>Match</button>

      <button className='tabs' style={{backgroundColor:endColorButton, filter:filtersettings}} 
      onClick={() => {setPage("End")}}>End</button>


      {currentPage == "Mainpage" && (

        <div className='mainContent'>
          <Mainpage mainPageData={mainpageData} setMainPageData={setMainpageData}></Mainpage>
        </div>
      )}
      

      {currentPage == "Auton" && (

        <div className='mainContent'>
          <Auton autonData={autonData} setAutonData={setAutonData}></Auton>
        </div>
      )}

      {currentPage == "Match" && (

        <div className='mainContent'>
          <Match matchData={matchData} setMatchData={setMatchData}></Match>
        </div>
      )}
      {currentPage == "End" && (
        
        <div className='mainContent'>
          <End mainpageData={mainpageData} autonData={autonData} matchData={matchData} endData={endData} setEndData={setEndData}></End>
        </div>
        
      )}
      </div>
      
    
  )
  
}

export default App

// Failed thing that probably wont get uesd
// export function getData(type: string) {
//   switch (type) {
//     case "Mainpage":
//         return mainpageData;
//       case "Auton":
//         return autonData;
//       case "Match":
//         return matchData
//       case "End":
//         return endData
//       default:
//         console.log("SKILL ISSUE");
//         return null;
//   }
// }