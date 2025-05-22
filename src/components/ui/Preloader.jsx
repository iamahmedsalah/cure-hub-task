import React from "react";

const Preloader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center mx-auto glass z-50">
            <div className="animate-pulse">
                <img className="w-42 h-42" src="/favicon.svg" alt="preloader" />
            </div>
        </div>
    );
};

export default Preloader;