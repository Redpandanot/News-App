import React, { useRef} from 'react'
import './SearchBar.css'

function SearchBar(props) {
    const inputValueRef=useRef(null);

    function handleSubmit(event){
        event.preventDefault();
        const inputValue=inputValueRef.current.value;
        props.onChange(inputValue);
    }

  return (
    <div className='container'>
        <img alt="icon" className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2QM2ty_66ss8TbZEzFZwmRiLZ-Hk-AE95Q&usqp=CAU"/>
        <h1 className='newTitle'>News-Daily</h1>
        <form className='search-bar' onSubmit={handleSubmit}>
            <input type='text' className='input' ref={inputValueRef}></input>
            <input type='submit' className='btn' onClick={handleSubmit}></input>
        </form>
    </div>
  )
}

export default SearchBar;