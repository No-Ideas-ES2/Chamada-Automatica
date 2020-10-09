import { IsDateString, IsNumber, IsOptional, IsUUID } from 'class-validator'

export default class AtualizarAulaDto {
  @IsDateString()
  @IsOptional()
  data?: Date

  @IsNumber()
  @IsOptional()
  duracao?: number

  @IsOptional()
  @IsUUID()
  idTurma?: string
}
