import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser'
import ValidationExceptionFactory from './exception/ValidationExceptionFactory';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors()
    await app.listen('3000')
    app.use(bodyParser.json({ limit: '10mb' }))
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            exceptionFactory: ValidationExceptionFactory
        })
    )
    Logger.debug('Listening on http://localhost:3000}/')
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();