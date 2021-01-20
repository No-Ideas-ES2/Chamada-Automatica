export enum EnumTipoUsuario {
  ADMIN = 'admin',
  ALUNO = 'aluno',
  PROFESSOR = 'professor'
}

export class Usuario {
  id: string
  nome: string
  email: string
  tipo: EnumTipoUsuario
  criadoEm: Date
  atualizadoEm: Date
}