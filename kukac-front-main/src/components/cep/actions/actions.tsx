import api from '../../../config/server'

export  async function getCepsInfos(ceps:string[]){
    console.log(ceps)
   try {
    const cepsReturn  =  await api.post(`ceps`,{ceps})
    return cepsReturn.data
   } catch (error) {
    console.log(error)
    return null
   }
}
