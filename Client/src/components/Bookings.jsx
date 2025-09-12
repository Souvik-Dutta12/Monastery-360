import React, { useMemo, useState } from 'react'
import { regionToBookings } from '../data/tourData'
import { useRegion } from '../context/RegionContext'

const Bookings = () => {
  const { selectedRegion } = useRegion()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTour, setSelectedTour] = useState(null) // { id,title,time,image,price,facilities, name, offer, originalPrice }
  const [people, setPeople] = useState(2)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [coupon, setCoupon] = useState('')
  const [fullName, setFullName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpiry, setCardExpiry] = useState('') // MM/YY
  const [cardCvv, setCardCvv] = useState('')
  const [notes, setNotes] = useState('')

  // Available Tours derived from existing region bookings data
  const availableTours = useMemo(() => {
    const list = regionToBookings?.[selectedRegion] || []
    return list.map((b, idx) => {
      const basePrice = b.price || 699 + (idx * 120)
      let offer = null
      let price = basePrice
      let originalPrice = null
      // Simple promotional logic for variety
      if (idx % 3 === 0) { offer = '10% OFF'; originalPrice = basePrice; price = Math.round(basePrice * 0.9) }
      else if (idx % 4 === 0) { offer = '₹200 OFF'; originalPrice = basePrice; price = Math.max(0, basePrice - 200) }

      return {
        id: b.id,
        title: b.tour,
        time: b.date,
        name: b.name,
        image: b.image || (
          idx % 3 === 0
            ? 'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1200&q=60'
            : idx % 3 === 1
            ? 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60'
            : 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=60'
        ),
        price,
        originalPrice,
        offer,
        facilities: b.facilities || ['Guided tour', 'Audio guide (EN/HI)', 'Photo spots', 'Assistance desk']
      }
    })
  }, [selectedRegion])

  const openModal = (tour) => {
    setSelectedTour(tour)
    setPeople(2)
    setDate('')
    setTime('')
    setCoupon('')
    setFullName('')
    setCardNumber('')
    setCardName('')
    setCardExpiry('')
    setCardCvv('')
    setNotes('')
    setModalOpen(true)
  }

  const discount = useMemo(() => {
    // Simple coupon: PASS10 => 10% off; FEST20 => 20% off
    if (!coupon) return 0
    if (coupon.trim().toUpperCase() === 'PASS10') return 0.1
    if (coupon.trim().toUpperCase() === 'FEST20') return 0.2
    return 0
  }, [coupon])

  const total = useMemo(() => {
    if (!selectedTour) return 0
    const base = selectedTour.price * Math.max(1, people)
    return Math.max(0, Math.round(base * (1 - discount)))
  }, [selectedTour, people, discount])

  const validCardNumber = (value) => /^[0-9]{13,19}$/.test(value.replace(/\s|-/g, ''))
  const validExpiry = (value) => /^(0[1-9]|1[0-2])\/(\d{2})$/.test(value)
  const validCvv = (value) => /^\d{3,4}$/.test(value)

  const handleConfirm = () => {
    if (!fullName.trim()) {
      alert('Please enter your full name.')
      return
    }
    if (!date || !time) {
      alert('Please select date and time.')
      return
    }
    if (!validCardNumber(cardNumber)) {
      alert('Enter a valid card number (13-19 digits).')
      return
    }
    if (!cardName.trim()) {
      alert('Enter cardholder name.')
      return
    }
    if (!validExpiry(cardExpiry)) {
      alert('Enter expiry in MM/YY format.')
      return
    }
    if (!validCvv(cardCvv)) {
      alert('Enter a valid CVV (3-4 digits).')
      return
    }

    // Here we could call API; for now, just close modal
    console.log({
      region: selectedRegion,
      tourId: selectedTour?.id,
      tourTitle: selectedTour?.title,
      date,
      time,
      people,
      coupon,
      total,
      customer: { fullName, notes },
      payment: { cardNumber, cardName, cardExpiry, cardCvv }
    })
    alert('Booking confirmed!')
    setModalOpen(false)
  }

  return (
    <div className='w-full p-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='prata text-3xl font-bold text-red-800 mb-3'>Bookings</h2>

        {/* Travel Pass Note */}
        <div className='mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-red-900'>
          <div className='flex items-start gap-3'>
            <i className='ri-pushpin-2-fill text-red-900 mt-0.5'></i>
            <div>
              <div className='font-semibold'>Travel Pass Accepted</div>
              <div className='text-red-900/80 text-sm'>We welcome state tourism travel passes. Facilities include guided scheduling, multi-language audio guidance, priority entry during festivals, and assistance desks at major monasteries.</div>
            </div>
          </div>
        </div>

        {/* Available Tours by Region (from regionToBookings) */}
        <div className='mb-2'>
          <h3 className='prata text-2xl text-red-900 mb-3'>Available Tours ({selectedRegion})</h3>
          {availableTours.length === 0 ? (
            <div className='rounded-xl border border-amber-200 bg-amber-50 p-6 text-red-900'>No tours available for this region.</div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {availableTours.map((t) => (
                <div key={t.id} className='rounded-2xl overflow-hidden border border-amber-200 bg-white shadow-sm flex flex-col'>
                  <div className='h-40 overflow-hidden relative'>
                    {t.offer && <span className='absolute top-2 left-2 text-[11px] px-2 py-1 rounded-md bg-red-900 text-amber-100'>{t.offer}</span>}
                    <img src={t.image} alt={t.title} className='w-full h-full object-cover' />
                  </div>
                  <div className='p-4 flex-1 flex flex-col'>
                    <div className='flex items-start justify-between gap-2'>
                      <div>
                        <h4 className='prata text-xl text-red-900'>{t.name}</h4>
                        <div className='text-red-900/70 text-sm'> {t.title}</div>
                      </div>
                      <div className='text-right'>
                        <span className='px-2 py-1 rounded-md bg-amber-100 text-red-900 text-sm'>₹{t.price}</span>
                        {t.originalPrice && <div className='text-[11px] text-red-900/60 line-through'>₹{t.originalPrice}</div>}
                      </div>
                    </div>
                    <div className='text-red-900/70 text-sm mt-1'>Date: {t.time}</div>
                    <ul className='mt-3 text-sm text-red-900/80 space-y-1'>
                      {t.facilities.map((f, i) => (
                        <li key={i} className='flex items-center gap-2'><i className='ri-check-line text-green-600'></i><span>{f}</span></li>
                      ))}
                    </ul>
                    <button onClick={() => openModal(t)} className='mt-4 px-4 py-2 rounded-lg bg-red-900 hover:bg-red-800 text-amber-100'>Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Booking Modal */}
        {modalOpen && selectedTour && (
          <div className='fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'>
            <div className='w-full max-w-3xl h-[90vh] rounded-2xl border border-amber-200 bg-amber-50 shadow-2xl overflow-hidden flex flex-col'>
              <div className='flex items-center justify-between px-5 py-4 border-b border-amber-200'>
                <div>
                  <h3 className='prata text-2xl text-red-900'>Confirm Booking</h3>
                  <div className='text-red-900/70 text-sm'>Review tour details, enter payment and confirm</div>
                </div>
                <button onClick={() => setModalOpen(false)} className='p-2 rounded hover:bg-amber-100 text-red-900' aria-label='Close'>
                  <i className='ri-close-line text-2xl'></i>
                </button>
              </div>

              <div className='flex-1 overflow-y-auto px-5 py-4'>
                <div className='rounded-xl overflow-hidden border border-amber-200 h-44'>
                  <img src={selectedTour.image} alt={selectedTour.title} className='w-full h-full object-cover' />
                </div>
                <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='bg-white rounded-xl p-4 border border-amber-200'>
                    {selectedTour.offer && <span className='inline-block mb-2 text-[11px] px-2 py-1 rounded-md bg-red-900 text-amber-100'>{selectedTour.offer}</span>}
                    <div className='prata text-xl text-red-900'>{selectedTour.name}</div>
                    <div className='text-red-900/80 text-sm'>Tour: {selectedTour.title}</div>
                    <div className='text-red-900/80 text-sm mt-1'>Date: {selectedTour.time}</div>
                    <div className='mt-2 text-red-900 font-semibold'>Price: ₹{selectedTour.price} / person</div>
                    {selectedTour.originalPrice && <div className='text-xs text-red-900/60 line-through'>₹{selectedTour.originalPrice}</div>}
                    <ul className='mt-3 text-sm text-red-900/80 space-y-1'>
                      {selectedTour.facilities.map((f, i) => (
                        <li key={i} className='flex items-center gap-2'><i className='ri-check-line text-green-600'></i><span>{f}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className='bg-white rounded-xl p-4 border border-amber-200'>
                    <div className='grid grid-cols-1 gap-3'>
                      <input type='text' value={fullName} onChange={e=>setFullName(e.target.value)} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='Full name*' />
                      <input type='text' inputMode='numeric' value={cardNumber} onChange={e=>setCardNumber(e.target.value)} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='Card number*' />
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input type='text' value={cardName} onChange={e=>setCardName(e.target.value)} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='Cardholder name*' />
                        <input type='text' value={cardExpiry} onChange={e=>setCardExpiry(e.target.value)} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='MM/YY*' />
                      </div>
                      <div className='grid grid-cols-2 gap-3'>
                        <input type='password' inputMode='numeric' value={cardCvv} onChange={e=>setCardCvv(e.target.value)} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='CVV*' />
                        <input value={coupon} onChange={e=>setCoupon(e.target.value)} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='Coupon code (PASS10 / FEST20)' />
                      </div>
                      <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={3} className='border border-amber-200 rounded-lg px-3 py-2 text-red-900' placeholder='Notes (optional)'></textarea>
                      <div className='mt-1 text-sm text-red-900/80'>Total: <span className='font-semibold text-red-900'>₹{total}</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='px-5 py-4 border-t border-amber-200 flex items-center justify-end gap-2'>
                <button onClick={() => setModalOpen(false)} className='px-4 py-2 rounded-lg border border-amber-200 text-red-900 hover:bg-amber-100'>Cancel</button>
                <button onClick={handleConfirm} className='px-5 py-2 rounded-lg bg-red-900 hover:bg-red-800 text-amber-100'>Confirm Booking</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bookings
