import React from 'react'

const Footer = () => {
    return (
        <div className='text-center p-4 bg-dark text-light'>
            &copy; {new Date().getFullYear()}
        </div>
    )
}

export default Footer
