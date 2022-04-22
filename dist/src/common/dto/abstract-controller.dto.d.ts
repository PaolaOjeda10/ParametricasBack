import { Messages } from '../constants/response-messages';
import { SuccessResponseDto } from './success-response.dto';
export declare abstract class AbstractController {
    private makeResponse;
    successList(data: any, message?: Messages): SuccessResponseDto;
    successUpdate(data: any, message?: Messages): SuccessResponseDto;
    successDelete(data: any, message?: Messages): SuccessResponseDto;
    successCreate(data: any, message?: Messages): SuccessResponseDto;
    successListRows(data: any, message?: Messages): SuccessResponseDto;
    getUser(req: any): any;
    getAccessTokenCD(req: any): any;
    getUserToken(req: any): {
        id: string;
    };
}
