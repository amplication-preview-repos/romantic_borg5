import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "contactDetails";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.contactDetails?.toString() || String(record.id);
};
