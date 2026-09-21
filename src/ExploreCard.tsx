import React from 'react';
import { FaStar } from 'react-icons/fa';
import type { Icards } from './Cardtypes';
import { toast } from 'react-toastify';

interface ExploreCardProps {
  card: Icards;
  isSelected: boolean;
  onAdd: (card: Icards) => void;
}

const ExploreCard = ({
  card,
  isSelected,
  onAdd,
}: 
ExploreCardProps) => {

  const handleAdd = () => {
    onAdd(card);
    toast.success('Added to Stack!');
  };

  return (
    <div className="gap-7 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

      
      <div className="flex items-center justify-between">
        

        <img  className="h-7 w-7" src={card.icon} alt={card.name}/>
       
         
        

        <span className="rounded-full bg-green-50 px-2 py-1 text-[9px] text-green-600">
          {card.badge}
        </span>

      </div>


      
      <h2 className="mt-3 text-[17px] font-semibold text-gray-900">
        {card.name}
      </h2>


      
      <p className="mt-2 h-[52px] text-[11px] leading-5 text-gray-500">
        {card.description}
      </p>


      
      <div className="mt-4 flex items-center justify-between text-[9px] text-gray-500">

        <span className="rounded bg-gray-100 px-2 py-1">
          {card.category}
        </span>

        <span>
          {card.difficulty}
        </span>

        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          {card.rating}
        </span>

      </div>


      
      <button
        onClick={handleAdd}
        disabled={isSelected}
        className={`mt-4 w-full rounded-md py-2 text-[10px] text-white ${
          isSelected
            ? 'cursor-not-allowed bg-[#8c8e92]'
            : 'bg-[#080d19] hover:scale-105'
        }`}
      >
        {isSelected ? 'Selected' : 'Add to Stack'}
      </button>

    </div>
  );
};

export default ExploreCard