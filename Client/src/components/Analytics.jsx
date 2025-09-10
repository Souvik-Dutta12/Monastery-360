import React from 'react'
import Searchbar from './Searchbar'

const kpis = [
  { title: 'Total Page Views', value: '456,578', delta: '+24.3%', positive: true, series: [12,18,16,22,20,26,24,28,32,30,36] },
  { title: 'Unique Visitors', value: '128,904', delta: '+12.1%', positive: true, series: [6,9,8,11,10,13,12,15,14,18,20] },
  { title: 'Avg. Time on Page', value: '3m 42s', delta: '-3.2%', positive: false, series: [4,4.1,3.9,3.8,3.7,3.6,3.7,3.8,3.7,3.6,3.62] },
  { title: 'Bounce Rate', value: '38.5%', delta: '-1.8%', positive: true, series: [45,44,43,42,41,40,39,39,38,38,37.8] }
]

const topPages = [
  { path: '/monasteries/tashiding', views: 38210, avg: '2m 10s', bounce: '34%' },
  { path: '/tours/ancient-hall', views: 25491, avg: '3m 05s', bounce: '29%' },
  { path: '/archives/sacred-texts', views: 18840, avg: '4m 12s', bounce: '22%' },
  { path: '/events/festival-2025', views: 15400, avg: '1m 55s', bounce: '41%' }
]

const deviceSplit = [
  { label: 'Mobile', value: 62, color: 'bg-red-800' },
  { label: 'Desktop', value: 28, color: 'bg-amber-400' },
  { label: 'Tablet', value: 10, color: 'bg-amber-200' }
]

const Analytics = () => {
  return (
    <div className='w-full h-full'>
      <Searchbar />

      <div className='w-full px-4 sm:px-6 lg:px-8 py-4 prata'>
        {/* KPI cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
          {kpis.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>

        {/* Charts and tables */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
          {/* Trend line */}
          <div className='col-span-2 bg-white/80 border border-amber-800/20 rounded-xl p-4 shadow-sm'>
            <div className='flex items-baseline justify-between'>
              <h2 className='text-red-900 text-xl'>Traffic Trends</h2>
              <span className='text-xs text-red-800/80'>Last 30 days</span>
            </div>
            <div className='mt-3 h-48 sm:h-56'>
              <Sparkline data={[120, 160, 140, 220, 200, 260, 240, 280, 320, 300, 360, 420, 400, 460]} />
            </div>
          </div>

          {/* Device split */}
          <div className='bg-white/80 border border-amber-800/20 rounded-xl p-4 shadow-sm'>
            <h2 className='text-red-900 text-xl'>Device Breakdown</h2>
            <div className='mt-4 space-y-3'>
              {deviceSplit.map((d) => (
                <div key={d.label} className='flex items-center gap-3'>
                  <div className={`w-3 h-3 rounded ${d.color}`}></div>
                  <div className='flex-1 text-red-900 text-sm'>{d.label}</div>
                  <div className='w-2/3'>
                    <Progress percent={d.value} colorClass={d.color} />
                  </div>
                  <div className='w-10 text-right text-red-900 text-sm'>{d.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top pages table */}
        <div className='bg-white/80 border border-amber-800/20 rounded-xl p-4 shadow-sm mt-4'>
          <div className='flex items-baseline justify-between'>
            <h2 className='text-red-900 text-xl'>Top Pages</h2>
            <span className='text-xs text-red-800/80'>This month</span>
          </div>
          <div className='mt-3 overflow-x-auto'>
            <table className='min-w-full text-left'>
              <thead>
                <tr className='text-red-900/70 text-xs'>
                  <th className='py-2 pr-4'>Path</th>
                  <th className='py-2 pr-4'>Views</th>
                  <th className='py-2 pr-4'>Avg. Time</th>
                  <th className='py-2 pr-4'>Bounce</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((row) => (
                  <tr key={row.path} className='border-t border-amber-800/10 text-sm'>
                    <td className='py-2 pr-4 text-red-900'>{row.path}</td>
                    <td className='py-2 pr-4 text-red-900'>{row.views.toLocaleString()}</td>
                    <td className='py-2 pr-4 text-red-900'>{row.avg}</td>
                    <td className='py-2 pr-4 text-red-900'>{row.bounce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function KpiCard({ title, value, delta, positive, series }) {
  return (
    <div className='bg-amber-50 border border-amber-800/30 rounded-xl p-4 shadow-sm'>
      <div className='text-red-900/80 text-sm'>{title}</div>
      <div className='mt-1 flex items-center justify-between'>
        <div className='text-2xl sm:text-3xl text-red-900'>{value}</div>
        <span className={`text-xs px-2 py-1 rounded ${positive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{delta}</span>
      </div>
      <div className='mt-3 h-12'>
        <Sparkline data={series} stroke={positive ? '#065f46' : '#7f1d1d'} fill={positive ? '#d1fae5' : '#fee2e2'} />
      </div>
    </div>
  )
}

function Sparkline({ data, stroke = '#7f1d1d', fill = 'rgba(127,29,29,0.15)' }) {
  if (!data || data.length === 0) return null
  const width = 300
  const height = 48
  const max = Math.max(...data)
  const min = Math.min(...data)
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * (width - 8) + 4
    const y = height - ((d - min) / (max - min || 1)) * (height - 8) - 4
    return `${x},${y}`
  }).join(' ')
  // Build area path
  const firstX = 4
  const lastX = (width - 8) + 4
  const lastY = height - 4
  const firstY = height - 4
  const [firstPoint] = points.split(' ')
  const area = `M ${firstX},${firstY} L ${points} L ${lastX},${lastY} Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className='w-full h-full'>
      <path d={area} fill={fill} stroke='none' />
      <polyline points={points} fill='none' stroke={stroke} strokeWidth='2' strokeLinejoin='round' strokeLinecap='round' />
    </svg>
  )
}

function Progress({ percent, colorClass = 'bg-red-800' }) {
  return (
    <div className='w-full h-2 bg-amber-800/20 rounded'>
      <div className={`h-2 ${colorClass} rounded`} style={{ width: `${percent}%` }} />
    </div>
  )
}

export default Analytics
