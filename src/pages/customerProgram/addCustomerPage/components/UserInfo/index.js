import { useDispatch, useSelector } from 'react-redux';

import FormField from "pages/customerProgram/addCustomerPage/components/FormField";
// @mui material components
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
// prop-type is a library for typechecking of props
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiInput from "components/VuiInput";
import VuiTypography from "components/VuiTypography";
import { action_type } from 'redux/action_type';

// NewUser page components

function UserInfo({ formData }) {

  const dispatch = useDispatch();
  const { formField, values, errors, touched } = formData;
  const { username, phonenumber, email, password, confirm_password } = formField;
  const selected_user_type = useSelector((state) => state.selected_user_type.selected_user_type);
  const {
    username: usernameV,
    phonenumber: phonenumberV,
    email: emailV,
    password: passwordV,
    confirm_password: confirm_passwordV,
  } = values;

  const handleOnChange = (event) =>{
    dispatch({type: action_type.SELECTED_USER_TYPE, data: event.target.value});
  }
  
  return (
    <VuiBox>
      <VuiBox lineHeight={0} display="flex" flexDirection="column">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Add New Customer
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={3}>
        <Grid item xs={12} sm={12}>
          <FormField
            label={username.label}
            name={username.name}
            type={username.type}
            value={usernameV}
            placeholder={username.placeholder}
            error={errors.username && touched.username}
            success={usernameV.length > 0 && !errors.username}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormField
            label={email.label}
            name={email.name}
            type={email.type}
            value={emailV}
            placeholder={email.placeholder}
            error={errors.email && touched.email}
            success={emailV.length > 0 && !errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormField
            label={phonenumber.label}
            name={phonenumber.name}
            type={phonenumber.type}
            value={phonenumberV}
            placeholder={phonenumber.placeholder}
          />
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;