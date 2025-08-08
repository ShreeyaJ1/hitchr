import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../Layout.js'
import Dashboard from '../Pages/Dashboard.jsx'
import Map from '../Pages/Maps.jsx'
import Trails from '../Pages/Trails.jsx'
import Rewards from '../Pages/Rewards.jsx'
import Stories from '../Pages/Stories.jsx'
import Leaderboard from '../Pages/Leaderboard.jsx'
import Profile from '../Pages/Profile.jsx'
import Quests from '../Pages/Quest.jsx'
import RTOHunt from '../Pages/RTOHunt.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/map" element={<Layout><Map /></Layout>} />
        <Route path="/trails" element={<Layout><Trails /></Layout>} />
        <Route path="/rewards" element={<Layout><Rewards /></Layout>} />
        <Route path="/stories" element={<Layout><Stories /></Layout>} />
        <Route path="/leaderboard" element={<Layout><Leaderboard /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/quests" element={<Layout><Quests /></Layout>} />
        <Route path="/rto-hunt" element={<Layout><RTOHunt /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App