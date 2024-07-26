import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { FindAllParameters, Taskdto, TaskStatus } from './taskdto';
import { v4 as uuid } from 'uuid'

@Injectable()
export class TaskService {

    private tasks: Taskdto[] = [];

    create(task: Taskdto) {
        task.id = uuid()
        this.tasks.push(task)
        task.status = TaskStatus.TO_DO
        console.log(this.tasks);
    }

    findById(id: string): Taskdto {
        const foundTask = this.tasks.filter(t => t.id === id)

        if (foundTask.length) {
            return foundTask[0]
        }

        throw new NotFoundException(`id inexistente ${id}`)
    }

    findAll(params: FindAllParameters): Taskdto[] {
        return this.tasks.filter(t => {
            let match = true;
            if (params.title != undefined && !t.title.includes(params.title)) {
                match = false
            }

            if (params.title != undefined && !t.status.includes(params.status)) {
                match = false
            }
            return match
        })
    }

    update(task: Taskdto) {
        let taskIndex = this.tasks.findIndex(t => t.id === task.id)
        if (taskIndex >= 0) {
            this.tasks[taskIndex] = task
            return
        }
        throw new HttpException(`taskId n foi achado ${task.id}`, HttpStatus.BAD_REQUEST);
    }

    remove(id: string) {
        let taskIndex = this.tasks.findIndex(t => t.id === id);

        if (taskIndex >= 0) {
            this.tasks.splice(taskIndex, 1)
            return
        }
        throw new HttpException(`taskId do delete n foi achado ${id}`, HttpStatus.BAD_REQUEST);
    }

}
