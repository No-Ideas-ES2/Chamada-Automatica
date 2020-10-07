import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DisciplinaModule } from './disciplina/disciplinas.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';
import { TurmasModule } from './turmas/turmas.module';
import { AulasController } from './aulas/aulas.controller';
import { AulasModule } from './aulas/aulas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    AuthModule,
    UsuariosModule,
    DisciplinaModule,
    TurmasModule,
    AulasModule,
  ],
  controllers: [AppController, AulasController],
  providers: [AppService],
})
export class AppModule {}
