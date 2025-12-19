declare namespace NYSOpenLegislation {
  interface Items<T> {
    items: T;
    size: number;
  }
  interface APIBaseResponse {
    success: boolean;
    message: string;
    responseType: string;
  }
  interface APIResponseSuccess<T> extends APIBaseResponse {
    success: true;
    total?: number;
    offsetStart?: number;
    offsetEnd?: number;
    limit?: number;
    result: T | Items<T>;
  }
  interface APIResponseError extends APIBaseResponse {
    success: false;
    errorCode: number;
    errorData?: {
      [key: string]: string | number;
    };
    errorDataType?: string;
  }
  type APIResponse<T> = APIResponseSuccess<T> | APIResponseError;
}
