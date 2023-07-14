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
        sh 'npm install'
        dir("frontend") {
            sh "npm install"
        }
        dir("backend") {
            sh "npm install"
        }
      }
    }
    
    stage('Build') {
      steps {
        // Build the application
        sh 'npm run build:prod'
      }
    }
    
  }
}