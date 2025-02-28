'use client'

import Image from "next/image"

export default function HeroBanner() {
    return (
        <div className="flex flex-row w-full h-full bg-black">
            <div className="w-full h-full text-white">HeroBanner</div>
            <div className="w-full h-full"><Image className="bg-red-100" src="/vercel.svg" alt="Vercel Logo" width={100} height={24}/> </div>
        </div>
    )   
}