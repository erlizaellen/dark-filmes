import Header from "../Header";

export default function PageWrapper({children, showButton =true}){
    return (
        <div className="w-full h-full flex flex-col">
            <Header showButton={showButton}/>
            <div className="w-full h-full min-h-screen bg-gradient-to-t from-[#020304] to-[#181D29]">
               {children}
            </div>
        </div>
    )
}