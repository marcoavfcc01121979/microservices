/* eslint-disable prettier/prettier */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Main')

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:5GbZaSvZ2N2l@54.234.220.183:5672/smartranking'],
      // noAck: false,
      queue: 'admin-backend',
      /*queueOptions: {
        durable: false
      }*/
    }
  });
  await app.listen();
}
bootstrap();
