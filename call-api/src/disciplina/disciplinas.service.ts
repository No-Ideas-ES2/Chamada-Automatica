import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoUsuario } from 'src/usuarios/tipo-usuario.enum';
import { Usuario } from 'src/usuarios/usuarios.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { FindManyOptions, Repository } from 'typeorm';
import { Disciplina } from './disciplina.entity';
import { AtualizarDisciplinaDto } from './dtos/atualizar-disciplina.dto.';
import { CriarDisciplinaDto } from './dtos/criar-disciplina.dto';

@Injectable()
export class DisciplinasService {
  // private readonly logger = new Logger(DisciplinaService.name);

  constructor(
    @InjectRepository(Disciplina)
    private readonly repositorio: Repository<Disciplina>,
    private readonly usuarioService: UsuariosService,
  ) {}

  buscarTodas(): Promise<Disciplina[]> {
    return this.repositorio.find();
  }

  buscarPorId(id: string): Promise<Disciplina> {
    return this.buscarDisciplina(id);
  }

  buscarPorProfessor(idProfessor: string): Promise<Disciplina[]> {
    return this.repositorio.find({
      where: { professor: idProfessor },
    });
  }

  async criar(criarDisciplina: CriarDisciplinaDto): Promise<Disciplina> {
    try {
      const usuario = await this.buscarUsuarioProfessor(
        criarDisciplina.idProfessor,
      );
      const disciplina = this.repositorio.create(criarDisciplina);
      disciplina.professor = usuario;
      return this.repositorio.save(disciplina);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async atualizar(
    id: string,
    atualizarDisciplina: AtualizarDisciplinaDto,
  ): Promise<Disciplina> {
    try {
      const disciplina = await this.repositorio.findOneOrFail(id);
      if (atualizarDisciplina.idProfessor) {
        const usuario = await this.buscarUsuarioProfessor(
          atualizarDisciplina.idProfessor,
        );

        disciplina.professor = usuario;
      }
      if (atualizarDisciplina.codigo) {
        disciplina.codigo = atualizarDisciplina.codigo;
      }
      if (atualizarDisciplina.nome) {
        disciplina.nome = atualizarDisciplina.nome;
      }
      return this.repositorio.save(disciplina);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remover(id: string): Promise<void> {
    this.buscarDisciplina(id);
    this.repositorio.softDelete(id);
  }

  private async buscarUsuarioProfessor(idProfessor: string): Promise<Usuario> {
    const usuario = await this.usuarioService.buscarPorId(idProfessor);

    if (usuario) {
      if (usuario.tipo == TipoUsuario.PROFESSOR) {
        return usuario;
      } else {
        throw new BadRequestException('Usuário informado não é um Professor!');
      }
    } else {
      throw new BadRequestException('Usuário informado não existe!');
    }
  }

  private async buscarDisciplina(id: string): Promise<Disciplina> {

    const disciplina = this.repositorio.findOne(id, {relations:['professor']});
    if (disciplina) {
      return disciplina;
    }
    throw new NotFoundException('A disciplina não existe!');
  }
}
