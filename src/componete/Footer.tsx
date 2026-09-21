
import footerImage from '../assets/logo-text.png';

const Footer = () => {
  return (
    <div >
         <div className="bg-white mx-auto flex justify-between gap-5 px-10 py-8  items-center items-start">

      <div>
        <img src={footerImage} alt='' />

        <p className="text-[12px] text-slate-400">
          Curated tools, technologies, and resources for developers
          <br />
          modern software.
        </p>

        <ul className="text-[12px] text-black flex gap-8 mt-4">
          <li>Github</li>
          <li>Twitter</li>
          <li>Linked</li>
        </ul>
      </div>

      
      <div>
        <h3 className="mb-3 text-[12px] font-bold">
          PRODUCTS
        </h3>

        <ul className="flex flex-col gap-3 text-[12px] text-gray-500">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
        </ul>
      </div>
      
      <div>
        <h3 className="mb-3 text-[12px] font-bold">
          COMPANY
        </h3>

        <ul className="flex flex-col gap-3 text-[12px] text-gray-500">
          <li>About</li>
          <li>Contact</li>
          <li>Careers</li>
        </ul>
      </div>

    
      <div>
        <h3 className="mb-3 text-[12px] font-bold ">
          LEGAL
        </h3>

        <ul className="flex flex-col gap-3 text-[12px] text-gray-500">
          <li>Terms of Services</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      

    </div>
   
         <div className="mx-auto flex justify-between gap-5 px-10 py-8 items-center border-b border-gray-200">
            </div>

      <div className=" flex justify-between items-center px-10 py-4 text-[10px] text-gray-400">
        <p >
         © 2026 Dev Stack. All rights reserved.
        </p>
        <ul className='flex gap-6'>
            <li>Privacy</li>
            <li>Terms</li>
        </ul>
      </div>

    </div>
   
   
    
  );
};

export default Footer;











