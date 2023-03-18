export function SubmitButton({ social = false, disabled = false, className, children, ...restProps }) {

  let style = '';
  if (social) {
    style = "border-[#0C2340] text-black";
  } else if (disabled) {
    style = 'border-none bg-[#EAEAEA] text-[#8A8A8A]';
  } else {
    style = "bg-[#0C2340] text-white";
  }

  let combinedClass = `${style} ${className}`

  return (
    <button
      disabled={disabled}
      className={`border w-80 h-12 rounded-full ${combinedClass}`}
      type="submit"
      {...restProps}
    >
      {children}
    </button>
  )
}