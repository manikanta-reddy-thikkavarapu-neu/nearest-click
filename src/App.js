import React, {useRef} from 'react'
import './App.css';

export default function App() {
  let text = useRef(null);
  const handleClick = (event) => {

    let blks = document.getElementsByClassName('block');

    const blocks = [...event.target.children]; // [...blks]

    const { clientX, clientY } = event;

    const dist = {};

    for (const block of blocks) {
      const { x, y } = block.getBoundingClientRect();
      console.log(x, y, block);

      const distance = Math.sqrt(
        Math.pow(x - clientX, 2) + Math.pow(y - clientY, 2)
      );

      dist[block.innerHTML] = distance;
    }

    console.log(clientX, clientY, dist);

    let max = Number.MAX_VALUE,
      tex = '';

    for (const [key, val] of Object.entries(dist)) {
      if (val < max) {
        max = val;
        tex = key;
      }
    }

    console.log(max, tex, 'Result');

    text.current.innerHTML = tex;
  };

  return (
    <>
      <div onClick={handleClick} className="clickArea">
        <div className="block">A</div>
        <div className="block">B</div>
        <div className="block">C</div>
        <div className="block">D</div>
        <div className="block">E</div>
      </div>
      <p ref={text}>A</p>
    </>
  );
}
