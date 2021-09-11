pipeline {
   agent any 
   environment {
      GIT_REPO = '202120_S2_E1'
      GIT_CREDENTIAL_ID = 'de5cd571-10da-4034-8ba8-af99beef4b14'
   }
   stages {
      stage('Checkout') { 
         steps {
            scmSkip(deleteBuild: true, skipPattern:'.*\\[ci-skip\\].*')

            git branch: 'master', 
               credentialsId: env.GIT_CREDENTIAL_ID,
               url: 'https://github.com/isis3710-uniandes/' + env.GIT_REPO
            
         }
      }
      stage('Git Analysis') {
         // Run git analysis
         steps {
            script {
               docker.image('gitinspector-isis2603').inside('--entrypoint=""') {
                  sh '''
                     mkdir -p ./reports/
                     datetime=$(date +'%Y-%m-%d_%H%M%S')
                     gitinspector --file-types="java" --format=html --AxU -w -T -x author:Bocanegra -x author:estudiante > ./reports/index.html
                  '''
               }
            }
            withCredentials([usernamePassword(credentialsId: env.GIT_CREDENTIAL_ID, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
               sh('git config --global user.email "ci-isis2603@uniandes.edu.co"')
               sh('git config --global user.name "ci-isis2603"')
               sh('echo "Report updated" >> ./reports/.status')
               sh('git add ./reports/index.html ./reports/.status')
               sh('git commit -m "[ci-skip] GitInspector report added"')
               sh('git pull https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/isis3710-uniandes/${GIT_REPO} master')
               sh('git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/isis3710-uniandes/${GIT_REPO} master')
            }
         }
      }      
   }
   post { 
      always { 
         // Clean workspace
         cleanWs deleteDirs: true
      }
   }
}
