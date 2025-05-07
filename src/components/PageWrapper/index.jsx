import Header from "../Header";

export default function PageWrapper({children, showButton =true}){
    return (
        <div className="w-full h-full min-h-screen flex flex-col">
            <Header showButton={showButton} />
            <div className="w-full h-auto bg-gradient-to-t from-[#020304] to-[#181D29]">
               {children}
            </div>
        </div>
    )
}