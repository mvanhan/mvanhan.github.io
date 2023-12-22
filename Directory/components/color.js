"use client"
import { useContext, useState } from 'react'
import { opiumOutput } from '@/app/contexts';


export default function Color () {
  const [selectedItemColor, setSelectedItemColor] = useState('N/A');

  const [color, setColor] = useContext(opiumOutput)[1]

  const handleDropdownChange = (event) => {
    const selectedItemValue = event.target.value;
    setSelectedItemColor(selectedItemValue)
    
    if (selectedItemValue ==  'item3' || selectedItemValue === 'item5' || selectedItemValue === 'item7'){
      setColor(true)
    } else {
      setColor(false)
    }

  }

  return (
    <div>
      <select value={selectedItemColor} onChange={handleDropdownChange}>
        <option value="">FAV COLOR</option>
        <option value="item1">GREEN</option>
        <option value="item2">ORANGE</option>
        <option value="item3">BLACK</option>
        <option value="item4">YELLOW</option>
        <option value="item5">RED</option>
        <option value="item6">BLUE</option>
        <option value="item7">PURP</option>
      </select>
    </div>
  )

}