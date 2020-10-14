import { IsOptional } from 'class-validator'

export class AtualizarDisciplinaDto {
  @IsOptional()
  codigo?: string

  @IsOptional()
  nome?: string
}
