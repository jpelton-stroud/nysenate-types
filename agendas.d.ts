declare namespace NYSOpenLegislation {
  namespace Agendas {
    interface Id {
      number: number;
      year: number;
    }
    interface Summary {
      id: Id;
      weekOf: string;
      publishedDateTime: string;
      totalAddendum: number;
      totalBillsConsidered: number;
      totalBillsVotedOn: number;
      totalCommittees: number;
    }
    interface Addendum {
      agendaId: Id;
      addendumId: string;
      committeeId: Committees.Id;
      modifiedDateTime: string;
      hasVotes: boolean;
      meeting: {
        chair: string;
        location: string;
        meetingDateTime: string;
        notes: string;
      };
      bills: {
        items: [
          {
            billId: Bills.ShortId;
            billInfo: Bills.Info;
            message: string;
          }
        ];
        size: number;
      };
      voteInfo: {
        attendanceList: {
          items: [
            {
              member: Members.Member;
              rank: number;
              party: string;
              attend: string;
            }
          ];
          size: number;
        };
        votesList: {
          items: [
            {
              bill: Bills.Id;
              action: string;
              amended: boolean;
              referCommittee: null; //TODO: find out what this is
              vote: {
                billId: Bills.Id;
                version: string;
                voteType: string;
                sequenceNo: number;
                voteDate: string;
                committee: Committees.Id;
                memberVotes: {
                  items: {
                    [key: string]: {
                      items: Members.Member[];
                      size: number;
                    };
                  };
                  size: number;
                };
                attendance: {
                  remote: {
                    items: Members.Member[];
                    size: number;
                  };
                };
              };
            }
          ];
          size: number;
        };
      };
      committeeAgendaAddendumId: {
        agendaId: Id;
        committeeId: Committees.Id;
        addendum: string;
      };
    }
    interface Agenda extends Summary {
      committeeId: Committees.Id;
      committeeAgendas: {
        items: [
          {
            committeeId: Committees.Id;
            addenda: {
              items: Addendum[];
              size: number;
            };
          }
        ];
        size: number;
      };
    }
  }
}
