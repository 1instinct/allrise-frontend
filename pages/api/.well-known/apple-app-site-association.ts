import { NextApiRequest, NextApiResponse } from 'next';

interface Association {
  applinks: {
    details: AppLinkDetail[];
  };
}

interface AppLinkDetail {
  appIDs: string[];
  components: Component[];
}

interface Component {
  [path: string]: string;
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Association>
) {
  const association: Association = {
    applinks: {
      details: [
        {
          appIDs: ["5E3H5S4R65.com.allrise.YouJudge"],
          components: [
            { "/": "/ios-case/*" }
          ]
        }
      ]
    }
  };

  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json(association);
}
