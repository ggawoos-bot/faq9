
export interface FAQ {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  viewCount: number;
  createdAt: string;
  isPublished: boolean;
}

export interface Category {
  id: string;
  name: string;
  order: number;
}
