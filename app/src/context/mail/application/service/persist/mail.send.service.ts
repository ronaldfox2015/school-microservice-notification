import { Injectable } from '@nestjs/common'
import { MailRepository } from '@src/context/mail/domain/mail-repository'
import { MailModel } from '@src/context/mail/domain/mail.model'
import { type MailOptionsDto } from '@src/context/mail/application/dto/mail-options.dto'

import { YoutubeSearchService } from '@src/context/mail/application/service/youtube/youtube-search.service'

@Injectable()
export class MailSendService {
  constructor(
    private readonly mailRepository: MailRepository,
    private readonly youtubeSearchService: YoutubeSearchService
  ) { }

  public async execute(input: MailOptionsDto): Promise<void> {
    const mailModel = new MailModel()
    mailModel.from = 'ronaldfox2015@gmail.com'
    mailModel.to = input.to
    mailModel.subject = input.subject
    mailModel.text = 'Recomendaciones de estudio'

    // Generar recomendaciones de YouTube basadas en los temas en input.data
    let youtubeSection = ''
    if (input.data && Array.isArray(input.data)) {
      const themes = input.data.map((item: any) => item.theme || item.tema || String(item)).filter(Boolean)

      if (themes.length > 0) {
        youtubeSection = '<h3>Videos recomendados para reforzar tus temas:</h3><ul>'
        for (const theme of themes) {
          try {
            const urls = await this.youtubeSearchService.execute(theme)
            if (urls.length > 0) {
              youtubeSection += `<li><strong>${theme}:</strong><br>`
              urls.slice(0, 2).forEach(url => {
                youtubeSection += `<a href="${url}">${url}</a><br>`
              })
              youtubeSection += '</li>'
            }
          } catch (error) {
            console.error(`Error buscando videos para ${theme}:`, error)
          }
        }
        youtubeSection += '</ul>'
      }
    }

    mailModel.html = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Hola,</h2>
        <p>Aquí tienes algunas recomendaciones de videos para reforzar tus estudios:</p>
        ${youtubeSection}
        <p>¡Mucho éxito en tu aprendizaje!</p>
      </div>
    `

    await this.mailRepository.send(mailModel)
  }
}
