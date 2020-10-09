import { IsDateString, IsNotEmpty, IsNumber, IsUUID } from 'class-validator'

export default class CriarAulaDto {
  @IsDateString()
  data: Date

  @IsNumber()
  duracao: number

  @IsNotEmpty()
  @IsUUID()
  idTurma: string
}
