var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const superHero = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const preloader = document.getElementById("preloader");
    preloader === null || preloader === void 0 ? void 0 : preloader.classList.remove("d-none");
    return yield fetch(`${baseURL}/${name}`)
        .then((resp) => resp.json())
        .then((resp) => {
        if ("error" in resp) {
            preloader === null || preloader === void 0 ? void 0 : preloader.classList.add("d-none");
            return resp.error;
        }
        else {
            preloader === null || preloader === void 0 ? void 0 : preloader.classList.add("d-none");
            return sendObjectToClass(resp.results);
        }
    })
        .catch((Error) => Error);
});
export default superHero;
