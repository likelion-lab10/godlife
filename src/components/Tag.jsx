import isEmptyValue from '../utils/isEmptyValue';

function Tag({...restProps}){
  const { inputHashTag, handleInputHashTag, hashTags, handleHashTags} = restProps;
  const addHashTag = (e) => {
    const allowedCommand = ['Comma', 'Enter', 'Space', 'NumpadEnter'];
    if (!allowedCommand.includes(e.code)) return;
    if ([...hashTags].length >= 3) return;
  
    if (isEmptyValue(e.target.value.trim())) {
      return handleInputHashTag('');
    }
  
    let newHashTag = e.target.value.trim();
    // const regExp = /[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    // if (regExp.test(newHashTag)) {
    //   newHashTag = newHashTag.replace(regExp, '');
    // }
    if (newHashTag.includes(',')) {
      newHashTag = newHashTag.split(',').join('');
    }
  
    if (isEmptyValue(newHashTag)) return;
  
    handleHashTags((prevHashTags) => {
      return [...new Set([...prevHashTags, newHashTag])];
    });
  
    handleInputHashTag('');
  };
  
  const keyDownHandler = (e) => {
    if (e.code !== 'Enter' && e.code !== 'NumpadEnter') return;
    e.preventDefault();
  
    const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;
    if (!regExp.test(e.target.value)) {
      handleInputHashTag('');
    }
  };
  
  const changeHashTagInput = (e) => {
    handleInputHashTag(e.target.value);
  };

  const deleteTagItem = e => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText
    const filteredTagList = hashTags.filter(hashTags => hashTags !== deleteTagItem)
    handleHashTags(filteredTagList)
  }

    
  return(
    <div className='bg-[#EAEAEA] w-[334px] h-[57px] rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center flex-wrap min-h-[50px] px-[10px] focus-within:bg-tomato'>
      {hashTags.map((hashTag, index) => {
          return (
            <div key={index} className='flex justify-between items-center m-[5px] p-[5px] bg-[tomato] rounded-[5px] text-white text-[13px] min-w-[50px]'>
              <span className='pt-[3px] pl-[2px]'>{hashTag}</span>
              <button onClick={deleteTagItem} className='flex justify-center items-center w-[15px] h-[15px] ml-[5px] mt-[3px]'>X</button>
            </div>
          )
        })}
        <input type='text' placeholder='태그를 입력해주세요' onChange={changeHashTagInput} value={inputHashTag} onKeyUp={addHashTag} onKeyDown={keyDownHandler} className='inline-flex bg-transparent border-none outline-none cursor-text' />
    </div> 
  )
      }


export default Tag