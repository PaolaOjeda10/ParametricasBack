import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
export declare class LoginService {
    private httpService;
    private jwtTokenService;
    constructor(httpService: HttpService, jwtTokenService: JwtService);
    login(data: any): Promise<Observable<any>>;
    loginWithCredentials(user: any): Promise<{
        id: any;
        roles: any;
        accessToken: any;
        access_token: string;
    }>;
}
