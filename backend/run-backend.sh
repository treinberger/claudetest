#!/bin/bash

# Build and run the backend
mvn spring-boot:run -Dspring-boot.run.profiles=$1
