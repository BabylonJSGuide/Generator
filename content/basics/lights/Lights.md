---
ID_PAGE: 22071
PG_TITLE: 06. Lights
---

# Lights
Lights are used, as you would expect, to affect how meshes are seen, in terms of both illumination and colour. 
All meshes allow light to pass through them unless shadow generation is activated. The default number of lights allowed is 
four but this can be increased.

![Elements](http://www.babylonjs.com/Screenshots/testlight.jpg)
 
_A pretty sphere with multiple lights_


## Types of Lights
There are four types of lights that can be used with a range of lighting properties.

### The Point Light
A point light is a light defined by an unique point in world space. The light is emitted in every direction from this point. A good example of a point light is a standard light bulb.

```javascript
var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1, 10, 1), scene);
```

### The Directional Light
A directional light is defined by a direction (what a surprise!). The light is emitted from everywhere in the specified direction, and has an infinite range. 
An example of a directional light is when a distance planet is lit by the apparently parallel lines of light from its sun. Light in a downward direction will light 
the top of an object.

```javascript
var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
```

### The Spot Light
A spot light is defined by a position, a direction, an angle, and an exponent. These values define a cone of light starting from the position, emitting toward the direction. 

The angle, in radians, defines the size (field of illumination) of the spotlight's conical beam , and the exponent defines the speed of the decay of the light with distance (reach).

![Spot](http://blogs.msdn.com/cfs-file.ashx/__key/communityserver-blogs-components-weblogfiles/00-00-01-44-73-metablogapi/7723.image_5F00_thumb_5F00_11F5CA14.png)

_A simple drawing a spot light_

```javascript
var light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 30, -10), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
```

### The Hemispheric Light
A hemispheric light is an easy way to simulate an ambient environment light. A hemispheric light is defined by a direction, usually 'up' towards the sky. However it is by setting the color properties 
that the full effect is achieved.  

```javascript
var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);
```

## Color Properties
There are three properties of lights that affect color. Two of these _diffuse_ and _specular_ apply to all four types of light, the third, _groundColor_, only applies to an Hemispheric Light.

1. Diffuse gives the basic color to an object;
2. Specular produces a highlight color on an object.

In these playgrounds see how the specular color (green) is combined with the diffuse color (red) to produce a yellow highlight.

[Playground example of a point light](http://www.babylonjs-playground.com/#20OAV9)
[Playground example of a directional light](http://www.babylonjs-playground.com/#20OAV9#1)
[Playground example of a spot light](http://www.babylonjs-playground.com/#20OAV9#3)
[Playground example of a hemispheric light](http://www.babylonjs-playground.com/#20OAV9#5)

For a hemispheric light the _groundColor_ is the light in the opposite direction to the one specified during creation. 
You can think of the _diffuse_ and _specular_ light as coming from the centre of the object in the given direction and the _groundColor_ light in the opposite direction.

[Playground example of a hemispheric light on two spheres](http://www.babylonjs-playground.com/#20OAV9#6)

White hemispheric light with a black groundColor is a useful lighting method.

![](http://blogs.msdn.com/cfs-file.ashx/__key/communityserver-blogs-components-weblogfiles/00-00-01-44-73-metablogapi/4760.image_5F00_thumb_5F00_058CC84D.png)

_White/black hemispheric light - upward pixels white (diffuse), downward pixels black (groundColor)_

## Interacting Lights
[Playground example of interacting spot lights](http://www.babylonjs-playground.com/#20OAV9#9)

[Playground animation of interacting point lights](http://www.babylonjs.com/playground/?06)


## On, Off or Dimmer
Every light can be switched off using 
```javascript
light.setEnabled(false);
```
and switched on with
```javascript
light.setEnabled(true);
```

Want to dim or brighten the light? Then set the _intensity_ property (default values is 1)
```javascript
light0.intensity = 0.5;
light1.intensity = 2.4;
```

For point and spot lights you can set how far the light reaches using the _range_ property
```javascript
light.range = 100;
```


## Choosing Meshes to Light
when a light is created all current meshes will be lit by it. There are two ways to exclude some meshes from being lit. 
A mesh can be added to the _excludedMeshes_ array or add the ones not to be excluded to the _includedOnlyMeshes_ array. The number of meshes to be excluded 
can be one factor in deciding which method to use. In the following example two meshes are to be excluded from _light0_ and twenty three from 
_light1_

[Playground Example Excluding Lights](http://www.babylonjs-playground.com/#20OAV9#8)



