import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'nmsl!!!';
  }
  getSeach(): string {
    return 'this is a seach function';
  }
}
