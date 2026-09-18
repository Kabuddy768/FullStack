# FullStack Project

A full-stack application with a Django backend and a React + Vite frontend.

---

## Getting Started on a New Machine

Follow these step-by-step instructions to clone and run this project on any machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Kabuddy768/FullStack.git
cd FullStack
```

---

### 2. Backend Setup (Django)

The Python virtual environment (`venv`) and database (`db.sqlite3`) are excluded from version control. Set them up with:

```bash
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment:
# On Windows (Command Prompt / PowerShell):
.\venv\Scripts\activate
# On macOS / Linux:
# source venv/bin/activate

# Install required packages
pip install -r requirements.txt

# Run database migrations to initialize SQLite
python manage.py migrate

# Start the Django development server (runs at http://127.0.0.1:8000/)
python manage.py runserver
```

---

### 3. Frontend Setup (React + Vite)

Open a **new terminal window** and run:

```bash
cd FullStack/frontend

# Install node dependencies (restores node_modules)
npm install

# Start the development server (runs at http://localhost:5173/)
npm run dev
```

---

### 4. Environment Variables (`.env`)

Because `.env` files are not uploaded to GitHub for security reasons, if you use custom environment variables (e.g. backend secret keys or frontend API URLs), create your local `.env` file manually in the respective folder.
