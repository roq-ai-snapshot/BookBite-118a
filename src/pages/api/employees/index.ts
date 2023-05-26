import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { employeeValidationSchema } from 'validationSchema/employees';
import { convertQueryToPrismaUtil } from '../../../server/utils';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getEmployees();
    case 'POST':
      return createEmployee();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getEmployees() {
    const data = await prisma.employee.findMany(convertQueryToPrismaUtil(req.query, 'employee'));
    return res.status(200).json(data);
  }

  async function createEmployee() {
    await employeeValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.employee.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
