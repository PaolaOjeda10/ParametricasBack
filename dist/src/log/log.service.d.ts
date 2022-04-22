/// <reference types="node" />
export declare class LogService {
    static logsLogstashUrl: string;
    static logsLogstashToken: string;
    static logsFilePath: string;
    static logsEstandarOut: boolean;
    static sistemName: string;
    static getStream(): import("stream").Writable;
    static getLoggerConfig(): {
        pinoHttp: {
            name: string;
            genReqId: (req: any) => any;
            serializers: {
                res(reply: any): {
                    statusCode: any;
                };
                req(request: any): {
                    method: any;
                    url: any;
                };
            };
            level: string;
            prettyPrint: boolean;
            timestamp: () => string;
            customLogLevel: typeof LogService.customLogLevel;
            customSuccessMessage: typeof LogService.customSuccessMessage;
            customErrorMessage: typeof LogService.customErrorMessage;
            customAttributeKeys: {
                req: string;
                res: string;
                err: string;
                responseTime: string;
            };
            transport: {
                target: string;
                options: {
                    colorize: boolean;
                };
            };
        };
    };
    static customSuccessMessage(res: any): string;
    static customErrorMessage(err: any, res: any): string;
    static customLogLevel(res: any, err: any): "error" | "info" | "warn";
    static getPinoHttpConfig(): {
        name: string;
        genReqId: (req: any) => any;
        serializers: {
            res(reply: any): {
                statusCode: any;
            };
            req(request: any): {
                method: any;
                url: any;
            };
        };
        level: string;
        prettyPrint: boolean;
        timestamp: () => string;
        customLogLevel: typeof LogService.customLogLevel;
        customSuccessMessage: typeof LogService.customSuccessMessage;
        customErrorMessage: typeof LogService.customErrorMessage;
        customAttributeKeys: {
            req: string;
            res: string;
            err: string;
            responseTime: string;
        };
        transport: {
            target: string;
            options: {
                colorize: boolean;
            };
        };
    };
}
