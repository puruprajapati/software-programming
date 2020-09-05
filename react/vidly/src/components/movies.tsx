import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { paginate } from '../utils/paginate';
import _ from 'lodash';

interface MoviesModel {
  _id: string;
  title: string;
  genre: GenreModel;
  numberInStock: number;
  dailyRentalRate: number;
  publishDate?: any;
  liked: boolean;
}

interface GenreModel {
  _id: string;
  name: string;
}

interface SortColumn {
  path: string;
  order: string;
}

type MovieState = {
  movies: MoviesModel[];
  genres: GenreModel[];
  selectedGenre?: GenreModel;
  sortColumn: SortColumn;
  pageSize: number;
  currentPage: number;
};

class Movies extends Component<{}, MovieState> {
  public readonly state: Readonly<MovieState> = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    const genres = [{ _id: '000000-0000-0000', name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies]; // clone array
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] }; // clone object
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre: GenreModel) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, selectedGenre, sortColumn, movies: allMovies } = this.state;

    if (count === 0) return <p>There are no movies in database.</p>;

    const filteredMovies =
      selectedGenre && selectedGenre.name !== 'All Genres'
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sortedMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filteredMovies.length} movies in the database.</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
