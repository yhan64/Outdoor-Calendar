pipeline {
    agent any

    environment {
        DOCKER_HOST = 'tcp://18.217.176.7:2375'
    }

    stages {
        stage('SCM') {
            steps{
                git 'https://github.com/yhan64/oc-all.git'   
            }
        }
        stage('Build Images') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Create Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }
        stage('Test') {
          steps {
            echo 'I\'m a test'
          }
        }
    }
}