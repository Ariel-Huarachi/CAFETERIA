"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRolDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_rol_dto_1 = require("./create-rol.dto");
class UpdateRolDto extends (0, swagger_1.PartialType)(create_rol_dto_1.CreateRolDto) {
}
exports.UpdateRolDto = UpdateRolDto;
//# sourceMappingURL=update-rol.dto.js.map