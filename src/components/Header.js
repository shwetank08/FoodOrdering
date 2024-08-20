import React from 'react'

const Header = () => {
    return (
        <div className='container flex justify-around shadow-lg p-2 items-center max-w-full'>
            <div className=''>
                <h1>Bee Delivers</h1>
            </div>
            <div className='flex flex-row'>
                <ul className='flex gap-6'>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header