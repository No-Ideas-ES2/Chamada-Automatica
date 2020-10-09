import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { Aula } from 'src/aulas/aula.entity'
import DefaultEntity from 'src/common/interfaces/default-entity.interface'
import { Presenca } from 'src/presencas/presenca.entity'

@Entity()
export class Chamada extends DefaultEntity {
  @ManyToOne(() => Aula)
  aula: Aula

  /**
   * Tempo em minutos que a chamada ficará disponível para os alunos
   */
  @Column()
  carencia: number

  @OneToMany(
    () => Presenca,
    presenca => presenca.chamada
  )
  presencas: Presenca[]
}
