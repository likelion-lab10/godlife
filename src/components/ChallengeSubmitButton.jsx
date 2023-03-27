function ChallengeSubmitButton({
  children,
  type = 'submit',
  name = '',
  ...restProps}) {
  let style = 'block mt-[63px] border w-80 h-12 rounded-full flex justify-center items-center border-none bg-[#EAEAEA] text-[#8A8A8A] ';
  return(
    <button type={type} className={style} {...restProps}>{children}</button>
  )
}

export default ChallengeSubmitButton