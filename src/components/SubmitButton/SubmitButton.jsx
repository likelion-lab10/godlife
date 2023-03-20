function SubmitButton({
  children,
  disabled = false,
  type = 'submit',
  name = '',
  ...restProps }) {

  let style = 'border w-80 h-12 rounded-full ';
  switch (name) {
    case 'social':
      style += 'border-[#0C2340] text-[#0C2340]';
      break;

    case 'mini':
      style = 'border w-16 rounded-full h-8 bg-black text-white text-sm font-normal';
      break;

    default:
      style += 'bg-[#0C2340] text-white';
      break;
  }

  if (disabled) style = 'border w-80 h-12 rounded-full border-none bg-[#EAEAEA] text-[#8A8A8A]';

  return (
    <button disabled={disabled} type={type} className={style} {...restProps}>{children}</button>
  )
}

export default SubmitButton;