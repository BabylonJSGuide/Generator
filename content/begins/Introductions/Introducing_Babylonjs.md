---
PG_TITLE: Introducing BabylonJS
---

# Getting Started

BabylonJS is a great way to code a 3D environment on the web using the HTML5 canvas element. 

## The Playground

This is the quickest and easiest way to make your own scene. Creating a 3D scene is easy, simply add a camera, lights and meshes (shapes) and you are away. 

The [Playground](http://babylonjs-playground.com) is web site which has everything you need to create 
your own scene or edit an existing one. More about the Playground [here](/begins/The_Playground.html).

A template for creating a scene within the playground is;

```javascript
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, 15 * Math.PI / 32, 25, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 1, -1), scene);


    // Add and manipulate meshes in the scene
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
    sphere.position.y = 1;
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width:50, height:100}, scene);

    return scene;

};
```

Everything else you need is taken care of within the Playground.

[Playground Example of Above Code](http://www.babylonjs-playground.com/#WG9OY)

## Your Own HTML

In this case the above code template for creating a scene will need to be embedded into the usual HTML structure along with a few other items. 
You will need to load the BabylonJS javascript code. Also for use on tablets and mobiles BabylonJS uses pointer events rather than mouse events 
and so the PEP event system needs to be loaded as well. 

In addition a canvas element will have to be added to the body as this is where the 3D scene will be rendered and a reference variable *canvas* 
added to it in the code. Also in the code and before the function for creating the scene, as above, the code will need to generate the BabylonJS engine. 
Finally, after these, add code to call the scene, to enable the engine to continually render the scene in a loop and to resize the scene should the browser be resized.

### HTML template

```javascript
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <title>Babylon Template</title>
	  
	  <style>
		html, body {
			overflow: hidden;
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
		}

		#renderCanvas {
			width: 100%;
			height: 100%;
			touch-action: none;
		}
	</style>
	
	<script src="www.babylonjs.com/babylon.js"></script>
	<script src="https://code.jquery.com/pep/0.4.1/pep.js"></script>
	

	
   </head>

   <body>
   
	<canvas id="renderCanvas" touch-action="none"></canvas> //touch-action="none" for best results from PEP
	
	<script>
	
	        var canvas = document.getElementById("renderCanvas"); // Get the canvas element 

	        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
	
	
	        /******* Add the create scene function ******/
	        var createScene = function () {

                        // Create the scene space
                        var scene = new BABYLON.Scene(engine);

                        // Add a camera to the scene and attach it to the canvas
                        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, 15 * Math.PI / 32, 25, BABYLON.Vector3.Zero(), scene);
                        camera.attachControl(canvas, true);

                        // Add lights to the scene
                        var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
                        var light2 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 1, -1), scene);


                        // Add and manipulate meshes in the scene
                        var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
                        sphere.position.y = 1;
                        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width:50, height:100}, scene);

                        return scene;

                };

                /******* End of the create scene function ******/	
        
                var scene = createScene; //Call the createScene function

	        engine.runRenderLoop(function () { // Register a render loop to repeatedly render the scene
	                scene.render();
	        });
		
	
	        window.addEventListener("resize", function () { // Watch for browser/canvas resize events
	                engine.resize();
	        });
	</script>
   
   </body>

</html>
```

## Notes

1. The examples above use the newer MeshBuilder method for creating shapes where variables for the shape are set within the options object parameter and has some advantages 
over the older form of BABYLON.Mesh.Create.... which uses a parameter list for the shape variables. The majority of Playgrounds use the older method as many were created 
before MeshBuilder existed. 

2. The use of PEP for pointer events is more recent advice, older advice was to use a system called hand.js. Both work though hand.js is no longer 
maintained. You will find references to hand.js in the official documentation. Particularly in the [Babylon.js Primer](http://doc.babylonjs.com/generals/A_Babylon.js_Primer) which gives a more detailed overview 
of coding with BabylonJS. 

# Further Reading
[BabylonJS Official Documentation](http://doc.babylonjs.com)  
[BabylonJS Forum](http://www.html5gamedevs.com/forum/16-babylonjs)  
[PEP and hand.js](http://www.html5gamedevs.com/topic/22474-how-does-babylonjs-get-pointer-events-working/#comment-127993)

# Useful Links

[BabylonJS Main Website](http://www.babylonjs.com/)  
[BabylonJS Playground](http://babylonjs-playground.com)  
[PEP](https://github.com/jquery/PEP)  
[hand.js](https://github.com/Deltakosh/handjs)




