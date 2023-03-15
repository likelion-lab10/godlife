import { useId } from 'react'

export function FormInput({ label, srOnly = false, ...restProps }) {

  const id = useId();

  return (
    <>
      <label className={srOnly ? 'sr-only' : ''} id={id}>{label}</label>
      <input className={`border-b border-black w-80 p-1 outline-none`} id={id} {...restProps} />
    </>
  )
}