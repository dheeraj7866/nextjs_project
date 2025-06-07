import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:adminpass@localhost:27017', {
      dbName: 'testdb',
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
