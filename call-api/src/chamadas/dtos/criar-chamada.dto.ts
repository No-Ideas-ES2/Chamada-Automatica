import { IsNumber, IsOptional, IsUUID } from 'class-validator'

export default class CriarChamadaDto {
  @IsUUID()
  idAula: string

  @IsNumber()
  @IsOptional()
  carencia?: number
}
