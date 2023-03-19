import { useId } from "react";

export default function TextInput({ children, name, ...restProps }) {

  const id = useId();

  return (
    <>
      <label className='sr-only' id={id}>{children}</label>
      <input
        className='border-b border-black w-80 p-1 outline-none'
        id={id}
        type='text'
        name={name}
        {...restProps}
      />
    </>
  )
}
