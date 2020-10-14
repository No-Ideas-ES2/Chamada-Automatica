import DefaultEntity from 'src/common/interfaces/default-entity.interface'
import { Turma } from 'src/turmas/turma.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class Aula extends DefaultEntity {
  @Column()
  data: Date

  /**
   * Tempo em minutos da duração da Aula
   */
  @Column()
  duracao: number

  @ManyToOne(() => Turma)
  turma: Turma
}
