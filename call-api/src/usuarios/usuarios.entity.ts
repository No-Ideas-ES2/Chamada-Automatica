import { Column, Entity } from 'typeorm'
import DefaultEntity from 'src/common/interfaces/default-entity.interface'
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
}
