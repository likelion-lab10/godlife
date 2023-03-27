import { useId } from 'react'

export function FileInput ({ children, type, name, ...restProps}) {
  const id = useId();
  let style = 'block bg-[#EAEAEA] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[10px] w-[120px] h-[110px] cursor-pointer'
  

  return (
    <>
      <label htmlFor={id} className={style}>{children}</label>
      <input style={{ display: "none" }} id={id} type='file' accept="image/*" name={name} {...restProps} />
    </>
  )
}

export default FileInput