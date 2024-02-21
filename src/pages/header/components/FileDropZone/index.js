import { useDispatch, useSelector } from 'react-redux';

import VuiDropzone from "components/VuiDropzone";
import { addHeader } from "redux/actions/headerVideo";

const FileDropZone = () => {

  const dispatch = useDispatch();

  const userdata = useSelector((state) => state.auth.userData);
  return (
        <VuiDropzone options={{ 
          addRemoveLinks: true,
          autoProcessQueue : true,
          url : `${process.env.REACT_APP_BASE_API_URL}/admin/header/add`,
          init: function() {
            this.on("sending", function(file, xhr, formData) {
              formData.append("user", userdata.user_id);
              formData.append("video_path", file)
            });
            this.on("complete", function({file, xhr, meta}){
              const returnData = JSON.parse(xhr.response).data;
              dispatch(addHeader(returnData));
            })
          },
          headers : {
            'Cache-Control': 'no-cache',
            'Authorization': 'Bearer ' + userdata.access,
          },
          complete: function(file){
            this.removeFile(file);
          }
        }} />
  );
};

export default FileDropZone;
