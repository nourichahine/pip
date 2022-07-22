pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                echo "Building stage ..."
            }
        }
        stage('Test'){
            steps{
                echo "Testingn stage ..."
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying stage ..."
            }
        }
    }
}
