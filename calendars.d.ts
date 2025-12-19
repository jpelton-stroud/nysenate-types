declare namespace NYSOpenLegislation {
  interface Calendar<T> {
    year: number;
    calendarNumber: number;
    floorCalendar: T;
    supplementalCalendars: Items<T>;
    activeLists: Items<T>;
    calDate: string;
  }
  interface ShortCalendar {
    year: number;
    calendarNumber: number;
    version: string;
    calDate: string;
    releaseDateTime: string;
    totalEntries: number;
  }
  interface CalendarEntry extends BillInfo {
    billCalNo: number;
    selectedVersion: string;
    sectionType: string;
    subBillInfo: null; //TODO: find out what this is
    billHigh: boolean;
  }
  interface FullCalendar extends ShortCalendar {
    entriesBySection: {
      items: {
        [key: string]: {
          items: CalendarEntry[];
          size: number;
        };
      };
      size: number;
    };
  }
}
