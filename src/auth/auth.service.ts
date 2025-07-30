import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/DTO/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async signIn(username: string, pass: string) {
        const user = this.usersService.getUser(username);
        if (!user || !await bcrypt.compare(pass, user.password)) {
            return { message: 'Incorrect username or password.' }
        }
        const payload = { name: user.name, role: user.role };
        const token = await this.jwtService.signAsync(payload)
        return { message: 'You have successfully logged in.', token }
    }

    async signUp(name: string, role: string, password: string,): Promise<string> {
        const newUser: UserDTO = { name, role, password: await bcrypt.hash(password, 10) }
        return this.usersService.addUser(newUser);
    }
}
