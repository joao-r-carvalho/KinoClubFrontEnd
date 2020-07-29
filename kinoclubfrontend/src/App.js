import React from 'react';
import logo from './logo.svg';
import MoviePresentation from './Components/Movies/MoviePresentation.js';
import './App.css';

function App() {
  return (
    <div>
      <MoviePresentation MoviePosterURL="https://upload.wikimedia.org/wikipedia/en/7/7d/Evil_dead_ver1.jpg" MovieName="Evil Dead" MovieDescription="The Evil Dead (originally released as Book of the Dead) is a 1981 American supernatural
                            horror film written and directed by Sam Raimi, produced by Robert Tapert and executive produced by Raimi,
                            Tapert and Bruce Campbell, who also starred alongside Ellen Sandweiss, Richard DeManicor,
                            Betsy Baker and Theresa Tilly. The film focuses on five college students vacationing in an isolated cabin
                            in a remote wooded area. After they find an audio tape that, when played, releases a legion of demons and
                            spirits, four members of the group suffer from demonic possession, forcing the fifth,
                  Ash Williams (Campbell), to survive the resulting gory mayhem." />

    </div>
  );
}

export default App;
