import { type CallHandler, type ExecutionContext, Injectable, type NestInterceptor, Logger } from '@nestjs/common'
import { type Observable, tap } from 'rxjs'
import { INFO } from '@common/domain/enum/logger.enum'

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger()
  intercept (
    context: ExecutionContext,
    next: CallHandler
  ): Observable<any> {
    let request = context.switchToHttp().getRequest()
    let response = context.switchToHttp().getResponse()
    const { originalUrl, method, params, query, body, headers } = request
    delete params['0']
    const startTime = Date.now()
    request = { params, query, body }
    return next.handle().pipe(
      tap((data) => {
        if (!String(originalUrl).includes('health')) {
          const parameterType = 'response'
          response = data
          const endTime = Date.now()
          const responseTime = endTime - startTime
          this.logger.log(INFO, {
            originalUrl,
            method,
            params,
            query,
            body,
            headers,
            parameterType,
            request,
            response,
            responseTime
          })
        }
      })
    )
  }
}
