import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TurmasService } from 'src/turmas/turmas.service'
import { FindOneOptions, Repository } from 'typeorm'
import { Aula } from './aula.entity'
import AtualizarAulaDto from './dtos/atualizar-aula.dto'
import CriarAulaDto from './dtos/criar-aula.dto'

@Injectable()
export class AulasService {
  constructor(
    @InjectRepository(Aula) private readonly repository: Repository<Aula>,
    private readonly turmasService: TurmasService
  ) {}

  async buscarTodas(): Promise<Aula[]> {
    return this.repository.find()
  }

  async buscarPorId(id: string): Promise<Aula> {
    return this.buscarAula(id, true)
  }

  async criar(criarAula: CriarAulaDto): Promise<Aula> {
    const turma = await this.turmasService.buscarPorId(criarAula.idTurma)
    const aula = this.repository.create()

    aula.data = criarAula.data
    aula.duracao = criarAula.duracao
    aula.turma = turma
    return this.repository.save(aula)
  }

  async atualizar(id: string, atualizarAula: AtualizarAulaDto): Promise<Aula> {
    const aula = await this.buscarAula(id)
    if (atualizarAula.idTurma) {
      const turma = await this.turmasService.buscarPorId(atualizarAula.idTurma)
      aula.turma = turma
    }
    if (atualizarAula.data) {
      aula.data = atualizarAula.data
    }
    if (atualizarAula.duracao) {
      aula.duracao = atualizarAula.duracao
    }
    return this.repository.save(aula)
  }

  async remover(id: string): Promise<void> {
    await this.buscarAula(id)
    this.repository.softDelete(id)
  }

  private async buscarAula(id: string, populate = false): Promise<Aula> {
    let options: FindOneOptions

    if (populate) {
      options = { relations: ['turma'] }
    }
    const turma = await this.repository.findOne(id, options)
    if (turma) {
      return turma
    }
    throw new NotFoundException('A aula não existe!')
  }
}
