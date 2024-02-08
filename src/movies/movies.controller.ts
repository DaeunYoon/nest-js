import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `This will search a movie made after: ${searchingYear}`;
  }

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.moviesService.getById(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.delete(id);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() dataToUpdate: CreateMovieDto) {
    return this.moviesService.update(id, dataToUpdate);
  }
}
