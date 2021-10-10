export interface GoogleUser {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
}

export interface KakaoUser {
  email: string;
  profile: {
    is_default_image: boolean;
    nickname: string;
    profile_image_url: string;
    thumbnail_image_url: string;
  };
}

export interface NaverUser {
  id: string;
  email: string;
  name: string;
  profile_image: string;
}
