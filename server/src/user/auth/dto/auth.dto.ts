import { IsString, IsNotEmpty, IsEmail, MinLength, Matches, IsEnum, IsOptional } from "class-validator";

export class SignupDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @Matches(/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/, { message: "Not a valid phone number" })
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;

}

export class SigninDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}


export class UserInfoDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  company: string;

  @IsOptional()
  @IsString()
  phoneNumber: string;
}