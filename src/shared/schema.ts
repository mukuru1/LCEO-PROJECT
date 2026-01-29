import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const causes = pgTable("causes", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  goalAmount: integer("goal_amount").notNull(),
  raisedAmount: integer("raised_amount").notNull().default(0),
  isFeatured: boolean("is_featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCauseSchema = createInsertSchema(causes).omit({ id: true, createdAt: true });
export const insertInquirySchema = createInsertSchema(contactInquiries).omit({ id: true, createdAt: true });

export type Cause = typeof causes.$inferSelect;
export type InsertCause = z.infer<typeof insertCauseSchema>;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
