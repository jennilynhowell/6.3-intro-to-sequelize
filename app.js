const models = require('./models');
//
// //running this twice will generate another entry!
// models.Movie.create({
//   title: 'Jaws',
//   release_date: new Date(1975, 1, 10),
//   imdb_link: 'http://www.imdb.com'
// });

// models.Movie.findOne({
//   where: {
//     title: "Jaws"
//   }
// }).then(function(movie){
//   console.log(movie.release_date);
// });

models.Movie.create({
  title: 'Home Alone 2: Lost in New York',
  release_date: new Date(1998, 10, 16),
  imdb_link: 'http://www.imdb.com'
});
