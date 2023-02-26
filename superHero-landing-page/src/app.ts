import superHero from "./api/callToAPI.js";
import { APIModule } from "./module/ApiModule.js";

const searchBtn = document.getElementById('search-btn')  as HTMLButtonElement;
searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const input= document.getElementById('search-input') as HTMLInputElement;
    
   input.value?( superHero(input.value).then(resp=>{
        let heros:APIModule[]=resp;
        let card="";
        if(Array.isArray(resp)){
            for(const hero of heros){
                card+=  HeroCard(hero);
            }
        }else{
            card=resp;
        }
        
        const slidersec= document.getElementById('slider-sec') as HTMLElement;
        slidersec.classList.add('slider');
        slidersec.innerHTML=card
        window.scrollTo({
            top: slidersec?.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
    })):alert("input required")
})

const HeroCard=(hero:APIModule)=>{    
    return(
        `
        <div class="slide">
            <div class="card">
            <img src="${hero.image.url}" alt="" class="img-responsive" />
            <h1>${hero.name} </h1>
            </div>
        </div>    
        `
    )
   
}