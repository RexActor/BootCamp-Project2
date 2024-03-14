import React from 'react';


function Navbar() {
  return (
    <nav className="bg-indigo-900 bg-opacity-80">
        <div className="container mx-auto flex justify-between py-5">
            <h1 className="uppercase text-3xl">Logo</h1>
            <div>
                <img className="w-9 h-auto" src="/images/icons8-user-30.png" alt="User Icon"/>
            </div>  
        </div>
    </nav>
  )
}

export default Navbar
