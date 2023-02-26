import { calcInterface } from "./calcInterface";

export class Calculation implements calcInterface {
  ename: string;
  role: string;
  hourPay: number;
  hourInDay: number;
  workDayInWeek: number;
  noWeekWorkYear: number;
  bonuseOverTime: number;
  constructor(
    e: string,
    rol: string,
    hPay: number,
    hDay: number,
    wdInWeek: number,
    noWeekYear: number,
    bOverTime: number
  ) {
    this.ename = e;
    this.role = rol;
    this.hourPay = hPay;
    this.hourInDay = hDay;
    this.workDayInWeek = wdInWeek;
    this.noWeekWorkYear = noWeekYear;
    this.bonuseOverTime = bOverTime;
  }
  calcationValue():number {
    const total = this.workDayInWeek * this.hourInDay;
  return total;
  }
}

// // return new Calculation(list['ename'],list.erole,list.ehpayrate,list.eworkhourday,list.ewdayweek,list.enoweekyear,list.ebovertime);
// export function listOfEmployee(list:Map<any,any>){
//   let myList:Calculation[] = [];
//   list.forEach((v, i) => {
//     console.log(v);
    
//     myList.push(new Calculation(v['ename'],v['erole'],v['ehpayrate'],v['eworkhourday'],v['ewdayweek'],v['enoweekyear'],v['ebovertime']));
//   });
//   return myList;
// }

// return new Calculation(list['ename'],list.erole,list.ehpayrate,list.eworkhourday,list.ewdayweek,list.enoweekyear,list.ebovertime);
export function listOfEmployee(lists:any[]){
  return lists.map(list => {
    return new Calculation(list.ename,list.erole,list.ehpayrate,list.eworkhourday,list.ewdayweek,list.enoweekyear,list.ebovertime);
  });
}