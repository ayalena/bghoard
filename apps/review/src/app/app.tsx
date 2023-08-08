import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReviewFeatureDetails } from '@bghoard/review/feature-details';
import { ReviewFeatureList } from '@bghoard/review/feature-list';

export function App() {
  return (
    <BrowserRouter basename="/">
      <h1 style={{ textAlign: 'center' }}>Board Game Hoard: Review</h1>
      <Routes>
        <Route index element={<ReviewFeatureList />} />
        <Route path="/:gameId" element={<ReviewFeatureDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
