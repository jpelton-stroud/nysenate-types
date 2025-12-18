declare namespace NYSOpenLegislation {
    namespace APIResponse {
        interface APIResponse {
            success: boolean;
            message: string;
            responseType: string;
            total: number;
            offsetStart: number;
            offsetEnd: number;
            limit: number;
            result: {
                items: any[];
                size: number;
            };
        }
    }
}
