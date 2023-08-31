import db from "../../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  switch (req.method) {
    case "POST":
      const { username, name, email, password, image } = req.body;

      console.log(req.body);

      const create = await db("users", "insertOne", {
        document: {
          username: username,
          name: name,
          image: image,
          email: email,
          password: password,
        },
      });

      res.status(200).json(create);
      break;
    // case "GET":
    //   const getOne = await db("users", "findOne", {
    //     filter: { _id: { $oid: id } },
    //   });
    //   res.status(200).json(getOne);
    //   break;
    case "GET":
      const get = await db("users", "find", {});

      res.status(200).json(get);
      break;
    default:
      res.status(405).end();
      return;
  }
}
