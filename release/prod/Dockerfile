FROM nginx
# COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist /usr/share/nginx/html
COPY ./release/prod/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
CMD ["nginx","-g","daemon off;"]


