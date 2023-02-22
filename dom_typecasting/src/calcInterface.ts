export interface calcInterface {
  ename: string;
  role: string;
  hourPay: number;
  hourInDay: number;
  workDayInWeek: number;
  noWeekWorkYear: number;
  bonuseOverTime: number;
  calcationValue(): string[];
}
