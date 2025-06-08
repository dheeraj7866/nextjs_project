import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI!, {
      dbName: 'testdb',
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController],
})
export class AppModule {}

