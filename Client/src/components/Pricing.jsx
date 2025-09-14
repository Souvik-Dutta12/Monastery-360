import React from 'react'
import { pricingPlans } from '../data/tourData'

const Pricing = () => {
  const featuredIndex = 1

  return (
    <div className='w-full p-6 mt-10 md:mt-0'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='prata text-3xl font-bold text-red-800 mb-6'>Pricing</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl bg-white border ${
                idx === featuredIndex ? 'border-red-300 shadow-xl ring-1 ring-red-200' : 'border-amber-200 shadow-sm'
              }`}
            >
              {/* Badge */}
              {idx === featuredIndex && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-red-900 text-amber-100 shadow'>Most Popular</div>
              )}

              {/* Header */}
              <div className='p-6'>
                <h3 className='prata text-2xl font-bold text-red-900'>{plan.name}</h3>
                <div className='text-3xl font-extrabold mt-2 text-red-900'>{plan.price}</div>
                <p className='mt-1 text-sm text-red-900/70'>Billed monthly</p>
              </div>

              <div className='h-px bg-amber-200'></div>

              {/* Features */}
              <div className='p-6  min-h-60 flex flex-col item-center justify-between'>
                <ul className='space-y-2 text-red-900/80'>
                  {plan.features.map((f, i) => (
                    <li key={i} className='flex items-center gap-2'>
                      <i className='ri-check-line text-green-600'></i>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full px-4 py-2 rounded-lg cursor-pointer ${
                    idx === featuredIndex
                      ? 'bg-red-900 hover:bg-red-800 text-amber-100'
                      : 'border border-amber-300 text-red-900 hover:bg-amber-50'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info section below pricing */}
        <div className='mt-10 border-t border-amber-200 pt-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-amber-50 border border-amber-200 rounded-xl p-5'>
              <h4 className='prata text-xl text-red-900 mb-2'>What s included</h4>
              <ul className='text-red-900/80 space-y-1'>
                <li className='flex items-center gap-2'><i className='ri-checkbox-circle-line text-green-600'></i><span>Full access to VR tours</span></li>
                <li className='flex items-center gap-2'><i className='ri-checkbox-circle-line text-green-600'></i><span>AI cultural guidance</span></li>
                <li className='flex items-center gap-2'><i className='ri-checkbox-circle-line text-green-600'></i><span>Priority email support</span></li>
              </ul>
            </div>
            <div className='bg-white border border-amber-200 rounded-xl p-5'>
              <h4 className='prata text-xl text-red-900 mb-2'>Billing & Refunds</h4>
              <p className='text-red-900/80'>Upgrade or cancel anytime. Refunds available within 14 days for annual plans. Taxes may apply based on location.</p>
            </div>
            <div className='bg-white border border-amber-200 rounded-xl p-5'>
              <h4 className='prata text-xl text-red-900 mb-2'>Questions?</h4>
              <p className='text-red-900/80'>Need a custom plan for researchers, institutions, or tourism boards? Contact us for tailored access to archives and VR services.</p>
              <button className='mt-3 px-4 py-2 rounded-lg bg-red-900 hover:bg-red-800 text-amber-100'>Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
