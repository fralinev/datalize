import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts'

const timeData = [
  { month: 'Jan', filings: 980 },
  { month: 'Feb', filings: 1120 },
  { month: 'Mar', filings: 1050 },
  { month: 'Apr', filings: 1340 },
  { month: 'May', filings: 1210 },
  { month: 'Jun', filings: 1480 },
  { month: 'Jul', filings: 1390 },
  { month: 'Aug', filings: 1620 },
]

const donutData = [
  { name: 'Birth Cert', value: 45, color: '#93c5fd' },
  { name: 'Death Cert', value: 30, color: '#fca5a5' },
  { name: 'Amendment', value: 15, color: '#fcd34d' },
  { name: 'Other', value: 10, color: '#d1d5db' },
]

export default function Charts() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-3 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
        <p className="text-sm font-semibold text-gray-700 mb-4">Filings Over Time</p>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={timeData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="fillFilings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 6 }} />
            <Area type="monotone" dataKey="filings" stroke="#3b82f6" strokeWidth={2} fill="url(#fillFilings)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">Type Breakdown</p>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={donutData}
              cx="45%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {donutData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconType="circle"
              iconSize={8}
              formatter={(value) => <span style={{ fontSize: 11 }}>{value}</span>}
            />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 6 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
