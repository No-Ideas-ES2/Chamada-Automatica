import { IsNumber, IsOptional, IsUUID } from 'class-validator'

export default class AtualizarChamadaDto {
  @IsOptional()
  @IsUUID()
  idAula?: string

  @IsNumber()
  @IsOptional()
  carencia?: number
}
