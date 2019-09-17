// import React, { useState, useEffect } from 'react'
import React from "react";
import Loading from "./Loading";
import { Spring } from "react-spring/renderprops";

class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/books/v3//lists/2019-01-20/hardcover-fiction.json?api-key={process.env.API_KEY_NEW_YORK_TIMES}"
      // 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jJmWGJ5N1jkFSIzPbetSUMahKxYYaVm7'
      // 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=jJmWGJ5N1jkFSIzPbetSUMahKxYYaVm7'
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      })
      .catch(e => {
        alert("Erro: ", e);
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    console.log(items.results);

    if (!isLoaded) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
      return (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <div style={props} className="search-books">
              <ul>
                {items.results.books.map(item => (
                  <li>
                    <h1> {item.rank}</h1>
                    <h1>{item.author}</h1>
                    <h3> {item.title}</h3>
                    <img
                      alt=""
                      src={item.book_image || "There's no image available"}
                    />
                    <h3> {item.publisher}</h3>
                    <hr />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Spring>
      );
    }
  }
}

export default SearchBooks;
