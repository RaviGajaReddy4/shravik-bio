'use client'
import Image from "next/image";
import React from 'react'

const m = ['M', 'A', "N", 'I', 'S', 'H',];
const r = ['R ', 'A ', 'V ', 'I']

function page() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-orange-300">
            <div className="flex flex-col justify-center">
                <div className="flex flex-row items-center mr-2 justify-center">
                    <div className="flex flex-col items-center pt-16 justify-center">
                        {m.map(i => (
                            <h4 className="text-3xl text-pink-600" key={i}>{i}</h4>
                        ))}
                    </div>
                    <Image className="m-2" src={`/images/sister/Aravi_3rd_month.jpeg`}
                        width="300" height="20" />
                </div>
                <div className="flex flex-row justify-start pl-5">

                    <h4 className="text-3xl pr-1 text-pink-600">A</h4>

                    {r.map(i => (
                        <h4 className="text-3xl pr-1 text-pink-900" key={i}>{i}</h4>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default page;