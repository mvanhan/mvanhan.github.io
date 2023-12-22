"use client"
import { useState } from 'react';
import { useContext } from 'react';
import { opiumOutput } from '@/app/contexts';


export default function Coolness() {
  const [selectedItemCoolness, setSelectedItemCoolness] = useState('N/A');
  
  const [cool, setCool] = useContext(opiumOutput)[0]

  const handleDropdownChange = (event) => {
    const selectedItemValue = event.target.value;
    setSelectedItemCoolness(selectedItemValue);

    if (selectedItemValue ==  'item3' || selectedItemValue === 'item5' || selectedItemValue === 'item7'){
      setCool(true)
    } else {
      setCool(false)
    }
  }

  return (
    <div>
      <select value={selectedItemCoolness} onChange={handleDropdownChange}>
        <option value="">COOLNESS?</option>
        <option value="item1">HERB</option>
        <option value="item2">KINDA COOL</option>
        <option value="item3">HERB COOL</option>
        <option value="item4">HERB CHILL</option>
        <option value="item5">CHILL</option>
        <option value="item6">COOL</option>
        <option value="item7">OD COOL</option>
      </select>
    </div>
  )
  
}
