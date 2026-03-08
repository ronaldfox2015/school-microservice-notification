import { YoutubeRepository } from '@src/context/mail/domain/youtube/youtube.repository'
import { Logger } from '@common/application/service/logger.service'

export class YoutubeSearchService {
    constructor(
        private readonly youtubeRepository: YoutubeRepository,
        private readonly logger: Logger
    ) { }

    async execute(query: string): Promise<string[]> {
        try {
            this.logger.log(`Buscando videos en YouTube para: ${query}`)
            return await this.youtubeRepository.search(query)
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : String(error)
            const errorStack = error instanceof Error ? error.stack : undefined
            this.logger.error(`Error en YoutubeSearchService: ${errorMessage}`, { trace: errorStack })
            throw error
        }
    }
}
