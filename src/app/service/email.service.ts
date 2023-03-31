import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface EmailData {
  name?: string,
  email?: string,
  subject?: string,
  message?: string
}

interface PostData {
  to: string,
  subject: string,
  message: {
    replyTo: string,
    from: string,
    data: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  azureUrl = 'https://prod-09.westus3.logic.azure.com:443/workflows/ea4a826b8e294a1d88c9d44120906d3d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SPN3Hrt1zHB7oZxRvjGkuUSfg4Rrp-jaN4qcKuVw0xk';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: EmailData): any {
    const data: PostData = {
      to: 'joemarzullowebcontact@gmail.com',
      subject: 'Contact from joemarzullo.com',
      message: this.formatEmailBody(emailData)
    }

    return this.http.post<any>(this.azureUrl, data).subscribe();
  }

  formatEmailBody({ email, message, name }: EmailData): { replyTo: string, from: string, data: string } {
    return {
      replyTo: `Reply To: ${email}`,
      from: `From: ${name}`,
      data: `Message: ${message}`
    };
  }
}
