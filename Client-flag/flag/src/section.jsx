import React, { useEffect, useState } from 'react';

function Section() {
  const [flag, setFlag] = useState([]);
  const [inputValue, setInputValue] = useState(''); 

  useEffect(() => {
    fetch('http://localhost:5000/Flag')
      .then((response) => response.json())
      .then((data) => setFlag(data)) 
    
  }, []);

  
  const filteredFlag = flag.filter((v) =>
    v.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
    <div className="p-[20px] flex flex-col items-center bg-black">
    <input
      className='p-[10px] text-white bg-[rgb(43,56,68)] w-[250px]'
        onChange={(e) => setInputValue(e.target.value)} 
        type="text"
        value={inputValue} 
        placeholder="Search for a country…"
      />
      <div className="flex flex-wrap gap-[20px] bg-[black] p-[20px] justify-center">
        {filteredFlag.map((v) => (
          <div className="bg-black">

        
          <div  className="flex justify-between items-center flex-col bg-[rgb(43,56,68)] text-white p-[20px] w-[200px] text-[20px]">
            <img className="w-[200px]" src={v.imgUrl} alt />
            <h1>{v.title}</h1>
          </div>
          </div>
        ))}
      </div>
    </div>
     
    </>
  );
}

export default Section;
