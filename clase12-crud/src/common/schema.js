import * as yup from "yup";

export const schema = yup.object().shape({
  nombre: yup.string().required("este campo es necesario BRO"),
  email: yup.string().required(),
  password: yup
    .string()
    .required("este password es necesario PASSSSSS")
    .matches(
        /[A-Z]/,
       "debe llevar una letra mayusucula"
      )
    .matches(/\d{4}/,"debe llevar al menos 4 digitos")
    .matches(/[@#$%&*]/,"debe llevar al menos un caracter especial").moment.object
    
  
  // matches:(/[A-Z]{2}-\d{3}-[A-Az-z]{2}/)
});

// AF-346-fh

// nhn354
