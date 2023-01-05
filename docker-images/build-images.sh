#/bin/bash

# static image
docker build -t dai/apache_php ./apache-php-image

# express image
docker build -t dai/express_persons ./express-image

