import { db } from "./db";
import {
  causes,
  contactInquiries,
  type InsertCause,
  type InsertInquiry,
  type Cause
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getCauses(): Promise<Cause[]>;
  getCause(id: number): Promise<Cause | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<any>;
  seedCauses(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getCauses(): Promise<Cause[]> {
    return await db.select().from(causes);
  }

  async getCause(id: number): Promise<Cause | undefined> {
    const [cause] = await db.select().from(causes).where(eq(causes.id, id));
    return cause;
  }

  async createInquiry(inquiry: InsertInquiry) {
    return await db.insert(contactInquiries).values(inquiry).returning();
  }

  async seedCauses() {
    const existing = await this.getCauses();
    if (existing.length === 0) {
      await db.insert(causes).values([
        {
          title: "Education for Everyone",
          description: "Providing books, uniforms, and tuition support for underprivileged children to ensure they have access to quality education.",
          imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
          goalAmount: 10000,
          raisedAmount: 4500,
          isFeatured: true
        },
        {
          title: "Clean Water Initiative",
          description: "Building wells and filtration systems in remote communities to provide safe, clean drinking water for families.",
          imageUrl: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&q=80&w=1000",
          goalAmount: 25000,
          raisedAmount: 12000,
          isFeatured: true
        },
        {
          title: "Healthcare Outreach",
          description: "Mobile clinics and medical supplies for rural areas, ensuring basic healthcare reaches those who need it most.",
          imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
          goalAmount: 15000,
          raisedAmount: 3000,
          isFeatured: false
        },
        {
          title: "Youth Empowerment Program",
          description: "Skills training, mentorship, and sports programs to help young people build a better future and unlock their potential.",
          imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
          goalAmount: 8000,
          raisedAmount: 7500,
          isFeatured: false
        },
         {
          title: "Hunger Relief Fund",
          description: "Distributing nutritious meals and food packages to families facing food insecurity in our local communities.",
          imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
          goalAmount: 5000,
          raisedAmount: 1200,
          isFeatured: false
        },
        {
          title: "Women's Vocational Training",
          description: "Empowering women with vocational skills and resources to start their own businesses and achieve financial independence.",
          imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000",
          goalAmount: 12000,
          raisedAmount: 6000,
          isFeatured: true
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
