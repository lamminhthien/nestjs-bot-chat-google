import { Injectable } from '@nestjs/common';
import { sendNotificationGoogleChat } from './common/webhook-google-chat';
import { reminderBot } from './utils/google-chat-webhook.constants';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @Cron('45 * * * * *')
  reminderWork(): string {
    sendNotificationGoogleChat({
      content: 'Hello i will send every 45 seconds',
      title: 'Test cronjob',
      url: reminderBot,
    });
    return 'Reminder Work!';
  }
}
