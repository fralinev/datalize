import { useState } from 'react'
import { Search, Filter, Download, ChevronLeft, ChevronRight } from 'lucide-react'

const TYPE_STYLES = {
  'Birth cert': 'bg-blue-100 text-blue-700',
  'Death cert': 'bg-red-100 text-red-600',
  'Amendment': 'bg-orange-100 text-orange-700',
}

const STATUS_STYLES = {
  Pending: 'bg-yellow-100 text-yellow-700',
  Urgent: 'bg-red-100 text-red-600',
  Issued: 'bg-green-100 text-green-700',
}

const FILINGS = [
  { id: 1, name: 'Eleanor Whitfield', ref: 'EVT-2024-00841', type: 'Birth cert', jurisdiction: 'Travis County', date: 'Jun 3, 2026', status: 'Pending' },
  { id: 2, name: 'Marcus Rodriguez', ref: 'EVT-2024-00842', type: 'Death cert', jurisdiction: 'Harris County', date: 'Jun 3, 2026', status: 'Urgent' },
  { id: 3, name: 'Priya Nambiar', ref: 'EVT-2024-00843', type: 'Birth cert', jurisdiction: 'Dallas County', date: 'Jun 4, 2026', status: 'Issued' },
  { id: 4, name: 'James Okafor', ref: 'EVT-2024-00844', type: 'Amendment', jurisdiction: 'Bexar County', date: 'Jun 4, 2026', status: 'Pending' },
  { id: 5, name: 'Linda Chen', ref: 'EVT-2024-00845', type: 'Death cert', jurisdiction: 'Tarrant County', date: 'Jun 5, 2026', status: 'Issued' },
  { id: 6, name: 'Samuel Torres', ref: 'EVT-2024-00846', type: 'Birth cert', jurisdiction: 'Travis County', date: 'Jun 5, 2026', status: 'Pending' },
  { id: 7, name: 'Amara Diallo', ref: 'EVT-2024-00847', type: 'Amendment', jurisdiction: 'El Paso County', date: 'Jun 6, 2026', status: 'Urgent' },
]

const PAGE_SIZE = 5

export default function FilingsTable() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState([])

  const filtered = FILINGS.filter((f) => {
    const matchSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.ref.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || f.status === statusFilter
    return matchSearch && matchStatus
  })

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const toggleSelect = (id) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  const toggleAll = () =>
    setSelected(selected.length === paginated.length ? [] : paginated.map((f) => f.id))

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2 flex-1 max-w-sm">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-2.5 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search filings..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1) }}
              className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}
            className="text-sm border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-600"
          >
            <option>All</option>
            <option>Pending</option>
            <option>Urgent</option>
            <option>Issued</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors">
            <Filter size={13} /> Filter
          </button>
          <button className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors">
            <Download size={13} /> Export
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
            <th className="pl-4 py-2 w-8">
              <input
                type="checkbox"
                checked={selected.length === paginated.length && paginated.length > 0}
                onChange={toggleAll}
                className="accent-blue-600"
              />
            </th>
            <th className="text-left py-2 px-3 font-medium">Name / Ref</th>
            <th className="text-left py-2 px-3 font-medium">Type</th>
            <th className="text-left py-2 px-3 font-medium">Jurisdiction</th>
            <th className="text-left py-2 px-3 font-medium">Date Filed</th>
            <th className="text-right py-2 px-4 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {paginated.map((filing) => (
            <tr
              key={filing.id}
              className={`hover:bg-gray-50 transition-colors ${
                selected.includes(filing.id) ? 'bg-blue-50' : ''
              }`}
            >
              <td className="pl-4 py-3">
                <input
                  type="checkbox"
                  checked={selected.includes(filing.id)}
                  onChange={() => toggleSelect(filing.id)}
                  className="accent-blue-600"
                />
              </td>
              <td className="py-3 px-3">
                <p className="font-medium text-gray-800">{filing.name}</p>
                <p className="text-xs text-gray-400">{filing.ref}</p>
              </td>
              <td className="py-3 px-3">
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${TYPE_STYLES[filing.type]}`}>
                  {filing.type}
                </span>
              </td>
              <td className="py-3 px-3 text-gray-600">{filing.jurisdiction}</td>
              <td className="py-3 px-3 text-gray-600">{filing.date}</td>
              <td className="py-3 px-4 text-right">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_STYLES[filing.status]}`}>
                  {filing.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} filings
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={15} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                p === page ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
