import { 
  useState,
  useCallback,
  useEffect,
  useRef
 } from 'react'
import './App.css'
import generatePassword from './pass_gen'
import config from './config';

export default function App() {
  const [sliderLen,setSliderLen] = useState(config.dfltSliderLen)
  const [charAllowed,setcharAllowed] = useState(config.dfltCharAllowed)
  const [numAllowed,setNumAllowed] = useState(config.dfltNumAllowed)
  const [password,setPassword] = useState(config.defaultPassword)

  const passwordGenerator = useCallback(()=> {
    setPassword(generatePassword(sliderLen,numAllowed,charAllowed))
  },[sliderLen,charAllowed,numAllowed])
  

  useEffect(passwordGenerator,[sliderLen,charAllowed,numAllowed])

  return (
    <div className='shadow-lg bg-gray-800 my-20 p-10'>
      <TopRow password={password}/>
      <BottomRow sliderLen={sliderLen} 
                 setSliderLen={setSliderLen} 
                 numAllowed={numAllowed}
                 setNumAllowed={setNumAllowed}
                 charAllowed={charAllowed}
                 setcharAllowed={setcharAllowed}/>
    </div>
  );
}


function TopRow({password}){

  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = async () => {
      if (inputRef.current) {
        inputRef.current.select(); // Highlight the text
      }
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200); 
  }
  return (
    <div className='flex justify-center gap-2'>
      <input className="bg-white rounded border-2 border-gray-500 p-2 w-lg" 
      type="text" 
      value={password}
      ref={inputRef}
      />
      <button className={`rounded px-4 py-2 text-xl text-white ${copied ? 'bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}
              onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
            </button>
    </div>

  )
}

function BottomRow({sliderLen,setSliderLen,numAllowed,setNumAllowed,charAllowed,setcharAllowed}){
  return(
    <div className='flex justify-center items-center gap-5 mt-5 mb-10'>
      <div className='flex justify-center items-center gap-1'>
        <input 
          type="range" 
          id="volume" 
          name="volume" 
          min={config.sliderMinVal} 
          max={config.sliderMaxVal} 
          value={sliderLen}
          className="bg-white"
          onChange={(e) => setSliderLen(e.target.value)}
        />
        <span className='text-md text-white'>Length:{sliderLen}</span>
      </div>

      <Checkbox label={'Number'} isChecked={numAllowed} setCheck={setNumAllowed}/>

      <Checkbox label={'Character'} isChecked={charAllowed} setCheck={setcharAllowed} />
    
    </div>
      


)}

function Checkbox({label,isChecked,setCheck}){
  return (
        <label className='text-md text-white flex items-center '>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setCheck((prev)=>!prev)}
          className='w-10 h-5'
        /> 
        {label}
      </label>

  )

}


