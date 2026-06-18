# Hospital Management System API

A RESTful API for managing a hospital's core operations — patients, doctors,
departments, appointments, prescriptions, medicines, and billing — built with
Django REST Framework and secured with role-based access control.

## Overview

The system models 9 entities (User, Doctor, Patient, Department, Appointment,
Prescription, PrescriptionMedicine, Medicine, Bill) and exposes them through a
versionless REST API under `/api/`. Every endpoint requires JWT authentication
(except registration and login), and access to each resource is governed by
the authenticated user's role: `admin`, `doctor`, `patient`, or `receptionist`.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Django 5.2 + Django REST Framework |
| Auth | SimpleJWT (JWT access/refresh tokens) |
| Filtering & Search | django-filter (`DjangoFilterBackend`) + DRF `SearchFilter` |
| API Docs | drf-spectacular (OpenAPI schema + Swagger UI) |
| Config | django-environ (`.env` file) |
| Database | SQLite for local dev, PostgreSQL-ready (`psycopg2-binary`) |

## Prerequisites

- Python 3.11+
- pip
- (Optional) PostgreSQL, if you don't want to use the default SQLite setup

## Environment Variables

Copy `.env.example` to `.env` and fill in values:

```
SECRET_KEY=django-insecure-change-me
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
ALLOWED_HOSTS=127.0.0.1,localhost
```

| Variable | Description |
|---|---|
| `SECRET_KEY` | Django secret key — generate a unique value for any non-local environment |
| `DEBUG` | `True`/`False` — disable in production |
| `DATABASE_URL` | Database connection string. Defaults to local SQLite; for PostgreSQL use e.g. `postgres://user:password@localhost:5432/hospital_db` |
| `ALLOWED_HOSTS` | Comma-separated list of allowed hostnames |

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd hospital_api

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
```

## Database Setup

```bash
python manage.py makemigrations
python manage.py migrate
```

## Create a Superuser

```bash
python manage.py createsuperuser
```

## Seed Demo Data

A management command populates the database with sample departments,
users (one per role), doctors, patients, medicines, and an appointment —
useful for exercising the API immediately after setup.

```bash
python manage.py seed_data
```

Demo credentials created by the seed command (all share the same password):

| Role | Username | Password |
|---|---|---|
| Admin | `admin` | `Passw0rd!123` |
| Receptionist | `receptionist1` | `Passw0rd!123` |
| Doctor | `doctor1` | `Passw0rd!123` |
| Doctor | `doctor2` | `Passw0rd!123` |
| Patient | `patient1` | `Passw0rd!123` |
| Patient | `patient2` | `Passw0rd!123` |

## Run the Development Server

```bash
python manage.py runserver
```

The API is now available at `http://127.0.0.1:8000/`.

## Interactive API Docs

Live, interactive Swagger UI documentation (generated from the OpenAPI schema)
is available at:

```
http://127.0.0.1:8000/api/docs/
```

Raw OpenAPI schema: `http://127.0.0.1:8000/api/schema/`

---

## API Endpoint Reference

All paths are relative to `http://127.0.0.1:8000`. Unless noted, requests must
include `Authorization: Bearer <access_token>`.

### Auth (`/api/auth/`)

| Method | Path | Auth required | Allowed roles | Description |
|---|---|---|---|---|
| POST | `/api/auth/register/` | No | Any | Register a new user with a chosen role |
| POST | `/api/auth/login/` | No | Any | Obtain JWT access + refresh token pair |
| POST | `/api/auth/refresh/` | No | Any | Exchange a refresh token for a new access token |
| GET | `/api/auth/me/` | Yes | Any authenticated | Get the current authenticated user's profile |

### Departments (`/api/departments/`)

| Method | Path | Auth required | Allowed roles | Description |
|---|---|---|---|---|
| GET | `/api/departments/` | Yes | Any authenticated | List all departments |
| POST | `/api/departments/` | Yes | Admin | Create a department |
| GET | `/api/departments/{id}/` | Yes | Any authenticated | Retrieve a department |
| PUT/PATCH | `/api/departments/{id}/` | Yes | Admin | Update a department |
| DELETE | `/api/departments/{id}/` | Yes | Admin | Delete a department |

### Doctors (`/api/doctors/`)

