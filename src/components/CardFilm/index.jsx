export default function CardFilm (){
    return(
        <div className="w-[350px] h-[250px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-full h-[67%] rounded-t-lg bg-amber-400 ">
                <img 
                src="https://th.bing.com/th/id/OIP.CrHlujz5MHz2X7nlE55CjwHaEK?rs=1&pid=ImgDetMain"
                alt=""
                className="w-full h-full rounded-t-lg object-cover" />
            </div>
            <div className="w-full h-[33%] flex flex-col pt-2 px-4">
                <p className="text-[15px] font-bold" >O limite da Traição</p>
                <p className="text-[15px] text-[#8a898c] font-bold">Tyler Perry</p>
                <div className="w-full flex justify-between">
                    <p className="text-[13px] text-[#8a898c] font-bold">2020</p>
                    <div className="px-2 py-0 bg-[#8f7bd8]/20 text-[#8f7bd8] rounded-lg">
                    Ação
                    </div>
                </div>
            </div>
        </div>
    )
}