---
PG_TITLE: Translate and Rotate
---

# Translation and Rotation
In mathematics a translation is a vector displacement of an object from its current position to a new position. A rotation turns an object 
through an angle about an axis, which is a fixed line.

View the two playgrounds below to see a translation and a rotation in progress.

[Playground Example Translation](http://www.babylonjs-playground.com/#1JLGFP)

[Playground Example Rotation](http://www.babylonjs-playground.com/#1JLGFP#2)

# Frames of Reference

There are two frames of reference one the **world axes** in *world space* and the other the **local axes** in *local space*. 
When a mesh is created the **world axes** and the **local axes** coincide. As a mesh is translated or rotated the **local axes** move with it. 
The frame of reference used depends whether translate and rotate take place on the *world space* or the *local space*. 

The **world space** is set using BABYLON.Space.WORLD

The **local space** is set using BABYLON.Space.LOCAL

## Translate
To translate a mesh a direction, distance and space need to be specified. 

```javascript
pilot.translate(BABYLON.Axis.Y, 2, BABYLON.Space.WORLD);

pilot.translate(new BABYLON.Vector3(-1, 3, -2), 3, BABYLON.Space.LOCAL);
```
## Rotate
To rotate a mesh an axis, angle and the space specified are needed. The axis is given as any vector(x, y, z) and this is taken as the line passing through the 
origin of the local axes.  In other words the mesh spins at its current position.
For convenience unit vectors in the positive directions of the x, y and z axes are pre-defined as the constants BABYLON.Axis.X, BABYLON.Axis.Y and BABYLON.Axis.Z respectively.

```javascript
pilot.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.WORLD);

pilot.rotate(new BABYLON.Vector3(-1, 3, -10), 7 * Math.PI / 12, BABYLON.Space.LOCAL);
```

To rotate a mesh about an axis that does not pass through the origin of its local axes set a child of the mesh 
at a point that the axis will pass through and rotate the child about the axis.

```javascript
var pivotOnAxis = new BABYLON.Mesh("pivot", scene);
var pivotPoint = new BABYLON.Vector3(2, 3, 1);
pivotOnAxis.position = pivotPoint;

var axis = new BABYLON.Vector3(1, -2, 5);

pilot.parent =  pivotOnAxis;

pilot.rotate(axis,  Math.PI / 3, BABYLON.Space.WORLD);
```
The rotate playground example above was constructed in this manner.

# Tip
When animating with translate and rotate use scene.register**After**Render rather than scene.register**Before**Render

# Further Reading

## Intermediate
[A Simple Car Following a Path](/intermediate/gamelets/Car.html)

## Advanced
[Translate and Rotate in Detail](/advanced/Rotate.html)
