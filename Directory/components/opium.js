"use client"
import { useContext } from 'react';
import { opiumOutput } from '@/app/contexts';

const Opium = () => {

  const [cool, setCool] = useContext(opiumOutput)[0]
  const [color, setColor] = useContext(opiumOutput)[1]

  return (
    <div>
      {cool && color ? 'OPIUM' : 'NOT OPIUM'}
    </div>
  );
};

export default Opium;

