const TestLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="flex flex-col bg-rose-400 justify-center items-center h-full">
            Layout
            <hr className=" border border-black w-full"/>
            {children}
        </div>
    )
}

export default TestLayout