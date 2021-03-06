import { Component, Injectable } from "@angular/core";
import {
  NgbCalendar,
  NgbCalendarPersian,
  NgbDateStruct,
  NgbDatepickerI18n
} from "@ng-bootstrap/ng-bootstrap";

const WEEKDAYS_SHORT = ["د", "س", "چ", "پ", "ج", "ش", "ی"];
const MONTHS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند"
];

@Injectable()
export class NgbDatepickerI18nPersian extends NgbDatepickerI18n {
  getWeekdayShortName(weekday: number) {
    return WEEKDAYS_SHORT[weekday - 1];
  }
  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }
  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.year}-${this.getMonthFullName(date.month)}-${date.day}`;
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-datepicker-jalali",
  templateUrl: "./datepicker-jalali.html",
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarPersian },
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian }
  ]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdDatepickerJalali {
  model: NgbDateStruct;
  date: { year: number; month: number };

  constructor(private calendar: NgbCalendar) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
