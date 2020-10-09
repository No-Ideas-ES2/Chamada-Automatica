import { Injectable, MethodNotAllowedException, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOneOptions, Repository } from 'typeorm'

import { AulasService } from 'src/aulas/aulas.service'
import { Presenca } from 'src/presencas/presenca.entity'
import { TipoUsuario } from 'src/usuarios/tipo-usuario.enum'
import { UsuariosService } from 'src/usuarios/usuarios.service'
import { Chamada } from './chamada.entity'
import CriarPresencaDto from 'src/presencas/dtos/criar-presenca.dto'
import AtualizarChamadaDto from './dtos/atualizar-chamada.dto'
import CriarChamadaDto from './dtos/criar-chamada.dto'

@Injectable()
export class ChamadasService {
  constructor(
    @InjectRepository(Chamada) private readonly chamadaRepository: Repository<Chamada>,
    @InjectRepository(Presenca) private readonly presencaRepository: Repository<Presenca>,
    private readonly aulasService: AulasService,
    private readonly usuariosService: UsuariosService
  ) {}

  async buscarTodasChamadas(): Promise<Chamada[]> {
    return this.chamadaRepository.find()
  }

  async buscarChamadaPorId(id: string): Promise<Chamada> {
    return this.buscarChamada(id, true)
  }

  async criarChamada(criarChamada: CriarChamadaDto): Promise<Chamada> {
    const aula = await this.aulasService.buscarPorId(criarChamada.idAula)
    const chamada = this.chamadaRepository.create()
    chamada.aula = aula
    chamada.carencia = criarChamada.carencia ? criarChamada.carencia : aula.duracao
    return this.chamadaRepository.save(chamada)
  }

  async atualizarChamada(id: string, atualizarChamada: AtualizarChamadaDto): Promise<Chamada> {
    const chamada = await this.buscarChamada(id, true)
    if (atualizarChamada.idAula && chamada.aula.id !== atualizarChamada.idAula) {
      chamada.aula = await this.aulasService.buscarPorId(atualizarChamada.idAula)
    }
    chamada.carencia = atualizarChamada.carencia ? atualizarChamada.carencia : chamada.aula.duracao
    return this.chamadaRepository.save(chamada)
  }

  async removerChamada(id: string): Promise<void> {
    const chamada = await this.buscarChamada(id)
    if (chamada.presencas.length > 0) {
      throw new MethodNotAllowedException('Não é possível remover chamadas com presenças!')
    }
    this.chamadaRepository.softDelete(id)
  }

  async buscarPresencas(idChamada: string): Promise<Presenca[]> {
    const chamada = await this.buscarChamada(idChamada)
    return this.presencaRepository.find({
      where: { chamada },
      relations: ['chamada', 'aluno'],
    })
  }

  async criarPresenca(idChamada: string, criarPresenca: CriarPresencaDto): Promise<void> {
    const chamada = await this.buscarChamada(idChamada)
    const aluno = await this.usuariosService.buscarUsuario(criarPresenca.idAluno, TipoUsuario.ALUNO)
    const presenca = this.presencaRepository.create({ chamada, aluno })
    this.presencaRepository.save(presenca)
  }

  private async buscarChamada(id: string, populate = false): Promise<Chamada> {
    let options: FindOneOptions

    if (populate) {
      options = { relations: ['aula'] }
    }
    const chamada = await this.chamadaRepository.findOne(id, options)
    if (chamada) {
      return chamada
    }
    throw new NotFoundException('A chamada não existe!')
  }
}
