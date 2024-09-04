
function ImageCard({ title, children }) {
    return (
        <div className="flex flex-col items-center m-2 justify-center">
            {children}
            <h3>{title}</h3>
        </div>
    )
}

export default ImageCard
