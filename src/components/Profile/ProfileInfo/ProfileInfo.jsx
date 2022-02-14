import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const getPhotoProfile = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img
          className={s.photo}
          src={props.profile.photos.large || userPhoto}
        />
        {props.isOwner && <input type='file' onChange={getPhotoProfile} />}
        <div>
          <ProfileStatus
            status={props.status}
            updateUserStatus={props.updateUserStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
