import React, {useState} from 'react';
import './main.css';
import diagun from './assets/diagun.png';


function App () {

  const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="container">
        <div className="main-container">
        <div className="imagecontainer">
          <img src={diagun} alt={diagun} />
          <div className="bcont">
          <button onClick={()=> setIsOpen(!isOpen)} className="b1">ADD TO BAG</button>
          <button onClick={()=> setIsOpen(!isOpen)}   className="b2">WISH LIST</button>
          {isOpen ? (
          <div className="Modal">
            <p className="modhead">Select size</p>
            <div className="sizcont">
            <button className="s1">XS</button>
            <button className="s2">S</button>
            <button className="s3">M</button>
            <button className="s4">L</button>
            <button className="s5">XL</button>
            </div>
            </div>
          ):null}
          </div>
          

          </div>
          <p className="t1">Vero Moda</p>
          <p className="t2">Women regular fit</p>

          <div className="line">
          <p className="t3">SR 82.39</p>
          <p className="t4">SR 82.39</p>
          <p className="t5">(116.6 OFF)</p>
          </div>
       
          </div>
           </div>
    )
  }


export default App
