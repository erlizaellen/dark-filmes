import {useRouter} from "next/router"


export default function CardFilm ({filme}){
    const router = useRouter()

    function handleClickNavigate(){
       router.push(`/filme/${filme.id}`)
    }
    return(
        <div
         onClick={handleClickNavigate}
         className="w-[350px] h-[250px] flex flex-col rounded-lg bg-[#222222] cursor-pointer border border-transparent  hover:border-[#8f7bd8] transition-all duration-300 ease-in-out">
            <div className="w-full h-[67%] rounded-t-lg relative">
                <img 
                src={filme.banner}
                alt={filme.titulo}
                className="w-full h-full rounded-t-lg object-cover" />
                <div className="absolute top-1 left-2 flex">
                    <p className="text-[17px] text-green-400 font-semibold ">{filme.nota}</p>
                    <p>/10</p>
                </div>
            </div>
            <div className="w-full h-[33%] flex flex-col pt-2 px-4">
                <p className="text-[15px] font-bold" >{filme.titulo}</p>
                <p className="text-[15px] text-[#8a898c] font-bold">{filme.diretor}</p>
                <div className="w-full flex justify-between">
                    <p className="text-[13px] text-[#8a898c] font-bold">{filme.ano}</p>
                    <div className="px-2 py-0 bg-[#8f7bd8]/20 text-[#8f7bd8] rounded-lg">
                    <p>{filme.genero}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}