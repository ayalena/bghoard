export interface ApiResponse {
  message: string;
}

export interface Game {
  name: string;
  id: string;
  image?: string;
  description: string;
  price: number;
  rating?: number;
  reviews?: Review[];
}

export interface Review {
  game: string | undefined;
  rating: number;
  content: string;
}

export interface CartItem {
  game: string;
  quantity: number;
}
