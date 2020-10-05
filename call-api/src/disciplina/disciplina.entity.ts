import { Usuario } from 'src/usuarios/usuarios.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Disciplina {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  codigo: string;

  @Column()
  nome: string;

  @ManyToOne(() => Usuario)
  professor: Usuario;

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
