#!/bin/bash
export PATH=”$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$PATH”
if [ ! -d $ANDROID_HOME ]; then
 mkdir $ANDROID_HOME
 cp -r /usr/local/android-sdk-linux/* $ANDROID_HOME &&
 echo "y" | android update sdk --no-ui --all --filter tools,platform-tools,build-tools-25.0.3,android-25,extra-google-m2repository,extra-google-google_play_services,extra-android-support,extra-android-m2repository
fi
