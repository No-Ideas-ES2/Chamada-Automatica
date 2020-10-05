import { IsOptional, IsUUID } from 'class-validator';

export class AtualizarDisciplinaDto {
  @IsOptional()
  codigo?: string;

  @IsOptional()
  nome?: string;

  @IsOptional()
  @IsUUID()
  idProfessor?: string;
}
