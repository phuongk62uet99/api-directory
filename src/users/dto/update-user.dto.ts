import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty({ message: 'Tên không được trống' })
  @Length(5, 25, { message: 'Tên từ 5 - 25 kí tự' })
  username: string;

  @IsNotEmpty({ message: 'Mật khẩu không được trống' })
  @Length(6, 18, { message: 'Mật khẩu từ 6 - 18 kí tự' })
  password: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Chức vụ không được bỏ trống' })
  role: string;

  loginfirst: string;
}
