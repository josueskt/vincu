import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/sql/sql.service';

@Injectable()
export class MicroProyectoService {

    constructor(public sql: SqlService) {}

    async create(micro_proyecto: any) {
        try {
            this.sql.query(
                'INSERT INTO micro_proyecto(titulo,fecha_inicio,fecha_fin,fk_proyecto,c_y_l,plazo_ejeucion) values($1,$2,$3,$4,$5,$6)',
                [
                    micro_proyecto.titulo,
                    micro_proyecto.fecha_inicio,
                    micro_proyecto.fecha_fin,
                    micro_proyecto.fk_proyecto,
                    micro_proyecto.c_y_l,
                    micro_proyecto.plazo_ejeucion
                ],
            );
            return 'Micro proyecto creado';
        } catch (error) {
            throw new Error('Error al crear el micro proyecto'+error);
        }
    }           

    async getAll() {
        return this.sql.query('SELECT * FROM micro_proyecto');
    }   
}
