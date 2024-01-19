import { getPollutionData, } from '@services/pollution.service';
import { Controller } from '@type/Controller';

export const getPollution: Controller = async (req, res) => {
  // const name = req.params.username;
  // if (!name) return res.status(400).json(createError('Name is required'));

  // const users = await getUserSafe(name);
  // if ('isError' in users) return res.status(404).json(users);
  const pollution = await getPollutionData()

  return res.json(pollution);
};
