import { connection } from 'app';
import { syncBuiltinESMExports } from 'module';

export const getPollutionData = async () => {
  try {
    const [results, _] = await connection.query(
      'SELECT * FROM `pollution`'
    );
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getGrouppedPollutionData = async () => {
  try {
    const [results, _] = await connection.query(
      'SELECT lat, lon FROM `pollution` GROUP BY lat, lon'
    );
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getMaxPollutionPerSubjectData = async () => {
  try {
    const [results, _] = await connection.query(
     `SELECT subject, MIN(hazard_class) as hazard_class
     FROM pollution 
     JOIN (SELECT MAX(period) as period 
     FROM pollution 
     GROUP BY subject 
     ) t 
     WHERE hazard_class <> ''
     GROUP BY subject
     ` 
    );
    return results;
  } catch (err) {
    console.log(err);
  }
};


export const getPollutionDataByYear = async () => {
  try {
    const [results, _] = await connection.query(
      `SELECT COUNT(hazard_class) as cnt, hazard_class, YEAR(period) as year 
FROM pollution 
GROUP BY YEAR(period), hazard_class`);
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getPollutionCoordsData = async () => {
  try {
    const [results, _] = await connection.query(
      'select * from coords'
    );
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getRiverPollutionData = async (water_body: string, subject: string) => {
  try {
    const [results, _] = await connection.execute(
      'SELECT * FROM `pollution` WHERE `water_body` = ? AND `subject` = ?',
      [water_body, subject]
    );

    return results;
  } catch (err) {
    console.log(err);
  }
};