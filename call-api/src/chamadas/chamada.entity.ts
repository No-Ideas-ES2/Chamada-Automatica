import { Aula } from 'src/aulas/aula.entity'
import { DefaultEntity } from 'src/common/interfaces/default-entity.interface'
import { Presenca } from 'src/presencas/presenca.entity'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'

@Entity()
export class Chamada extends DefaultEntity {
  @ManyToOne(() => Aula)
  aula: Aula

  @Column()
  carencia: number

  @OneToMany(
    () => Presenca,
    presenca => presenca.chamada
  )
  presencas: Presenca[]
}
