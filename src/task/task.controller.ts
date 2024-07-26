import { Body, Controller, Param, Post, Get, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { FindAllParameters, Taskdto } from './taskdto';
import { TaskService } from './task.service';
import { AuthGuard } from 'src/auth/auth.guard';


@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {

    constructor(private readonly taskservice: TaskService) { }

    @Post()
    create(@Body() task: Taskdto) {
        this.taskservice.create(task)
    }

    @Get('/:id')
    findById(@Param('id') id: string) {
        console.log(id)
        return this.taskservice.findById(id)
    }

    @Get()
    findAll(@Query() params: FindAllParameters): Taskdto[] {
        return this.taskservice.findAll(params)
    }

    @Put()
    update(@Body() task: Taskdto) {
        this.taskservice.update(task)
    }

    @Delete()
    remove(@Param('/:id') id: string) {
        return this.taskservice.remove(id)
    }
}
