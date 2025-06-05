import React from 'react';

export default function BondCalculator() {
  return (
    <div className='bond-calculator'>
      <div className='container'>
        <div>
          <h1 className='bg-teal-700/60 rounded-4xl inline-block py-1.5 px-2.5 leading-none'>Bond Calculator</h1>
          <p className='mt-4 text-4xl md:text-6xl md:w-1/2'>See how much you'll pay for your bond</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
          <div className="col-span-2 sm:col-span-1">
            <form>
              <div>
                <label className='block text-sm mb-2'>Loan Amount</label>
                <input type="number" className='w-full p-2 rounded-lg border border-gray-300' placeholder='R1,000,000' />
              </div>
              <div>
                <label className='block text-sm mb-2'>Interest Rate %</label>
                <input type="range" min={0} max={30} className='w-full p-2 rounded-lg border border-gray-300' placeholder='11' />
              </div>
              <div>
                <label className='block text-sm mb-2'>Loan Term in Months</label>
                <input type="range" min='0' className='w-full p-2 rounded-lg border border-gray-300' placeholder='240' />
              </div>
              <div className='mt-4 bg-teal-700/60 rounded-4xl py-1.5 px-2.5 leading-none flex w-fit'>
                <label className='block text-sm'>Include initiation fee in your home loan?</label>
                <input type="checkbox" className='appearance-none w-4 h-4 border-2 border-blue-500 rounded-full bg-white' />
              </div>
            </form>
          </div>
          <div className="bg-teal-700/60 rounded-4xl text-center">02</div>
          <div className="bg-teal-950/60 rounded-4xl text-center">03</div>
          <p className='text-xs col-span-2 sm:col-start-2'>*Estimated figures based on average salary, hours per month spent on admin and broker fees</p>
        </div>
      </div>

    </div>
  );
}