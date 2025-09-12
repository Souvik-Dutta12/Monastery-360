import React, { useState, useMemo } from 'react'
import { sampleBookings } from '../data/tourData'

const Bookings = () => {
  const [bookings, setBookings] = useState(sampleBookings)
  const [query, setQuery] = useState('')
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', people: 1, tour: 'Rumtek Monastery' })

  const filtered = useMemo(() => {
    if (!query.trim()) return bookings
    return bookings.filter(b =>
      b.name.toLowerCase().includes(query.toLowerCase()) ||
      b.email.toLowerCase().includes(query.toLowerCase()) ||
      b.tour.toLowerCase().includes(query.toLowerCase()) ||
      b.id.toLowerCase().includes(query.toLowerCase())
    )
  }, [bookings, query])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = 'B-' + Math.floor(1000 + Math.random() * 9000)
    const newBooking = { id, ...form, status: 'Pending' }
    setBookings([newBooking, ...bookings])
    setForm({ name: '', email: '', date: '', time: '', people: 1, tour: 'Rumtek Monastery' })
  }

  const updateStatus = (id, status) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b))
  }

  return (
    <div className='w-full p-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='prata text-3xl font-bold text-red-800 mb-4'>Bookings</h2>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Form */}
          <form onSubmit={handleSubmit} className='lg:col-span-1 bg-amber-50 border border-amber-200 rounded-xl p-4'>
            <h3 className='prata text-xl text-red-900 mb-3'>Create Booking</h3>
            <div className='grid grid-cols-1 gap-3'>
              <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='Full name' />
              <input required type='email' value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='Email address' />
              <div className='grid grid-cols-2 gap-3'>
                <input required type='date' value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' />
                <input required type='time' value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' />
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <input min={1} type='number' value={form.people} onChange={e => setForm({ ...form, people: Number(e.target.value) })} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='People' />
                <select value={form.tour} onChange={e => setForm({ ...form, tour: e.target.value })} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900'>
                  <option>Rumtek Monastery</option>
                  <option>Pemayangtse Monastery</option>
                  <option>Tashiding Monastery</option>
                </select>
              </div>
              <button type='submit' className='mt-1 px-4 py-2 bg-red-900 hover:bg-red-800 text-amber-100 rounded-lg'>Add Booking</button>
            </div>
          </form>

          {/* List */}
          <div className='lg:col-span-2'>
            <div className='flex items-center justify-between mb-3'>
              <input value={query} onChange={e => setQuery(e.target.value)} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900 w-full max-w-sm' placeholder='Search by name, email, tour, or ID' />
            </div>
            <div className='overflow-x-auto rounded-xl border border-amber-200'>
              <table className='min-w-full bg-white text-left'>
                <thead className='bg-amber-100'>
                  <tr>
                    <th className='px-4 py-2 text-red-900'>ID</th>
                    <th className='px-4 py-2 text-red-900'>Name</th>
                    <th className='px-4 py-2 text-red-900'>Email</th>
                    <th className='px-4 py-2 text-red-900'>Tour</th>
                    <th className='px-4 py-2 text-red-900'>Date</th>
                    <th className='px-4 py-2 text-red-900'>Time</th>
                    <th className='px-4 py-2 text-red-900'>People</th>
                    <th className='px-4 py-2 text-red-900'>Status</th>
                    <th className='px-4 py-2 text-red-900'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(b => (
                    <tr key={b.id} className='border-t border-amber-200'>
                      <td className='px-4 py-2'>{b.id}</td>
                      <td className='px-4 py-2'>{b.name}</td>
                      <td className='px-4 py-2'>{b.email}</td>
                      <td className='px-4 py-2'>{b.tour}</td>
                      <td className='px-4 py-2'>{b.date}</td>
                      <td className='px-4 py-2'>{b.time}</td>
                      <td className='px-4 py-2'>{b.people}</td>
                      <td className='px-4 py-2'>
                        <span className={`px-2 py-1 rounded text-sm ${b.status === 'Confirmed' ? 'bg-green-100 text-green-700' : b.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-red-900'}`}>{b.status}</span>
                      </td>
                      <td className='px-4 py-2'>
                        <div className='flex gap-2'>
                          <button onClick={() => updateStatus(b.id, 'Confirmed')} className='px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 text-sm'>Confirm</button>
                          <button onClick={() => updateStatus(b.id, 'Cancelled')} className='px-3 py-1 rounded bg-red-700 text-white hover:bg-red-800 text-sm'>Cancel</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookings
