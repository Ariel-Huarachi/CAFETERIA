import { RolesService } from './roles.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRolDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRoleDto: UpdateRolDto): string;
    remove(id: string): string;
}
