import { IsNotEmpty } from 'class-validator'

export class CriarTurmaDto {
  @IsNotEmpty()
  descricao: string

  @IsNotEmpty()
  idProfessor: string

  @IsNotEmpty()
  idDisciplina: string
}
