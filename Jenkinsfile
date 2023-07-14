pipeline {
  agent any
  
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
    
  }
}