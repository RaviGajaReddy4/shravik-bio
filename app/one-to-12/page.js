'use client'
import Image from "next/image";
import ImageCard from "../_components/ImageCard";

const pics = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
]
function page() {
    return (
        <div>
            <h2>One to Twelve months photos</h2>
            <br />
            <div className="flex flex-wrap">
                {
                    pics.map(month => (
                        <ImageCard title={`Month-${month}`}>
                            <Image className="m-2" src={`/images/one-to-12/${month}.jpeg`} width="300" height="20" alt={`${month} pic`} />
                        </ImageCard>
                    ))
                }
                <ImageCard title="One Year">
                    <Image className="m-2" src="/images/one-to-12/12.jpeg" width="300" height="20" alt="one year" />
                </ImageCard>
            </div>
        </div>
    )
}

export default page;