import React from 'react'

function SplashScreen() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <div className="flex justify-center mb-5">
                    {/* Add your logo here */}
                    <img
                        src="/path-to-your-logo.png"
                        alt="App Logo"
                        className="w-32 h-auto"
                    />
                </div>
                <h1 className="text-2xl font-bold text-gray-700">
                    Ration Card Application
                </h1>
                <p className="text-gray-500 mt-2">Simplifying your ration card needs</p>
                <div className="flex justify-center mt-5">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    )
}

export default SplashScreen