
interface ResponseBase {
  success: boolean;
  message: string;
  responseType: string;
}

interface ResponseSuccess<T> extends ResponseBase {
  success: true;
  result: T | Items<T>;
}

interface ResponseError extends ResponseBase {
  success: false;
  errorCode: number;
  errorData?: {};
  errorDataType?: string;
}

type APIResponse<T> = ResponseSuccess<T> | ResponseError;

interface Items<T> {
  items: T;
  size: number;
}

interface Bill {}
interface BillUpdate {}
interface Member extends SessionMemberMapItem {
  chamber?: "ASSEMBLY" | "SENATE";
  fullName?: string;
  imgName?: string;
  sessionShortNameMap?: {
    [key: string]: SessionMemberMapItem;
  };
  person?: {
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
  };
}
interface SessionMemberMapItem {
  sessionMemberId: number;
  shortName: string;
  sessionYear: number;
  districtCode: number;
  alternate: boolean;
  memberId: number;
}
