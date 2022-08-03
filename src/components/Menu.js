import { useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';

function Menu() {
  const [isMenu, setMenu] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <>
      <button className='menu' type='button' onClick={() => setMenu(!isMenu)}></button>
    </>
  )

}

export default Menu