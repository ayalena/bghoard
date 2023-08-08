import { useState, useEffect } from 'react';
import { Game } from '@bghoard/api-interface';

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('api/game')
      .then((r) => r.json())
      .then(setGames);
  }, []);

  return games;
}
