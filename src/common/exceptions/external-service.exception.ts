import { HttpException, HttpStatus } from '@nestjs/common';

export class ExternalServiceException extends HttpException {
  constructor(service, error) {
    const errorMessage =
      error?.response?.data || error.request || error.message;
    console.error('Error', errorMessage);
    super(`Error: ${service}`, HttpStatus.FAILED_DEPENDENCY);
  }
}
