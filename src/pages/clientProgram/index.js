import { useDispatch, useSelector } from "react-redux";

import ActionComponent from "./components/action_component";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// @mui material components
// Reports page components
import Table from "./components";
import VuiBadgeDot from "components/VuiBadgeDot";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import { dateFormat } from "utils/common";
import { getClientByCustomerID } from "redux/actions/client_manage";
// Data
import { useEffect } from "react";

// Vision UI Dashboard PRO React components
const BadgeComponent = (flag) => {
  return flag ?
    <VuiBox ml={-1.325}>
      <VuiBadgeDot size="xs" badgeContent="Yes" />
    </VuiBox> :
    <VuiBox ml={-1.325}>
      <VuiBadgeDot size="xs" color="error" badgeContent="No" />
    </VuiBox>
}

function ClientProgram() {
  const dispatch = useDispatch();

  const client_data = useSelector((state) => state.clientReducer.clientData);

  const userdata = useSelector((state) => state.auth.userData);

  const clientTableData = {
    columns: [
      { name: "client_name", align: "center" },
      { name: "client_email", align: "center" },
      { name: "get_same_video", align: "center" },
      { name: "appears_in_others_video", align: "center" },
      { name: "voice_can_be_recorded", align: "center" },
      { name: "be_shown_potential", align: "center" },
      { name: "be_shown_public_business", align: "center" },
      { name: "be_shown_social_media", align: "center" },
      { name: "date", align: "center" },
      { name: "id", align: "center" },
      { name: "action", align: "center" },
    ],
    rows: []
  };

  clientTableData.rows = client_data.map((item) => {
    return {
      client_name: [process.env.REACT_APP_BASE_URL + item.photos[0].img_url, item.client_name],
      hasBorder: true,
      date: (dateFormat(item.date)),
      client_email: item.client_email,
      id: item.id,
      action: (
        <ActionComponent user={item.id} />
      ),
      get_same_video: (
        <BadgeComponent flag={item.get_same_video} />
      ),
      appears_in_others_video: (
        <BadgeComponent flag={item.appears_in_others_video} />
      ),
      voice_can_be_recorded: (
        <BadgeComponent flag={item.voice_can_be_recorded} />
      ),
      be_shown_potential: (
        <BadgeComponent flag={item.be_shown_potential} />
      ),
      be_shown_public_business: (
        <BadgeComponent flag={item.be_shown_public_business} />
      ),
      be_shown_social_media: (
        <BadgeComponent flag={item.be_shown_social_media} />
      ),

    }
  })

  const { columns, rows } = clientTableData;

  useEffect(() => {
    const customer_id = { 'customer_id': userdata.user_id };
    const access_token = userdata.access;
    dispatch(getClientByCustomerID(access_token, customer_id))
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <Table columns={columns} rows={rows} />
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ClientProgram;
