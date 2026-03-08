import { YoutubeRepository } from '@src/context/mail/domain/youtube/youtube.repository'
import { ConfigService } from '@common/domain/helper/config.service'

export class GoogleYoutubeRepository extends YoutubeRepository {
    private readonly apiKey: string
    private readonly apiUrl = 'https://www.googleapis.com/youtube/v3/search'

    constructor(private readonly config: ConfigService) {
        super()
        this.apiKey = this.config.get('YOUTUBE_API_KEY')
    }

    async search(query: string): Promise<string[]> {
        if (!this.apiKey) {
            throw new Error('YOUTUBE_API_KEY no está configurada en las variables de entorno')
        }

        const params = new URLSearchParams({
            part: 'snippet',
            maxResults: '10',
            q: query,
            type: 'video',
            key: this.apiKey
        })

        const response = await fetch(`${this.apiUrl}?${params.toString()}`)

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(`Error en la API de YouTube: ${errorData.error?.message || response.statusText}`)
        }

        const data = await response.json()

        return data.items.map((item: any) => `https://www.youtube.com/watch?v=${item.id.videoId}`)
    }
}
