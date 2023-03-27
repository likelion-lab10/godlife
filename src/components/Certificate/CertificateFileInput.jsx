import { useId, forwardRef } from 'react';

const CertificateFileInput = forwardRef (({ children, type, name, ...restProps},ref) => {

  const id = useId();
  let style = 'block bg-[#EAEAEA] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[10px] w-[334px] h-[142px] cursor-pointer'
  

  return (
    <div ref={ref}>
      <label htmlFor={id} className={style}>{children}</label>
      <input style={{ display: "none" }} id={id} type='file' accept="image/*" name={name} {...restProps} />
    </div>
  )
})

export default CertificateFileInput