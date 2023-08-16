import * as yup from 'yup';

export const placeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  rating: yup.number().integer().nullable(),
  parent_id: yup.string().nullable(),
});
