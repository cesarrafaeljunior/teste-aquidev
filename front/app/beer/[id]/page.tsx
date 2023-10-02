import { BeerEspecific } from "@/components/pages/Beer";

export default function Beer({params}:{params:{id: number}}){
    return <BeerEspecific id={params.id}/>
}