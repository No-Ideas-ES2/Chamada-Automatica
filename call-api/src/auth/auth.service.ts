import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validarUsuario(email: string, senha: string): Promise<any> {
    const usuario = await this.usuariosService.buscarPorEmail(email);

    if (usuario.senha === senha) {
      delete usuario.senha;
      return usuario;
    }
    return null;
  }

  async login(usuario: { id: string; email: string }): Promise<any> {
    const payload = { email: usuario.email, sub: usuario.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
