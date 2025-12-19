declare namespace NYSOpenLegislation {
  namespace APIResponse {
    interface Items<T> {
      items: T;
      size: number;
    }
    interface BaseResponse {
      success: boolean;
      message: string;
      responseType: string;
    }
    interface Success<T> extends BaseResponse {
      success: true;
      total?: number;
      offsetStart?: number;
      offsetEnd?: number;
      limit?: number;
      result: T | Items<T>;
    }
    interface Error extends BaseResponse {
      success: false;
      errorCode: number;
      errorData?: {
        [key: string]: string | number;
      };
      errorDataType?: string;
    }
    type Response<T> = Success<T> | Error;
  }
}
