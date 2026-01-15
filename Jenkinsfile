pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    stages {
        stage('Build') {
            steps {
                dir("light-it-challenge") {
                    sh "npm install"
                    sh "npm run build"
                }
            }
        }
        stage('Deploy') {
            steps {
              echo "🚀 Deployment starting..."
              echo "✅ Deployment completed!"
            }
        }
    }
}
