import { ParseUUIDPipe } from '@nestjs/common';
import * as is_uuid_1 from '@nestjs/common/utils/is-uuid';

export class UUIDPipe extends ParseUUIDPipe {
  // private is_uuid_1 = require('../utils/is-uuid');

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async transform(value: any, metadata): Promise<any> {
    if (!is_uuid_1.isUUID(value)) {
      throw this.exceptionFactory('Falha na validação (esperado um UUID)');
    }
    return value;
  }
}
