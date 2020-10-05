import { IsNotEmpty, IsUUID } from 'class-validator';

export class CriarDisciplinaDto {
  @IsNotEmpty()
  codigo: string;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsUUID()
  idProfessor: string;
}
