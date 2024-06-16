import { Injectable } from '@nestjs/common';
import { Player, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlayersService {
  constructor(private prisma: PrismaService) {}

  async players() {
    return this.prisma.player.findMany();
  }

  async player(id: string): Promise<Player | null> {
    return this.prisma.player.findUnique({
      where: { id },
    });
  }

  async createPlayer(data: Prisma.PlayerCreateInput) {
    return this.prisma.player.create({
      data,
    });
  }
}
