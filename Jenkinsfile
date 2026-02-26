pipeline {

    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/hirunihem/world-clock-ci-jenkins.git'
            }
        }

        stage('Deploy') {
            steps {
                sh 'cp -r * /var/www/html/'
            }
        }

    }

}
