import { getGrouppedPollutionData, getPollutionData, getMaxPollutionPerSubjectData, getPollutionDataByYear, getPollutionCoordsData, getRiverPollutionData, } from '@services/pollution.service';
import { Controller } from '@type/Controller';

export const getPollution: Controller = async (req, res) => {
  // const name = req.params.username;
  // if (!name) return res.status(400).json(createError('Name is required'));

  // const users = await getUserSafe(name);
  // if ('isError' in users) return res.status(404).json(users);
  const pollution = await getPollutionData()

  return res.json(pollution);
};

export const getGrouppedPollution: Controller = async (req, res) => {
  // const name = req.params.username;
  // if (!name) return res.status(400).json(createError('Name is required'));

  // const users = await getUserSafe(name);
  // if ('isError' in users) return res.status(404).json(users);
  const pollution = await getGrouppedPollutionData()

  return res.json(pollution);
};

export const getMaxPollutionPerSubjects: Controller = async (req, res) => {
  const subjects = await getMaxPollutionPerSubjectData()

  return res.json(subjects)
}

export const getPollutionByYear: Controller = async (req, res) => {
  const years = await getPollutionDataByYear()

  return res.json(years)
}

export const getPollutionCoords: Controller = async (req, res) => {
  const years = await getPollutionCoordsData()

  return res.json(years)
}

export const getRiverPollution: Controller = async (req, res) => {
  const water_body = req.query!.water_body! as string
  const subject = req.query!.subject! as string
  if(!water_body || !subject) return
  console.log(water_body, subject)
  const years = await getRiverPollutionData(water_body, subject)

  return res.json(years)
}