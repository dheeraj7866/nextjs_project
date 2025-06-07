import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Controller()
export class AppController {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  @Get()
  getHello(): string {
    return 'Hello from Backend!';
  }

  @Get('users')
  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
