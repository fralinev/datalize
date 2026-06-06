import { Bell, Search } from 'lucide-react'

const navItems = ['Dashboard', 'Filings', 'Certificates', 'Reports', 'Settings']

export default function TopNav() {
  return (
    <header className="bg-gray-900 text-white h-18 flex items-center px-6 gap-6 shrink-0">
      <div className="bg-blue-600 rounded px-3 py-1 text-sm font-semibold tracking-wide">
        Orbital Health
      </div>
      <nav className="flex gap-1 flex-1">
        {navItems.map((item, i) => (
          <button
            key={item}
            className={`px-3 py-1.5 rounded text-sm transition-colors ${
              i === 0
                ? 'bg-gray-700 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <button className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-xs font-medium hover:bg-gray-400 transition-colors">
          JD
        </button>
        <button className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center text-xs font-medium hover:bg-gray-500 transition-colors">
          MR
        </button>
        <button className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-xs font-medium hover:bg-blue-400 transition-colors">
          SA
        </button>
      </div>
    </header>
  )
}
