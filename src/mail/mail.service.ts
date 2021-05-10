import got from 'got';
import * as FormData from 'form-data';
import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { MailModuleOptions } from './mail.interfaces';

@Injectable()
export class MailService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: MailModuleOptions,
  ) {
    // nestJS가 실행 될때마다 test
    // this.sendEmail('testing', 'test');
  }

  private async sendEmail(subject: string, template: string) {
    const form = new FormData();
    form.append('from', `Excited User <mailgun@${this.options.domain}>`);
    form.append('to', `wlsdnr129@naver.com`);
    form.append('subject', subject);
    form.append('template', template);
    form.append('v:code', 'this');
    form.append('v:username', 'Jinwook');
    const response = await got(
      `https://api.mailgun.net/v3/${this.options.domain}/messages`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `api:${this.options.apiKey}`,
          ).toString('base64')}`,
        },
        method: 'POST',
        body: form,
      },
    );
    console.log(response.body);
  }
}
