import * as Yup from 'yup'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  usePhoneNumber: Yup.boolean(),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .when('usePhoneNumber', {
      is: true,
      then: Yup.string().required('Required')
    }),
  email: Yup.string()
    .email('Invalid email')
    .when('usePhoneNumber', {
      is: false,
      then: Yup.string().required('Required')
    }),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      passwordRegExp,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    )
})

export default SignupSchema
