import db from "../../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const list = await db("posts", "find", {
        filter: { userId: req.query.userId },
      });
      res.status(200).json(list);
      break;
    case "POST":
      const { text, image, username, userId } = req.body;

      console.log(req.body);

      const create = await db("posts", "insertOne", {
        document: {
          username: username,
          text: text,
          image: image,
          uploadTime: Date.now(),
          userId,
        },
      });

      res.status(200).json(create);
      break;
    // case "GET":
    //   const get = await db("posts", "find", {});

    //   res.status(200).json(get);
    //   break;
    default:
      res.status(405).end();
      return;
  }
}
