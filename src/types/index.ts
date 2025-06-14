export interface Artwork {
  id: number;
  title: string;
  medium: string;
  dimensions: string;
  creationDate: string;
  imageUrl: string;
  fileSpecs: string;
  reflection: string;
  featured?: boolean;
}

export interface Artist {
  name: string;
  bio: string;
  headshot: string;
  statement: string;
  email: string;
  socialLinks: {
    instagram?: string;
    behance?: string;
    website?: string;
  };
}