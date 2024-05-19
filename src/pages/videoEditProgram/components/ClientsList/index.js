import { AiOutlinePlus } from "react-icons/ai";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import VuiAvatar from "components/VuiAvatar";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";
import man_avatar from "assets/images/male-avatar.png";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import clients_data from './clients_data';
import { useState } from "react";
import VuiButton from "components/VuiButton";
import Icon from "@mui/material/Icon";
const ClientsList = () => {

  const navigate = useNavigate();

  // const clients_data = useSelector((state) => state.customers.customerData);

  const [selectedUsr, setSelectedUsr] = useState(0);
  
  const { borderWidth } = borders;

  const handleClickChange = (id) => {
    console.log(id)
    setSelectedUsr(id);
    // return navigate(`/customerManagement/edit/${id}`)
  }
  const handleAddbutton = () => {
    console.log('add')
    // return navigate('/customerManagement/add');
  }
  const setBadge = () => {
    return <VuiBox alt="spotify logo" position="absolute" ml={'50px'} mt={'-40px'}>
    <VuiButton
      variant="contained"
      color="info"
      sx={{ borderRadius: "50px"}}
      iconOnly
      size='small'
    >
      <Icon>check</Icon>
    </VuiButton>
  </VuiBox>
  }
  
  const renderStories = clients_data.map(({ user_avatar, username, id }, key) => (
    <Grid key={key} item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
      <VuiBox
        borderRadius="50%"
        width="3.625rem"
        height="3.625rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        mx="auto"
        border={`${borderWidth[1]} solid ${colors['info'].main}`}
        sx={{ cursor: "pointer" }}
        onClick={() => handleClickChange(id)}
      >
        <VuiAvatar src={user_avatar ? user_avatar : man_avatar} alt={username} />
        {selectedUsr === id ? setBadge() : <></>}
        
      </VuiBox>
      <VuiBox mt={0.75} textAlign="center" lineHeight={1}>
        <VuiTypography fontSize={12} color="text" fontWeight="regular">
          {username}
        </VuiTypography>
      </VuiBox>
    </Grid>
  ));

  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.down("lg")]: {
          overflowX: "scroll",
        },
      })}
    >
      <VuiBox width="100%">
        <Grid container justifyContent="start" wrap="nowrap">
          <Grid item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
            <VuiBox
              bgColor="info"
              borderRadius="50%"
              width="3.625rem"
              height="3.625rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mx="auto"
              sx={{ cursor: "pointer" }}
              onClick={handleAddbutton}
            >
              <AiOutlinePlus color="white" size="24px" />
            </VuiBox>
            <VuiBox mt={0.75} textAlign="center" lineHeight={1}>
              <VuiTypography fontSize={12} color="text" fontWeight="regular">
                Add Client
              </VuiTypography>
            </VuiBox>
          </Grid>
          {renderStories}
        </Grid>
      </VuiBox>
    </Card>
  );
}

export default ClientsList;
