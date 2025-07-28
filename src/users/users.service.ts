import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/DTO/user.dto';

@Injectable()
export class UsersService {
    users: UserDTO[] = []
    constructor() {
        this.users.push({ name: "moti", role: "user", password: "1234" })
    }

    getAllUsers(): UserDTO[] {
        return this.users
    }

    getUser(name: string): UserDTO | undefined {
        return this.users.find((u) => u.name == name);
    }

    addUser(newUser: UserDTO) {
        this.users.push(newUser)
        return "Created !"
    }
}
