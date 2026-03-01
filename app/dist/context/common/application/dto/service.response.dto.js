"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponseDto = void 0;
class ServiceResponseDto {
    constructor(data, code = 200, message = 'Petición exitosa.') {
        this.data = [];
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
exports.ServiceResponseDto = ServiceResponseDto;
//# sourceMappingURL=service.response.dto.js.map