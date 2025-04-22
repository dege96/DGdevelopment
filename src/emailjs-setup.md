# EmailJS Setup Guide for Contact Form

## Step 1: Create an EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month

## Step 2: Add an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Name your service (e.g., "dg-development-service")
6. Note the **Service ID** (you'll need it for the code)

## Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{user_name}}` - Sender's name
   - `{{user_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
4. Save the template
5. Note the **Template ID** (you'll need it for the code)

## Step 4: Configure the Contact Form
1. Open `src/pages/Kontakt.tsx`
2. Replace the placeholder values with your actual EmailJS credentials:
   ```javascript
   const serviceId = 'your_service_id';  // Replace with your service ID
   const templateId = 'your_template_id'; // Replace with your template ID
   const userId = 'your_user_id'; // Replace with your Public Key from Account > API Keys
   ```

## Example Email Template
```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Message from DG Development Website</h2>
    <p><strong>Name:</strong> {{user_name}}</p>
    <p><strong>Email:</strong> {{user_email}}</p>
    <p><strong>Subject:</strong> {{subject}}</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
</body>
</html>
```

That's it! Your contact form should now be fully functional and send emails when users submit the form. 