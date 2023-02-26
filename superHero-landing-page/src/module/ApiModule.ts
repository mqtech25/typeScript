import { Appearance, Biography, Connections, Image, Powerstats, superHeroInterface, Work } from "./ApiInterface";

export class APIModule implements superHeroInterface{
    id: string;
    name: string;
    powerstats:Powerstats;
    biography:Biography;
    appearance: Appearance;
    work: Work;
    connections: Connections;
    image: Image;
    
    constructor(id:string,name:string,powerstate:Powerstats,biography:Biography,appearance:Appearance,work:Work,connection:Connections,image:Image){
        this.id=id;
        this.name=name;
        this.powerstats=powerstate;
        this.biography=biography;
        this.appearance=appearance;
        this.work=work;
        this.connections=connection;
        this.image=image;
    }
}

export const sendObjectToClass=(objArr:any[]):APIModule[]=>{
   return objArr.map((item:any,index:any)=>{
        return new APIModule(item.id,item.name,item.powerstate,item.biography,item.appearance,item.work,item.connection,item.image)
    })
}

