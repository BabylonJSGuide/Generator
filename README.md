# Babylon.js Guide Generator of An Unofficial documentation website

![](http://babylonjs.com/Assets/Logo.png)

Welcome on the repository of the unofficial documentation of [Babylon.js](http://www.babylonjs.com).

This is use to generate the files for the actual guide site.


## Prerequisites
Before beginning, please be sure to have these packages installed:

 * [Nodejs](https://nodejs.org/) and npm install
 * [grunt-cli](https://www.npmjs.com/package/grunt-cli): just use ```npm install -g grunt-cli```


## Fork and Clone Repository
 https://github.com/BabylonJSGuide/Generator.git 

## First Step 
 * ```npm install``` to install all dependencies
 * ```npm install -g grunt-cli```

## Edit a File
1. Head to content folder. All markdown files are located in this folder.
2. Edit markdown according to your need

## New file
1. Add pages in content in correct directy
2. Update statics.jjson in data directory

## statics.json structure

The arrays are mandatory, when displayed, object's order is kept.

Here is how the object is structured:

    {
        "Directory Name": [                    // Mandatory
            {                                  // This object represents a folder inside the tutorials folder 
              "title": "title displayed",      // The title displayed in the list of folders 
              "name": "foldername",            // The folder name with no spaces, no special chars except underscores
              "desc": "my great tutos serie",  // This is the description of the folder, don't make it too long :)
              "files": [                       // This is the list of files inside your folder
                {
                    "title":'tuto title',      // The title displayed in the list of tutorials 
                    "filename":'tuto title',   // The file name with no spaces, no special chars except underscores, and no extension
                },
                ...
              ]
            },
            ...
        ]
       
    }

## Generate files for website
```grunt build``` to rebuild html from markdown.

## Transfer files
Fork and clone https://github.com/BabylonJSGuide/BabylonJSGuide.github.io.git

In Generator directory find the Public directory and then the HTML directory copy the files from HTML directory 
into the Babylon Guide Directory push to your repository and send PR

