declare namespace NYSOpenLegislation {
  namespace Calendars {
    interface FloorCalendarSummary {
      year: number;
      calendarNumber: number;
      version: string;
      calDate: string;
      releastDateTime: string;
      totalEntries: number;
    }
    interface Summary {
      year: number;
      calendarNumber: number;
      floorCalendar: FloorCalendarSummary;
      supplementalCalendars: {
        items: {
          [key: string]: FloorCalendarSummary;
        };
        size: number;
      };
      activeLists: {
        items: {
          [key: string]: {
            year: number;
            calendarNumber: number;
            sequenceNumber: number;
            calDate: string;
            releastDateTime: string;
            notes: string;
            totalEntries: number;
          };
        };
        size: number;
      };
      calDate: string;
    }
    interface Entry extends Bills.Info {
      programInfo: null; //TODO: find out what this is
      billCalNo: number;
      selectedVersion: string;
      subBillInfo: null; //TODO: find out what this is
      billHigh: boolean;
    }
    interface Calendar extends Summary {
      entriesBySection: {
        items: {
          [key: string]: {
            items: Entry[];
            size: number;
          };
        };
        size: number;
      };
      supplementalCalendars: {
        items: {
          [key: string]: Calendar;
        };
        size: number;
      };
    }
  }
}
