import { IsDateString, IsOptional, IsUUID } from 'class-validator'

export default class AtualizarAulaDto {
  @IsDateString()
  @IsOptional()
  data?: Date

  @IsOptional()
  @IsUUID()
  idTurma?: string
}
