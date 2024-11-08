import React,{useId} from 'react'//the whole idea behind useId is generate unique id

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectedCurrency="usd",
    amountDisabled=false,
    currencyDisabled=false,
    className="",
//by the use of useid basically when we go on curser on from(label) and click on that then on their input where you write input fluctuation start of a underbar
}) {
    const id=useId()
  return (
    <div className={`bg-white p3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">{label}</label>
        <input id={id} type="number" className="outline-none w-full bg-transparent py-1.5" placeholder="amount" disabled={amountDisabled} value={amount} onChange={(e)=>{onAmountChange && onAmountChange((Number)(e.target.value))

        }}/>
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
      <p className="text-black/40 mb-2 w-full">Currency type</p>
      <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectedCurrency} onChange={(e)=>{onCurrencyChange && onCurrencyChange(Number(e.target.value))

      }} disabled={currencyDisabled}>{currencyOption.map((currency)=>(<option key={currency} value={currency}>{currrency}</option>))}</select></div>
    </div>
  )
}

export default InputBox

