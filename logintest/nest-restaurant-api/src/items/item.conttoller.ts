import { Get, Post, Controller, Body, UsePipes } from "@nestjs/common";
import { ItemsService } from "./item.service";
import { Item } from "./item.interface";
import { ValidationPipe } from "src/validation.pipe";
import { CreateItemDto } from "./create-item.dto";

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {

    }


    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createItemDto: CreateItemDto) {
        return this.itemsService.create(createItemDto);
    }
}