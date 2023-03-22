import { useState } from 'react'

function Tag(){
  const [tagItem, setTagItem] = useState('')
  const [tagList, setTagList] = useState([])
  const onKeyPress = e => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem()
    }
  }

  const submitTagItem = () => {
    let updatedTagList = [...tagList]
    updatedTagList.push(tagItem)
    setTagList(updatedTagList)
    setTagItem('')
  }

  const deleteTagItem = e => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText
    const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem)
    setTagList(filteredTagList)
  }


  return(
    <div className='bg-[#EAEAEA] w-[334px] h-[57px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center min-h-[50px] px-[10px] focus-within:bg-tomato'>
      {tagList.map((tagItem, index) => {
          return (
            <tagItem key={index} className='flex justify-between items-center m-[5px] p-[5px] bg-[tomato] rounded-[5px] text-white text-[14px]'>
              <text className='pt-[3px] pl-[2px]'>{tagItem}</text>
              <button onClick={deleteTagItem} className='flex justify-center items-center w-[15px] h-[15px] ml-[5px] mt-[3px]'>X</button>
            </tagItem>
          )
        })}
        <input type='text' placeholder='태그를 입력해주세요' tabIndex={2} onChange={e => setTagItem(e.target.value)} value={tagItem} onKeyDown={onKeyPress} className='inline-flex min-w-[200px] bg-transparent border-none outline-none cursor-text' />
    </div> 
  )
}

export default Tag