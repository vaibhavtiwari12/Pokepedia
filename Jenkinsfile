pipeline {
  agent any
  environment {
    HUSKY_SKIP_INSTALL = 1
  }
  stages {
    stage('Checkout') {
      steps {
        // Checkout source code from repository
        checkout scm
      }
    }
    
    stage('Install Dependencies') {
      steps {
        // Install Node.js and NPM
        tool 'Node.js'
        
        // Install project dependencies
        bat 'npm install'
        dir("frontend") {
            bat "npm install"
        }
        dir("backend") {
            bat "npm install"
        }
      }
    }
    
    stage('Build') {
      steps {
        // Build the application
        bat 'npm run build:prod'
      }
    }
    stage('Deploy') {
      steps {
        // Deploy the application
        // Replace the commands below with your deployment script/commands
        bat 'npm install pm2' // Install process manager if needed
        bat 'pm2 restart app.js' // Restart the Node.js application
      }
    }
  }
}
