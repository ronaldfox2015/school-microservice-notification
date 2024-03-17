import { IsOptional, IsString } from 'class-validator';

export class MailOptionsInput {
  @IsString()
  to: string

  @IsString()
  subject: string

  @IsString()
  templateName: string

  @IsOptional()
  data: object[]
}
