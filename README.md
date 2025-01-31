# oku-app
OKÜ ReactNative Mobile App

# Table of Content

## 1. About The App
OKU is an innovative tool that empowers you to take care of your health,
allowing you to effectively capture and track your symptoms and pains,
for comprenshive records of your health condition and medical history.
Sharing this information with your healthcare specialist. You can expect
high quality consultations that drive accurate diagnoses,effective treatment
and real improvements in your holistic health and wellbeing.

## 2. Github Link
 Mobile App - https://github.com/iprogrammers/oku-app
 Backend - https://github.com/iprogrammers/oku-backend
 
## 3. PlayStore Link

## 4. AppStore Link

## 5. Technology Used
    
    ### 5.1 - Mobile App
    - Framework - React Native (0.73.1)
    - Project Start Month - Jan 2024
    - Programming Language used - Javascript, JSX
    - Navigation - React Navigation
    - UI Components - React Native Elements
    - HTTP Request - 

    ### 5.2 - API
    - Runtime - Node JS
    - Runtime Version - >18
    
    ### 5.3 Development Tools
    - Code Editor - Visual Studio Code
    - Android Studio - HedgeHog | 2023.1.1 Patch 1
    - Xcode
    - JVM Version - 17.0.9
    - NPM Version - 10.2.4
    - Plugins 
        1) Prettier - Code Formatter
        2) Sonar Lint - Linter to detect & fix coding issues locally in JS/TS
        3) GitLens

## 6. Prerequisities
     - Node.js and npm: Make sure you have Node.js and npm installed.You can download them from https://nodejs.org/en
       Java Development Kit (JDK)
     - Android Studio (for Android development): Install Android Studio with the required SDK components. 
     - Xcode (for iOS development): Install Xcode from the Mac App Store if you're planning to develop for iOS.

## 7. Issue Resolving Methods

    - Make sure Node JS version is set to >18 version.
        If not use following method to download and set the required version
        1) nvm ls or node -v - check for node.js version installed on your system
        2) nvm install <version> - install your desired version
        3) nvm use <version> - switch to new version
        4) nvm alias default VERSION_NUMBER - to set a default Node.js version

    - Make sure JVM is set to version >= 17
        For Ubuntu / Linux -
        1) java -version - to check current version of java
        2) sudo apt-get update - to get updates of all apps installed on the system
        3) sudo apt-get upgrade - to update all apps installed on the system
        4) sudo apt install openjdk-17-jdk openjdk-17-jre - to install JDK version 17(u can change version based on the requirement)
        5) java -version - to check if the version is updated or not
    
## 8 Firebase Crashlytics, Push Notification and analytics Integration.

    -Create a project on firebase
    1)Add project name
    2)Enable google analytic for project and continue
    3)Select default account

    -For Android register app
    1)Name package name (find path : android->app->build.gradle->namespace)
    2)Click on register app button
    3)Add google-services.json file in android->app
    4)Install below libraries:
        A)"@react-native-firebase/analytics"
        B)"@react-native-firebase/app"
        C)"@react-native-firebase/crashlytics"
    5)android/build.gradle inside dependancy added
        classpath 'com.google.gms:google-services:4.4.0'
        classpath 'com.google.firebase:firebase-crashlytics-gradle:2.9.0'
    6)android/app/build.gradle
        apply plugin: "com.google.gms.google-services"
        apply plugin: "com.google.firebase.crashlytics"
        
        //inside dependancy
        implementation("com.google.firebase:firebase-bom:32.7.0")
        implementation("com.google.firebase:firebase-analytics")
        implementation("com.google.firebase:firebase-crashlytics")
    7)Create firebase.json file root level(below App.js) add below line
        {
          "react-native": {
          "crashlytics_debug_enabled": true,
          "crashlytics_disable_auto_disabler": true,
          "crashlytics_auto_collection_enabled": true,
          "crashlytics_is_error_generation_on_js_crash_enabled": true,
          "crashlytics_javascript_exception_handler_chaining_enabled": true
           }
       }
    For ref link: https://www.youtube.com/watch?v=Qcxa6dxfUFo&t=155s
                  https://www.youtube.com/watch?v=VCa_ZFXm_9A

## 9 Please refer below document for jslint integration.
    link: https://iprogrammersolution-my.sharepoint.com/:b:/g/personal/prashantma_iprogrammer_co/EdJV-iCN6VhIrB0m142s-vcBTBej55SXWmT3v_qMbUdJhg?e=70bBCg