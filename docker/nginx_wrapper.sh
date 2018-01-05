#!/bin/sh

instance_id=$(curl --connect-timeout 2 http://169.254.169.254/latest/meta-data/instance-id)
local_ipv4=$(curl --connect-timeout 2 http://169.254.169.254/latest/meta-data/local-ipv4)

set_instance_id="set \$aws_instance_id \"${instance_id}\";"
set_local_ipv4="set \$aws_local_ipv4 \"${local_ipv4}\";"

sed -e "s/set \$aws_instance_id .*/${set_instance_id}/" \
    -e "s/set \$aws_local_ipv4 .*/${set_local_ipv4}/" \
    -i /etc/nginx/nginx.conf

exec nginx -g 'daemon off;'
