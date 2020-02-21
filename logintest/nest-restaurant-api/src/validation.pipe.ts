import { 
    ArgumentMetadata,
    BadRequestException,
    Injectable,
    PipeTransform,
 } from "@nestjs/common";
 import { validate } from "class-validator";
 import { plainToClass } from "class-transformer";

 @Injectable()
 export class  ValidationPipe implements PipeTransform<any>{
     async transform(value, metadata: ArgumentMetadata) {
         const { metatype } = metadata;
         if(!metadata || !this.toValidate(metatype)){
             return value;
         }

         const object = plainToClass(metatype, value);
         const error = await validate(object);
         if(error.length > 0 ) {
             throw new BadRequestException('Validation failed');
         }
         return value;
     }
  private toValidate(metatype): boolean {
      const types = [String, Boolean, Number, Array, Object];
         return !types.find(type => metatype === type);
     }
 }