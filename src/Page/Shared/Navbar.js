import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const menuList = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>about</Link></li>
        <li><Link to='/'>Service</Link></li>
        <li><Link to='/chakout'>Chakout</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/'>Contact US</Link></li>
        {
            user ? <li><Link onClick={logout}  >Sign Out</Link></li> : <li><Link to='/login'>Sign</Link></li>
        }

    </>

    return (
        <div>
            <div className="navbar w-full bg-gradient-to-r from-primary to-blue-400 text-white rounded-3xl shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {menuList}
                        </ul>
                    </div>
                    <Link className='flex uppercase font-bold text-xl' to='/'><img className='w-14 ps-7 me-2' src="https://i.ibb.co/stWn8MN/4762311.png" alt="" /><small>ster edu</small></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuList}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Navbar;