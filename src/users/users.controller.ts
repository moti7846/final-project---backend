import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from 'src/DTO/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(){
    return this.usersService.getAllUsers()
  }

  @Get(':name')
  getUser(@Param('name') name : string){
    return this.usersService.getUser(name)
  }

  @Post()
  addUser(@Body() newUser : UserDTO){
    return this.usersService.addUser(newUser)
  }

}
