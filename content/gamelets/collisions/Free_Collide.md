---
PG_TITLE: Free Particles
---

# Free Particles

After considering the [issues](/gamelets/Issues.html) involved and slow [slow particles](/gamelets/Slow_Collide.html) we are now ready to consider **free particles**, ones that move with no restriction to their start position or velocity.

The velocity of a particle is its displacement per frame.


## Colliding with a Wall

Given a particle of radius r, at position p and velocity v in *frame n*, the particle will collide with a wall when it is travelling towards the wall in *frame n* and in *frame n+1* the centre of the particle, at p + v,  is within a distance r from the wall or is moving away from the wall.

For example consider a left hand wall, with plane parallel to the YZ plane, and a particle travelling towards it with velocity (dx, dy, dz), dx &lt; 0.

In *frame n*, the position of the particle is (x, y, z) and during the time between *frame n* and *frame n+1* it overlapped the wall. At *frame n+1*, the particle may still be overlapping the wall and its centre may be to the right or left of the wall or, the particle may have gone beyond the wall completely. The 2D diagrams show the latter case but the calculations apply in all cases. Fig 16 indicates the particle passing through the wall.

![Fig 16](/img/collide18.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 16. 

The particle at *frame n+1*, is at position (x + dx, y + dy, z + dz)

Sometime between *frame n* and *frame n+1* the particle would just touch the wall as in Fig 17.

![Fig 17](/img/collide19.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 17. 

At this position let the displacement of the particle from its position in *frame n* be (dx<sub>1</sub>, dy<sub>1</sub>, dz<sub>1</sub>) and its displacement from this position to its position in *frame n+1* be (dx<sub>2</sub>, dy<sub>2</sub>, dz<sub>2</sub>). It follows that (dx, dy, dz) = (dx<sub>1</sub>, dy<sub>1</sub>, dz<sub>1</sub>) + (dx<sub>2</sub>, dy<sub>2</sub>, dz<sub>2</sub>), see Fig 18.

![Fig 18](/img/collide20.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 18. 

At the point of contact with this wall the component of velocity in the x direction would reverse and so the remaining x axis displacement before *frame n+1* would be -dx<sub>2</sub>, see Fig 19.

![Fig 19](/img/collide21.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 19. 

The particle velocity, after the collision is now (-dx, dy, dz). For *frame n+1*, we need the position of the particle to be at (x + dx<sub>1</sub> - dx<sub>2</sub> , y + dy, z + dz). Since before *frame n+1*, is displayed the velocity (-dx, dy, dz) will be added and so we need it position before this is done to be (x + dx<sub>1</sub> - dx<sub>2</sub> , y + dy, z + dz) - (-dx, dy, dz), see Fig 20.

![Fig 20](/img/collide22.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 20.

(x + dx<sub>1</sub> - dx<sub>2</sub> , y + dy, z + dz) - (-dx, dy, dz)

= (x + dx<sub>1</sub> - dx<sub>2</sub> + dx, y, z)

= (x + dx<sub>1</sub> - dx<sub>2</sub> + dx<sub>1</sub> + dx<sub>2</sub>, y, z) 

= (x + 2dx<sub>1</sub>, y, z)

Which is the reflection of the particle at *frame n* in the plane parallel to the YZ plane through the centre of the particle, see Fig 21.

![Fig 21](/img/collide23.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 21.

This means after *frame n* is displayed the particle's position has to be reset as indicated.

## Colliding Particles

Given a two particles P and Q of radius r, at positions p and q with velocities v and u repectively in *frame n*, the particles will collide when they are travelling towards each other in *frame n* and in *frame n+1* the centres of the particle, at p + v and q + u  are within a distance 2r from each other or they are moving away from each other.

Since only the velocities along the line joining the centres are affected during the collision consider a system of three multually perpendicular axes one along the line joining the centres and the others in the plane with this line as its normal. Writing the velocities as vectors with components along these axes

v = (dr, dt, dw) and u = (sr, st, sw)

In *frame n*, the position of particle P is (px, py, pz) and the position of Q is (qx, qy, qz). During the time between *frame n* and *frame n+1* the particles overlap. At *frame n+1*, one particle may still be overlapping the other or the particles may have passed each other and are moving away. The 2D diagrams show the latter case but the calculations apply in all cases. Fig 22 indicates the particles passing through each other and also shows the point of contact.

![Fig 22](/img/collide16.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 22.

The displacements dr and sr can be split into dr<sub>1</sub> and sr<sub>1</sub> which take the particles to the point of contact and dr<sub>2</sub> and sr<sub>2</sub> the remaining displacements.

Fig 24 shows the rearrangement of the component velocities and positions of the spheres when the collision is detected and component velocities along the line joining the centres are exchanged.

![Fig 23](/img/collide17.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 23.

For *frame n+1*, particle P is at  (px + dr<sub>1</sub> + sr<sub>2</sub>, py + dt, pz + dw) and Q is at (qx + sr<sub>1</sub> + dr<sub>2</sub>, qy + st, qz + sw). 

After the collision the velocity of P is (sr, dt, dw) and that of Q is (dr, st, sw). Since before *frame n+1*, is displayed the velocities of P and Q will be added to the positions of P and Q and so we need these positions to have these velocities subtracted. See Fig 24 

![Fig 24](/img/collide24.jpg)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fig 24.

P  
(px + dr<sub>1</sub> + sr<sub>2</sub>, py + dt, pz + dw) - (sr, dt, dw)

= (px + dr<sub>1</sub> + sr<sub>2</sub> - sr, py, pz)

= (px + dr<sub>1</sub> + sr<sub>2</sub> - sr<sub>1</sub> - sr<sub>2</sub>, py, pz)

= (px + dr<sub>1</sub> - sr<sub>1</sub>, py, pz)

Q  
(qx + sr<sub>1</sub> + dr<sub>2</sub>, qy + st, qz + sw) - (dr, st, sw)

= (qx + sr<sub>1</sub> + dr<sub>2</sub> - dr, qy, qz)

= (qx + sr<sub>1</sub> + dr<sub>2</sub> - dr<sub>1</sub> - dr<sub>2</sub>, qy, qz)

= (qx + sr<sub>1</sub> - dr<sub>1</sub>, qy, qz)

Again after a collision the positions of particles have to be recalculated before *frame n+1*.
