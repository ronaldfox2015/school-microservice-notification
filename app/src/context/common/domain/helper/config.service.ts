import * as dotenv from 'dotenv'
type EnvConfig = Record<string, string | undefined>

export class ConfigService {
  private readonly envConfig: EnvConfig

  constructor () {
    dotenv.config()
    this.envConfig = process.env
  }

  get (key: string): string {
    return this.envConfig[key] ?? ''
  }

  getFilter (keys: string[]): Record<string, any> {
    return keys.reduce((filteredConfig, key) => {
      if (Object.prototype.hasOwnProperty.call(this.envConfig, key)) {
        filteredConfig[key] = this.envConfig[key]
      }
      return filteredConfig
    }, {})
  }

  getDebug (key: string): [string | undefined, string | undefined] {
    const keyError = `${key}_DB_ERROR`
    const keyQuery = `${key}_DB_QUERY`
    return [this.envConfig[keyError], this.envConfig[keyQuery]]
  }
}
