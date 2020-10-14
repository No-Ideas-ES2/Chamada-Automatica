import DefaultEntity from 'src/common/interfaces/default-entity.interface'
import { Column, Entity } from 'typeorm'

@Entity()
export class Disciplina extends DefaultEntity {
  @Column()
  codigo: string

  @Column()
  nome: string
}
