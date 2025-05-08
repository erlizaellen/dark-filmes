import instance from "@/api/instance";
import CustomInput from "@/components/Custominput";
import CustomSelect from "@/components/CustomSelect";
import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Cadastrar (){
  const [titulo, setTitulo]=useState("");
  const [diretor , setDiretor]=useState("");
  const [ano, setAno]=useState(0);
  const [genero,setGenero]=useState("");
  const [nota ,setNota]=useState(0);
  const [sinopse,setSinopse]=useState("");
  const [banner ,setBanner]=useState("");

  async function handleSubmit (event){
    event.preventDefault();

     if(!titulo || !diretor || !ano || !genero || !nota || !sinopse || !banner){
      toast.error("Preencha todos os campos")
      return;
     }

     try {
      await instance.post("/api/movies" , {
        titulo: titulo, 
        diretor:diretor,
        ano: ano,
        genero:genero,
        nota:nota,
        sinopse:sinopse,
        banner:banner
      })
      toast.success("Filme cadastrado com sucesso")
      setTitulo("");
      setDiretor("");
      setAno("");
      setGenero("");
      setNota("");
      setSinopse("");
      setBanner("");
     } catch (error) {
      console.error(error)
      toast.error("Erro ao cadastrar filme!")
     }
    

    
    // console.log({
    //   titulo,
    //   diretor,
    //   ano,
    //   genero,
    //   nota,
    //   sinopse,
    //   banner
    // })
  }
    
  

    return (
      
      <PageWrapper showButton={false}>
       <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
            <h1 className="text-[40px] font-bold text-[#9a86f4]">Adicione um Novo Filme</h1>
            <p className=" text-[#3a3333] text-[20px]">Preencha o formulário abaixo para adicionar um novo filme a sua coleção</p>
            <div className="w-full flex justify-center pt-[40px]"> 
                <form 
                   onSubmit={handleSubmit}
                   className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border border-[#9a86f4] flex flex-col p-6 gap-4"> 
                  <CustomInput 
                     value={titulo}
                     label="Título"
                     placeholder="Digite o título do filme"
                     type="text"
                     onChange={
                      (event)=>setTitulo(event.target.value)
                     }
                  />
                  <CustomInput 
                  value={diretor}
                      label="Diretor"
                      placeholder="Digite o nome do diretor "
                      type="text"
                      onChange={
                        (event)=>setDiretor(event.target.value)
                       }
                  />
                  <div className="w-full flex gap-4">
                    <div className="w-[50%]">
                      <CustomInput
                         value={ano}
                         label="Ano"
                         placeholder="Digite o ano do lançamento"
                         type="number"
                         onChange={
                          (event)=>setAno(event.target.value)
                         }
                      />   
                    </div>
                    <div className="w-[50%]">
                       <CustomSelect
                        value={genero}
                        onChange={ 
                           (event) => setGenero(event.target.value)
                        }
                        label="Gênero"
                        options={[
                          "Ação" ,
                          "Comedia",
                          "Drama" , 
                          "Terror", 
                          "Ficção Científica",
                          "Romance"
                        ]}
                      />

                    </div>
                  </div>
                  <div className="w-[30%] items-center  flex gap-2">
                    <div className="w-[70%]">
                       <CustomInput
                       value={nota}
                        onChange={
                          (event)=>setNota(event.target.value)
                         }
                         label="Nota"
                         placeholder="0"
                         type="number"
                      />
                    </div>
                    <p className="flex mt-8">0 /10</p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[17px] font-bold">Sinopse</label>
                    <textarea 
                    value={sinopse}
                    onChange={
                      (event) => setSinopse(event.target.value)
                    }
                    className="w-full h-[150px] min-h-[150px] rounded-lg border border-[#ffffff1a] focus:border-purple-400 p-2 bg-[#141414] 
                    outline-none"
                    ></textarea>
                  </div>
                       <CustomInput
                       value={banner}
                        onChange={
                          (event)=>setBanner(event.target.value)
                         }
                         label="Banner"
                         placeholder="URL da imagem"
                         type="text"
                       />
                       <div className="w-full flex justify-end gap-4">
                        <button type="reset" className="w-[100px] h-[50px] rounded-md 
                        bg-[#141414] border border-[#3a364c] font-bold cursor-pointer
                        hover:bg-white/10 ">Cancelar
                        </button>
                        <button 
                           type="submit"
                           className="w-[130px] h-[50px] cursor-pointer font-bold hover:bg-[#ac4380]/80 rounded-md bg-[#ac4380] border border-[#3a364c]"
                           >
                            Salvar Filme
                          </button>
                       </div>
                </form>
            </div>
       </div>
      </PageWrapper>
    )
}