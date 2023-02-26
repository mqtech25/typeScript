export class Calculation {
    constructor(e, rol, hPay, hDay, wdInWeek, noWeekYear, bOverTime) {
        this.ename = e;
        this.role = rol;
        this.hourPay = hPay;
        this.hourInDay = hDay;
        this.workDayInWeek = wdInWeek;
        this.noWeekWorkYear = noWeekYear;
        this.bonuseOverTime = bOverTime;
    }
    calcationValue() {
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
export function listOfEmployee(lists) {
    return lists.map(list => {
        return new Calculation(list.ename, list.erole, list.ehpayrate, list.eworkhourday, list.ewdayweek, list.enoweekyear, list.ebovertime);
    });
}
