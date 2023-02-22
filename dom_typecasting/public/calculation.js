class Calculation {
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
        throw new Error("Method not implemented.");
    }
}
export {};
