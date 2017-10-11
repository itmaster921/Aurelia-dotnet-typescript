node {

    checkout scm

    slackSend "Started ${env.JOB_NAME} [#${env.BUILD_NUMBER}] (<${env.BUILD_URL}|Open>)"

    try {
    
        stage('Build Scripts') {
            docker.image('node').inside('-u root') {
                sh 'npm install'
                sh '$PWD/node_modules/aurelia-cli/bin/aurelia-cli.js build'
            }
        }

        stage('Build Docker Image') {
            docker.image('microsoft/aspnetcore-build:1.0-1.1').inside("-u root -v ${pwd()}/../../packages:/packages") {
                sh 'dotnet restore --packages /packages'
                sh 'dotnet publish -c Release -o ./obj/Docker/publish'
            }
        }

        stage('Push Image') {
            docker.withRegistry('https://registry.hub.docker.com', 'docker-registry') {
                docker.build('kohab/web').push('latest')
            }
        }

        stage('Run Image') {
            docker.withServer('tcp://staging.kohab.co:2376', 'docker-staging-cert') {
                docker.withRegistry('https://registry.hub.docker.com', 'docker-registry') {
                    docker.image('kohab/web').pull()
                    sh 'docker ps -q --filter name="kohab-web" | xargs -I % sh -c "docker stop %; docker rm %"'
                    docker.image('registry.hub.docker.com/kohab/web').run('-e VIRTUAL_HOST=staging.kohab.co -e ASPNETCORE_ENVIRONMENT=Staging -e ASPNETCORE_URLS="http://0.0.0.0:80" --restart=always --name="kohab-web"')
                }
            }
        }

        slackSend color: "good", message: "Successful: ${env.JOB_NAME} [#${env.BUILD_NUMBER}] (<${env.BUILD_URL}|Open> | <http://staging.kohab.co|Navigate to Website>)"

    } catch (error) {

        currentBuild.result = 'FAILURE'

        slackSend color: "danger", message: "Failed: ${env.JOB_NAME} [#${env.BUILD_NUMBER}] (see ${env.BUILD_URL}): ${error}"

    }

}