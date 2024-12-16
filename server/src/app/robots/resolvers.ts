import { Request, Response } from "express";
import { prismaClient } from "../../clients/db";

export class Robots {
  public static async getAllRobots(req: Request, res: Response) {
    const robots = await prismaClient.robot.findMany();

    if (!robots) {
      throw new Error("No data found");
    }

    res.status(200).json({
      message: "success",
      results: robots.length,
      data: {
        robots,
      },
    });
  }
}
