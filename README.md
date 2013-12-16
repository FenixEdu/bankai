#Bankai Repository

Bankai is a library to develop backbone + marionette.js applications respecting a particular structure.

    .
    |-- bankai <- main dependency
    |-- bankai-project-archetype <- archetype to create initial structure of a bankai app
    |-- bankai-project <- parent pom for bankai app    
    |-- pom.xml <- aggretator pom


##Bankai

Bankai is a lightweight framework that allows one to build
a require.js based application using Backbone and Marionette.

It allows the development of new applications just by specifying
the models, collections, views and i18n files.

###Main Features


Bankai will automatically include common javascript libraries. Full list available at `bankai/src/main/webapp/bankai/js/libs`.

It will also include require.js plugins `text` and `i18n`.

##Bankai Project Archetype

This is a maven archetype that scaffolds a bankai project structure and automatically generates a HelloWorld view.

    mvn archetype:generate -DarchetypeGroupId=org.fenixedu -DarchetypeArtifactId=bankai-project-archetype
    
###Bankai Module Structure

In this example the bankai app is called `bankai-example`

    |-- pom.xml
    `-- src
        `-- main
            |-- java
            |-- resources
            |   `-- bankai-example
            |       `-- apps.json (1)
            `-- webapp
                `-- bankai-example
                    |-- index.html (2)
                    |-- js
                    |   |-- nls
                    |   |   |-- messages.js
                    |   |   `-- pt-pt
                    |   |       `-- messages.js
                    |   |-- router.js (3)
                    |   `-- views
                    |       `-- HelloWorld.js
                    |-- less
                    |   `-- style.less
                    `-- templates
                        `-- HelloWorld.html



1.  `apps.json` is a json file that defines the entrypoints available in your application. It will be used to make these entries available when building the `bennu-portal` menu.
```
    {
        "apps": [
                    {
                        "title": {
                            "en-GB": "bankai-example",
                            "pt-PT": "bankai-example"
                        },
                        "description": {
                            "en-GB": "bankai-example",
                            "pt-PT": "bankai-example"
                        },
                        "accessExpression": "anyone",
                        "path": "bankai-example/",
                        "functionalities": []
                    }
                ]
    }
```

2. `index.html` - Here it is where the application will initialize. All your client side DOM elements will be included inside `<div id="portal-container"></div>`. 

```<script data-main="../bankai/js/config"...``` will initialize Bankai application and therefore your application will start at this point.

3. `router.js` - This is the central part of the application where you must define your routes and all application behaviour

    

##Bankai Project

This project is used as parent pom for bankai apps.

###Description

When using this parent pom, your bankai app will dependend automatically on bankai and all the maven plugins necessary to proceed with the javascript minification. __By default minification is disabled__.

###Usage


####Install the parent pom

    mvn clean install 

####Use as parent pom (in a bankai app module)

    <parent>
        <groupId>org.fenixedu</groupId>
        <artifactId>bankai-project</artifactId>
        <version>1.0.0-M2</version>
    </parent>

To enabled javascript minification, add this to your pom

    <properties>
    	<bankai.skip.js.optimization>false</bankai.skip.js.optimization>
	</properties>

