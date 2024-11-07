import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  const passwordRef=useRef(null)

  const generatePassword=useCallback(
    () => {
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed){
        str+="0123456789"
      }
      if(charAllowed){
        str+="!@#$%^&*()_+"
      }
      for(let i=1;i<length;i++){
        const cha=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(cha)


      }
      setPassword(pass)
    },[length,numberAllowed,charAllowed]
  )
  const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }
  useEffect(()=>{
    generatePassword();

  },[length,numberAllowed,charAllowed])
  /**if somebody touch and move renge then i want to rerun the method and if anybody perform changes on checkbox either numberAllowed or charAllowed then i want to rerun this method
   * so another hooks that we want to use in this react is useEffect and this is most importent hook in this project this allow you to actually to run a piece of code on variety of senario, as soon as component is loading or mounting then this peace of code or hooks is used
   * useEffect is also like a useCallback parameter means two parameter one is callback function and one is dependency ,
   * ouseEffect is opposite of useCallback function in useCallback we say as long as things dont change to frequently we actually use that but in useEffect you want to run the method intentionaly as soon as something changes,in useCallback dependency we put all those variable or dependencies which are not frrequently changes and fix but in
   * useEffect we put all those dependencies which are currently change something or which are updated
   */

  /**when i click on copy and check on new tab on google and paste the password then all same password comeon search bar means job is done perfectly
   * but you will also find majority of time some of the ui ux guys comes to me , hey although this is copied but user need feedback , the feedback is totaly dependent upon you
   * maybe once a copy is done you might want to change the  text and you do lot of things what we are decided to this we are going to select whole password so the user gets ok this was copied now its not easy to do this thats why i choosen this, in order to do so,
   * we actually somehow a refernce of this input field so we will use something like reference so for this there is another hook that we ae going to learn is useref,
   * this hooks is very powerful if you grab anything from window
   */

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className="text-3xl font-bold mb-2 text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder='Password' ref={passwordRef} readOnly/>
        <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=>setLength(e.target.value)} name="" id=""/>
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
          <label htmlFor="char">char</label>
        </div>

      </div>
    </div>
    
  )
}

export default App
