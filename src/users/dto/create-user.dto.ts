import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsEmail({}, {message: "Email not correct format"})
  @IsNotEmpty({message: "Email not empty"})
  email: string;

  @IsNotEmpty({message: "Password not empty"})
  password: string;
  name: string;
  address: string;
  
}
