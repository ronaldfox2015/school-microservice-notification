export class ServiceResponseDto {
  code: number
  message: string
  data: object[] = []

  constructor (data: object[], code: number = 200, message: string = 'Petición exitosa.') {
    this.code = code
    this.message = message
    this.data = data
  }
}
