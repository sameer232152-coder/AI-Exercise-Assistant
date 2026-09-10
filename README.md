# AI-Exercise-Assistant
# 🏋️ AI Exercise Assistant

An AI-powered exercise assistant that helps users perform exercises with proper posture and technique using **Computer Vision and Pose Estimation**.

## 📌 Project Overview

**AI Exercise Assistant** is a computer-vision-based fitness application designed to analyze a user's exercise movements through a camera.

The system detects human body posture using pose estimation and provides feedback about exercise form. It can also count repetitions and help users perform exercises more accurately.

The project is developed as a **B.Tech Computer Science and Engineering Minor Project** by a team of four students.

## 🎯 Objectives

* Detect the user's body posture using a camera.
* Identify and track body joints.
* Count exercise repetitions automatically.
* Analyze exercise posture and movement.
* Provide real-time feedback to the user.
* Create an easy-to-use AI-based fitness assistant.

## ✨ Key Features

* 📷 Real-time camera-based exercise detection
* 🧍 Human pose estimation
* 🔢 Automatic repetition counting
* 📊 Exercise performance tracking
* ⚠️ Incorrect posture detection
* 💡 Real-time exercise feedback
* 🏋️ Support for multiple exercises

## 🏃 Supported Exercises

Initially, the project can support:

* Squats
* Push-ups
* Bicep Curls
* Jumping Jacks
* Lunges

More exercises can be added in future versions.

## 🧠 How It Works

```text
User
  ↓
Camera
  ↓
Video/Image Input
  ↓
Pose Detection
  ↓
Body Landmark Detection
  ↓
Angle & Movement Calculation
  ↓
Exercise Recognition
  ↓
Repetition Counting
  ↓
Posture Analysis
  ↓
Feedback to User
```

## 🛠️ Technologies Used

### Programming Language

* Python

### Computer Vision

* OpenCV
* MediaPipe

### AI / Machine Learning

* Pose Estimation
* Machine Learning / Rule-Based Classification

### Frontend

* HTML
* CSS
* JavaScript
* React.js *(if used)*

### Backend

* Flask / FastAPI *(if used)*

### Database

* MySQL / MongoDB *(if required)*

### Development Tools

* VS Code
* Git
* GitHub

## 📂 Project Structure

```text
AI-Exercise-Assistant/
│
├── frontend/
│
├── backend/
│
├── models/
│
├── exercises/
│   ├── squat.py
│   ├── pushup.py
│   ├── bicep_curl.py
│   └── jumping_jack.py
│
├── utils/
│
├── dataset/
│
├── tests/
│
├── documentation/
│
├── requirements.txt
├── .gitignore
└── README.md
```

## 👥 Team Members

| Name            | Enrollment No. | Responsibility              |
| --------------- | -------------- | --------------------------- |
| Sameer Pramanik | AJU/232152     | Project Lead / AI & Backend |
| Abhishek Das    | AJU/232242     | Frontend / UI               |
| Bhima Mukhi     | AJU/232159     | Computer Vision / Database  |
| Rahul Kumar     | AJU/232006     | Testing / Documentation     |

## 🔄 Team Development Workflow

Since all four team members are working from different locations, the project will be developed collaboratively using Git and GitHub.

```text
GitHub Repository
       │
       ├── main
       │
       ├── feature/frontend
       │
       ├── feature/pose-detection
       │
       ├── feature/exercise-module
       │
       └── feature/testing
```

Each member works on their assigned branch.

```bash
git checkout -b feature/your-feature
```

After completing the work:

```bash
git add .
git commit -m "Add exercise detection"
git push origin feature/your-feature
```

Then create a **Pull Request** on GitHub and merge it into `main` after review.

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd AI-Exercise-Assistant
```

### 2. Create Virtual Environment

```bash
python -m venv venv
```

### 3. Activate Environment

Windows:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
source venv/bin/activate
```

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

### 5. Run the Application

```bash
python main.py
```

## 📸 Screenshots

Screenshots of the application will be added here after development.

## 📊 Future Scope

* Add more exercises.
* Improve posture detection accuracy.
* Add personalized workout plans.
* Add user profiles and progress tracking.
* Add voice-based feedback.
* Develop a mobile application.
* Integrate advanced AI/ML models.
* Add cloud-based user data storage.

## ⚠️ Disclaimer

This application is developed for educational and project purposes. It is not a substitute for professional medical or fitness advice.

## 👨‍🏫 Guided By

**Prof. Dr. Dilip Kumar**

## 🎓 Institution

**Arka Jain University, Jamshedpur**

**B.Tech – Computer Science and Engineering**

**Academic Session: 2026–2027**

---

⭐ If you find this project useful, consider giving the repository a star.
