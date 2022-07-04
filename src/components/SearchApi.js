import React, { useState, useEffect } from 'react'
import { FaBookReader } from "react-icons/fa";
import Loading from "./Loading";
import { useSpring, animated } from "react-spring";

const SearchApi = () => {

  const [items, setItems] = useState(() => []);
  const [isLoaded, setIsLoaded] = useState(() => false);

  useEffect(() => {

    const fetchBooks = async () => {

      // receive apikey from backend
      const apiKeyResponse = await fetch('http://localhost:8000');
      const API_KEY_NEW_YORK_TIMES = await apiKeyResponse.json();

      // fetches the api with the key
      return await fetch(
        // 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jJmWGJ5N1jkFSIzPbetSUMahKxYYaVm7'
        // 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=jJmWGJ5N1jkFSIzPbetSUMahKxYYaVm7'
        `https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${API_KEY_NEW_YORK_TIMES}`
      )
        .then(res => res.json())
        .then(json => {
          setItems((oldValue) => oldValue = json);
          setIsLoaded((oldValue) => oldValue = true);
        })
        .catch(e => {
          alert("Erro: ", e);
        });
    }

    fetchBooks();

  }, [])

  const { props } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { frequency: 1 },
  })

  console.log(items);

  return (
    <>
      {isLoaded ? (
        <animated.div style={props} className="search-api">
          <ul>
            {items.results
              .map(item => (
                <li>
                  <h1>
                    <FaBookReader /> {item.book_title}
                  </h1>
                  <h2> {item.summary || "No summary available"} </h2>
                  <h3>
                    <a href={item.url} target="blank">
                      {" "}
                      Review{" "}
                    </a>
                  </h3>
                  <hr />
                </li>
              ))
              .reverse()}
          </ul>
        </animated.div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  )

}

export default SearchApi;

// const SearchApi = () => {

//     useEffect(() => {
//         fetchItems()
//     }, []);

//     const [ items, setItems ] = useState([]);

//     const fetchItems = async () => {
//         const data = await fetch(
//             'https://jsonplaceholder.typicode.com/posts'
//             // 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jJmWGJ5N1jkFSIzPbetSUMahKxYYaVm7'
//         );
//         const items = await data.json();
//         console.log(items[0].title);
//         setItems(items);
//     }
//     console.log(items[0].title)

//     return (
//         <div>
//             {
//                 <h1>{items[0].title}</h1>
//             }
//         </div>
//     )
// }

// export default SearchApi
