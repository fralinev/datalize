import { LayoutDashboard, FileText, ClipboardList, BarChart2, Users, Settings, ChevronRight } from 'lucide-react'

const sections = [
  {
    label: 'Main',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', active: true },
      { icon: FileText, label: 'All Filings' },
      { icon: ClipboardList, label: 'Pending Review' },
      { icon: BarChart2, label: 'Reports' },
    ],
  },
  {
    label: 'Admin',
    items: [
      { icon: Users, label: 'Users' },
      { icon: Settings, label: 'Settings' },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="w-48 bg-white border-r border-gray-200 shrink-0 flex flex-col py-4 gap-6">
      {sections.map((section) => (
        <div key={section.label}>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-2">
            {section.label}
          </p>
          <ul className="space-y-0.5">
            {section.items.map(({ icon: Icon, label, active }) => (
              <li key={label}>
                <button
                  className={`w-full flex items-center gap-2.5 px-4 py-2 text-sm transition-colors ${
                    active
                      ? 'bg-blue-50 text-blue-700 font-medium border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={15} className={active ? 'text-blue-600' : 'text-gray-400'} />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
