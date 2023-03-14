import goBack from '../assets/go-back.svg'

function BackButton(){
  return( 
    <img className='absolute top-[80px]' src={goBack} alt='뒤로가기 이미지' />
  )
}

export default BackButton