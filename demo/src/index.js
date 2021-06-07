import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Booklist() {
  return <section className="booklist">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>;
}

const Book = (props) => {

  const title = 'I love you to the Moon and Back'
  const img = "https://m.media-amazon.com/images/I/5109mf34AvL._AC._SR360,460.jpg"
  return (
    <article>
      <img src={props.img}></img>
      <h1>{title}</h1>
      <h4>Amelia Hepworth</h4>
    </article>
  );
}


ReactDom.render(<Booklist />, document.getElementById('root'));

