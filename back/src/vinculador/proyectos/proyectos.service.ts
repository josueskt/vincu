import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/sql/sql.service';

@Injectable()
export class ProyectosService {

    constructor(public sql: SqlService ) {}    

    async create(proyectos: any) {
        try {
            this.sql.query(
                'INSERT INTO proyecto(nombre,fk_fundacion) values($1,$2)',
                [
                    proyectos.nombre,
                    proyectos.fk_fundacion
                ],
            );
            return 'Proyecto creado';
        } catch (error) {
            throw new Error('Error al crear el proyecto'+error);
        }
    }

    async getAll() {
        return this.sql.query('SELECT * FROM proyecto');
    }  
}
