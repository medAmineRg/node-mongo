pipeline {
    agent {
        image 'node:18-alpine' 
    }

    stage('Build docker image'){
        steps{
            sh 'docker compose up -d --build .'
        }
    }

    // stage('Push') {
    //         steps {
    //                 withCredentials([string(credentialsId: 'dockerhub', variable: 'dockerhub')]) {
    //                     sh 'docker login -u mohamed99amine -p ${dockerhub}'
    //                 }
    //                 sh 'docker push mohamed99amine/devkhobzix'

    //         }
    //     }
}