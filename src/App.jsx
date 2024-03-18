import { useState } from 'react';
import Navbar from './Components/NavBar/Navbar'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";



function App() {

  const [menu, setMenu] = useState(false);


  return (
    <>
      <div className='px-4 py-2 bg-yellow-300 flex mr-4 justify-between items-center'>
        <div onClick={() => setMenu(!menu)} className='text-[30px] md:hidden'>
          {
            menu ? <RxCross2></RxCross2>
              : <FaBars></FaBars>

          }
        </div>

        <Navbar menu={menu}> </Navbar>
        <h2 className='text-4xl font-bold'>AR</h2>
      </div>
    </>
  )
}

export default App
