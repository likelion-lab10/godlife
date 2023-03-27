

function CertificateSubmitButton ({
  children,
  type = 'submit',
  name = '',
  ...restProps}) {
    let style = 'block mt-[433px] border w-80 h-12 rounded-full flex justify-center items-center border-none bg-[#0c2340] text-[#ffffff] ';
  return(
    <button type={type} className={style} {...restProps}>{children}</button>
  )
}

export default CertificateSubmitButton