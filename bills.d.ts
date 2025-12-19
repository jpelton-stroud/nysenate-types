declare namespace NYSOpenLegislation {
  namespace Bills {
    interface ShortId {
      basePrintNo: string;
      session: number;
      basePrintNoStr: string;
    }
    interface Id extends ShortId {
      printNo: string;
      version: string;
    }
    interface Type {
      chamber: "ASSEMBLY" | "SENATE";
      desc: string;
      resolution: boolean;
    }
    interface Status {
      statusType: string;
      statusDesc: string;
      actionDate: string;
      committeeName: string;
      billCalNo: number;
    }
    interface ActionItem {
      billId: Id;
      date: string;
      chamber: "SENATE" | "ASSEMBLY";
      sequenceNo: number;
      text: string;
    }
    interface Info extends ShortId {
      printNo: string;
      billType: Type;
      title: string;
      activeVersion: string;
      publishedDateTime: string;
      substitutedBy: string | null;
      sponsor: {
        member: Members.Member;
        budget: boolean;
        rules: boolean;
        redistricting: boolean;
      };
      reprintOf: string | null;
      summary: string;
      signed: boolean;
      adpoted: boolean;
      vetoed: boolean;
      status: Status;
      milestones: {
        items: Status[];
        size: number;
      };
      actions: {
        items: ActionItem[];
        size: number;
      };
      publishStatusMap: {
        items: {
          [key: string]: {
            version: string;
            published: boolean;
            effectDateTime: string;
          };
          size: number;
        };
        programInfo: null; //TODO: find out what this is
      };
    }
    interface Amendment extends ShortId {
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
        items: Members.SessionMember[]; //TODO: need examples
        size: number;
      };
      multiSponsors: {
        items: Members.SessionMember[]; //TODO: need examples
        size: number;
      };
      uniBill: boolean;
      relatedLaws: {
        items: {}; //TODO: need examples
        size: number;
      };
      stricken: boolean;
    }
    interface Bill extends Info {
      year: number;
      amendmentVersions: {
        items: {
          [key: string]: Amendment;
          size: number;
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
        items: Members.SessionMember[];
        size: number;
      };
      pastCommittees: {
        items: []; //TODO: complete after doing committees
        size: number;
      };
      previousVersions: {
        items: Id[]; //TODO: need examples
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
          [key: string]: Info;
          size: number;
        };
        size: number;
      };
    }
  }
}
