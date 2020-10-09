import DefaultEntity from 'src/common/interfaces/default-entity.interface'
import { Usuario } from 'src/usuarios/usuarios.entity'
import { Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm'

@Entity()
export class Turma extends DefaultEntity {
  @ManyToOne(() => Usuario)
  professor: Usuario

  @ManyToMany(() => Usuario)
  @JoinTable()
  alunos: Usuario[]
}
