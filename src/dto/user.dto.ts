import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from 'class-validator';
import {IsEmail} from "class-validator";

export class UserDto{
  
  @ApiModelProperty()
  @IsNotEmpty()
  @IsString()
  readonly user_name: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiModelProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsString()
  readonly token: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsString()
  readonly image: string;
}