import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { Proyectos } from './proyectos.interface';

@Controller('proyectos')
export class ProyectosController {

    constructor(private proyectosService: ProyectosService) {}

    @Post()
    create(@Body() proyectos: Proyectos) {
        return this.proyectosService.create(proyectos);
    }

    @Get()  
    getAll() {
        return this.proyectosService.getAll();
    }


}
