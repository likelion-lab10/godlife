import { useId } from "react";

export function TextInput({ children, type = 'text', name, ...restProps }) {

  const id = useId();

  return (
    <>
      <label className='sr-only' id={id}>{children}</label>
      <input
        className='border-b border-black w-80 p-1 outline-none'
        id={id}
        type={type}
        name={name}
        {...restProps}
      />
    </>
  )
}
