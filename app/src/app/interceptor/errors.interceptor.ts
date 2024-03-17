import {
  Injectable,
  type NestInterceptor,
  type ExecutionContext,
  type CallHandler,
  RequestTimeoutException
} from '@nestjs/common'
import { type Observable, throwError, TimeoutError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept (
    context: ExecutionContext,
    call: CallHandler
  ): Observable<any> {
    return call.handle().pipe(
      catchError((error: any): any => {
        if (error instanceof TimeoutError) {
          return throwError(new RequestTimeoutException())
        }
      })
    )
  }
}
