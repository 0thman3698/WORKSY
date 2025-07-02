import { z } from "zod";

export const createMeetingSchema = z
  .object({
    title: z.string().min(1, "Meeting title is required"),
    description: z.string().optional(),
    startTime: z.coerce
      .date()
      .refine((date) => !isNaN(date.getTime()), {
        message: "Invalid start time",
      })
      .refine((date) => date > new Date(), {
        message: "Start time must be in the future",
      }),
    endTime: z.coerce
      .date()
      .refine((date) => !isNaN(date.getTime()), {
        message: "Invalid end time",
      })
      .refine((date) => date > new Date(), {
        message: "End time must be in the future",
      }),
    location: z.string().optional(),
  })
  .refine((data) => data.endTime > data.startTime, {
    message: "End time must be after start time",
    path: ["endTime"],
  });

export type CreateMeetingSchemaType = z.infer<typeof createMeetingSchema>;

export const updateMeetingSchema = z
  .object({
    title: z.string().min(1, "Meeting title is required").optional(),
    description: z.string().optional(),
    startTime: z.coerce
      .date()
      .refine((date) => !isNaN(date.getTime()), {
        message: "Invalid start time",
      })
      .optional(),
    endTime: z.coerce
      .date()
      .refine((date) => !isNaN(date.getTime()), {
        message: "Invalid end time",
      })
      .optional(),
    location: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.startTime && data.endTime) {
        return data.endTime > data.startTime;
      }
      return true;
    },
    {
      message: "End time must be after start time",
      path: ["endTime"],
    }
  );

export type UpdateMeetingSchemaType = z.infer<typeof updateMeetingSchema>;

export const googleCalendarAuthCallbackSchema = z.object({
  code: z.string().min(1, "Authorization code is required"),
});
export type GoogleCalendarAuthCallbackSchemaType = z.infer<
  typeof googleCalendarAuthCallbackSchema
>;
