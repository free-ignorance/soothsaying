import { NextFunction, Request, Response } from "express";

import {
	corsMiddleware
} from '../../../src/middleware/cors';

describe('/middleware', () => {
	describe('/errors.ts', () => {
		describe('code method', () => {
			let mockRequest: any;
			let mockResponse: any;
			let nextFunction: NextFunction = jest.fn();

			beforeEach(() => {
				mockRequest = jest.fn();
				mockResponse = {
					send: jest.fn(),
					header: jest.fn(),
					status: jest.fn(() => mockResponse),
				};
			});

			it( 'should attach headers to response from request', () => {
				corsMiddleware(mockRequest, mockResponse, nextFunction);
				expect(mockResponse.header).toHaveBeenCalledWith("Access-Control-Allow-Origin", "*");
				expect(mockResponse.header).toHaveBeenCalledWith("Access-Control-Allow-Headers", "Accept, Authorization, Content-Type, Origin, X-Requested-With");
				expect(mockResponse.header).toHaveBeenCalledWith("Access-Control-Allow-Methods", "GET");
			});
		});
	});
});
