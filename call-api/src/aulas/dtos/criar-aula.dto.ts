import { IsDateString, IsNotEmpty, IsUUID } from 'class-validator'

export default class CriarAulaDto {
  @IsDateString()
  data: Date

  @IsNotEmpty()
  @IsUUID()
  idTurma: string
}
