import fetch from "node-fetch";

export default async function handler(
  collection: string,
  action: any,
  options: any
) {
  const result = await fetch(
    `https://ap-southeast-1.aws.data.mongodb-api.com/app/data-mophc/endpoint/data/v1/action/${action}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key":
          "ZdjeUWVwjTOjEqdqp35SF0NEI9Da6TxCEtzVi1JkErTSock8PoqsAgo26ZuWLGRo",
      },
      body: JSON.stringify({
        dataSource: "Cluster0",
        database: "InstagramDb",
        collection: collection,
        ...options,
      }),
    }
  ).then((res) => res.json());

  return result;
}
