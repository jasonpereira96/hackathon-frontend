import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';


const ProfileDropdown = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      // Add any additional actions to perform after logging out
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  
  return (
    <div className="relative inline-block text-left ">
      <button
        type="button"
        onClick={toggleMenu}
        className="rounded-full focus:outline-none"
      >
        <img
          src="profile.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
      </button>
      {showMenu && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a
            href="#"
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            >
            Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
