import { use } from 'react';
import Explore from '../Explore';
import type { Icards } from '../Cardtypes';



interface cardsProps{
    cardPromise:Promise<Icards[]>
}
const Card = ({cardPromise}:cardsProps) => {
    const  cards = use(cardPromise);
    
    console.log(cards)
    return  <div>
        <div className='  mx-auto my-20 px-32 '>
            <h2 className='text-bold text-4xl text-black'>Explore the <span className='text-pink-500'>Technologies</span></h2>
            <p className='text-gray-500 text-[16px]'>Pick one technology per category to build your ideal stack.</p>
        </div>
        <Explore card ={cards}/>
            
        </div>
    
};

export default Card;

