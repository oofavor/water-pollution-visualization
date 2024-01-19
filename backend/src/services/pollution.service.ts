import { connection } from 'app';

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
