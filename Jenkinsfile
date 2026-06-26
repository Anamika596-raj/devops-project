pipeline {
    agent any

    environment {
        // App settings defined as dynamic variables for easy maintenance
        IMAGE_NAME     = 'devops-project'
        IMAGE_TAG      = 'latest'
        CONTAINER_NAME = 'devops-project-container'
        HOST_PORT      = '9090'
        CONTAINER_PORT = '80'
    }

    stages {
        // Stage 1: Get the latest code from GitHub
        stage('Checkout Code') {
            steps {
                echo 'Pulling the latest source code from GitHub...'
                checkout scm
            }
        }

        // Stage 2: Create a new Docker image from the source code
        stage('Build Docker Image') {
            steps {
                echo "Building a fresh Docker Image: ${IMAGE_NAME}:${IMAGE_TAG}"
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        // Stage 3: Stop and remove the old container if it is already running
        stage('Stop Old Container') {
            steps {
                script {
                    echo 'Checking for any existing container running on the same port...'
                    try {
                        sh "docker stop ${CONTAINER_NAME}"
                        sh "docker rm ${CONTAINER_NAME}"
                        echo 'Old container stopped and removed successfully.'
                    } catch (Exception e) {
                        echo 'No active container found with this name. Skipping clean-up...'
                    }
                }
            }
        }

        // Stage 4: Run the new Docker container on Apache server
        stage('Deploy to Apache Server') {
            steps {
                echo "Launching Apache server on http://localhost:${HOST_PORT}"
                sh "docker run -d -p ${HOST_PORT}:${CONTAINER_PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }
    }

    post {
        success {
            echo "SUCCESS: Pipeline completed! Access your application at http://localhost:${HOST_PORT}"
        }
        failure {
            echo "FAILURE: Pipeline failed. Please check the Jenkins Console Output for logs."
        }
        always {
            echo "Cleaning up dangling Docker images to save disk space..."
            // This command prevents the host machine from running out of disk space
            sh 'docker image prune -f'
        }
    }
}
