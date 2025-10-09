import { useEffect, useState } from "react"

export const LoadingScreen = ({onComplete}) => {

    const [text, setText] = useState("");
    const fullText = "Hi There!";

    useEffect(()=>{
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000)
            }
        }, 200);

        return() => clearInterval(interval);
    }, [onComplete])


    return(
        <div className="fixed inset-0 z-50 bg-floral-white text-brown-400 flex flex-col items-center justify-center">
           <div className="mb-4 text-4xl font-mono font-bold">
            {text} <span className="animate-blink ml-1"> | </span>
        
        
           <div className="w-[200px] h-[4px] bg-brown-100 rounded relative overflow-hidden">
            <div className=" absolute top-0 left-0 w-[40%] h-full bg-brown-500 shadow-[0_0_0_15px-#3b82f6] animate-loading-bar"></div>

           </div>
           </div>
        </div>
    )
}