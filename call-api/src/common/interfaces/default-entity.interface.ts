import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export default class DefaultEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  @CreateDateColumn()
  readonly criadoEm: Date

  @Column()
  @UpdateDateColumn()
  readonly atualizadoEm: Date

  @Column()
  @DeleteDateColumn()
  readonly excluidoEm: Date
}
