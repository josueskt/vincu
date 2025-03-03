import { Body, Controller, Get, Post } from '@nestjs/common';
import { FundacionService } from './fundacion.service';
import { Fundacion } from './fundacion.interface';

@Controller('fundacion')
export class FundacionController {

    constructor(private fundacionService: FundacionService) {}

    @Post()
    create(@Body() fundacion: Fundacion) {
        return this.fundacionService.create(fundacion);
    }
    @Get()
    getAll() {
        return this.fundacionService.getAll();
    }
    @Get(':id')
    getOne(id: number) {
        return this.fundacionService.getOne(id);
    }
}
