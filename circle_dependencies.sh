#!/bin/bash
export PATH=”$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$PATH”

if [ ! -d $ANDROID_HOME ]; then
 mkdir $ANDROID_HOME
 cp -r /usr/local/android-sdk-linux/* $ANDROID_HOME
fi

if [ ! -d $ANDROID_HOME/tools ]; then
	echo y | android update sdk --no-ui --all --filter tools
fi

if [ ! -d $ANDROID_HOME/platforms/android-25 ]; then
	echo y | android update sdk --no-ui --all --filter android-25
fi

if [ ! -d $ANDROID_HOME/build-tools/23.0.1 ]; then
	echo y | android update sdk --no-ui --all --filter build-tools-23.0.1
fi

if [ ! -d $ANDROID_HOME/build-tools/25.0.3 ]; then
	echo y | android update sdk --no-ui --all --filter build-tools-25.0.3
fi

if [ ! -d $ANDROID_HOME/extras/android/m2repository ]; then
	echo y | android update sdk --no-ui --all --filter extra-android-m2repository
fi

if [ ! -d $ANDROID_HOME/extras/google/m2repository ]; then
	echo y | android update sdk --no-ui --all --filter extra-google-m2repository
fi

if [ ! -d $ANDROID_HOME/extras/google/google_play_services ]; then
	echo y | android update sdk --no-ui --all --filter extra-google-google_play_services
fi
