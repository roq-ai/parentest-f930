import * as yup from 'yup';

export const childValidationSchema = yup.object().shape({
  name: yup.string().required(),
  parent_id: yup.string().nullable(),
});
