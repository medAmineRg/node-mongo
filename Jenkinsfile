node {  
        stage('Clone repository') {
            git credentialsId: 'git', url: 'https://github.com/medAmineRg/node-mongo'
        }
        stage('Build image') {
                sh 'docker compose up -d --build'
        }
         // stage('Push image') {
         //    // withDockerRegistry(credentialsId: 'dockerhubjenkins', url: 'https://hub.docker.com/') {
         //    //     dockerImage.push()
         //    // }

         //        withCredentials([string(credentialsId: 'dockerhub', variable: 'dockerhub')]) {
         //                sh 'echo ${dockerhub} | docker login -u mohamed99amine --password-stdin'
         //        }
         //        sh 'docker push mohamed99amine/devkhobzix'
         // }   
}
