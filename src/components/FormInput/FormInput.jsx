import { useId } from 'react'

export function FormInput({ label, srOnly = true, type = 'text', ...restProps }) {

  const id = useId();
  let style = '';

  switch (type) {
    case "checkbox":
      style = 'order-first mr-2';
      break;
    default:
      style = 'border-b border-black w-80 p-1 outline-none';
      break;
  }

  return (
    <>
      <label className={srOnly ? 'sr-only' : ''} id={id}>{label}</label>
      <input className={style} id={id} type={type} {...restProps} />
    </>
  )
}