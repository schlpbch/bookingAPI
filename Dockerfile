FROM node:7-onbuild

ARG VCS_REF

LABEL org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vcs-url="e.g. https://github.com/schlpbch/bookingAPI"

CMD npm run dev
EXPOSE 8080
