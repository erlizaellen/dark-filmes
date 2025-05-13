import PageWrapper from "@/components/PageWrapper";
import { LuArrowLeft } from "react-icons/lu";
import { PiNotePencil } from "react-icons/pi";
import { IoTrashBin } from "react-icons/io5";
import instance from "@/api/instance";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

 
export default function Filme(){
    const router = useRouter()
    const { id } = router.query;
    const [filme, setFilme]=useState({})
     
    useEffect(() => {
        async function getFilmeById(){
            const response = await instance.get(`/api/movies/${id}`)
            setFilme(response.data)
        }
        if(id){
        getFilmeById()}
    } ,[])
    

    return (
        <PageWrapper
          showHeader={false}
        >
        <div className="w-full h-full min-h-screen flex flex-col px-[150px] pt-12 items-start">
            <button 
            onClick={() => router.back()}
            className="px-5 py-2 text-[#8a898c] gap-2 flex items-center justify-center rounded-lg hover:bg-[#27282b] hover:text-[#8f7bd8]">
            <LuArrowLeft/>
            <p>Voltar para a Lista de Filmes</p>
            </button>
            <div className="w-full min-h-[90vh] flex ">
                <div className="w-[30%] h-full flex flex-col ">
                    <div className="w-full h-[90%] ">
                        <img 
                        className="w-full h-full rounded-lg object-cover"
                        src={filme.banner} 
                        alt="" 
                        />
                    </div>
                    <div className="w-full flex h-[10%] pt-4 justify-between">
                        <button className="w-[46%] flex items-center justify-center gap-2 h-full border border-[#9b87f533] rounded-md text-[#9b87f5] hover:bg-[#9b87f5]/20 cursor-pointer py-2">
                        <PiNotePencil size={20}/>
                        Editar Filme</button>
                        <button
                       
                         className="w-[46%] flex items-center justify-center gap-2 h-full border border-[#9b87f533] rounded-md text-[#ef4444] hover:bg-[#ef4444]/20 cursor-pointer py-2">
                        
                        <IoTrashBin size={20} />
                        Excluir Filme</button>
                    </div>
                </div>
                <div className="w-[70%] h-full flex flex-col pl-4">
                  <div className="w-full flex gap-2 items-baseline">
                     <h1 className="text-[35px] text-[#9B87f5] font-bold "> {filme.titulo}</h1>
                     <p className="text-[#8a898c] font-semibold text-[17px]">{filme.ano}</p>
                  </div>
                  <div className="w-full gap-4 flex ">
                     <div className="py-1 px-4 rounded-2xl bg-[#4ade80]/20 text-#4ade80">
                        <p className="text-[17px] font-semibold">{filme.nota}</p>
                      </div>
                      <div className="py-1 px-4 rounded-2xl bg-[#9b87f5]/20 text-#9b87f5">
                        <p className="text-[17px] font-semibold">{filme.genero}</p>
                       </div>
                  </div>
                  <div className="w-full flex flex-col mt-2">
                    <h4 className="text-[20px] font-bold ">Diretor</h4>
                    <p className="text-[#8a898c]">{filme.diretor}</p>
                  </div>
                  <div className="w-full flex flex-col">
                    <h4 className="text-[20px] font-bold ">Sinopse</h4>
                    <p className="text-[#8a898c]"> {filme.sinopse}</p>
                  </div>
                  
                </div>

            </div>
        </div>
        </PageWrapper>
    )
}