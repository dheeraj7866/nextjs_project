pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  environment {
    NODE_ENV = "${env.BRANCH_NAME == 'main' ? 'production' : 'staging'}"
    APP_NAME = "my-app"
  }

  

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo "install depende" // or pip install -r requirements.txt
      }
    }

    stage('Lint & Static Code Analysis') {
      parallel {
        stage('Lint') {
          steps {
            echo "parallel lint"
          }
        }

        stage('SonarQube') {
          when {
            not { branch 'feature/*' }
          }
          steps {
            echo "parallel sonarqube"
          }
        }
      }
    }

    stage('Unit Tests') {
      steps {
        echo "unit test"
      }
    }

    stage('Build') {
      steps {
        echo "build test"
      }
    }

    stage('Docker Build & Push') {
      when {
        not { branch 'feature/*' }
      }
      steps {
        script {
          echo "docker"
        }
      }
    }

    stage('Deploy to Staging') {
      when {
        branch 'develop'
      }
      steps {
        echo "deploy to staging"
      }
    }

    stage('Deploy to Production') {
      when {
        branch 'main'
      }
      steps {
        input message: 'Approve production deployment?'
        echo "deploy to prod"
      }
    }
  }

  post {
    success {
      echo "✅ Build Successful: ${env.BRANCH_NAME}"
      // Example: slackSend channel: '#builds', message: "✅ ${env.JOB_NAME} #${env.BUILD_NUMBER} succeeded"
    }
    failure {
      echo "❌ Build Failed: ${env.BRANCH_NAME}"
      // slackSend or mail notification here
    }
    always {
      cleanWs()
    }
  }
}
