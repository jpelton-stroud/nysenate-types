declare namespace NYSOpenLegislation {
  interface FloorTranscript {
    dateTime: string;
    sessionType: string;
    location: string;
    dayType: string;
    text: string;
  }
  interface HearingTranscript {
    id: number;
    filename: string;
    title: string;
    address: string;
    startTime: string;
    endTime: string;
    date: string;
    committees: {
      chamber: string;
      type: string;
      name: string;
    }[];
    text: string;
  }
}
