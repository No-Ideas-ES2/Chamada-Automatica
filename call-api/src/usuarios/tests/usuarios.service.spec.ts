import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { getRepository } from 'typeorm';
import { Usuario } from '../usuarios.entity';
import { UsuariosService } from '../usuarios.service';

describe('UsuariosService', () => {
  let usuariosService: UsuariosService;
  let findOne: jest.Mock;
  let findOneOrFail: jest.Mock;

  beforeEach(async () => {
    findOne = jest.fn();
    findOneOrFail = jest.fn();
    const module = await Test.createTestingModule({
      providers: [
        UsuariosService,
        {
          provide: getRepositoryToken(Usuario),
          useValue: { findOne, findOneOrFail },
        },
      ],
    }).compile();
    usuariosService = await module.get(UsuariosService);
  });

  // describe('buscando usuário por email', () => {
  //   describe('e o usuário existe', () => {
  //     let usuario: Usuario;

  //     beforeEach(() => {
  //       usuario = new Usuario();
  //       findOneOrFail.mockReturnValue(Promise.resolve(Usuario));
  //     });
  //     it('deveria retornar o usuário', async () => {
  //       const usuarioEncontrado = await usuariosService.buscarPorEmail(
  //         'teste@teste.com',
  //       );
  //       expect(usuarioEncontrado).toEqual(usuario);
  //     });
  //   });
  //   describe('e o usuário não existe', () => {
  //     beforeEach(() => {
  //       findOneOrFail.mockReturnValue(undefined);
  //     });
  //     it('deveria retornar um erro', async () => {
  //       await expect(
  //         usuariosService.buscarPorEmail('teste@teste.com'),
  //       ).rejects.toThrow();
  //     });
  //   });
  // });
});
