import { IsUUID } from 'class-validator'

export default class CriarPresencaDto {
  @IsUUID()
  idAluno: string
}
