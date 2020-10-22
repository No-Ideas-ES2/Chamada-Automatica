import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { UUIDPipe } from '../common/pipes/params-pips.pipe'
import { AtualizarUsuarioDto } from './dtos/atualizar-usuario.dto'
import { CriarUsuarioDto } from './dtos/criar-usuario.dto'
import { Usuario } from './usuarios.entity'
import { UsuariosService } from './usuarios.service'

@Controller('/api/usuarios')
export class UsuariosController {
  private readonly logger = new Logger(UsuariosController.name)

  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  async criarUsuario(@Body() usuario: CriarUsuarioDto): Promise<Usuario> {
    return this.usuariosService.criarUsuario(usuario)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async buscarUsuarios(): Promise<Usuario[]> {
    return this.usuariosService.buscarTodos()
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async buscarUsuario(@Param('id', UUIDPipe) id: string): Promise<Usuario> {
    return this.usuariosService.buscarUsuario(id)
  }

  @Put('/:id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  async atualizar(@Param('id', UUIDPipe) id: string, @Body() atualizarUsuario: AtualizarUsuarioDto): Promise<Usuario> {
    return this.usuariosService.atualizarUsuario(id, atualizarUsuario)
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async remover(@Param('id', UUIDPipe) id: string): Promise<void> {
    this.usuariosService.remove(id)
  }
}
