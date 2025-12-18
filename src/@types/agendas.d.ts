declare namespace NYSOpenLegislation {
  namespace Agendas {
    interface AgendaId {
      number: number;
      year: number;
    }
    interface AgendaSummary {
      id: AgendaId;
      weekOf: string;
      publishedDateTime: string;
      totalAddendum: number;
      totalBillsConsidered: number;
      totalBillsVotedOn: number;
      totalCommittees: number;
    }
    interface Addendum {
      agendaId: AgendaId;
      addendumId: string;
      committeeId: Committees.CommitteeId;
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
            billId: Bills.BillId;
            billInfo: Bills.BillInfo;
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
              bill: Bills.ExtendedBillId;
              action: string;
              amended: boolean;
              referCommittee: null; //TODO: find out what this is
              vote: {
                billId: Bills.ExtendedBillId;
                version: string;
                voteType: string;
                sequenceNo: number;
                voteDate: string;
                committee: Committees.CommitteeId;
                memberVotes: {
                  items: {
                    [key: string]: {
                      items: Members.Member[];
                      size: number;
                    };
                    size: number;
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
        agendaId: AgendaId;
        committeeId: Committees.CommitteeId;
        addendum: string;
      };
    }
    interface Agenda extends AgendaSummary {
      committeeId: Committees.CommitteeId;
      committeeAgendas: {
        items: [
          {
            committeeId: Committees.CommitteeId;
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
