import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SCHEDULE_APPOINTMENT_URL = '/schedule-demo'

export const SCHEDULE_EMBED_URL =
  'https://calendar.google.com/calendar/appointments/AcZssZ3oRHPdpoMQofqk5-xTqWHgAIveEeNlU_zrvK4=?gv=true'
