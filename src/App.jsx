import './App.css'
import Navbar from './components/Navbar/Navbar'
import Priceoptions from './components/Priceoptions/Priceoptions'
import LineChartadd from './components/LineChart/LineChart'
// import DaisyNav from './components/daisyNav/DaisyNav'

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-orange-500 text-white text-center p-4 font-extrabold'>Gym</h1>
      <Priceoptions></Priceoptions>
      <LineChartadd></LineChartadd>
     
    </>
  )
}

export default App
