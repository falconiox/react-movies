import { Component } from 'react';
import Movies from '../components/Movies';
import Search from '../components/Search';
import Preloader from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends Component {
   state = {
      movies: [],
      loading: true
   };

   componentDidMount() {
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
         .then((res) => res.json())
         .then((data) => this.setState({ movies: data.Search, loading: false }))
         .catch((err) => {
            console.error(err);
            this.setState({ loading: false });
         });
   }

   searchMovies = (text, type = 'all') => {
      this.setState({ loading: true });
      fetch(
         `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${text}${
            type === 'all' ? '' : `&type=${type}`
         }`
      )
         .then((res) => res.json())
         .then((data) => this.setState({ movies: data.Search, loading: false }))
         .catch((err) => {
            console.error(err);
            this.setState({ loading: false });
         });

      console.log(this.state);
   };

   render() {
      const { movies, loading } = this.state;
      return (
         <main className="content container">
            <Search searchMovies={this.searchMovies} />
            {!loading ? <Movies movies={movies} /> : <Preloader />}
         </main>
      );
   }
}
