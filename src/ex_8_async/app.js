import React, { useState } from 'react';
import axios from 'axios';
 
const URL = 'http://hn.algolia.com/api/v1/search';
 
export const App = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
 
  const handleFetch = async () => {
    let result;
 
    try {
      result = await axios.get(`${URL}?query=React`);
 
      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }
 
  return (
    <div>
      <button type="button" onClick={handleFetch}>
        Fetch Stories
      </button>
 
      {error && <span>Something went wrong ...</span>}
 
      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
 