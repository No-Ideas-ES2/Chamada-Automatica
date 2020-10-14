import { IsOptional } from 'class-validator';

export class AtualizarUsuarioDto {
  @IsOptional()
  nome: string;

  @IsOptional()
  senha: string;
}
