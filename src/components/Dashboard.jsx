import StatCards from './StatCards'
import Charts from './Charts'
import FilingsTable from './FilingsTable'
import { Plus } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-5 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Filings Dashboard</h1>
          <p className="text-sm text-gray-500 mt-0.5">Vital records management — Travis County</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            Export Report
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <Plus size={15} /> New Filing
          </button>
        </div>
      </div>

      <StatCards />
      <Charts />
      <FilingsTable />
    </div>
  )
}
