Bankai Project
=============

This project is used as parent pom for bankai projects.

Description
=============

When using this project as parent pom it will enable javascript minification for your application.
Please check bankai project for more information

Usage
=============

Install this project
-------------
    mvn clean install 

Use as parent pom (in a client side module)
-------------
    <parent>
        <groupId>pt.ist</groupId>
        <artifactId>bankai-project</artifactId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>

To enabled javascript minification, add this to your pom

	<properties>
		<bankai.skip.js.optimization>false</bankai.skip.js.optimization>
	</properties>

