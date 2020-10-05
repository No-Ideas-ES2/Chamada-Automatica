import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TipoUsuario } from './tipo-usuario.enum';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @Column({
    type: 'enum',
    enum: TipoUsuario,
    default: TipoUsuario.NENHUM,
  })
  tipo: TipoUsuario;

  @Column()
  @CreateDateColumn()
  readonly criadoEm: Date;

  @Column()
  @UpdateDateColumn()
  readonly atualizadoEm: Date;

  @Column()
  @DeleteDateColumn()
  readonly excluidoEm: Date;
}
