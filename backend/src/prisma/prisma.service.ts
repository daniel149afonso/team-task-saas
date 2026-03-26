import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {}
//Create a NestJS service which contains Prisma 
// and it can be used everywhere