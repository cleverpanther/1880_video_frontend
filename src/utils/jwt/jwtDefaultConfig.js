export default {
  //** Auth Endpoints

  loginEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/login`,
  forgotPasswordEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/forgot_password`,
  resetForgotPasswordEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/reset_forgot_password`,
  registerEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/register`,
  refreshEndpoint: '/jwt/refresh-token',
  logoutEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/logout`,
  resetPasswordEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/reset/`,

  //** Header Endpoints

  headerAddEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/header/add`,
  headerGetEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/header`,
  headerDeleteEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/header/delete`,

  //** Footer Endpoints

  footerAddEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/footer/add`,
  footerGetEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/footer`,
  footerDeleteEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/footer/delete`,

  getCustomersEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/users/range`,
  customerDeleteEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/delete`,
  getCustomerByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/user`,
  customerUpdateEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/update`,

  addClientEndPoint: `${process.env.REACT_APP_BASE_API_URL}/customer/add_client`,
  addChildEndPoint: `${process.env.REACT_APP_BASE_API_URL}/customer/add_child`,

  getClientByCustomerIDEndPoint: `${process.env.REACT_APP_BASE_API_URL}/customer/getallclients`,
  clientDeleteEndpoint: `${process.env.REACT_APP_BASE_API_URL}/customer/delete`,
  getClientByClientIDEndPoint: `${process.env.REACT_APP_BASE_API_URL}/customer/client/`,
  updateClientEndpoint: `${process.env.REACT_APP_BASE_API_URL}/customer/update`,

  getAllCameraVoiceEndPoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/getCameraVoice`,
  getCameraVoiceByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/getCameraVoiceByID`, //?id=2
  getCameravoiceByCameraIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/getCameraVoiceByCameraID`, //?camera_id=1
  addCameraVoiceEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/addCameraVoice`,
  deleteCameraVoiceEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/deleteCameraVoice`,
  updateCameraVoiceEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/updateCameraVoice`,

  // coloring page end point

  getAllColoringPageEndPoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/get/all`,
  getColoringPageByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/get`,
  addColoringPageEndpoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/add`,
  updateColoringPageEndpoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/update`,
  deleteColoringPageEndpoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/delete`,


  // Exit Email End Point

  getAllExitEmailEndPoint: `${process.env.REACT_APP_BASE_API_URL}/email/get/all`,
  getExitEmailByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/email/get`,
  addExitEmailEndpoint: `${process.env.REACT_APP_BASE_API_URL}/email/add`,
  updateExitEmailEndpoint: `${process.env.REACT_APP_BASE_API_URL}/email/update`,
  deleteExitEmailEndpoint: `${process.env.REACT_APP_BASE_API_URL}/email/delete`,


  getAllCameraEndPoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera/getall`,
  getCameraByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera/getbyid`,
  addCameraEndPoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera/add`,
  deleteCameraEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera/delete`,
  updateCameraEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera/update`,
  checkCameraStatusEndPoint: `${process.env.REACT_APP_BASE_API_URL}/thirdparty/status`,

  sendColoringPDFEndPoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/sendColoringPDF`,
  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageUserIDKeyName: 'user_id',
  storageRefreshTokenKeyName: 'refreshToken'
}
