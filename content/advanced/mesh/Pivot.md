---
PG_TITLE: Rotation Around an Axis Through a Pivot
---

# Rotation Around an Axis Through a Pivot

To rotate a mesh about an axis that does not pass through its _local origin_ requires a point 
that the axis does pass through. A point and a vector defines a line in 3D space and any 
point on the line can be used as a pivot and produce the same rotation.

In each of the following several systems there is

* a pivot at pivotAt;
* a marker mesh for the pivot, a small sphere positioned at pivotAt;
* an axis to rotate around
* the pilot mesh at a starting position relative to the pivot position, pilotStart.

All Playgrounds are animated.

## Setting and Rotating a Parent to the Pilot

The sphere is parented to the pilot, the pilot positioned and the sphere rotated.

```javascript
sphere.position = pivotAt;

pilot.parent = sphere;
pilot.position = pilotStart;

sphere.rotate(axis, angle, BABYLON.Space.WORLD);
```

Note: Any movement of the pivot(sphere) will result in the pilot being moved.

[Playground Example - Rotating Parent](http://www.babylonjs-playground.com/#1JLGFP#6)

## Setting a Parent and Rotating the Child

The sphere is parented to the pilot, the pilot position relative to the pivot is set by matrix and the pilot rotated.

```javascript
sphere.position = pivotAt;

pilot.parent = sphere;
pilot.setPivotMatrix(BABYLON.Matrix.Translation(pilotStart.x, pilotStart.y, pilotStart.z));

pilot.rotate(axis, angle, BABYLON.Space.WORLD);
```
Note: Any movement of the pivot(sphere) will result in the pilot being moved.

[Playground Example - Rotating Child](http://www.babylonjs-playground.com/#1JLGFP#7)

## Wholly Using Matrices

The pilot is positioned relative to the pivot position and the rotation is carried out by the product 
of the matrices that translate the pilot to the pivot, rotates pilot and restores the pilot by inverting previous translation.

```javascript
sphere.position = pivotAt;

pilot.position = pivotAt.add(pilotStart);

var m;  //translation matrix
var invm; //inverse matrix of m
var r; //rotation matrix 
var ar; //matrix for actual rotation required 
	
  /*-------------------Animation--------------------*/
	var i=0;
    scene.registerAfterRender(function() {	
		m = BABYLON.Matrix.Identity().setTranslation(pilot.position.subtract(pivotAt));
		invm = m.clone().invert();
		r = BABYLON.Matrix.RotationAxis(axis,(i++) * 0.02);
		ar = m.multiply(r).multiply(invm);
		pilot.setPivotMatrix(ar);
	});
```
[Playground Example - Rotating Mesh No Parenting](http://www.babylonjs-playground.com/#1JLGFP#8)

Note: as can be seen in the Playgrounds below this method allows the pivot to be moved without re-positioning the pilot.

[Playground Example - Rotating Mesh Moving Pivot along Axis](http://www.babylonjs-playground.com/#1JLGFP#9)

[Playground Example - Rotating Mesh Moving Pivot](http://www.babylonjs-playground.com/#1JLGFP#10)




