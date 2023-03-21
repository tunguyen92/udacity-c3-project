export interface FeedItem {
  id: number;
  url: string;
  caption: string;
}

export const feedItemMocks: FeedItem[] = [
  {
    id: 0,
    url: "http://localhost:8080/xander0.jpg",
    caption: "Such a cute pup",
  },
  {
    id: 0,
    url: "http://localhost:8080/xander1.jpg",
    caption: "Who's a good boy?",
  },
  {
    id: 0,
    url: "http://localhost:8080/xander2.jpg",
    caption: "Majestic.",
  },
];
