import db from "../../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
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
    // case "GET":
    //   const getOne = await db("comments", "findOne", {
    //     filter: { _id: { $oid: id } },
    //   });
    //   res.status(200).json(getOne);
    //   break;
    case "GET":
      const get = await db("comments", "find", {});

      res.status(200).json(get);
      break;
    default:
      res.status(405).end();
      return;
  }
}
