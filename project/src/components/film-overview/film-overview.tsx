import { getFormattedRating } from '../../utils';
import { Film } from '../../types/films';

type FilmOverviewProps = {
  currentFilm: Film;
};

function FilmOverview({ currentFilm}: FilmOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {getFormattedRating(currentFilm.rating)}
          </span>
          <span className="film-rating__count">
            {currentFilm.scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentFilm.description}</p>

        <p className="film-card__director">
          <strong>Director: {currentFilm.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {currentFilm.starring.join(', ')}</strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverview;
