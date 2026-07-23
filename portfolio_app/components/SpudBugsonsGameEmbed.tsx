'use client'

import { useState } from "react"

export default function Demo() {
    const [playing, setPlaying] = useState(false);

    function playGame() {
        setPlaying(true)
    }

    return (
        playing ?
            <iframe src="https://itch.io/embed-upload/18120643?color=333333" width="640" height="380" allowFullScreen><a href="https://graciearmour.itch.io/spud-bugsons-home-for-round-youth">Play Spud Bugsons Home for Round Youth on itch.io</a></iframe>
            :
            <div className="flex justify-center items-center w-[640px] h-[380px] bg-[url('/images/backgrounds/SpudBugsonsBanner.png')]">
                <button onClick={playGame} className="p-[0.5rem] border-black rounded-lg bg-white text-[2rem] hover:cursor-pointer">Play</button>
            </div>
        
    )
}