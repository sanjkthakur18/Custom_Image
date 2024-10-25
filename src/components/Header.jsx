import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [user, setUser] = useState({ name: '', email: '' })
    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setUser(user)
        }
    }, [])

    const handleLogout = () => {
        localStorage.clear()
        setUser({ name: '', email: '' })
        navigate('/')
    }

    return (
        <header className="bg-gradient-to-r from-blue-400 to-purple-600 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-lg font-bold mb-2 sm:mb-0">
                Image Search Application
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
                <div className="hidden sm:inline-block sm:text-base">{user.name}</div>
                <span className="hidden sm:inline">||</span>
                <div className="hidden sm:inline-block sm:text-base">{user.email}</div>
                <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded"
                >
                    Logout
                </button>
            </div>
        </header>
    )
}

export default Header
