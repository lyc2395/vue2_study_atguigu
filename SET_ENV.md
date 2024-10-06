# 1.Install fnm in MacOS
```
brew install fnm
```

# 2.Setting up fnm can automatically recognize .node-version files, install nodes automatically, and switch to this version
```
#Supported(.bashrc, .zshrc, .fishrc, .ps1)
cat >> ~/.zshrc <<"EOF"
# fnm env
FNM_DIR=/Users/admin/.local/share/fnm
if [[ -d "$FNM_DIR" ]];then
    export PATH="$FNM_DIR:$PATH" 
    eval "`fnm env`"
fi
eval "$(fnm env --use-on-cd)"
#eval "$(fnm completions)"
EOF
```

# 3.Install @vue/cli
```
npm install -g @vue/cli
```

# 4. create a vue app
```
vue create myapp
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter, Unit
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? Yes
? Save preset as: config
```

