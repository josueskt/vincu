import { Injectable, NotFoundException } from '@nestjs/common';
import { MessageDto } from 'src/common/message.dto';
import { SqlService } from 'src/sql/sql.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegistroUsuarioService {



    constructor(public sql: SqlService) { }

   
    async register(user:any) {
      const asaltos = 10;
      try {
       
          const existe = await this.sql.query(
            'Select email from usuario where email = $1',
            [user.email],
          );
          if (existe.length) {
           return  new MessageDto('Usuario ya existe');
          }
          if (!existe.length) {
            const salt = await bcrypt.genSalt(asaltos);
            const hashedPassword = await bcrypt.hash(user.password, salt);
            this.sql.query(
                'INSERT INTO usuario(cedula,email,password,nombres,fk_rol) values($1,$2,$3,$4,$5)',
                [
                  user.cedula,
                  user.email,
                  hashedPassword,
                  user.nombre,
                  user.rol
                
                ],
              );
            
          }
        
        return new MessageDto('Usuario creado');
      } catch (error) {
        throw new NotFoundException(new MessageDto('Error al crear usuarios '+error));
      }
    }
  
   
  
  
    
  
  
    




}
