import type { NextApiRequest, NextApiResponse } from "next";

const BUNDLE_ID = "5E3H5S4R65.com.allrise.YouJudge";

const association = {
  applinks: {
    apps: [],
    details: [
      {
        appID: `${BUNDLE_ID}`,
        // paths: ['*', "/"],
        paths: ["/ios-case/*"]
      }
    ]
  }
};

export default (_: NextApiRequest, response: NextApiResponse) => {
  return response.status(200).send(association);
};
