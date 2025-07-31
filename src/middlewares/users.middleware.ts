import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) { }
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('cookie');
      const decoded = this.jwtService.verify(token? token : '')
      req.headers.decoded = decoded
      next();
    }
    catch (err) {
      return res.json({ err })
    }

  }
}