| Method | Path | Auth required | Allowed roles | Description |
|---|---|---|---|---|
| GET | `/api/doctors/` | Yes | Admin, Doctor, Receptionist | List doctors (filter by `is_available`, `department`) |
| POST | `/api/doctors/` | Yes | Admin, Doctor | Create a doctor profile |
| GET | `/api/doctors/{id}/` | Yes | Admin, Doctor, Receptionist | Retrieve a doctor |
| PUT/PATCH | `/api/doctors/{id}/` | Yes | Admin, Doctor (own profile) | Update a doctor profile |
| DELETE | `/api/doctors/{id}/` | Yes | Admin, Doctor (own profile) | Delete a doctor profile |
| PATCH | `/api/doctors/{id}/set_availability/` | Yes | Admin, Doctor (own profile) | Toggle `is_available` |

> Patients have no access to the doctors endpoint.

### Patients (`/api/patients/`)

| Method | Path | Auth required | Allowed roles | Description |
|---|---|---|---|---|
| GET | `/api/patients/` | Yes | Admin, Receptionist, Doctor (view), Patient (own) | List patients |
| POST | `/api/patients/` | Yes | Admin, Receptionist, Patient | Create a patient profile |
| GET | `/api/patients/{id}/` | Yes | Admin, Receptionist, Doctor (view), Patient (own) | Retrieve a patient |
| PUT/PATCH | `/api/patients/{id}/` | Yes | Admin, Receptionist, Patient (own) | Update a patient profile |
| DELETE | `/api/patients/{id}/` | Yes | Admin, Receptionist, Patient (own) | Delete a patient profile |

### Appointments (`/api/appointments/`)

| Method | Path | Auth required | Allowed roles | Description |
|---|---|---|---|---|
| GET | `/api/appointments/` | Yes | Admin, Receptionist (all), Doctor (own), Patient (own) | List appointments — filter by `doctor`, `patient`, `status`, `date`, `date_from`, `date_to` |
| POST | `/api/appointments/` | Yes | Admin, Patient, Receptionist | Book an appointment |
| GET | `/api/appointments/{id}/` | Yes | Admin, Receptionist, Doctor (own), Patient (own) | Retrieve an appointment |
| PUT/PATCH | `/api/appointments/{id}/` | Yes | Admin, Receptionist, Doctor (own), Patient (own) | Update an appointment |
| DELETE | `/api/appointments/{id}/` | Yes | Admin, Receptionist, Doctor (own), Patient (own) | Delete an appointment |
| PATCH | `/api/appointments/{id}/cancel/` | Yes | Admin, Receptionist, Doctor (own), Patient (own) | Cancel an appointment (`status` → `cancelled`) |

### Prescriptions (`/api/prescriptions/`)

| Method | Path | Auth required | Allowed roles | Description |
|---|---|---|---|---|
| GET | `/api/prescriptions/` | Yes | Admin, Doctor (own), Patient (own, read-only) | List prescriptions |
| POST | `/api/prescriptions/` | Yes | Admin, Doctor | Create a prescription (with nested medicines) for an appointment |
| GET | `/api/prescriptions/{id}/` | Yes | Admin, Doctor (own), Patient (own, read-only) | Retrieve a prescription |
| PUT/PATCH | `/api/prescriptions/{id}/` | Yes | Admin, Doctor (own) | Update a prescription / its medicines |
| DELETE | `/api/prescriptions/{id}/` | Yes | Admin, Doctor (own) | Delete a prescription |

> Receptionists have no access to prescriptions.

### Medicines (`/api/medicines/`)

| Method | Path | Auth required | Allowed roles | Description |
|---|---|---|---|---|
| GET | `/api/medicines/` | Yes | Any authenticated | List all medicines — search via `?search=<name>` |
| POST | `/api/medicines/` | Yes | Admin | Create a medicine |
| GET | `/api/medicines/{id}/` | Yes | Any authenticated | Retrieve a medicine |
| PUT/PATCH | `/api/medicines/{id}/` | Yes | Admin | Update a medicine |
| DELETE | `/api/medicines/{id}/` | Yes | Admin | Delete a medicine |

### Billing (`/api/billing/`)

