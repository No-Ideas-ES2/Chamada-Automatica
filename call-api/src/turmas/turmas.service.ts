import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { TipoUsuario } from 'src/usuarios/tipo-usuario.enum'
import { Usuario } from 'src/usuarios/usuarios.entity'
import { UsuariosService } from 'src/usuarios/usuarios.service'
import { FindOneOptions, Repository } from 'typeorm'
import { CriarTurmaDto } from './dtos/criar-turma.dto'
import { Turma } from './turma.entity'

@Injectable()
export class TurmasService {
  constructor(private repository: Repository<Turma>, private readonly usuarioService: UsuariosService) {}

  async criar(criarTurma: CriarTurmaDto): Promise<Turma> {
    const usuario = await this.buscarUsuario(criarTurma.idProfessor, TipoUsuario.PROFESSOR)

    const turma = this.repository.create()
    turma.professor = usuario
    return this.repository.save(turma)
  }

  async adicionarAluno(id: string, idAluno: string): Promise<void> {
    const turma = await this.buscarTurma(id)
    const aluno = await this.buscarUsuario(idAluno, TipoUsuario.ALUNO)

    if (turma.alunos.some(al => al.id == aluno.id)) {
      throw new BadRequestException('Aluno já cadastrado nesta turma!')
    }
    turma.alunos.push(aluno)

    this.repository.save(turma)
  }

  async buscarTodas(): Promise<Turma[]> {
    return this.repository.find()
  }

  async buscarPorId(id: string): Promise<Turma> {
    return this.buscarTurma(id, true)
  }

  async buscarPorProfessor(idProfessor: string): Promise<Turma[]> {
    return this.repository.find({
      where: { professor: idProfessor },
      relations: ['professor'],
    })
  }

  private async buscarTurma(id: string, populate = false): Promise<Turma> {
    let options: FindOneOptions

    if (populate) {
      options = { relations: ['professor'] }
    }
    const turma = await this.repository.findOne(id, options)
    if (turma) {
      return turma
    }
    throw new NotFoundException('A turma não existe!')
  }

  private async buscarUsuario(id: string, tipo: TipoUsuario): Promise<Usuario> {
    const usuario = await this.usuarioService.buscarPorId(id)

    if (usuario) {
      if (usuario.tipo == tipo) {
        return usuario
      } else {
        throw new BadRequestException(`Usuário informado não é ${tipo}!`)
      }
    } else {
      throw new BadRequestException('Usuário informado não existe!')
    }
  }
}
