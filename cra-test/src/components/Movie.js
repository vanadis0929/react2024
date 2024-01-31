const Movie = ({ poster, title, genres, summary }) => {
  return (
    <div>
      <figure>
        <img src={poster} alt={`${title}'s poster`} />
        <figcaption> {title} </figcaption>
      </figure>
      <ul>
        {genres
          ? genres.map((genre) => {
              return <li key={genre}>{genre}</li>;
            })
          : null}
      </ul>
      <p>{summary}</p>
    </div>
  );
};

export default Movie;
