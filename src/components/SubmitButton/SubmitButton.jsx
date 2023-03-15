import React from 'react'

export function SubmitButton({ text, social = false, mt }) {

  return (
    <button
      className={`mt-10 border w-80 h-12 rounded-full ${social ? 'border-[#0C2340] text-black' : 'bg-[#0C2340] text-white'}`}
      type="submit">
      {text}
    </button>
  )
}
