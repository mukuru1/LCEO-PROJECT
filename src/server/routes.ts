import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Initialize seed data
  await storage.seedCauses();

  app.get(api.causes.list.path, async (req, res) => {
    const causes = await storage.getCauses();
    res.json(causes);
  });

  app.get(api.causes.get.path, async (req, res) => {
    const id = Number(req.params.id);
    const cause = await storage.getCause(id);
    if (!cause) {
      return res.status(404).json({ message: "Cause not found" });
    }
    res.json(cause);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
