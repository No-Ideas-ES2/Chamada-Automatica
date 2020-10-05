import { IsBoolean, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { TipoUsuario } from '../tipo-usuario.enum';

export class CriarUsuarioDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;

  @IsNotEmpty()
  @IsEnum(TipoUsuario)
  tipo: TipoUsuario;
}
