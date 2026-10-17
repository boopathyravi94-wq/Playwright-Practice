pipeline {
    agent any
    parameters{
      string  {
          name: 'TAG'
          defaultvalue:'@smoke'
          description:'select the cucumber value to excute'   
        }    
    }

    parameters{
      string  {
          name: 'TAG'
          defaultvalue:'@smoke'
          description:'select the cucumber value to excute'   
        }   

    tools {
        nodejs 'Node18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Cucumber Tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'test-results/**, playwright-report/**', allowEmptyArchive: true
        }
    }
}
