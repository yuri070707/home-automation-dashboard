@echo off
setlocal
set MAVEN_OPTS=%MAVEN_OPTS%
set MAVEN_HOME=%~dp0..

if "%MAVEN_WRAPPER_DISABLE%"=="" (
  set WRAPPER_JAR="%MAVEN_HOME%\.mvn\wrapper\maven-wrapper.jar"
  set WRAPPER_PROPERTIES="%MAVEN_HOME%\.mvn\wrapper\maven-wrapper.properties"
  "%JAVA_HOME%\bin\java" -jar %WRAPPER_JAR% -Dmaven.multiModuleProjectDirectory="%MAVEN_HOME%" %*
) else (
  mvn -Dmaven.multiModuleProjectDirectory="%MAVEN_HOME%" %*
)
