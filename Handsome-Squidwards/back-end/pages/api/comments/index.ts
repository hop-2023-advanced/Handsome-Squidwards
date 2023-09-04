import db from "../../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const list = await db("comments", "find", {
        filter: { postId: req.query.postId },
      });
      res.status(200).json(list);
      break;
    case "POST":
      const { text, username, postId } = req.body;
      console.log(req.body);

      const create = await db("comments", "insertOne", {
        document: {
          username: username,
          text: text,
          postId,
          uploadTime: Date.now(),
        },
      });

      res.status(200).json(create);
      break;

    default:
      res.status(405).end();
      return;
  }
}
