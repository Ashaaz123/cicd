# Pipeline Visualizer & YAML Generator

---

## Project Overview

Pipeline Visualizer & YAML Generator is a DevOps-focused web application that allows users to visually create and manage CI/CD pipeline stages. The application automatically generates YAML configuration files based on the stages added by the user.

This project demonstrates fundamental DevOps concepts, Git branching workflows, JavaScript DOM manipulation, and YAML generation.

---

## Features

* Add CI/CD pipeline stages
* Visualize pipeline workflow
* Delete pipeline stages
* Reorder stages using Move Up and Move Down options
* Automatically generate YAML configuration
* Real-time YAML updates
* Simple and user-friendly interface
* Demonstrates Git feature-branch workflow

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Git & GitHub

---

## Project Structure

```text
pipeline-visualizer/

├── index.html
├── styles.css
├── app.js
└── yaml-generator.js
```

---

## Branching Strategy

The project was developed using separate Git branches to simulate a real-world development workflow.

### Main Branch

```text
main
```

Contains the final integrated project.

### Feature Branches

```text
ui-development
```

Responsible for:

* User Interface Design
* Page Layout
* Styling

```text
pipeline-logic
```

Responsible for:

* Stage Creation
* Stage Deletion
* Stage Reordering
* Pipeline Rendering

```text
yaml-generator
```

Responsible for:

* YAML Generation Logic
* YAML Formatting

---

## How It Works

### Step 1: Add Pipeline Stages

Users click the **Add Stage** button and enter stage names such as:

```text
Build
Test
Deploy
```

---

### Step 2: Visual Pipeline Creation

The stages are displayed visually within the pipeline area.

Example:

```text
Build
↓
Test
↓
Deploy
```

---

### Step 3: YAML Generation

The application automatically converts the pipeline into YAML format.

Example Output:

```yaml
stages:
  - build
  - test
  - deploy

build:
  stage: build

test:
  stage: test

deploy:
  stage: deploy
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd pipeline-visualizer
```

### Open Application

Open:

```text
index.html
```

in a web browser.

Alternatively, use VS Code Live Server.

---

## Usage

1. Open the application.
2. Click **Add Stage**.
3. Enter stage names.
4. Reorder stages if required.
5. Remove unwanted stages.
6. View generated YAML in real time.

---

## Learning Outcomes

Through this project, the following concepts were learned:

* Git Branching
* Feature-Based Development
* Branch Merging
* DOM Manipulation
* Event Handling
* JavaScript Arrays
* YAML Structure
* DevOps Pipeline Concepts
* CI/CD Workflow Basics

---

## Future Enhancements

* Download YAML File
* GitHub Actions YAML Generation
* GitLab CI/CD YAML Generation
* Jenkins Pipeline Support
* Drag-and-Drop Stage Reordering
* Pipeline Validation
* Dark Mode UI
* Stage Templates

---

## Author

**Ashaaz Ahmed Khan A**


## Conclusion

Pipeline Visualizer & YAML Generator simplifies the process of creating CI/CD workflows by providing a visual interface and automatically generating YAML configurations. The project serves as a practical introduction to DevOps principles, Git workflows, and frontend web development.
