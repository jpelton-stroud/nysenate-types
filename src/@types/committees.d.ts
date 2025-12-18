declare namespace NYSOpenLegislation {
  namespace Committees {
    interface CommitteeMember extends Members.Member {
      sequenceNo: number;
      title: "CHAIR" | "MEMBER";
    }
    interface CommitteeId {
      chamber: "SENATE";
      name: string;
    }
    interface Committee {
      chamber: "SENATE";
      name: string;
      sessionYear: number;
      referenceDate: string;
      reformed: null; //TODO: find out what this is
      location: string;
      meetDay: string;
      meetTime: string;
      meetAltWeek: boolean;
      meetAltWeekText: string;
      committeeMembers: {
        items: CommitteeMember[];
        size: number;
      };
    }
  }
}
