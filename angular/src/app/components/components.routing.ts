import { AccordionComponent } from "./accordion/accordion.component";
import { AlertComponent } from "./alert/alert.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CollapseComponent } from "./collapse/collapse.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { ModalComponent } from "./modal/modal.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { PopoverComponent } from "./popover/popover.component";
import { ProgressComponent } from "./progress/progress.component";
import { RatingComponent } from "./rating/rating.component";
import { Routes } from "@angular/router";
import { TabsComponent } from "./tabs/tabs.component";
import { TimepickerComponent } from "./timepicker/timepicker.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { TypeaheadComponent } from "./typeahead/typeahead.component";

export const ComponentsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "buttons",
        component: ButtonsComponent,
        data: {
          heading: "Buttons"
        }
      },
      {
        path: "progress",
        component: ProgressComponent,
        data: {
          heading: "Progress bars"
        }
      },
      {
        path: "pagination",
        component: PaginationComponent,
        data: {
          heading: "Pagination"
        }
      },
      {
        path: "accordion",
        component: AccordionComponent,
        data: {
          heading: "Accordion"
        }
      },
      {
        path: "alert",
        component: AlertComponent,
        data: {
          heading: "Alert"
        }
      },
      {
        path: "carousel",
        component: CarouselComponent,
        data: {
          heading: "Carousel"
        }
      },
      {
        path: "collapse",
        component: CollapseComponent,
        data: {
          heading: "Collapse"
        }
      },
      {
        path: "datepicker",
        component: DatepickerComponent,
        data: {
          heading: "Datepicker"
        }
      },
      {
        path: "dropdown",
        component: DropdownComponent,
        data: {
          heading: "Dropdown"
        }
      },
      {
        path: "modal",
        component: ModalComponent,
        data: {
          heading: "Modal"
        }
      },
      {
        path: "popover",
        component: PopoverComponent,
        data: {
          heading: "Popovers"
        }
      },
      {
        path: "rating",
        component: RatingComponent,
        data: {
          heading: "Rating"
        }
      },
      {
        path: "tabs",
        component: TabsComponent,
        data: {
          heading: "Tabs"
        }
      },
      {
        path: "timepicker",
        component: TimepickerComponent,
        data: {
          heading: "Timepicker"
        }
      },
      {
        path: "tooltip",
        component: TooltipComponent,
        data: {
          heading: "Tooltips"
        }
      },
      {
        path: "typeahead",
        component: TypeaheadComponent,
        data: {
          heading: "Typeahead"
        }
      }
    ]
  }
];
