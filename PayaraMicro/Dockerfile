FROM openjdk:8-jdk-alpine

ENV PAYARA_PATH /opt/payara

RUN   apk update \                                                                                                                                                                                                                        
 &&   apk add ca-certificates wget bash \                                                                                                                                                                                                      
 &&   update-ca-certificates && \
 mkdir -p $PAYARA_PATH/deployments && \
 adduser -D -h $PAYARA_PATH payara && echo payara:payara | chpasswd && \
 chown -R payara:payara /opt

ENV PAYARA_PKG https://search.maven.org/remotecontent?filepath=fish/payara/extras/payara-micro/5.181/payara-micro-5.181.jar
ENV PAYARA_VERSION 181
ENV PKG_FILE_NAME payara-micro.jar

RUN wget --quiet -O $PAYARA_PATH/$PKG_FILE_NAME $PAYARA_PKG

ENV DEPLOY_DIR $PAYARA_PATH/deployments
ENV AUTODEPLOY_DIR $PAYARA_PATH/deployments
ENV PAYARA_MICRO_JAR=$PAYARA_PATH/$PKG_FILE_NAME

#RUN wget -O /opt/payara/deployments/postgresql-42.2.2.jar https://jdbc.postgresql.org/download/postgresql-42.2.2.jar

# Default payara ports to expose
EXPOSE 4848 8009 8080 8181
ADD  MantenimientoWeb-web-1.0-SNAPSHOT.war $PAYARA_PATH/deployments/
ADD domain.xml $PAYARA_PATH
ADD postgresql-42.2.2.jar $PAYARA_PATH/deployments
ENTRYPOINT java -jar /opt/payara/payara-micro.jar --autoBindHttp --domainConfig /opt/payara/domain.xml --addJars /opt/payara/deployments/postgresql-42.2.2.jar --port 8181 --deploy /opt/payara/deployments/MantenimientoWeb-web-1.0-SNAPSHOT.war
#CMD ["/bin/bash"]
