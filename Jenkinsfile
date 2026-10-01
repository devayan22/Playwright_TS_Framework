/*  The first part just checks Jenkins connected to Github Repo or not
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Workspace') {
            steps {
                bat 'dir'
            }
        }
    }
}
*/

/* This runs the scripts but report is not preserved from jenkins.
pipeline {
    agent any

    stages {

        stage('Run Playwright Tests') {
            steps {
                bat 'docker compose up --build --abort-on-container-exit --exit-code-from tests'
            }
        }
    }
}
*/

pipeline {
    agent any

    stages {
        stage('Run Playwright Tests') {
            steps {
                bat 'docker compose up --build --abort-on-container-exit --exit-code-from tests'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'reporting-labs',
                reportFiles: 'index.html',
                reportName: 'Playwright Reporting Labs'
            ])
        }
    }
}