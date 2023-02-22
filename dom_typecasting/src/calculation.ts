import { calcInterface } from "./calcInterface";

class Calculation implements calcInterface {
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
  calcationValue(): string[] {
    throw new Error("Method not implemented.");
  }
}
