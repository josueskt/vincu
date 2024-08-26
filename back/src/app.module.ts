import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqlService } from './sql/sql.service';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';
import { RegistroUsuarioController } from './registro-usuario/registro-usuario.controller';
import { RegistroUsuarioService } from './registro-usuario/registro-usuario.service';

@Module({
  imports: [],
  controllers: [AppController , LoginController, RegistroUsuarioController ],
  providers: [AppService , SqlService , LoginService , RegistroUsuarioService],
})
export class AppModule {}
