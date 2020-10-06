import { IsNotEmpty } from 'class-validator'

export class CriarTurmaDto {
  @IsNotEmpty()
  idProfessor: string
}
