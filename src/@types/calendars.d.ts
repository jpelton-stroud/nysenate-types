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
    interface CalendarSummary {
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
            }
        };
        size: number;
      };
      calDate: string;
    }
    interface CalendarEntry extends Bills.BillInfo {
        programInfo: null; //TODO: find out what this is
        billCalNo: number;
        selectedVersion: string;
        subBillInfo: null; //TODO: find out what this is
        billHigh: boolean;
    }
    interface Calendar extends CalendarSummary {
        entriesBySection: {
            items: {
                [key: string]: {
                    items: CalendarEntry[];
                    size: number;
                }
            };
            size: number;
        }
        supplementalCalendars: {
            items: {
                [key: string]: Calendar;
            };
            size: number;
        }
    }
  }
}
