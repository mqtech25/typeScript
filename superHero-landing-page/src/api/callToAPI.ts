import { sendObjectToClass } from "../module/ApiModule.js"

const baseURL='https://www.superheroapi.com/api.php/738682494629275/search/'

// const superHero=async (name:string)=>{
//    await fetch(`${baseURL}/${name}`).then(
//     (resp)=> {return resp.json()
//     }).then(
//         (resp)=>{
//           return  sendObjectToClass(resp.results)
//         }).catch(
//             (Error)=>console.log(Error)
//    )
// }

// export default superHero;
const superHero = async (name: string) => {
    return await fetch(`${baseURL}/${name}`)
      .then((resp) => resp.json())
      .then((resp) =>{  
        if("error" in resp){
        return resp.error;
    }else{
      return  sendObjectToClass(resp.results)
    }} )
      .catch((Error) => Error);
  };
  
  export default superHero;
  