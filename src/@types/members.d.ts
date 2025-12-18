declare namespace NYSOpenLegislation {
  namespace Members {
    interface Person {
      personId: number;
      fullName: string;
      firstName: string;
      middleName: string;
      lastName: string;
      email: string;
      prefix: string;
      suffix: string;
      verified: boolean;
      imgName: string;
    }
    interface SessionMember {
      sessionMemberId: number; // The unique ID of the member for a specific session
      shortName: string; // The short name of the member (e.g., "Smith")
      sessionYear: number; // The legislative session year
      districtCode: number; // The district the member represents
      alternate: boolean; // Indicates if the member is an alternate
      memberId: number; // The unique ID of the member (consistent across sessions)
    }
    interface Member extends SessionMember {
      chamber: "SENATE" | "ASSEMBLY";
      incumbent: boolean;
      fullName: string;
      imgName: string;
    }
    interface FullMember extends Member {
      sessionMemberShortMap: { [key: string]: SessionMember };
      person: Person;
    }
  }
}