| Method | Path | Auth required | Allowed roles | Description |
|---|---|---|---|---|
| GET | `/api/billing/` | Yes | Admin, Receptionist (all), Patient (own) | List bills |
| POST | `/api/billing/` | Yes | Admin, Receptionist | Generate a bill for a patient |
| GET | `/api/billing/{id}/` | Yes | Admin, Receptionist, Patient (own) | Retrieve a bill |
| PUT/PATCH | `/api/billing/{id}/` | Yes | Admin, Receptionist | Update a bill |
| DELETE | `/api/billing/{id}/` | Yes | Admin, Receptionist | Delete a bill |
| PATCH | `/api/billing/{id}/mark_paid/` | Yes | Admin, Receptionist | Mark a bill as paid (`paid` → `true`) |

> Doctors have no access to billing.

### Docs & Admin

| Method | Path | Auth required | Allowed roles | Description |
|---|---|---|---|---|
| GET | `/api/schema/` | No | Any | Raw OpenAPI 3 schema |
| GET | `/api/docs/` | No | Any | Swagger UI |
| — | `/admin/` | Django session auth | Staff/Superuser | Django admin panel |

---

## Sample Requests & Responses

### 1. Register

`POST /api/auth/register/`

```json
{
  "username": "patient3",
  "email": "patient3@hospital.test",
  "password": "Passw0rd!123",
  "first_name": "Lena",
  "last_name": "Novak",
  "role": "patient"
}
```

**201 Created**

```json
{
  "id": 7,
  "username": "patient3",
  "email": "patient3@hospital.test",
  "first_name": "Lena",
  "last_name": "Novak",
  "role": "patient",
  "date_joined": "2026-06-18T09:12:44.120000Z"
}
```

### 2. Login

`POST /api/auth/login/`

```json
{
  "username": "patient3",
  "password": "Passw0rd!123"
}
```

**200 OK**

```json
{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Use the `access` token on subsequent requests:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3. Book an Appointment

`POST /api/appointments/` — as `patient` or `receptionist`/`admin`

```json
{
  "patient": 1,
  "doctor": 1,
  "appointment_date": "2026-06-25T10:30:00Z"
}
```

**201 Created**

```json
{
  "id": 3,
  "patient": 1,
  "doctor": 1,
  "appointment_date": "2026-06-25T10:30:00Z",
  "status": "pending",
  "created_at": "2026-06-18T09:15:02.554000Z"
}
```

### 4. Create a Prescription with Multiple Medicines

`POST /api/prescriptions/` — as `doctor` or `admin`

```json
{
  "appointment": 3,
  "diagnosis": "Seasonal allergic rhinitis",
  "notes": "Follow up in 2 weeks if symptoms persist.",
  "prescription_medicines": [
    { "medicine": 4, "dosage": "10mg once daily", "duration": "14 days" },
    { "medicine": 1, "dosage": "500mg as needed", "duration": "5 days" }
  ]
}
```

**201 Created**

```json
{
  "id": 2,
  "appointment": 3,
  "diagnosis": "Seasonal allergic rhinitis",
  "notes": "Follow up in 2 weeks if symptoms persist.",
  "created_at": "2026-06-18T09:20:11.302000Z",
  "prescription_medicines": [
    { "id": 3, "prescription": 2, "medicine": 4, "dosage": "10mg once daily", "duration": "14 days" },
    { "id": 4, "prescription": 2, "medicine": 1, "dosage": "500mg as needed", "duration": "5 days" }
  ]
}
```

### 5. Generate a Bill

`POST /api/billing/` — as `receptionist` or `admin`

```json
{
  "patient": 1,
  "amount": "150.00"
}
```

**201 Created**

```json
{
  "id": 5,
  "patient": 1,
  "amount": "150.00",
  "paid": false,
  "created_at": "2026-06-18T09:25:30.811000Z"
}
```

### 6. Mark a Bill as Paid

`PATCH /api/billing/5/mark_paid/` — as `receptionist` or `admin`

```json
{}
```

**200 OK**

```json
{
  "id": 5,
  "patient": 1,
  "amount": "150.00",
  "paid": true,
  "created_at": "2026-06-18T09:25:30.811000Z"
}
```

---

## Error Format

All errors are returned in a consistent envelope:

```json
{
  "error": {
    "status": 400,
    "message": "Appointment date cannot be in the past.",
    "details": {
      "appointment_date": ["Appointment date cannot be in the past."]
    }
  }
}
```
