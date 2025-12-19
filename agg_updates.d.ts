declare namespace NYSOpenLegislation {
  interface TokenUpdate {
    id: {
      [key: string]: number | string;
    };
    contentType: string;
    sourceId: string;
    sourceDateTime: string;
    processedDateTime: string;
  }
  interface DigestUpdate extends TokenUpdate {
    action: string;
    scope: string;
    fields: {
      [key: string]: string;
    };
    fieldCount: number;
  }
}
