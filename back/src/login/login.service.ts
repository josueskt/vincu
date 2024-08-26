import { Injectable, UnauthorizedException,  } from '@nestjs/common';
import { SqlService } from 'src/sql/sql.service';
import { login } from './login.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { MessageDto } from 'src/common/message.dto';
//import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class LoginService {
  private readonly jwtSecretKey = process.env.Key_Key;
  constructor(public sql: SqlService) {}
  async Login(datos: login) {
    try {
      const email = datos.email;
      const password = datos.password;
      const result = await this.sql.query(
        'SELECT u.cedula ,  u.email,u.password,u.nombres ,r.nombre  FROM usuario AS u INNER JOIN rol AS r ON u.fk_rol = r.id_rol where email = ($1);',
        [email],
      );

      if (result.length === 1) {
        const user = result[0];
   
           
       
          var passwordMatch = await bcrypt.compare(password, user.password);

        

        // Verificar la contraseña

        if (passwordMatch) {
          const token = jwt.sign(
            {
              id_user: user.id_user,
              email: user.email,
              nombre: user.nombres,
              rol: user.nombre,
            },
            this.jwtSecretKey,
            { expiresIn: '7h' }, 
          );

         

          return { token };
        } else {
         return new UnauthorizedException(new MessageDto('contraseña errónea'));        
        }

      } else {
        return new UnauthorizedException(new MessageDto('no existe el usuario'));        
      }
    } catch (error) {
      return new UnauthorizedException(new MessageDto(`Error: ${error} exeption`));      
    }
  }
}
