import { DefaultEntity } from 'src/common/interfaces/default-entity.interface'
import { Presenca } from 'src/presencas/presenca.entity'
import { Column, Entity, OneToMany } from 'typeorm'
import { TipoUsuario } from './tipo-usuario.enum'

@Entity()
export class Usuario extends DefaultEntity {
  @Column()
  nome: string

  @Column({ unique: true })
  email: string

  @Column()
  senha: string

  @Column({
    type: 'enum',
    enum: TipoUsuario,
    default: TipoUsuario.NENHUM,
  })
  tipo: TipoUsuario

  @OneToMany(
    () => Presenca,
    presenca => presenca.aluno
  )
  presencas: Presenca[]
}
