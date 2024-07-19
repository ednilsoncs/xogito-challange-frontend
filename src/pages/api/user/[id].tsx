import type { NextApiRequest, NextApiResponse } from "next";


export interface User {
  id: string,
  name: string,
  location: string,
  avatar: string,
  description: string,
  potential: number,
  instagram: string,
  instagram_followers: string,
  tiktok: string,
  pics: {
    id: string,
    url: string
  }[],
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  res.status(200).json({
    id: id as string,
    name: "Diego Segura",
    location: "New York, NY",
    avatar: "",
    description: "writer and designer\nrsvp below\nfollow for event updates",
    potential: 14,
    instagram: "@messybirkin",
    instagram_followers: "128k",
    tiktok: "@messybirkin",
    pics: [{
      id: 1,
      url: "https://images.unsplash.com/photo-1718839932371-7adaf5edc96a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1718839932371-7adaf5edc96a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1718839932371-7adaf5edc96a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
    ],
  });
}
