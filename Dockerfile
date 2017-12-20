FROM centos

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nodejs npm; yum clean all


WORKDIR /tmp/app

COPY . .


RUN npm install 


EXPOSE 3000

CMD [ "npm" , "start"]