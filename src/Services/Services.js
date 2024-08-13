import axios from 'axios';

const BASE_URL = 'https://api.freeapi.app/api/v1/public';

export const fetchRandomUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/randomusers/user/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random user:', error);
    throw error;
  }
};

export const fetchRandomJoke = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/randomjokes/joke/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random joke:', error);
    throw error;
  }
};

export const fetchCatsListing = async (page = 1, limit = 8) => {
  try {
    const response = await axios.get(`${BASE_URL}/cats`, {
      params: {
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cats listing:', error);
    throw error;
  }
};
