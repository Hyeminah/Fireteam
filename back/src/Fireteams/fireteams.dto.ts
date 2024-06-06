import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateFireteamDto {
  @IsNotEmpty({ message: "Fireteam title is required" })
  @IsString({
    message: "Fireteam title must be a string",
  })
  @MaxLength(255, {
    message: "Fireteam title cannot exceed 255 characters",
  })
  title: string;
}