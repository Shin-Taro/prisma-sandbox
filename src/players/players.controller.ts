import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Prisma } from '@prisma/client';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get(':id')
  async findPlayerById(id: string) {
    return this.playersService.player(id);
  }

  @Get()
  async allPlayers() {
    return this.playersService.players();
  }

  @Post()
  async createPlayer(@Body() playerData: Prisma.PlayerCreateInput) {
    return this.playersService.createPlayer(playerData);
  }
}
