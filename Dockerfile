FROM node:7-onbuild

ARG VCS_URL
ARG VCS_REF
ARG BUILD_DATE


LABEL org.label-schema.vendor="SBB" \
      org.label-schema.url="https://www.sbb.ch" \
      org.label-schema.name="bookingAPI" \
      org.label-schema.description="A simple API to book öV tickets in Switzerland." \
      org.label-schema.vcs-url=$VCS_URL \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.build-date=$BUILD_DATE

CMD npm run prod
EXPOSE 8080
