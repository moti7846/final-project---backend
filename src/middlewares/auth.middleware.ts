// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   constructor(private jwtService: JwtService) { }
//   use(req: any, res: any, next: () => void) {
//     const info = this.jwtService.decode('')
//     next();
//   }
// }