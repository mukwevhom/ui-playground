import React from 'react';

export default function BondCalculator() {
  return (
    <div className='bond-calculator'>
      <div className='container'>
        <div>
          <h1 className='bg-teal-700/60 rounded-4xl inline-block py-1.5 px-2.5 leading-none'>Bond Calculator</h1>
          <p className='mt-4 text-4xl md:text-6xl md:w-1/2'>See how much you'll pay for your bond</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12 sm:mt-24">
          <div className="col-span-2 sm:col-span-1">
            <form>
              <div>
                <label className='block text-sm mb-2' htmlFor='loanAmount'>Loan Amount</label>
                <input type="number" id='loanAmount' name='loanAmount' className='w-full text-4xl p-b border-b border-gray-300' placeholder='R1,000,000' />
              </div>
              <div className='mt-4'>
                <label className='block text-sm mb-2' htmlFor='interestRate'>Interest Rate %</label>
                <input type="range" id='interestRate' name='interestRate' min={0} max={30} className='w-full' placeholder='11' />
              </div>
              <div className='mt-4'>
                <label className='block text-sm mb-2' htmlFor='loanTerm'>Loan Term in Months</label>
                <input type="range" id='loanTerm' name='loanTerm' min='0'  className='w-full' placeholder='240' />
              </div>
              <div className='mt-4 bg-teal-700/60 rounded-4xl py-1.5 px-2.5 leading-none flex w-fit gap-3'>
                <label className='block text-sm leading-none' htmlFor='includeInitiation'>Include initiation fee in your home loan?</label>
                <input type="checkbox" id="includeInitiation" name="includeInitiation" className=' w-4 h-4 border-2 border-blue-500 rounded-full bg-white' />
              </div>
              <div className='mt-4'>
                <label className='block text-sm mb-2' htmlFor='additionalPayment'>Additional Payment</label>
                <input type="number" id='additionalPayment' name='addionalPayment' className='w-full text-4xl p-b border-b focus:border-b border-gray-300' placeholder='R1,000,000' />
              </div>
            </form>
          </div>
          <div className="bg-teal-700/60 rounded-4xl p-2 sm:p-5 flex flex-col">
            <div className='font-semibold text-xl sm:text-4xl flex-auto'>
              <span className='font-light text-sm'>R</span>50000.25<span className='text-sm opacity-60'>/month</span>
            </div>
            <div>
              <div className='leading-none'>R3000<span className='block text-xs font-light opacity-50'>Repayments</span></div>
              <div className='leading-none mt-2'>R69<span className='block text-xs font-light opacity-50'>Service Fees</span></div>
              <div className='leading-none mt-2'>R40000<span className='block text-xs font-light opacity-50'>Total Interest</span></div>
              <div className='leading-none mt-2'>R69<span className='block text-xs font-light opacity-50'>Total Service Fee</span></div>
            </div>
          </div>
          <div className="bg-teal-700/60 rounded-4xl p-2 sm:p-5 flex flex-col">
            <div className='font-bold text-xl sm:text-4xl flex-auto pb-4'>
              <span className='text-sm font-light'>R</span>50000.25<span className='font-light text-sm opacity-60'>/month</span>
            </div>
            <div>
              <div className='leading-none'>R3000<span className='block text-xs font-light opacity-50'>Repayments</span></div>
              <div className='leading-none mt-2'>R3000<span className='block text-xs font-light opacity-50'>Additional Repayments</span></div>
              <div className='leading-none mt-2'>R69<span className='block text-xs font-light opacity-50'>Service Fees</span></div>
              <div className='leading-none mt-2'>R40000<span className='block text-xs font-light opacity-50'>Total Interest</span></div>
              <div className='leading-none mt-2'>R69<span className='block text-xs font-light opacity-50'>Total Service Fee</span></div>
              <div className='leading-none mt-2'>R69<span className='block text-xs font-light opacity-50'>Total Saved</span></div>
            </div>
          </div>
          <p className='text-xs col-span-2 sm:col-start-2'>*Estimated figures based on average salary, hours per month spent on admin and broker fees</p>
        </div>
      </div>

    </div>
  );
}