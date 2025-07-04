export interface UserModel{
    user_id: string;
    user_email: string;
    user_password: string;
    user_name: string;
    user_phone: string;
    user_profile_picture: string;
}

export interface UserResponse {
    id: string;
    email: string;
    name: string;
    phone: string;
    profilePicture: string;
}