declare namespace NYSOpenLegislation {
  interface ShortBillId {
    basePrintNo: string;
    session: number;
    basePrintNoStr: string;
  }
  interface BillId extends ShortBillId {
    printNo: string;
    version: string;
  }
  interface BillType {
    chamber: "ASSEMBLY" | "SENATE";
    desc: string;
    resolution: boolean;
  }
  interface BillStatus {
    statusType: string;
    statusDesc: string;
    actionDate: string;
    committeeName: string;
    billCalNo: number;
  }
  interface BillActionItem {
    billId: BillId;
    date: string;
    chamber: "SENATE" | "ASSEMBLY";
    sequenceNo: number;
    text: string;
  }
  interface BillInfo extends ShortBillId {
    printNo: string;
    billType: BillType;
    title: string;
    activeVersion: string;
    publishedDateTime: string;
    substitutedBy: string | null;
    sponsor: {
      member: Member;
      budget: boolean;
      rules: boolean;
      redistricting: boolean;
    };
    reprintOf: string | null;
    summary: string;
    signed: boolean;
    adpoted: boolean;
    vetoed: boolean;
    status: BillStatus;
    milestones: {
      items: BillStatus[];
      size: number;
    };
    actions: {
      items: BillActionItem[];
      size: number;
    };
    publishStatusMap: {
      items: {
        [key: string]: {
          version: string;
          published: boolean;
          effectDateTime: string;
        };
      };
      size: number;
    };
    programInfo: null; //TODO: find out what this is
  }
  interface BillAmendment extends ShortBillId {
    printNo: string;
    version: string;
    publishDate: string;
    sameAs: {
      items: []; //TODO: need examples
      size: number;
    };
    memo: string;
    lawSection: string;
    lawCode: string;
    actClause: string;
    fullTextFormats: string[];
    fullText?: string;
    fullTextHtml: string;
    fullTextTemplate: string;
    coSponsors: {
      items: Member[];
      size: number;
    };
    multiSponsors: {
      items: Member[];
      size: number;
    };
    uniBill: boolean;
    relatedLaws: {
      items: {}; //TODO: need examples
      size: number;
    };
    stricken: boolean;
  }
  interface Bill extends BillInfo {
    year: number;
    amendmentVersions: {
      items: string[];
      size: number;
    };
    amendments: {
      items: {
        [key: string]: BillAmendment;
      };
      size: number;
    };
    votes: {
      items: []; //TODO: need examples
      size: number;
    };
    vetoMessages: {
      items: []; //TODO: need examples
      size: number;
    };
    approvalMessage: string | null;
    additionalSponsors: {
      items: SessionMember[];
      size: number;
    };
    pastCommittees: {
      items: Committee[];
      size: number;
    };
    previousVersions: {
      items: BillId[]; //TODO: need examples
      size: number;
    };
    committeeAgendas: {
      items: []; //TODO: complete after doing committees
      size: number;
    };
    calendars: {
      items: []; //TODO: complete after doing calendars
      size: number;
    };
    billInfoRefs?: {
      items: {
        [key: string]: BillInfo;
      };
      size: number;
    };
  }
}
