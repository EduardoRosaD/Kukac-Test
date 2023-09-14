import { CepInfoInterface } from "./interfaces/CepInfoInterface";

export default function CepInfo( { cep } : { cep : CepInfoInterface } ) {
    return (
        <div>
            <h1>{cep.cep}</h1>
            <h1>{cep.logradouro}</h1>
            <h1>{cep.bairro}</h1>
            <h1>{cep.localidade}</h1>
            <h1>{cep.uf}</h1>
        </div>
    )
}