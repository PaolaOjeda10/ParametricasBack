import { HttpService } from '@nestjs/axios';
import { Response } from 'express';
import { AbstractController } from 'src/common/dto/abstract-controller.dto';
import { LoginService } from '../service/authentication.service';
export declare class LogInController extends AbstractController {
    private readonly loginService;
    private readonly http;
    constructor(loginService: LoginService, http: HttpService);
    login(body: any, res: Response): Promise<void>;
}
