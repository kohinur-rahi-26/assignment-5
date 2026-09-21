import React, { useState } from 'react';
import type { Icards } from './Cardtypes';
import ExploreCard from './ExploreCard';
import { FaTimes } from 'react-icons/fa';

interface ExploreProps {
  card: Icards[];
}

const Explore = ({ card }: ExploreProps) => {
  const [selectedCards, setSelectedCards] = useState<Icards[]>([]);

  // Add to Stack
  const handleAddToStack = (Card: Icards) => {
    setSelectedCards((previousCards) => {
      const alreadySelected = previousCards.some(
        (item) => item.id === Card.id
      );

      if (alreadySelected) {
        return previousCards;
      }

      return [...previousCards, Card];
    });
  };

  
  const handleRemove = (id: string) => {
    setSelectedCards((previousCards) =>
      previousCards.filter((item) => item.id !== id)
    );
  };

  
  const handleRemoveAll = () => {
    setSelectedCards([]);
  };

  return (
    <div className="grid grid-cols-4 gap-3 mt-6 px-32">

      
      <div className="col-span-3 grid grid-cols-3 gap-3">

        {card.map((item) => (
          <ExploreCard
            key={item.id}
            card={item}
            isSelected={selectedCards.some(
              (selected) => selected.id === item.id
            )}
            onAdd={handleAddToStack}
          />
        ))}

      </div>


      
      <div className="col-span-1">

        <div className="rounded-xl border border-gray-200 bg-white p-4">

          <h2 className="text-sm font-semibold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-[9px] text-gray-400">
            Technologies you've selected.
          </p>


          
          {selectedCards.length === 0 && (
            <div className="mt-4 flex h-20 items-center justify-center rounded-lg border border-gray-100">
              <p className="text-[9px] text-gray-300">
                Your stack is empty.
              </p>
            </div>
          )}


        
          {selectedCards.length > 0 && (
            <div className="mt-4 space-y-2">

              {selectedCards.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border border-gray-100 p-2"
                >

                  
                  <div className="flex items-center gap-2">

                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-6 w-6"
                    />

                    <div>
                      <h3 className="text-[10px] font-semibold text-gray-800">
                        {item.name}
                      </h3>

                      <p className="text-[8px] text-gray-400">
                        {item.category}
                      </p>
                    </div>

                  </div>


                  
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-[9px] text-gray-300 hover:text-red-400"
                  >
                    <FaTimes />
                  </button>

                </div>
              ))}


              
              <button
                onClick={handleRemoveAll}
                className="mt-3 w-full rounded-md border border-red-100 bg-white py-2 text-[8px] text-red-400 hover:bg-red-50"
              >
                Remove All
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Explore