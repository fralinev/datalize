import { useState } from 'react'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import './index.css'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}
