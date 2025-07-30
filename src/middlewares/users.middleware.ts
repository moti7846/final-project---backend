import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) { }
  use(req: Request, res: Response, next: NextFunction) {
    let token = req.header('set-cookie')
    try {
      const decoded = this.jwtService.verify('')
      console.log({ decoded });
      next();
    }
    catch (err){
      if(token)
        console.log('________test');
      res.json({token : req.header('set-cookie')}) 
    }

  }
}