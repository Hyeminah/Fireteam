import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateFireteamDto {
  @IsNotEmpty({ message: "Le titre de l'escouade est requis" })
  @IsString({
    message: "Le titre de l'escouade doit être une chaîne de caractères",
  })
  @MaxLength(255, {
    message: "Le titre de l'escouade ne peut pas dépasser 255 caractères",
  })
  title: string;
}