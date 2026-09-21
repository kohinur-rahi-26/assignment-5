import banner from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className=' flex space-between justify-center  my-20 mx-auto gap-10'>
            <div >
                <h2 className='text-bold text-6xl '>Build Your Ideal<br/> <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-extrabold-4xl'>
                    Development Stack
                    </span>

                </h2>
                <p className='text-gray-600 my-3'>Explore frontend, backend, database, and tooling options,<br />
compare them side by side, and put together the stack that fits your <br />next project.</p>


         <div className='flex space-between gap-4'>
             <button className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E]- to-[#D81B7E]  text-white rounded-lg px-5 py-3">Explore Technologies</button>
          <button className="btn btn-active bg-[#E5E7EB] rounded-[2px] px-5 py-3">Learn More</button>

         </div>

            </div>

            
            <div className='-mt-[84px]'>
                <img src={banner} alt="" />
            </div>
            
            
            
            
        </div>
        
    );
};

export default Banner;