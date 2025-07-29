import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/DTO/user.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    signIn(username: string, pass: string,): { message: string, token } | { message: string } {
        const user = this.usersService.getUser(username);
        if (user?.password !== pass) {
            return { message: 'Incorrect username or password.' }
        }
        const payload = { name: user.name, role: user.role };
        const token = this.jwtService.sign(payload)
        return { message: 'You have successfully logged in.', token }
    }

    signUp(name: string,role : string ,password: string,): string {
        const newUser : UserDTO = {name , role ,password   }
        return this.usersService.addUser(newUser);
    }
}
