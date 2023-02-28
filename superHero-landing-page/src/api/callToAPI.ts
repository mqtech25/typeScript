import { sendObjectToClass } from "../module/ApiModule.js";

const baseURL = "https://www.superheroapi.com/api.php/738682494629275/search/";

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
  const preloader = document.getElementById("preloader") as HTMLElement;
  preloader?.classList.remove("d-none");
  return await fetch(`${baseURL}/${name}`)
    .then((resp) => resp.json())
    .then((resp) => {
      if ("error" in resp) {
        return resp.error;
      } else {
        preloader?.classList.add("d-none");
        return sendObjectToClass(resp.results);
      }
    })
    .catch((Error) => Error);
};

export default superHero;
