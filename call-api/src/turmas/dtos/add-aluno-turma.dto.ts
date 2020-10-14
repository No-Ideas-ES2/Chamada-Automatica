import { IsNotEmpty, IsUUID } from 'class-validator'

export class AddAlunoTurmaDto {
  @IsNotEmpty()
  @IsUUID()
  idAluno: string
}
