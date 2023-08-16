import * as yup from 'yup';

export const commentValidationSchema = yup.object().shape({
  content: yup.string().required(),
  parent_id: yup.string().nullable(),
  place_id: yup.string().nullable(),
});
