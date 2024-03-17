import { Module, type OnApplicationBootstrap } from '@nestjs/common'
import * as fs from 'fs'

@Module({})
export class LoggingModule implements OnApplicationBootstrap {
  public onApplicationBootstrap (): void {
    const timestamp: number = new Date().getTime()
    const logStream = fs.createWriteStream(`logs/${timestamp}.json`, {
      flags: 'a'
    })
    console.log = (...args: any[]) => {
      const logEntry =
        {
          timestamp: new Date().toISOString(),
          message: args
        }
      logStream.write(`${JSON.stringify(logEntry)}\n`)
    }
  }
}
