pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                echo "Building stage ..."
                withCredentials([usernamePassword(credentialsId:'pro8645mgs',passwordVariable:'PASSWORD',usernameVariable:'USERNAME')])
                sh 'docker build -t pro8645mgs/app_img:1.0 .'
                sh 'echo $PASSWORD | docer login -u $USERNAME --password-stdin'
                sh 'docker push pro8645mgs/app_img:1.0'
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
