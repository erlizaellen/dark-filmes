import CardFilm from "@/components/CardFilm";
import PageWrapper from "@/components/PageWrapper";


export default function Home(){
  return (
   <PageWrapper>
    <div className="w-full flex flex-col items-center justify-center pt-7 pb-4">
      <h1 className="text-[40px] text-[#907cda] font-bold ">Sua Coleção de Filmes</h1>
      <p className="text-[20px] font-bold text-[#ffffff7a]">Acompanhe seus filmes favoritos e adicione novos filmes a sua coleção</p>
    </div>
    <div className="w-full h-auto flex flex-wrap justify-center gap-2">
       <CardFilm/>
       <CardFilm/>
       <CardFilm/>
       <CardFilm/>
       <CardFilm/>
       <CardFilm/>
    </div>
     
   </PageWrapper>
  )
}