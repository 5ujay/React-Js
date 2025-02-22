# React Native 2025 Project Setup 🚀

Welcome to the **React Native 2025** installation guide! Follow the steps below to set up your environment and create your first React Native CLI project.

---

## 🛠 Installation Process

### Step 1: Install Node.js
- Download the **LTS version** of Node.js for Windows from the [official website](https://nodejs.org/).
- Install Node.js by following the setup wizard.

### Step 2: Install Java JDK
- Download **OpenLogic JDK** (Java Development Kit) compatible with React Native for Windows from [OpenLogic](https://www.openlogic.com/openjdk-downloads).
- During installation, set the environment variable `JAVA_HOME` or do it manually:
  1. Navigate to `C:\Program Files\OpenLogic\jdk-x.x.x`.
  2. Copy the path and set it as `JAVA_HOME` for both system and user variables.
  3. Add `...\bin` to the `Path` variable.

### Step 3: Install Android Studio
- Download and install **Android Studio** from the [official website](https://developer.android.com/studio).
- Open Android Studio and complete the initial setup.

#### Configure SDK Manager:
1. Open **SDK Manager** from Android Studio.
2. Ensure the following are installed:
   - **Android SDK Platforms**:
     - Android 16.0
     - Android 13.0
   - **SDK Tools**:
     - Android SDK Command-line Tools
     - Android Emulator
     - Android Emulator Hypervisor Driver
     - Android SDK Platform Tools
     - Google Play Licensing Library

#### Set up Environment Variables:
- Set the `ANDROID_HOME` environment variable to the SDK location, e.g.,
  ```bash
  C:\Users\<YourUser>\AppData\Local\Android\Sdk
  ```
- Add the following paths to the `Path` variable:
  ```bash
  %ANDROID_HOME%\emulator
  %ANDROID_HOME%\platform-tools
  %ANDROID_HOME%\build-tools
  ```

### Step 4: Install React Native CLI
- Open a terminal and run:
  ```bash
  npm install -g react-native-cli
  ```

---

## 🌟 Creating Your First React Native CLI Project

Follow these steps to create a React Native project using the CLI:

1. Open a terminal and navigate to your desired folder.
2. Run the following command to create a new project:
   ```bash
   npx react-native init MyFirstApp 
   or
   npx @react-native-community/cli@latest init projectname 
   ex.  npx @react-native-community/cli@latest init Awesome01
   ```
3. Navigate to the project directory:
   ```bash
   cd MyFirstApp
   or 
   cd Awesome01
   ```
4. Start the Metro Bundler:
   ```bash
   npx react-native start
   ```
5. Run the app on an Android emulator or connected device:
   ```bash
   npx react-native run-android
   ```

---

## 🚀 Launch the Virtual Device

1. Open **Android Studio**.
2. Navigate to **Virtual Device Manager** and create a new device if one doesn't exist.
3. Start the emulator.

---

## 📝 Notes
- Ensure all paths are correctly set in the system environment variables.
- Verify installation by running:
  ```bash
  node -v
  npm -v
  java -version
  adb --version
  ```

Happy coding! 🎉
