import { Chamada } from 'src/chamadas/chamada.entity'
import { Usuario } from 'src/usuarios/usuarios.entity'
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'

@Entity()
export class Presenca {
  @PrimaryColumn()
  chamadaId: string

  @PrimaryColumn()
  alunoId: string

  @Column()
  data: Date

  @ManyToOne(
    () => Chamada,
    chamada => chamada.presencas
  )
  chamada: Chamada

  @ManyToOne(
    () => Usuario,
    aluno => aluno.presencas
  )
  aluno: Usuario
}
