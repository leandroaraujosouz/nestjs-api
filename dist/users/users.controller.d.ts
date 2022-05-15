/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): import("mongoose").Query<(import("./entities/user.entity").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], import("./entities/user.entity").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/user.entity").UserDocument>;
    findOne(id: string): import("mongoose").Query<import("./entities/user.entity").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, import("./entities/user.entity").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/user.entity").UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): import("mongoose").Query<import("./entities/user.entity").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, import("./entities/user.entity").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/user.entity").UserDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
