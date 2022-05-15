import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ MongooseModule.forRoot(
    'mongodb+srv://admin:hppwr54s@cluster0.wniuh.mongodb.net/nestjs-basic-api'
    ),
    UsersModule
  ]
})
export class AppModule {}
