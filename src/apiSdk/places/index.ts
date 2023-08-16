import axios from 'axios';
import queryString from 'query-string';
import { PlaceInterface, PlaceGetQueryInterface } from 'interfaces/place';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPlaces = async (query?: PlaceGetQueryInterface): Promise<PaginatedInterface<PlaceInterface>> => {
  const response = await axios.get('/api/places', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPlace = async (place: PlaceInterface) => {
  const response = await axios.post('/api/places', place);
  return response.data;
};

export const updatePlaceById = async (id: string, place: PlaceInterface) => {
  const response = await axios.put(`/api/places/${id}`, place);
  return response.data;
};

export const getPlaceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/places/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePlaceById = async (id: string) => {
  const response = await axios.delete(`/api/places/${id}`);
  return response.data;
};
