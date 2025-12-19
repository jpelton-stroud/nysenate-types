declare namespace NYSOpenLegislation {
  namespace Calendars {
    interface Items<T> {
      items: T;
      size: number;
    }
    interface Calendar<T> {
      year: number;
      calendarNumber: number;
      floorCalendar: T;
      supplementalCalendars: Items<T>;
      activeLists: Items<T>;
      calDate: string;
    }
    interface Short {
      year: number;
      calendarNumber: number;
      version: string;
      calDate: string;
      releaseDateTime: string;
      totalEntries: number;
    }
    interface Entry extends Bills.Info {
      billCalNo: number;
      selectedVersion: string;
      sectionType: string;
      subBillInfo: null; //TODO: find out what this is
      billHigh: boolean;
    }
    interface Full extends Short {
      entriesBySection: {
        items: {
          [key: string]: {
            items: Entry[];
            size: number;
          };
        };
        size: number;
      };
    }
  }
}
