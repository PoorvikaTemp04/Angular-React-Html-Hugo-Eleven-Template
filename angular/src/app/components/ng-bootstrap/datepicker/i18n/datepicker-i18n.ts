import { Component, Injectable } from "@angular/core";
import { NgbDateStruct, NgbDatepickerI18n } from "@ng-bootstrap/ng-bootstrap";

const I18N_VALUES = {
  fr: {
    weekdays: ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
    months: [
      "Jan",
      "Fév",
      "Mar",
      "Avr",
      "Mai",
      "Juin",
      "Juil",
      "Aou",
      "Sep",
      "Oct",
      "Nov",
      "Déc"
    ]
  }
  // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = "fr";
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  constructor(private i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this.i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this.i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-datepicker-i18n",
  templateUrl: "./datepicker-i18n.html",
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }
  ] // define custom NgbDatepickerI18n provider
})
// tslint:disable-next-line:component-class-suffix
export class NgbdDatepickerI18n {
  model: NgbDateStruct;
}
