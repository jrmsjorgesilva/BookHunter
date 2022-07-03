// import React, { useState, useEffect } from 'react'
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { useSpring, animated } from "react-spring";

const SearchBooks = () => {

  const [items, setItems] = useState(() => []);
  const [isLoaded, setIsLoaded] = useState(() => false);

  useEffect(() => {

    const API_KEY_NEW_YORK_TIMES = '';

    fetch(
      `https://api.nytimes.com/svc/books/v3//lists/2019-01-20/hardcover-fiction.json?api-key=${API_KEY_NEW_YORK_TIMES}`
      // 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jJmWGJ5N1jkFSIzPbetSUMahKxYYaVm7'
      // 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=jJmWGJ5N1jkFSIzPbetSUMahKxYYaVm7'
    )
      .then(res => res.json())
      .then(json => {
        setIsLoaded(true);
        setItems(json);
      })
      .catch(e => {
        alert("Erro: ", e);
      });

  }, []);

  const { props } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { frequency: 1 },
  })

  console.log(items.results);

  return (
    <>
      {
        !isLoaded ?
          (
            <div>
              <Loading />
            </div>
          ) : (
            <animated.div style={props} className="search-books">
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
            </animated.div>
          )
      }
    </>
  )
}

export default SearchBooks;
