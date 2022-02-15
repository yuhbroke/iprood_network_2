import { instance } from "./usersApi";

export const ProfileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId);
  },

  getStatus(userId: number) {
    return instance.get("profile/status/" + userId);
  },
  updateStatus(status: string) {
    return instance.put("profile/status", { status: status });
  },

  savePhoto(photoFile: any) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
