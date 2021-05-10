import { Component, useEffect, useState } from 'react';

class Search extends Component {
   state = {
      search: '',
      type: 'all'
   };

   handleKey = (e) => {
      if (e.key === 'Enter') {
         this.props.searchMovies(this.state.search, this.state.type);
      }
   };

   handleFilter = (e) => {
      this.setState({ type: e.target.dataset.type }, () =>
         this.props.searchMovies(this.state.search, this.state.type)
      );
      console.log(this.state);
   };

   render() {
      const { search, type } = this.state;
      return (
         <div className="row">
            <div className="col s12">
               <input
                  placeholder="search"
                  type="search"
                  className="validate"
                  value={search}
                  onChange={(e) => this.setState({ search: e.target.value })}
                  onKeyDown={this.handleKey}
               />
               <button
                  className="btn search-btn"
                  onClick={() => this.props.searchMovies(search, type)}
               >
                  Search
               </button>
               <div>
                  <label>
                     <input
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={this.handleFilter}
                        checked={type === 'all'}
                     />
                     <span>All</span>
                  </label>
                  <label>
                     <input
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={this.handleFilter}
                        checked={type === 'movie'}
                     />
                     <span>Movies only</span>
                  </label>
                  <label>
                     <input
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={this.handleFilter}
                        checked={type === 'series'}
                     />
                     <span>Series only</span>
                  </label>
               </div>
            </div>
         </div>
      );
   }
}

export default Search;
