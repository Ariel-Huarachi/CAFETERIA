import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
export declare class RolesService {
    create(createRolDto: CreateRolDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRolDto: UpdateRolDto): string;
    remove(id: number): string;
}
