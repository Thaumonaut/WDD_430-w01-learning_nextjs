'use client'
import { useEffect, useState } from "react";

function Header({title}) {
  return (
      <h1>{title ? title : "Replace me in \`title\` attribute"}</h1>
    )
}

export default function HomePage() {
  const names = ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford']
  const [likes, setLikes] = useState(parseInt(window.localStorage.getItem('likes')) || 0);

  useEffect(()=> {
    localStorage.setItem("likes", likes)
  }, [likes])

  function handleLikeClick() {
    setLikes((l) => l + 1);
  }

  function handleDislikeClick() {
    setLikes((l) => l - 1);
  }

  return (
    <div className="Home">
      {/* Component with Props */}
      <Header title="Star Wars Actors" />
      
      {/* List of Names */}
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      
      {/* Like Button */}
      <p>Likes: {likes} </p>
      <button onClick={handleLikeClick}>Like</button>
      <button onClick={handleDislikeClick}>Dislike</button>
    </div>
  )
}