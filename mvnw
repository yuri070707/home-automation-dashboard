#!/bin/sh
MAVEN_OPTS="${MAVEN_OPTS:-}"
MAVEN_HOME="${MAVEN_HOME:-$(cd "$(dirname "$0")/.." && pwd -P)}"

if [ -z "$MAVEN_WRAPPER_DISABLE" ]; then
  WRAPPER_JAR="$MAVEN_HOME/.mvn/wrapper/maven-wrapper.jar"
  WRAPPER_PROPERTIES="$MAVEN_HOME/.mvn/wrapper/maven-wrapper.properties"
  exec "$JAVA_HOME/bin/java" -jar "$WRAPPER_JAR" -Dmaven.multiModuleProjectDirectory="$MAVEN_HOME" "$@"
else
  exec mvn -Dmaven.multiModuleProjectDirectory="$MAVEN_HOME" "$@"
fi
