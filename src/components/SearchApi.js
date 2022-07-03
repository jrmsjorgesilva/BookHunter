// import React, { useState, useEffect } from 'react'
import React from "react";
import { FaBookReader } from "react-icons/fa";
import Loading from "./Loading";
import { useSpring, animated } from "react-spring";

class SearchApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };

  }

  componentDidMount() {
    fetch(
      // 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=jJmWGJ5N1jkFSIzPbetSUMahKxYYaVm7'
      // 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=jJmWGJ5N1jkFSIzPbetSUMahKxYYaVm7'
      "https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key={process.env.API_KEY_NEW_YORK_TIMES}"
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
    const { props } = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { frequency: 1 },
    })

    const { isLoaded, items } = this.state;
    console.log(items);

    if (!isLoaded) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
      return (
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
      )
    }
  }
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
