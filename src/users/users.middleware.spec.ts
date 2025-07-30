import { UsersMiddleware } from '../middlewares/users.middleware';

describe('UsersMiddleware', () => {
  it('should be defined', () => {
    expect(new UsersMiddleware()).toBeDefined();
  });
});
