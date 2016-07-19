---
PG_TITLE: 04. Reflections and Refractions
---

# Mirrors and Glass
Using reflection textures can simulate mirror like material and recfraction textures can simulate looking through glass or water.

## Reflection
Reflections are created using the _relectionTexture_ property  of a material. A first use is in creating a sky using a [skybox](/advanced/Skybox)

This sets the _relectionTexture_ to a _CubeTexture_ and the _coordinatesMode_ of the _relectionTexture_ to SKYBOX_Mode as in

```javascript
skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("PATH TO IMAGES FOLDER/COMMON PART OF NAMES", scene);
skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
```
### CubeTexture
By default six jpeg images are passed to a _CubeTexture_. The images are named in this form, commonPart\_px.jpg, commonPart\_nx.jpg, 
commonPart\_py.jpg, commonPart\_ny.jpg, commonPart\_pz.jpg, commonPart\_nz.jpg corresponding to the positions shown below.

![CubeTexture Positions](/img/cubetexture1.png)] 

When doing this for a skybox the box created is given a large size (1000 in the skybox example above) but _CubeTexture_ can be used with any size box and is one 
way of applying different textures to each side of a cube. Notice that as we are dealing with a small box and we are viewing it from the outside _backFaceCulling_ can be set to _true_. This is not 
possible when the camera is inside the large skybox since in terms of rendering the sky at the back will be still behind the fron portion and will 
not be rendered should _backFaceCulling = true_. However we still need to use _reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX\_MODE_. 

```javascript
var box = BABYLON.MeshBuilder.CreateBox("Box", {}, scene);
var boxMaterial = new BABYLON.StandardMaterial("mat", scene);
boxMaterial.backFaceCulling = true;
boxMaterial.reflectionTexture = new BABYLON.CubeTexture("http://babylonjsguide.github.io/img/cubeSide", scene);
boxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
boxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
boxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
box.material = boxMaterial;	
```

[Playground Example of Different Faces](http://www.babylonjs-playground.com/#UU7RQ#2)

From BS 2.4 it is also possible to use High Dynamic Range Cube Textures 

#### Reflecting on Skybox and a shape
Using different _coordinatesMode_ with different shapes will reflect the skybox in the shape

[Playground Example of Box and CUBIC_MODE](http://www.babylonjs-playground.com/#UU7RQ#3)

[Playground Example of Ground and PLANAR_MODE](http://www.babylonjs-playground.com/#UU7RQ#5)

[Playground Example of Sphere and PLANAR_MODE](http://www.babylonjs-playground.com/#UU7RQ#4)

### HDRCubeTexture
High Dynamic Range (HDR) images are panoramic images that cover an entire field of vision.

Below is an HDR image of a room

![Room](img/room.png)

Replace the following line
```javascript
skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("PATH TO IMAGES FOLDER/COMMON PART OF NAMES", scene);
```
with
```javascript
skyboxMaterial.reflectionTexture = new BABYLON.HDRCubeTexture("PATH TO HDR IMAGE", scene);
```

[Playground Example of HDR Skybox](http://www.babylonjs-playground.com/#114YPX#5)

### Spherical Reflection Texture
Not only can a cube texture can be applied to a sphere so can a plane single image.

![Squares](img/reflectest.png)

The above image was applied to each of four spheres, one as a diffuse texture and the other three with _reflectionTexture_ but different _coordinatesMode_. The resuls are below.

![Reflecion on Spheres](img/modes.png)

|   |   |
|-----|-----|
| Diffuse Texture | SPHERICAL_MODE |
| PLANAR\_MODE | PROJECTION\_MODE |

[Playground Example of Coordinates Modes](http://www.babylonjs-playground.com/#20OAV9#26)

### Mirrors