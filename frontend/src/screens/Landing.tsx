import { Button } from "@chess/ui/button"
import { useNavigate } from "react-router-dom"

export const Landing = () => {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/login')
    }
    return <div className="h-screen bg-cover bg-chessboard flex justify-center items-center">
        <div className="h-auto h-min-72 w-[70vw] px-10 py-16 backdrop-saturate-200 md:w-[60vw] rounded-lg backdrop-blur-sm bg-[#18120ebf] text-center">
            <div className="text-5xl text-white font-bold flex items-center justify-center">
                Play Chess Online on the #1 Site!
            </div>
            <div className="p-10">
            <Button onClickHandler={handleClick} disabled={false} className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-3xl px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                Play
            </ Button>
            </div>
        </div>
    </div>
}