import { type NestInterceptor, type ExecutionContext, type CallHandler } from '@nestjs/common';
import { type Observable } from 'rxjs';
export declare class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, call: CallHandler): Observable<any>;
}
