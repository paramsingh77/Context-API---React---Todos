import './App.css'
import AddJob from './components/AddJob.jsx'
import Hero from './components/Hero.jsx'
import Home from './components/Home.jsx'
import HomeCards from './components/HomeCards.jsx'
import JobListings from './components/JobListings.jsx'
import Jobs from './components/Jobs.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
  {/* <p>nac</p> */}
  <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/add-job" component={AddJob} />
      </Routes>
      <Hero title='Find the Job' subtitle='Matching your skills'/>
      <HomeCards/>
      <JobListings/>
    </Router>

    </>
  )
}

export default App
