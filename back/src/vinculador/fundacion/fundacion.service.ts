import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/sql/sql.service';

@Injectable()
export class FundacionService {
    constructor(public sql: SqlService) {}

    async create(fundacion: any) {
        try {
            this.sql.query(
                'INSERT INTO fundacion(ruc,nombre,razon_social,telefono,email,provincia,canton,parroquia,direccion,fk_representante_legal,fk_tutor_empresarial) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
                [
                    fundacion.ruc,
                    fundacion.nombre,
                    fundacion.razon_social,
                    fundacion.telefono,
                    fundacion.email,
                    fundacion.provincia,
                    fundacion.canton,
                    fundacion.parroquia,
                    fundacion.direccion,
                    fundacion.fk_representante_legal,
                    fundacion.fk_tutor_empresarial

                ],
            );
            return 'Fundacion creada';
        } catch (error) {
            throw new Error('Error al crear la fundacion'+error);
        }
    }

    async getAll() {
        return this.sql.query('SELECT * FROM fundacion');
    }

    async getOne(id_funcadion: number) {
  return this.sql.query('SELECT * FROM fundacion WHERE id_funcadion = $1', [id_funcadion]);
}

}
