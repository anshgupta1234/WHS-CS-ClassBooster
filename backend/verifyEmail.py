from __future__ import print_function
import smtplib, ssl
from creds import getCreds
import pickle
import os,os.path
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

port = 465 #SSL Port
context = ssl.create_default_context()

# If modifying these scopes, delete the file token.pickle.

SCOPES = ['https://www.googleapis.com/auth/gmail.send','https://www.googleapis.com/auth/gmail.readonly']

#################################
#         Email Portion         #
#################################
def emailUser(userEmail,verificationLink):
    """Shows basic usage of the Gmail API.
    Lists the user's Gmail labels.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = None
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('gmail', 'v1', credentials=creds)

    # Call the Gmail API
    results = service.users().labels().list(userId='me').execute()
    labels = results.get('labels', [])

    if not labels:
        print('No labels found.')
    else:
        print('Labels:')
        for label in labels:
            print(label['name'])



    with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
        email, password = getCreds()
        server.login(email, password)
        message = MIMEMultipart("alternative")
        message["Subject"] = f"ClassBooster Verification"
        message["From"] = "Jamesson Smith at ClassBooster Team"
        message["To"] = userEmail
        bodyText = f"""\
                        Please click the following link to verify your ClassBooster account.
                        {verificationLink}
                    """
        html = f"""\
        <html>
            <body>
                <p>
                Click the following link to verify your ClassBooster account: <br>
                {verificationLink} <br>
                Yours Truly,<br>
                Jamesson Smith<br>
                </p>
            </body>
        </html>
        """
        message.attach(MIMEText(bodyText,"plain"))
        message.attach(MIMEText(html,"html"))
        server.sendmail("peepee@gmail.com",userEmail, message.as_string())