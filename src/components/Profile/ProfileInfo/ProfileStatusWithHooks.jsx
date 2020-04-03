import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';

const ProfileStatusWithHooks = (props) => {


  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true)
  };

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  };

  return (
    <div>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}> {props.status || "No status"} </span>
        </div>
      }
      {editMode &&
        <div>
          <Input autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status} />
        </div>
      }
    </div>
  )
};




export default ProfileStatusWithHooks;
