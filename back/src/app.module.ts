import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqlService } from './sql/sql.service';
import { LoginService } from './login/login.service';
import { LoginController } from './login/login.controller';
import { RegistroUsuarioController } from './registro-usuario/registro-usuario.controller';
import { RegistroUsuarioService } from './registro-usuario/registro-usuario.service';
import { FundacionController } from './vinculador/fundacion/fundacion.controller';
import { FundacionService } from './vinculador/fundacion/fundacion.service';
import { ProyectosController } from './vinculador/proyectos/proyectos.controller';
import { ProyectosService } from './vinculador/proyectos/proyectos.service';
import { MicroProyectoService } from './vinculador/micro_proyecto/micro_proyecto.service';
import { MicroProyectoController } from './vinculador/micro_proyecto/micro_proyecto.controller';


@Module({
  imports: [],
  controllers: [AppController , LoginController, RegistroUsuarioController, FundacionController, ProyectosController, MicroProyectoController],
  providers: [AppService , SqlService , LoginService , RegistroUsuarioService, FundacionService, ProyectosService, MicroProyectoService],
})
export class AppModule {}
