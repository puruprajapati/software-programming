import { GenreModel } from './genre.interface';

export interface MoviesModel {
  _id: string;
  title: string;
  genre: GenreModel;
  numberInStock: number;
  dailyRentalRate: number;
  publishDate?: any;
  liked: boolean;
}
