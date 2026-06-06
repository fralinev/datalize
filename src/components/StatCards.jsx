import { FileText, Clock, CheckCircle, Edit3 } from 'lucide-react'
import { useState } from 'react'

const stats = [
  { label: 'Total Filings', value: '12,847', sub: '+3.2% this month', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Pending Review', value: '284', sub: '18 added today', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { label: 'Issued Today', value: '63', sub: 'Avg 58/day', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Amendments', value: '41', sub: '7 urgent', icon: Edit3, color: 'text-purple-600', bg: 'bg-purple-50' },
]

export default function StatCards() {
  const [highlighted, setHighlighted] = useState(null)

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map(({ label, value, sub, icon: Icon, color, bg }) => (
        <div
          key={label}
          onClick={() => setHighlighted(label)}
          className={`bg-white rounded-lg p-4 border ${
            highlighted === label ? 'border-blue-400 ring-2 ring-blue-200' : 'border-gray-200'
          } shadow-sm`}
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
            </div>
            <div className={`${bg} ${color} p-2 rounded-lg`}>
              <Icon size={18} />
            </div>
          </div>
          <p className="text-xs text-gray-500">{sub}</p>
        </div>
      ))}
    </div>
  )
}
