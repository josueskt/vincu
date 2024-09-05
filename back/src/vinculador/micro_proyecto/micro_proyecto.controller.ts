import { Body, Controller, Get, Post } from '@nestjs/common';
import { MicroProyectoService } from './micro_proyecto.service';
import { MicroProyecto } from './micro_proyecto.interface';

@Controller('micro-proyecto')
export class MicroProyectoController {

    constructor(private microProyectoService: MicroProyectoService) {}


    @Post()
    create(@Body() micro_proyecto: MicroProyecto) {
        return this.microProyectoService.create(micro_proyecto);
    }   

    @Get()
    getAll() {
        return this.microProyectoService.getAll();
    }
}
