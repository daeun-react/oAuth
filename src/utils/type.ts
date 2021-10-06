export interface KakaoUser {
  email: string;
  profile: {
    is_default_image: boolean;
    nickname: string;
    profile_image_url: string;
    thumbnail_image_url: string;
  };
}
