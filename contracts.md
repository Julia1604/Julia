# API Contracts - ProAuto Expert

## Backend Integration Plan

### Contact Form Email Endpoint

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "phone": "string (required)",
  "contactMethod": "string (required, one of: phone, telegram, viber, whatsapp)"
}
```

**Response:**
- Success (200):
```json
{
  "message": "Заявку успішно відправлено"
}
```

- Error (400/500):
```json
{
  "detail": "Error message"
}
```

### Email Configuration

**SMTP Server:** Gmail SMTP
- Host: smtp.gmail.com
- Port: 587
- TLS: Enabled
- From: lapka.petstore@gmail.com
- To: lapka.petstore@gmail.com
- App Password: Stored in .env

**Email Template:**
```
Subject: Нова заявка з сайту ProAuto Expert

Ім'я: {name}
Телефон: {phone}
Спосіб зв'язку: {contactMethod}

Дата відправки: {datetime}
```

## Frontend Integration

**File:** `/app/frontend/src/components/ContactForm.jsx`

**Changes:**
1. Remove mock data submission
2. Add axios POST request to `/api/contact`
3. Handle loading state
4. Handle success/error responses with toast notifications
5. Keep form reset on success

## Environment Variables

**Backend (.env):**
- GMAIL_USER=lapka.petstore@gmail.com
- GMAIL_APP_PASSWORD=vwbq paqq hper coir

## Testing Protocol

1. Test email sending functionality
2. Verify email delivery to lapka.petstore@gmail.com
3. Test form validation
4. Test error handling
5. Test toast notifications
