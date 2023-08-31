import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  switch (req.method) {
    case "PUT":
      const { username, name, email, password, image } = req.body;

      const result = await db("users", "updateOne", {
        filter: { _id: { $oid: id } },
        update: {
          $set: {
            username: username,
            name: name,
            image: image,
            email: email,
            password: password,
          },
        },
      });

      console.log(result);
      res.status(200).json(result);
      break;
    case "DELETE":
      console.log(req.query);

      const deletee = await db("users", "deleteOne", {
        filter: { _id: { $oid: id } },
      });

      console.log(deletee);
      res.status(200).json(deletee);
      break;
    default:
      res.status(405).end();
      return;
  }
}
