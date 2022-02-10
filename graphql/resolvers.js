import { movies, getById, addMovie, delegeMovie } from "./db";
const resolvers = {
  Query: {
    movies:() => movies,
    movie: (_, { id }) => getById(id),
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    delegeMovie: (_, { id }) => delegeMovie(id)
  }
}
export default resolvers;