import DefaultEntity from 'src/common/interfaces/default-entity.interface'
import { Disciplina } from 'src/disciplina/disciplina.entity'
import { Usuario } from 'src/usuarios/usuarios.entity'
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm'

@Entity()
export class Turma extends DefaultEntity {
  @Column()
  descricao: string

  @ManyToOne(() => Usuario)
  professor: Usuario

  @ManyToOne(() => Disciplina)
  disciplina: Disciplina

  @ManyToMany(() => Usuario)
  @JoinTable()
  alunos: Usuario[]
}
