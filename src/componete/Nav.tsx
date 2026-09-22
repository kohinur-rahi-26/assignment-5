import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
         <nav className= "fixed  top-0 left-0 z-50 w-full bg-white  px-6 py-4">
            <div className="container   mx-auto flex justify-between">

            
            <img src={Logo} alt="" />

            <ul className="flex gap-6 items-center">
                <li className='text-red-400'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>

            </ul>
            <div className='flex gap-4 '>
                <button className="btn btn-sm">Sign In</button>
                <button className="btn btn-xs bg-pink-600 text-white rounded-md p-2">Sign Up</button>
            </div>
            </div>
        </nav>
    );
};

export default Nav;