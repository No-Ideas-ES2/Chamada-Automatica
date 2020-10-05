import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { exception } from 'console';
import { Repository } from 'typeorm';
import { AtualizarUsuarioDto } from './dtos/atualizar-usuario.dto';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
import { Usuario } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  private readonly logger = new Logger(UsuariosService.name);

  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
  ) {}

  buscarTodos(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  async buscarPorId(id: string): Promise<Usuario> {
    return await this.buscarUsuario(id);
  }

  buscarPorEmail(email: string): Promise<Usuario> {
    return this.usuariosRepository.findOneOrFail({ where: { email } });
  }

  async criarUsuario(criarUsuario: CriarUsuarioDto): Promise<Usuario> {
    const usuario = this.usuariosRepository.create(criarUsuario);
    return this.usuariosRepository.save(usuario);
  }

  async atualizarUsuario(
    id: string,
    atualizarUsuario: AtualizarUsuarioDto,
  ): Promise<Usuario> {
    try {
      const usuario = await this.buscarUsuario(id);
      this.usuariosRepository.merge(usuario,atualizarUsuario);
      return this.usuariosRepository.save(usuario);
    } catch (error) {}
  }

  async remove(id: string): Promise<void> {
    this.buscarUsuario(id);
    await this.usuariosRepository.softDelete(id);
  }

  private async buscarUsuario(id: string): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOne(id);
    if (usuario) {
      return usuario;
    } else {
      throw new NotFoundException(`Usuário inexistente!`);
    }
  }
}
